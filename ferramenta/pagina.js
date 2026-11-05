/*
 * Página de estudo — motor de renderização.
 *
 * A IA escreve o conteúdo da aula em `aula.js` (na pasta da aula), chamando
 * funções como aula.texto(...), aula.exemplo(...), aula.quiz(...).
 * Esta página relê `aula.js` a cada 2 segundos e desenha só o que mudou —
 * então a aula vai "aparecendo" enquanto a IA escreve, sem perder o estado
 * dos quizzes já respondidos.
 *
 * Referência de todos os blocos: ferramenta/BLOCOS.md
 * Não precisa de servidor: funciona abrindo o index.html direto (file://).
 * Precisa de internet para as bibliotecas (Markdown, LaTeX, Mermaid).
 */
(function () {
  "use strict";

  // ------------------------------------------------------------------ API
  const TIPOS = [
    "inicio", "plano", "secao", "termos", "texto", "destaque",
    "exemplo", "completar", "problema",
    "diagrama", "figura", "imagem",
    "caso", "quiz", "fontes",
  ];
  let coletando = [];
  const api = {};
  TIPOS.forEach((t) => { api[t] = (dados) => { coletando.push({ tipo: t, dados: dados }); }; });
  window.aula = api;

  // ------------------------------------------------------------ utilidades
  function escapar(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // Markdown + LaTeX. As fórmulas são protegidas antes do Markdown para que
  // `_` e `*` dentro delas não virem itálico. "R$ 10" (com espaço) não é fórmula.
  function md(src, inline) {
    if (src == null) return "";
    let texto = String(src);
    const formulas = [];
    const guardar = (tex, display) => { formulas.push({ tex: tex, display: display }); return "%%F" + (formulas.length - 1) + "%%"; };
    texto = texto.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => guardar(t, true));
    texto = texto.replace(/(?<![\\\w$])\$(?!\s)([^\n$]+?)(?<![\s\\])\$(?!\d)/g, (_, t) => guardar(t, false));
    let html;
    if (window.marked) html = inline ? marked.parseInline(texto) : marked.parse(texto);
    else html = "<p>" + escapar(texto) + "</p>";
    if (window.DOMPurify) html = DOMPurify.sanitize(html);
    html = html.replace(/%%F(\d+)%%/g, (_, n) => {
      const f = formulas[+n];
      if (!window.katex) return escapar(f.tex);
      try { return katex.renderToString(f.tex, { displayMode: f.display, throwOnError: false }); }
      catch (e) { return escapar(f.tex); }
    });
    return html;
  }

  function novo(tag, classe, html) {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function linksExternos(raiz) {
    raiz.querySelectorAll("a[href^='http']").forEach((a) => { a.target = "_blank"; a.rel = "noopener"; });
  }

  // Embaralhamento determinístico (a mesma pergunta sempre na mesma ordem,
  // para não reembaralhar quando a página se atualiza).
  function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function embaralhar(lista, semente) {
    const a = lista.slice(); let x = semente || 1;
    const rand = () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return ((x >>> 0) % 100000) / 100000; };
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function botaoRevelar(rotulo, alvo, aoRevelar) {
    const b = novo("button", "revelar", escapar(rotulo));
    b.type = "button";
    b.addEventListener("click", () => { alvo.hidden = false; b.remove(); if (aoRevelar) aoRevelar(); });
    return b;
  }

  // -------------------------------------------------------------- mermaid
  const escuro = () => {
    const t = document.documentElement.dataset.theme;
    if (t) return t === "dark";
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  };
  let mermaidPronto = false, contadorMermaid = 0;
  async function desenharMermaid(alvo, codigo) {
    if (!window.mermaid) { alvo.innerHTML = '<div class="erro-diagrama">Mermaid não carregou (sem internet?).</div>'; return; }
    // Espera a fonte carregar: o Mermaid mede o texto ao desenhar, e medir
    // com a fonte errada corta os rótulos.
    if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) { /* segue */ } }
    if (!mermaidPronto) {
      mermaid.initialize({
        startOnLoad: false, theme: escuro() ? "dark" : "neutral", securityLevel: "strict",
        fontFamily: "Inter, system-ui, sans-serif", themeVariables: { fontSize: "16px" },
      });
      mermaidPronto = true;
    }
    const id = "mmd" + (++contadorMermaid);
    try {
      const r = await mermaid.render(id, String(codigo).trim());
      alvo.innerHTML = r.svg;
      // Diagrama muito largo (ex.: graph LR): a explicação vai para baixo
      // em vez de ficar ao lado, para o diagrama ter espaço para ser lido.
      const svg = alvo.querySelector("svg");
      const vb = svg && svg.viewBox && svg.viewBox.baseVal;
      if (vb && vb.height && vb.width / vb.height > 2.2) {
        const par = alvo.closest(".par"); if (par) par.classList.add("empilhado");
      }
    } catch (e) {
      const lixo = document.getElementById("d" + id); if (lixo) lixo.remove();
      alvo.innerHTML = '<div class="erro-diagrama">Erro no diagrama: ' + escapar(e && e.message ? e.message : e) + "</div>";
    }
  }

  // ------------------------------------------------------------ renderers
  const MODOS = { direito: "Direito", curiosidade: "Curiosidade", faculdade: "Faculdade" };

  const R = {
    inicio(d) {
      const h = novo("header", "topo coluna");
      h.appendChild(novo("a", "voltar", "← todas as aulas")).href = "../../index.html";
      const et = novo("div", "etiquetas");
      if (d.modo) et.appendChild(novo("span", "etiqueta", escapar(MODOS[d.modo] || d.modo)));
      if (d.nivel) et.appendChild(novo("span", "etiqueta neutra", "nível: " + escapar(d.nivel)));
      if (d.data) et.appendChild(novo("span", "etiqueta neutra", escapar(d.data)));
      h.appendChild(et);
      h.appendChild(novo("h1", null, md(d.tema, true)));
      if (d.objetivo) h.appendChild(novo("p", "objetivo", md(d.objetivo, true)));
      const s = novo("nav", "sumario"); s.id = "sumario"; h.appendChild(s);
      if (d.tema) document.title = String(d.tema).replace(/[*_`$]/g, "");
      return h;
    },

    plano(d) {
      const passos = Array.isArray(d) ? d : (d.passos || []);
      const c = novo("div", "cartao plano coluna");
      c.appendChild(novo("span", "rotulo", "Plano da sessão"));
      const ol = novo("ol");
      passos.forEach((p) => ol.appendChild(novo("li", null, md(p, true))));
      c.appendChild(ol);
      return c;
    },

    secao(d, i) {
      const titulo = typeof d === "string" ? d : d.titulo;
      const w = novo("div", "coluna");
      const h2 = novo("h2", null, md(titulo, true)); h2.id = "s" + i;
      w.appendChild(h2);
      return w;
    },

    termos(d) {
      const lista = Array.isArray(d) ? d : (d.termos || []);
      const c = novo("div", "cartao termos coluna");
      c.appendChild(novo("span", "rotulo", "Antes de começar: termos-chave"));
      const dl = novo("dl");
      lista.forEach((t) => { dl.appendChild(novo("dt", null, md(t.termo, true))); dl.appendChild(novo("dd", null, md(t.definicao, true))); });
      c.appendChild(dl);
      return c;
    },

    texto(d) { return novo("div", "coluna prosa", md(typeof d === "string" ? d : d.texto)); },

    destaque(d) {
      const w = novo("div", "coluna");
      w.appendChild(novo("div", "destaque", md(typeof d === "string" ? d : d.texto)));
      return w;
    },

    exemplo(d) { return passosCartao(d, "Exemplo resolvido", false); },
    completar(d) { return passosCartao(d, "Complete o raciocínio", true); },

    problema(d) {
      const c = novo("div", "cartao coluna");
      c.appendChild(novo("span", "rotulo", "Sua vez"));
      if (d.titulo) c.appendChild(novo("h3", null, md(d.titulo, true)));
      c.appendChild(novo("div", "enunciado", md(d.enunciado)));
      if (d.dica) {
        const dica = novo("div", "explicacao-quiz", "<p><strong>Dica:</strong></p>" + md(d.dica)); dica.hidden = true;
        c.appendChild(botaoRevelar("Ver uma dica", dica)); c.appendChild(dica);
      }
      if (d.resposta) {
        const r = novo("div", "resposta", md(d.resposta)); r.hidden = true;
        const b = botaoRevelar("Ver a resposta", r); b.style.marginLeft = d.dica ? "8px" : "0";
        c.appendChild(b); c.appendChild(r);
      }
      return c;
    },

    diagrama(d) {
      const alvo = novo("div", "mermaid-alvo", '<span class="legenda">desenhando…</span>');
      desenharMermaid(alvo, d.mermaid || "");
      return visualCartao(d, alvo, "Diagrama");
    },

    figura(d) {
      const svg = window.DOMPurify ? DOMPurify.sanitize(d.svg || "", { USE_PROFILES: { svg: true, svgFilters: true } }) : "";
      return visualCartao(d, novo("div", "figura-alvo", svg), "Figura");
    },

    imagem(d) {
      const fig = novo("div");
      const img = document.createElement("img");
      img.src = d.src; img.alt = d.alt || ""; img.loading = "lazy";
      if (d.largura) img.style.maxWidth = d.largura + "px";
      fig.appendChild(img);
      const partes = [];
      if (d.credito) partes.push(escapar(d.credito));
      if (d.licenca) partes.push(escapar(d.licenca));
      if (d.link) partes.push('<a href="' + escapar(d.link) + '">fonte</a>');
      if (partes.length) fig.appendChild(novo("div", "credito", "Crédito: " + partes.join(" · ")));
      return visualCartao(d, fig, "Imagem de referência");
    },

    caso(d) {
      const c = novo("div", "cartao caso coluna");
      c.appendChild(novo("span", "rotulo", "Caso"));
      if (d.titulo) c.appendChild(novo("h3", null, md(d.titulo, true)));
      const linhas = [["Fatos", d.fatos], ["Questão jurídica", d.questao], ["Normas aplicáveis", d.normas], ["Entendimentos", d.entendimentos]];
      linhas.forEach(([nome, valor]) => {
        if (!valor) return;
        const l = novo("div", "linha");
        l.appendChild(novo("div", "nome", nome)); l.appendChild(novo("div", "valor", md(valor)));
        c.appendChild(l);
      });
      if (d.conclusao) {
        const l = novo("div", "linha");
        l.appendChild(novo("div", "nome", "Conclusão"));
        const v = novo("div", "valor");
        const oculto = novo("div", null, md(d.conclusao)); oculto.hidden = true;
        v.appendChild(novo("p", "convite", "Tente concluir antes de revelar: com esses fatos e normas, qual seria a solução?"));
        v.appendChild(botaoRevelar("Ver a conclusão", oculto, () => { const cv = v.querySelector(".convite"); if (cv) cv.remove(); }));
        v.appendChild(oculto);
        l.appendChild(v); c.appendChild(l);
      }
      return c;
    },

    quiz(d) { return quizCartao(d); },

    fontes(d) {
      const lista = Array.isArray(d) ? d : (d.fontes || []);
      const c = novo("div", "cartao fontes coluna");
      c.appendChild(novo("span", "rotulo", "Fontes"));
      const ol = novo("ol");
      lista.forEach((f) => ol.appendChild(novo("li", null, md(f, true))));
      c.appendChild(ol);
      return c;
    },
  };

  function passosCartao(d, rotulo, comLacunas) {
    const c = novo("div", "cartao coluna");
    c.appendChild(novo("span", "rotulo", rotulo));
    if (d.titulo) c.appendChild(novo("h3", null, md(d.titulo, true)));
    if (d.problema) c.appendChild(novo("div", "enunciado", md(d.problema)));
    const ol = novo("ol", "passos");
    (d.passos || []).forEach((p) => {
      const li = novo("li", "passo");
      const corpo = novo("div");
      corpo.appendChild(novo("div", "faz", md(p.faz)));
      if (p.porque) corpo.appendChild(novo("div", "porque", md(p.porque, true)));
      if (comLacunas && p.lacuna) {
        li.classList.add("lacuna");
        corpo.className = "escondido";
        const convite = novo("div", "convite", "<p>Qual é este passo? Pense antes de revelar.</p>");
        const b = novo("button", "revelar", "Mostrar passo"); b.type = "button";
        b.addEventListener("click", () => li.classList.add("revelado"));
        convite.appendChild(b);
        li.appendChild(convite);
      }
      li.appendChild(corpo);
      ol.appendChild(li);
    });
    c.appendChild(ol);
    if (d.resposta) {
      const r = novo("div", "resposta", md(d.resposta));
      if (comLacunas) { r.hidden = true; c.appendChild(botaoRevelar("Ver a resposta", r)); }
      c.appendChild(r);
    }
    return c;
  }

  // Imagem/diagrama com explicação AO LADO (princípio da contiguidade).
  function visualCartao(d, visual, rotulo) {
    const c = novo("div", "cartao" + (d.texto ? "" : " coluna"));
    c.appendChild(novo("span", "rotulo", rotulo));
    if (d.titulo) c.appendChild(novo("h3", null, md(d.titulo, true)));
    const v = novo("div", "visual");
    v.appendChild(visual);
    if (d.legenda) v.appendChild(novo("div", "legenda", md(d.legenda, true)));
    if (d.texto) {
      const par = novo("div", "par");
      par.appendChild(v);
      par.appendChild(novo("div", "explicacao", md(d.texto)));
      c.appendChild(par);
    } else {
      c.appendChild(v);
    }
    return c;
  }

  function quizCartao(d) {
    const c = novo("div", "cartao quiz coluna");
    c.appendChild(novo("span", "rotulo", "Teste rápido"));
    c.appendChild(novo("div", "pergunta", md(d.pergunta)));
    let opcoes = (d.opcoes || []).map((o) => (typeof o === "string" ? { texto: o, certa: false } : o));
    const nCertas = opcoes.filter((o) => o.certa).length;
    if (nCertas === 0) { c.appendChild(novo("div", "erro-diagrama", "Quiz sem opção correta (marque uma com certa: true).")); return c; }
    const multipla = nCertas > 1;
    if (d.embaralhar !== false) opcoes = embaralhar(opcoes, hash(String(d.pergunta)));
    if (multipla) c.appendChild(novo("div", "legenda", "Marque todas as corretas e clique em Responder."));

    const lista = novo("div", "opcoes");
    const botoes = opcoes.map((o, i) => {
      const b = novo("button", "opcao", '<span class="letra">' + "ABCDEFGH"[i] + "</span><span>" + md(o.texto, true) + "</span>");
      b.type = "button";
      lista.appendChild(b);
      return b;
    });
    c.appendChild(lista);

    const acoes = novo("div", "acoes");
    const bResponder = novo("button", "primario", "Responder"); bResponder.type = "button";
    const bNaoSei = novo("button", null, "Não sei"); bNaoSei.type = "button";
    const bRefazer = novo("button", null, "Refazer"); bRefazer.type = "button"; bRefazer.hidden = true;
    if (multipla) acoes.appendChild(bResponder);
    acoes.appendChild(bNaoSei); acoes.appendChild(bRefazer);
    c.appendChild(acoes);
    const veredito = novo("div", "veredito"); veredito.hidden = true;
    const explic = novo("div", "explicacao-quiz", md(d.explicacao || "")); explic.hidden = true;
    c.appendChild(veredito); c.appendChild(explic);

    const marcadas = new Set();
    let respondido = false;

    function corrigir(naoSei) {
      respondido = true;
      botoes.forEach((b, i) => {
        b.disabled = true;
        b.classList.remove("marcada");
        if (opcoes[i].certa) b.classList.add("certa");
        else if (marcadas.has(i)) b.classList.add("errada");
      });
      let acertou = !naoSei && opcoes.every((o, i) => !!o.certa === marcadas.has(i));
      veredito.hidden = false;
      veredito.className = "veredito " + (naoSei ? "nao-sei" : acertou ? "ok" : "nao");
      veredito.textContent = naoSei ? "Tudo bem — saber onde está a lacuna já ajuda. Veja a resposta:" : acertou ? "✓ Correto!" : "✗ Não foi dessa vez. A correta está em verde.";
      if (d.explicacao) explic.hidden = false;
      bResponder.hidden = true; bNaoSei.hidden = true; bRefazer.hidden = false;
    }

    botoes.forEach((b, i) => b.addEventListener("click", () => {
      if (respondido) return;
      if (multipla) { if (marcadas.has(i)) marcadas.delete(i); else marcadas.add(i); b.classList.toggle("marcada"); }
      else { marcadas.add(i); corrigir(false); }
    }));
    bResponder.addEventListener("click", () => { if (!respondido && marcadas.size) corrigir(false); });
    bNaoSei.addEventListener("click", () => { if (!respondido) corrigir(true); });
    bRefazer.addEventListener("click", () => {
      respondido = false; marcadas.clear();
      botoes.forEach((b) => { b.disabled = false; b.classList.remove("certa", "errada", "marcada"); });
      veredito.hidden = true; explic.hidden = true;
      bResponder.hidden = !multipla; bNaoSei.hidden = false; bRefazer.hidden = true;
    });
    return c;
  }

  // ------------------------------------------------------- montar a página
  const conteudo = document.getElementById("conteudo");
  const aviso = document.getElementById("aviso");
  let ultimo = [];

  function renderizar(b, i) {
    const w = novo("section", "bloco");
    w.dataset.tipo = b.tipo;
    try {
      const fn = R[b.tipo];
      if (!fn) throw new Error("tipo de bloco desconhecido: " + b.tipo);
      w.appendChild(fn(b.dados || {}, i));
      linksExternos(w);
    } catch (e) {
      w.appendChild(novo("div", "cartao coluna erro-diagrama", "Erro ao mostrar bloco " + escapar(b.tipo) + ": " + escapar(e.message)));
    }
    return w;
  }

  function atualizarSumario(lista) {
    const s = document.getElementById("sumario");
    if (!s) return;
    s.innerHTML = "";
    lista.forEach((b, i) => {
      if (b.tipo !== "secao") return;
      const titulo = typeof b.dados === "string" ? b.dados : (b.dados || {}).titulo;
      const a = novo("a", null, md(titulo, true)); a.href = "#s" + i;
      s.appendChild(a);
    });
  }

  function aplicar(lista, primeira) {
    const pertoDoFim = window.innerHeight + window.scrollY >= document.body.scrollHeight - 400;
    const novos = lista.map((b) => JSON.stringify(b));
    const nos = Array.from(conteudo.children);
    let primeiroNovo = null;
    for (let i = 0; i < novos.length; i++) {
      if (ultimo[i] === novos[i] && nos[i]) continue;
      const no = renderizar(lista[i], i);
      if (!primeira) { no.classList.add("novo"); if (!primeiroNovo) primeiroNovo = no; }
      if (nos[i]) conteudo.replaceChild(no, nos[i]); else conteudo.appendChild(no);
    }
    for (let i = novos.length; i < nos.length; i++) nos[i].remove();
    ultimo = novos;
    atualizarSumario(lista);
    if (primeira && location.hash) { const alvo = document.querySelector(location.hash); if (alvo) alvo.scrollIntoView(); }
    if (primeiroNovo && pertoDoFim) primeiroNovo.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function mostrarAviso(t) { aviso.textContent = t; aviso.classList.add("visivel"); }
  function esconderAviso() { aviso.classList.remove("visivel"); }

  const ARQUIVO = document.body.dataset.conteudo || "aula.js";
  let erroCarga = null, carregando = false, primeira = true;
  window.addEventListener("error", (e) => {
    if (e.filename && e.filename.indexOf(ARQUIVO) !== -1) erroCarga = e.message + " (linha " + e.lineno + ")";
  });

  function carregar() {
    if (carregando) return;
    carregando = true; coletando = []; erroCarga = null;
    const s = document.createElement("script");
    s.src = ARQUIVO + "?t=" + Date.now();
    s.onload = () => {
      s.remove(); carregando = false;
      if (erroCarga) { mostrarAviso("A aula tem um erro e não foi atualizada: " + erroCarga); return; }
      esconderAviso();
      aplicar(coletando, primeira); primeira = false;
    };
    s.onerror = () => { s.remove(); carregando = false; mostrarAviso("Não encontrei o arquivo " + ARQUIVO + "."); };
    document.head.appendChild(s);
  }

  carregar();
  setInterval(() => { if (!document.hidden) carregar(); }, 2000);
})();

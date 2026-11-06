# Blocos da página de estudo — referência

O conteúdo de cada aula fica em `aulas/<pasta>/aula.js`. É um arquivo
JavaScript em que **cada bloco é uma chamada de função**, em ordem. A página
relê o arquivo a cada 2 segundos e mostra o que mudou — então **acrescente
blocos no fim do arquivo** conforme a aula avança.

Regras de escrita:
- Textos aceitam **Markdown** e **LaTeX** (`$x^2$` em linha, `$$...$$` em destaque).
- Use crases (template strings `` `...` ``) para textos com várias linhas.
- **LaTeX dentro de strings JavaScript: dobre as barras** — `\\frac{a}{b}`,
  `\\times`, `\\cdot`. Com barra simples, `\f` e `\t` viram caracteres de controle.
- Dinheiro: escreva `R$ 10` (com espaço) — assim não vira fórmula.
- Se um texto tiver crase literal ou `${`, escape com `\`.
- Um erro de sintaxe não apaga a aula: a página mantém a última versão boa e
  mostra um aviso vermelho embaixo. Corrija e ela se atualiza sozinha.
- **Estilo do texto** (registro acadêmico, parágrafos desenvolvidos, notas de
  fonte, cronologia): veja `.claude/skills/aula/SKILL.md`, seções "Escrita:
  registro acadêmico", "Desenvolvimento e acessibilidade do texto" e
  "Cronologia clara". A aula de referência é `aulas/2026-11-05-bauhaus-por-dentro/`.

## Criar uma aula nova

1. Pasta `aulas/AAAA-MM-DD-tema-curto/` (sem acentos nem espaços).
2. Copie `ferramenta/modelo-aula.html` para `aulas/<pasta>/index.html`.
3. Crie `aulas/<pasta>/aula.js` começando com `aula.inicio({...})`.
4. Acrescente uma linha em `aulas/lista.js`:
   `lista({ pasta: "<pasta>", tema: "...", modo: "curiosidade", data: "AAAA-MM-DD", resumo: "..." });`
5. Abra `http://localhost:4321/aulas/<pasta>/` (ou o `index.html` direto).

## Blocos

### Cabeçalho e estrutura
```js
aula.inicio({ tema: "Juros compostos", modo: "curiosidade", // ou "direito", "faculdade"
              nivel: "iniciante", data: "2026-11-05",
              objetivo: "Entender por que o dinheiro cresce como bola de neve." });
aula.plano(["Juros simples × compostos", "A fórmula", "Quanto isso pesa no tempo"]);
aula.secao("1. Juros simples × compostos");   // vira título e entra no sumário
```

### Cronologia (faixa de período)
Para qualquer tema com **sequência no tempo** (história, Direito, economia, movimentos
artísticos). Abra **cada parte** com um `aula.periodo`: ele mostra onde a parte
se situa na linha do tempo da aula (faixa colorida sobre a escala inteira).
```js
aula.periodo({
  de: 1919, ate: 1923,                 // anos da parte
  escala: [1919, 1933],                // linha do tempo inteira da aula (opcional)
  titulo: "Weimar",                    // opcional
  detalhe: "Direção: Walter Gropius",  // opcional
  marcos: ["1919 · Programa", "1923 · Lema"],   // opcional
});
```

### Linha do tempo (cronologia geral)
Abra a aula com **uma linha do tempo** de todos os períodos e marcos (vertical,
datada, responsiva). Use `secoes` para agrupar por lugar, fase, governo etc.;
sem agrupamento, passe só `eventos`. **Prefira este bloco ao `timeline` do
Mermaid**, que encolhe o texto quando há muitos marcos.
```js
aula.cronologia({
  titulo: "Cronologia geral (1919–1933)",
  secoes: [
    { nome: "Weimar · 1919–1925", eventos: [
      { quando: "1919", texto: "Programa de Gropius" },
      { quando: "1923", texto: "Lema; saída de Itten" } ] },
    { nome: "Dessau · 1925–1932", eventos: [ { quando: "1926", texto: "Inauguração do prédio" } ] },
  ],
  // ou, sem seções: eventos: [ { quando: "1932", texto: "..." } ],
  legenda: "opcional",
});
```

### Texto
```js
aula.termos([ { termo: "Capital ($C$)", definicao: "o valor inicial." } ]); // pré-treino
aula.texto(`Parágrafos em **Markdown**, com $M = C(1+i)^n$.`);
aula.destaque(`A ideia central em uma ou duas frases.`);                  // sinalização
// Nota de fonte: ressalvas FORA do fluxo, logo após o parágrafo a que se referem
aula.nota(`**Nota sobre as fontes.** Dado X não foi confirmado; Y foi consultado apenas em resumo; Z e W divergem quanto a...`);
```

### Exemplos e prática (carga cognitiva — a ajuda vai diminuindo)
```js
// 1) Exemplo resolvido completo — para quem está começando
aula.exemplo({ titulo: "...", problema: `...`,
  passos: [ { faz: `o que se faz`, porque: "por que se faz" } ],
  resposta: `...` });

// 2) Exemplo com lacunas — o aluno pensa antes de revelar
aula.completar({ titulo: "...", problema: `...`,
  passos: [ { faz: `...`, porque: "..." },
            { faz: `...`, porque: "...", lacuna: true } ],   // fica escondido
  resposta: `...` });                                         // escondida

// 3) Problema sozinho
aula.problema({ titulo: "...", enunciado: `...`, dica: `...`, resposta: `...` });
```

### Explique com suas palavras (esforço produtivo)
O aluno **escreve a própria explicação** e só depois a explicação-modelo é
liberada. O botão só habilita depois de `minimo` caracteres (padrão 40). O
texto fica salvo no navegador. `criterios` vira uma lista de conferência para
ele se comparar ("minha explicação continha isto?").
```js
aula.explique({
  titulo: "...",                         // opcional
  pergunta: `Explique por que X leva a Y, sem olhar o diagrama.`,
  resposta: `A explicação-modelo, verificada.`,
  criterios: ["Liga X a Y (não só lista)", "Explica por que Z fica de fora"],
  minimo: 40,                            // opcional
});
```
Use depois de cada ideia central, **antes** de qualquer resposta pronta.

### Visuais (aprendizagem multimídia)
Passe `texto` para a explicação ficar **ao lado** da imagem (contiguidade).
```js
aula.diagrama({ titulo: "...", mermaid: `graph LR\n A --> B`, legenda: "...", texto: `explicação ao lado` });
aula.figura({ titulo: "...", svg: `<svg viewBox="0 0 400 200">...</svg>`, legenda: "...", texto: `...` });
aula.imagem({ src: "https://upload.wikimedia.org/...", alt: "descrição",
              credito: "Autor", licenca: "CC BY-SA 4.0", link: "https://commons.wikimedia.org/...",
              legenda: "...", texto: `...`, largura: 600 });
// imagens locais: coloque o arquivo na pasta da aula e use src: "foto.jpg"
```

### Direito
```js
aula.caso({ titulo: "...",
  fatos: `...`, questao: `...`, normas: `art. X da Lei Y...`,
  entendimentos: `doutrina e jurisprudência, com fonte`,
  conclusao: `fica escondida até o aluno tentar` });
```

### Padrões que funcionam (vindos da aula de Bauhaus)
Feitos só com os blocos acima. O método completo está em `.claude/skills/aula/SKILL.md`.
```js
// Uma ideia → suas consequências (diagrama de cima para baixo, ideia no topo)
aula.diagrama({ titulo: "Uma ideia, quatro marcas visuais", mermaid: `graph TD ...`, texto: `...` });
aula.destaque("O visual é **consequência de uma ideia**: ...");

// Mito a descartar (2–3 frases, com fonte na seção de fontes)
aula.texto(`*Um mito para descartar já:* a frase "..." **não é de X**. Foi escrita por Y em ANO.`);

// Contraste: dois casos seguidos, "olhe primeiro, leia depois"
aula.imagem({ titulo: "Antes: ...", src: "...", texto: `**O contraexemplo.** ...` });
aula.imagem({ titulo: "Depois: ...", src: "...", texto: `**O exemplo.** ...` });

// A lente que o aluno leva embora (3–4 perguntas numeradas)
aula.destaque(`**As 4 perguntas para reconhecer X**
1. ...
2. ...`);
```
Depois, a **mesma lente** com a ajuda diminuindo: `aula.exemplo` (caso pequeno) →
`aula.completar` (caso maior, passos-chave com `lacuna: true`) → `aula.problema`
(caso sozinho, de preferência com uma reviravolta que teste a lente).

### Teste e fontes
```js
aula.quiz({ pergunta: `...`,
  opcoes: [ { texto: "...", certa: true }, { texto: "..." }, { texto: "..." } ],
  explicacao: `aparece depois que o aluno responde`,
  embaralhar: true });            // padrão; mais de uma certa = múltipla escolha
aula.fontes([ "SOBRENOME, Nome. **Título**. Local: Editora, ano. [link](https://...)" ]);
```
O botão **"Não sei"** é automático — não crie uma opção "não sei".

**Quizzes desafiadores, não trivia.** Aplique a um caso novo, julgue uma
afirmação plausível e errada, distinga explicações rivais, ache o erro. Use
várias `certa: true` (marque todas) para obrigar a discriminar nuances. Regras
completas em `.claude/skills/aula/SKILL.md` ("Quizzes que desafiam").

### Para ir além (fecho da aula)
Todos os campos são opcionais; `perguntas` e `leituras` aceitam lista (ou texto).
```js
aula.alem({
  perguntas: [ `pergunta que a aula deixou em aberto`, `...` ],
  simplificamos: `o que esta aula simplificou ou deixou de fora, e onde a lente falha`,
  leituras: [ `[Autor, Título](https://...): por que vale ler` ],  // só fontes lidas de fato
  desafio: `uma investigação para fazer sozinho no mundo real`,
});
```

// Aula de DEMONSTRAÇÃO — mostra cada tipo de bloco da ferramenta.
// Pode apagar esta pasta (e a linha dela em aulas/lista.js) quando quiser.

aula.inicio({
  tema: "Juros compostos: por que o dinheiro cresce como bola de neve",
  modo: "curiosidade",
  nivel: "iniciante",
  data: "2026-11-05",
  objetivo: "Entender a diferença entre juros simples e compostos e calcular um montante sozinho.",
});

aula.plano([
  "Os termos que vamos usar",
  "Simples × compostos: um exemplo resolvido",
  "A fórmula, e você completando um cálculo",
  "O efeito no tempo, num gráfico",
  "Teste rápido",
]);

aula.secao("1. Os termos");

aula.termos([
  { termo: "Capital ($C$)", definicao: "o dinheiro que você aplica (ou pega emprestado) no início." },
  { termo: "Taxa ($i$)", definicao: "quanto rende por período, em porcentagem. 1% ao mês = $0{,}01$." },
  { termo: "Período ($n$)", definicao: "quantas vezes os juros são aplicados (meses, anos…)." },
  { termo: "Montante ($M$)", definicao: "o total no fim: capital mais juros." },
]);

aula.secao("2. Simples × compostos");

aula.texto(`Imagine que você empresta R$ 1.000 a um amigo, a 1% ao mês. A pergunta que decide tudo é: **os juros de cada mês rendem juros também?**

- Se **não**, são juros **simples**: todo mês você ganha os mesmos R$ 10.
- Se **sim**, são juros **compostos**: os juros do mês passado entram na conta e também rendem.`);

aula.diagrama({
  titulo: "Nos compostos, cada mês rende sobre o total do mês anterior",
  mermaid: `graph LR
    C["Início<br/>R$ 1.000,00"] -->|"+1% = R$ 10,00"| M1["Mês 1<br/>R$ 1.010,00"]
    M1 -->|"+1% = R$ 10,10"| M2["Mês 2<br/>R$ 1.020,10"]
    M2 -->|"+1% = R$ 10,20"| M3["Mês 3<br/>R$ 1.030,30"]`,
  texto: `Repare nos rótulos das setas: o ganho **cresce** a cada mês (R$ 10,00 → R$ 10,10 → R$ 10,20).

É pouco no começo — mas é esse "juro sobre juro" que vira bola de neve em prazos longos.`,
});

aula.exemplo({
  titulo: "R$ 1.000 a 1% ao mês, por 12 meses",
  problema: "Quanto você terá no fim, em cada tipo de juros?",
  passos: [
    { faz: "**Simples:** juros por mês = $1000 \\times 0{,}01 =$ R$ 10. Em 12 meses: $12 \\times 10 =$ R$ 120.", porque: "nos simples, a base do cálculo é sempre o capital inicial." },
    { faz: "Montante simples = R$ 1.000 + R$ 120 = **R$ 1.120,00**.", porque: "montante é capital mais juros." },
    { faz: "**Compostos:** a cada mês, multiplicamos o total por $1{,}01$. Em 12 meses: $1000 \\times 1{,}01^{12}$.", porque: "somar 1% de um valor é o mesmo que multiplicá-lo por 1,01 — e isso se repete 12 vezes." },
    { faz: "$1{,}01^{12} \\approx 1{,}1268$, então o montante ≈ **R$ 1.126,83**.", porque: "a potência é só a multiplicação repetida, feita de uma vez." },
  ],
  resposta: "Diferença: **R$ 6,83** a favor dos compostos — em só um ano e a uma taxa baixa.",
});

aula.secao("3. A fórmula");

aula.texto(`O passo 3 do exemplo já é a fórmula inteira. Multiplicar por $(1+i)$ uma vez por período, $n$ vezes:

$$M = C \\cdot (1+i)^n$$`);

aula.destaque("Juros compostos = **multiplicar** pelo mesmo fator a cada período. Juros simples = **somar** o mesmo valor a cada período.");

aula.completar({
  titulo: "Agora você completa",
  problema: "R$ 2.000 a 2% ao mês, por 3 meses, juros compostos.",
  passos: [
    { faz: "Identifique: $C = 2000$, $i = 0{,}02$, $n = 3$.", porque: "sempre comece separando as três peças da fórmula." },
    { faz: "Fator do período: $1 + 0{,}02 = 1{,}02$.", porque: "somar 2% = multiplicar por 1,02." },
    { faz: "$M = 2000 \\times 1{,}02^3 = 2000 \\times 1{,}061208$", porque: "o fator é aplicado uma vez por mês, 3 vezes.", lacuna: true },
  ],
  resposta: "$M \\approx$ **R$ 2.122,42**.",
});

aula.problema({
  titulo: "Sozinho",
  enunciado: "Você aplica R$ 500 a 10% **ao ano**, juros compostos, por 2 anos. Qual o montante?",
  dica: "O fator é $1{,}1$. Ele é aplicado quantas vezes?",
  resposta: "$500 \\times 1{,}1^2 = 500 \\times 1{,}21 =$ **R$ 605,00**.",
});

aula.secao("4. O efeito no tempo");

aula.figura({
  titulo: "R$ 100 a 10% ao ano: simples × compostos",
  svg: `<svg viewBox="0 0 540 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif" font-size="13">
    <rect x="60" y="6" width="12" height="12" fill="#9c9488"/><text x="78" y="17" fill="currentColor">simples</text>
    <rect x="150" y="6" width="12" height="12" fill="#b4532a"/><text x="168" y="17" fill="currentColor">compostos</text>
    <line x1="50" y1="220" x2="520" y2="220" stroke="currentColor" stroke-opacity="0.4"/>
    <rect x="60"  y="100" width="26" height="120" fill="#9c9488"/><rect x="88"  y="100" width="26" height="120" fill="#b4532a"/>
    <rect x="138" y="88"  width="26" height="132" fill="#9c9488"/><rect x="166" y="88"  width="26" height="132" fill="#b4532a"/>
    <rect x="216" y="76"  width="26" height="144" fill="#9c9488"/><rect x="244" y="74.8" width="26" height="145.2" fill="#b4532a"/>
    <rect x="294" y="64"  width="26" height="156" fill="#9c9488"/><rect x="322" y="60.3" width="26" height="159.7" fill="#b4532a"/>
    <rect x="372" y="52"  width="26" height="168" fill="#9c9488"/><rect x="400" y="44.3" width="26" height="175.7" fill="#b4532a"/>
    <rect x="450" y="40"  width="26" height="180" fill="#9c9488"/><rect x="478" y="26.7" width="26" height="193.3" fill="#b4532a"/>
    <text x="463" y="34" text-anchor="middle" fill="currentColor">150</text>
    <text x="491" y="21" text-anchor="middle" fill="currentColor">161</text>
    <g text-anchor="middle" fill="currentColor" fill-opacity="0.75">
      <text x="87" y="240">ano 0</text><text x="165" y="240">ano 1</text><text x="243" y="240">ano 2</text>
      <text x="321" y="240">ano 3</text><text x="399" y="240">ano 4</text><text x="477" y="240">ano 5</text>
    </g>
  </svg>`,
  legenda: "Valores em reais. Altura das barras proporcional ao montante.",
  texto: `Nos dois primeiros anos as barras quase não se distinguem. A partir daí a laranja se afasta **cada vez mais rápido**.

Em 5 anos: R$ 150 nos simples contra cerca de R$ 161 nos compostos. A distância não cresce em linha reta — ela acelera, porque cada ano rende sobre um total maior.`,
});

aula.secao("5. Teste rápido");

aula.quiz({
  pergunta: "R$ 100 aplicados a 10% ao ano, juros compostos. Quanto você tem depois de 2 anos?",
  opcoes: [
    { texto: "R$ 121", certa: true },
    { texto: "R$ 120" },
    { texto: "R$ 110" },
    { texto: "R$ 200" },
  ],
  explicacao: "$100 \\times 1{,}1 \\times 1{,}1 = 121$. **R$ 120** seria o resultado com juros *simples* (10 + 10); **R$ 110** é só o primeiro ano; **R$ 200** confunde 10% com dobrar.",
});

aula.quiz({
  pergunta: "Com juros compostos, o que **aumenta** o montante final? (marque todas)",
  opcoes: [
    { texto: "Aumentar a taxa", certa: true },
    { texto: "Aumentar o prazo", certa: true },
    { texto: "Trocar para juros simples, com a mesma taxa e o mesmo prazo (mais de 1 período)" },
    { texto: "Reduzir o capital inicial" },
  ],
  explicacao: "Na fórmula $M = C(1+i)^n$, o montante cresce com $C$, com $i$ e com $n$. Trocar para simples, com mais de um período, **diminui** o montante, porque os juros deixam de render juros.",
});

aula.fontes([
  "Aula de demonstração: usa só matemática financeira básica (as contas foram conferidas por computador). Nas aulas de verdade, aqui ficam as referências ABNT verificadas.",
]);

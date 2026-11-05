aula.inicio({
  tema: "Como os juros combatem a inflação",
  modo: "curiosidade",
  nivel: "avançado (canal de transmissão); intermediário (Fisher exato)",
  data: "2026-11-05",
  objetivo: "Calcular juros reais com precisão, explicar por que a Selic afeta os preços e usar a regra de Taylor para pensar uma decisão de política monetária.",
});

aula.plano([
  "Juro real: Fisher exato, ex-post × ex-ante",
  "Canais de transmissão e o papel das expectativas",
  "Regra de Taylor e os limites do mecanismo",
]);

aula.secao("1. Juro real: Fisher exato, ex-post × ex-ante");

aula.texto(`Em 4 de novembro de 2026, a taxa Selic efetiva era **13,65% ao ano** (série 1178 do Banco Central). O IPCA acumulado nos 12 meses até setembro de 2026 foi **4,58%** (cálculo próprio sobre a série 433 do BCB). A relação exata entre juro nominal $i$, inflação $\\pi$ e juro real $r$ é:

$$1 + r = \\frac{1 + i}{1 + \\pi}$$

A aproximação $r \\approx i - \\pi$ funciona com taxas baixas e erra quando elas sobem. Além disso, há duas leituras de "inflação": a que **já ocorreu** (juro real **ex-post**) e a que se **espera** (juro real **ex-ante**). Quem decide investir ou tomar crédito age sobre a segunda.`);

aula.problema({
  titulo: "Juro real ex-post com dados reais",
  enunciado: `Com $i = 13{,}65\\%$ e $\\pi = 4{,}58\\%$, calcule o juro real exato e compare com a aproximação $i - \\pi$. Qual é o tamanho do erro e por que ele existe?`,
  dica: `Transforme as taxas em fatores (1 + taxa), divida e subtraia 1. O erro vem de um termo que a aproximação ignora.`,
  resposta: `Exato: $1{,}1365 / 1{,}0458 - 1 \\approx$ **8,68%**. Aproximado: 13,65 − 4,58 = **9,07%**. O erro é de cerca de 0,39 ponto percentual: a aproximação ignora o termo cruzado $i\\pi$. Esse número é uma **ilustração**: compara um juro instantâneo anualizado com a inflação passada.`,
});

aula.problema({
  titulo: "Por que o ex-ante manda?",
  enunciado: `Uma empresa decide hoje se toma crédito para investir. O juro real ex-post é 8,68%, mas o mercado espera inflação de 6% nos próximos 12 meses. Explique por que o ex-post é um guia ruim para ela e qual número ela deveria usar.`,
  dica: `Pense em qual inflação vai corroer a dívida que ela pagará no futuro.`,
  resposta: `A dívida será paga em reais futuros, então vale a inflação **esperada** daqui para frente, não a passada. Com $i = 13{,}65\\%$ e expectativa de 6%, o juro real ex-ante é $1{,}1365/1{,}06 - 1 \\approx$ **7,22%**. O exemplo é hipotético: a expectativa de 6% foi inventada para o exercício.`,
});

aula.secao("2. Canais de transmissão e o papel das expectativas");

aula.termos([
  { termo: "Canal de transmissão", definicao: "o caminho pelo qual uma mudança na taxa básica chega aos preços." },
  { termo: "Ancoragem de expectativas", definicao: "quando as pessoas confiam que a inflação voltará à meta, e agem como se isso fosse certo." },
]);

aula.diagrama({
  titulo: "Da Selic ao preço: quatro canais",
  mermaid: `graph LR
    S["Selic sobe"] --> C["Crédito<br/>mais caro"]
    S --> A["Ativos<br/>valem menos"]
    S --> X["Câmbio<br/>tende a valorizar"]
    S --> E["Expectativas<br/>de inflação caem"]
    C --> D["Demanda<br/>esfria"]
    A --> D
    X --> P["Custos de<br/>importados caem"]
    D --> I["Inflação<br/>cede"]
    P --> I
    E --> I`,
  legenda: "Esquema de livro-texto, simplificado. Os efeitos reais variam por país e período.",
  texto: `Três caminhos terminam em **demanda** ou **custos**, que você já viu na parte 2 da aula anterior. O quarto, as **expectativas**, age direto nos reajustes de preços e salários.

Repare que o canal do **câmbio** é o único que atua pelo lado dos **custos**. Os demais atuam pela demanda.`,
});

aula.problema({
  titulo: "Mesma alta de juros, efeitos diferentes",
  enunciado: `Dois países sobem a taxa básica em 2 pontos percentuais. No país A, as expectativas de inflação estão ancoradas na meta. No país B, estão acima da meta e subindo. Em qual a alta tende a funcionar melhor, e que risco existe no outro?`,
  dica: `Compare o juro real de cada país depois da alta. Se as expectativas de inflação sobem junto com o juro nominal, o que acontece com o juro real?`,
  resposta: `Tende a funcionar melhor no **A**. No **B**, se as expectativas sobem tanto quanto o juro nominal, o juro **real** quase não muda e o aperto fica fraco. Por isso bancos centrais precisam elevar o juro **mais** do que a alta da inflação esperada para elevar o juro real.`,
});

aula.texto(`**Aviso de fonte:** a lista de canais é de livro-texto. Não encontrei um documento do Banco Central que a confirme, nem um número oficial para a defasagem entre a alta da Selic e o efeito sobre a inflação, então não vou citar um prazo.`);

aula.secao("3. Regra de Taylor e os limites do mecanismo");

aula.texto(`John Taylor propôs em 1993 uma regra simples para descrever como um banco central ajusta o juro. Em forma geral:

$$i = r^* + \\pi + a(\\pi - \\pi^*) + b \\cdot y$$

onde $r^*$ é o juro real de equilíbrio, $\\pi^*$ a meta, e $y$ o **hiato do produto** (quanto a economia está acima ou abaixo do potencial). Segundo fonte secundária, a calibração original usava $a = b = 0{,}5$; não li o artigo original.`);

aula.problema({
  titulo: "Aplicando a regra",
  enunciado: `Hipoteticamente: $r^* = 2\\%$, meta $\\pi^* = 3\\%$, inflação $\\pi = 5\\%$, hiato do produto $y = -1\\%$, com $a = b = 0{,}5$. Qual juro nominal a regra indica?`,
  dica: `Substitua os valores. Note que o hiato negativo puxa o juro para baixo e a inflação acima da meta puxa para cima.`,
  resposta: `$i = 2 + 5 + 0{,}5\\cdot(5 - 3) + 0{,}5\\cdot(-1) = 7 + 1 - 0{,}5 =$ **7,5%**. É um exercício com números inventados, não uma previsão para o Brasil.`,
});

aula.problema({
  titulo: "O princípio de Taylor, por conta própria",
  enunciado: `Pela fórmula, se a inflação $\\pi$ sobe 1 ponto, quanto sobe o juro nominal $i$? E o que isso implica para o juro **real**?`,
  dica: `Derive $i$ em relação a $\\pi$. O termo $\\pi$ aparece em dois lugares.`,
  resposta: `$\\partial i / \\partial \\pi = 1 + a = 1{,}5$ com $a = 0{,}5$. O juro nominal sobe **mais que 1 ponto**, então o juro real sobe cerca de $a = 0{,}5$ ponto. Essa é a ideia chamada de princípio de Taylor, derivada aqui da fórmula; não confirmei o nome em fonte.`,
});

aula.texto(`**Onde o mecanismo falha ou é disputado.** Sargent e Wallace (1981) argumentaram que, se o governo tem déficit permanente, juros altos podem acabar financiando a dívida e ser inflacionários, em vez de contê-la; o resultado depende de o juro real superar o crescimento da economia. Isso se chama **dominância fiscal**. Não encontrei fonte brasileira confirmada sobre o tema, então trate como **questão aberta** para pesquisa, e não como fato sobre o Brasil.

**Discuta:** se a política fiscal e a monetária puxam em direções opostas, qual delas tende a prevalecer, e por quê?`);

aula.destaque(`O juro combate a inflação elevando o juro **real** e ancorando expectativas. Medir com Fisher exato, usar a taxa ex-ante e separar o que a regra de Taylor descreve do que a evidência brasileira ainda precisa confirmar.`);

aula.quiz({
  pergunta: `Juro nominal de 20% e inflação de 8%. Qual o juro real exato, aproximadamente?`,
  opcoes: [ { texto: "12,00%" }, { texto: "11,11%", certa: true }, { texto: "27,00%" } ],
  explicacao: `1,20 / 1,08 = 1,1111. A aproximação 20 − 8 = 12% erra porque ignora o termo cruzado.`,
});

aula.quiz({
  pergunta: `Para decidir um investimento financiado a juros fixos, qual inflação importa mais?`,
  opcoes: [ { texto: "A esperada para o período do empréstimo", certa: true }, { texto: "A acumulada nos últimos 12 meses" }, { texto: "A inflação de dois anos atrás" } ],
  explicacao: `A dívida é paga no futuro, então vale o poder de compra futuro, não o passado.`,
});

aula.quiz({
  pergunta: `Na regra de Taylor com a = 0,5, se a inflação sobe 1 ponto, o juro nominal indicado sobe:`,
  opcoes: [ { texto: "1,5 ponto", certa: true }, { texto: "0,5 ponto" }, { texto: "1,0 ponto" } ],
  explicacao: `O termo da inflação entra uma vez direto (1) e uma vez via hiato de inflação (0,5), totalizando 1,5.`,
});

aula.fontes([
  "BANCO CENTRAL DO BRASIL. **Série 1178 – Taxa de juros Selic anualizada base 252 (% a.a.)**. SGS. Disponível em: [api.bcb.gov.br](https://api.bcb.gov.br/dados/serie/bcdata.sgs.1178/dados?formato=json). Acesso em: 5 nov. 2026.",
  "BANCO CENTRAL DO BRASIL. **Série 433 – IPCA, variação mensal (%)**. SGS. Disponível em: [api.bcb.gov.br](https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json). Acesso em: 5 nov. 2026. (IPCA de 12 meses até set. 2026: cálculo próprio.)",
  "TAYLOR, John B. Discretion versus policy rules in practice. **Carnegie-Rochester Conference Series on Public Policy**, v. 39, p. 195–214, 1993. (Não li o original; a calibração 0,5/0,5 vem de fonte secundária.)",
  "SARGENT, Thomas J.; WALLACE, Neil. Some unpleasant monetarist arithmetic. **Federal Reserve Bank of Minneapolis Quarterly Review**, v. 5, n. 3, 1981. (Só vi resumo e metadados; não li o artigo.)",
  "A relação de Fisher e os canais de transmissão seguem livros-texto de macroeconomia; não confirmei capítulo nem edição.",
]);

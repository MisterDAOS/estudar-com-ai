aula.inicio({
  tema: "Por que existe inflação",
  modo: "curiosidade",
  nivel: "intermediário (conceito ok; tipos de inflação e acumulação: iniciante)",
  data: "2026-11-05",
  objetivo: "Entender o que é inflação, como ela se acumula e o que faz os preços subirem em geral.",
});

aula.plano([
  "O que é inflação e como ela se acumula",
  "O que faz os preços subirem: moeda, demanda, custos e expectativas",
  "O Brasil em números (IPCA 2015–2025)",
]);

aula.secao("1. O que é inflação e como ela se acumula");

aula.termos([
  { termo: "Inflação", definicao: "alta generalizada e contínua do nível de preços." },
  { termo: "IPCA", definicao: "índice do IBGE que mede a inflação para famílias com renda de 1 a 40 salários mínimos em áreas urbanas." },
  { termo: "Inflação acumulada", definicao: "a variação total em um período, juntando os meses um sobre o outro." },
]);

aula.texto(`Se o preço do café sobe e o do arroz cai, isso é **variação de preços relativos**, não inflação. Inflação é quando **quase tudo** sobe junto, e continua subindo.

Para medir isso, o IBGE acompanha uma cesta de produtos e serviços do consumo das famílias e calcula o IPCA todo mês. Os pesos de cada item vêm da Pesquisa de Orçamentos Familiares (POF 2017–2018): o que pesa mais no seu orçamento pesa mais no índice.`);

aula.texto(`Um cuidado que pega muita gente: a inflação de um ano **não é a soma dos 12 meses**. Cada mês incide sobre os preços já reajustados no mês anterior, como nos juros compostos.`);

aula.exemplo({
  titulo: "Preços sobem 1% ao mês durante um ano",
  problema: `Uma cesta custa R$ 100 em janeiro. Os preços sobem 1% ao mês, todos os meses. Quanto ela custa 12 meses depois e qual é a inflação acumulada?`,
  passos: [
    { faz: `Transforme 1% em fator: $1{,}01$.`, porque: "Aumentar 1% é multiplicar por 1,01; assim o cálculo vira uma multiplicação simples." },
    { faz: `Aplique o fator 12 vezes: $100 \\times 1{,}01^{12}$.`, porque: "Cada mês parte do preço já reajustado, não do preço original." },
    { faz: `Calcule: $1{,}01^{12} \\approx 1{,}1268$, então a cesta custa cerca de R$ 112,68.`, porque: "Se fosse soma simples, daria R$ 112,00; a diferença é o 'juro sobre juro'." },
    { faz: `Subtraia 1 do fator: $1{,}1268 - 1 = 0{,}1268$.`, porque: "A inflação acumulada é só o aumento, sem contar o preço original." },
  ],
  resposta: `A cesta passa a custar cerca de **R$ 112,68**: inflação acumulada de **12,68%**, e não 12%.`,
});

aula.destaque(`Inflação é o aumento **generalizado e contínuo** dos preços, e acumula como juros compostos.`);

aula.secao("2. O que faz os preços subirem");

aula.termos([
  { termo: "Demanda", definicao: "o quanto as pessoas e empresas querem e podem comprar." },
  { termo: "Oferta", definicao: "o quanto a economia consegue produzir e entregar." },
  { termo: "Expectativa de inflação", definicao: "a inflação que as pessoas esperam para os próximos meses." },
]);

aula.texto(`Você acertou que dobrar o dinheiro sem produzir mais empurra os preços para cima. Esse é o caso extremo de uma ideia mais geral: **preços sobem quando há mais dinheiro disputando menos bens**. Isso pode acontecer por quatro caminhos.`);

aula.diagrama({
  titulo: "Quatro caminhos para os preços subirem",
  mermaid: `graph TD
    A["Mais dinheiro<br/>em circulação"] --> P["Preços em geral sobem"]
    B["Demanda maior que<br/>a oferta"] --> P
    C["Custos de produção<br/>sobem"] --> P
    D["Expectativa de<br/>inflação alta"] --> P`,
  legenda: "Esquema conceitual de livro-texto; os caminhos costumam agir juntos.",
  texto: `**Moeda:** mais dinheiro para a mesma produção.

**Demanda:** a economia aquece e as empresas não conseguem produzir tudo que é pedido. Elas sobem o preço.

**Custos (choque de oferta):** petróleo, câmbio ou salários sobem; a empresa repassa para o preço.

**Expectativas:** se todos esperam inflação, reajustam preços e salários antes, e a previsão se realiza.`,
});

aula.exemplo({
  titulo: "Por que o diesel mais caro encarece o supermercado?",
  problema: `O preço do diesel sobe com o petróleo. Meses depois, o preço de hortaliças e de arroz sobe nas gôndolas. Que tipo de pressão é essa e por quê?`,
  passos: [
    { faz: `Identifique o que mudou primeiro: o **custo** do transporte, não a vontade de comprar.`, porque: "Se a demanda não mudou, o caminho não é de demanda." },
    { faz: `Siga a cadeia: caminhão mais caro → frete mais caro → custo do produtor e do varejo maior.`, porque: "Quase tudo que você compra foi transportado." },
    { faz: `Veja o repasse: a empresa sobe o preço para manter a margem.`, porque: "É assim que um custo vira preço." },
    { faz: `Classifique: **inflação de custos** (choque de oferta).`, porque: "A produção ficou mais cara; o consumidor não pediu mais." },
  ],
  resposta: `Inflação de **custos**: o custo de produzir e transportar subiu e foi repassado ao preço.`,
});

aula.completar({
  titulo: "Dinheiro farto, prateleira vazia",
  problema: `Numa cidade, o crédito fica fácil e todos compram mais, mas as lojas não conseguem repor o estoque na mesma velocidade. O que acontece com os preços e que tipo de inflação é essa?`,
  passos: [
    { faz: `Identifique o que mudou primeiro: a **demanda** sobe.`, porque: "O crédito deu mais poder de compra." },
    { faz: `Compare com a oferta: ela não acompanha.`, porque: "A produção tem limite no curto prazo." },
    { faz: `O que as lojas fazem com o preço?`, porque: "Com muita gente querendo pouco produto, elas conseguem vender mais caro.", lacuna: true },
    { faz: `Qual é o nome dessa inflação?`, porque: "O problema é excesso de procura sobre a oferta, e não custo.", lacuna: true },
  ],
  resposta: `Os preços sobem. É inflação de **demanda**.`,
});

aula.texto(`**Aviso de fonte:** a classificação em demanda, custos e expectativas é a de livro-texto. Não confirmei o capítulo nem a definição oficial do Banco Central, então não cito referência para ela. Entre economistas há **debate** sobre quanto pesa cada causa em cada episódio.`);

aula.destaque(`Preços sobem quando dinheiro e demanda crescem mais que a oferta, quando os custos sobem ou quando todos esperam inflação.`);

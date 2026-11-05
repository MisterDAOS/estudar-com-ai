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

aula.secao("3. O Brasil em números");

aula.texto(`Agora você vê o que acabou de aprender em dados reais. O gráfico mostra o **IPCA acumulado de dezembro a dezembro**, de 2015 a 2025. Pergunta-guia: **em quais anos a inflação passou de 10%?**`);

aula.figura({
  titulo: "IPCA acumulado no ano (dez/dez), 2015–2025",
  svg: `<svg viewBox="0 0 640 300" role="img" aria-label="IPCA anual de 2015 a 2025"><line x1="44" x2="630" y1="250.0" y2="250.0" stroke="currentColor" stroke-opacity=".18"/><text x="38" y="254.0" text-anchor="end" font-size="11" fill="currentColor">0%</text><line x1="44" x2="630" y1="173.33333333333331" y2="173.33333333333331" stroke="currentColor" stroke-opacity=".18"/><text x="38" y="177.33333333333331" text-anchor="end" font-size="11" fill="currentColor">4%</text><line x1="44" x2="630" y1="96.66666666666666" y2="96.66666666666666" stroke="currentColor" stroke-opacity=".18"/><text x="38" y="100.66666666666666" text-anchor="end" font-size="11" fill="currentColor">8%</text><line x1="44" x2="630" y1="20.0" y2="20.0" stroke="currentColor" stroke-opacity=".18"/><text x="38" y="24.0" text-anchor="end" font-size="11" fill="currentColor">12%</text><rect x="52.6" y="45.5" width="36" height="204.5" fill="#c2410c"/><text x="70.6" y="40.5" text-anchor="middle" font-size="11" fill="currentColor">10,67</text><text x="70.6" y="266" text-anchor="middle" font-size="11" fill="currentColor">2015</text><rect x="105.9" y="129.4" width="36" height="120.6" fill="#2563eb"/><text x="123.9" y="124.4" text-anchor="middle" font-size="11" fill="currentColor">6,29</text><text x="123.9" y="266" text-anchor="middle" font-size="11" fill="currentColor">2016</text><rect x="159.2" y="193.5" width="36" height="56.5" fill="#2563eb"/><text x="177.2" y="188.5" text-anchor="middle" font-size="11" fill="currentColor">2,95</text><text x="177.2" y="266" text-anchor="middle" font-size="11" fill="currentColor">2017</text><rect x="212.5" y="178.1" width="36" height="71.9" fill="#2563eb"/><text x="230.5" y="173.1" text-anchor="middle" font-size="11" fill="currentColor">3,75</text><text x="230.5" y="266" text-anchor="middle" font-size="11" fill="currentColor">2018</text><rect x="265.7" y="167.4" width="36" height="82.6" fill="#2563eb"/><text x="283.7" y="162.4" text-anchor="middle" font-size="11" fill="currentColor">4,31</text><text x="283.7" y="266" text-anchor="middle" font-size="11" fill="currentColor">2019</text><rect x="319.0" y="163.4" width="36" height="86.6" fill="#2563eb"/><text x="337.0" y="158.4" text-anchor="middle" font-size="11" fill="currentColor">4,52</text><text x="337.0" y="266" text-anchor="middle" font-size="11" fill="currentColor">2020</text><rect x="372.3" y="57.2" width="36" height="192.8" fill="#c2410c"/><text x="390.3" y="52.2" text-anchor="middle" font-size="11" fill="currentColor">10,06</text><text x="390.3" y="266" text-anchor="middle" font-size="11" fill="currentColor">2021</text><rect x="425.5" y="139.2" width="36" height="110.8" fill="#2563eb"/><text x="443.5" y="134.2" text-anchor="middle" font-size="11" fill="currentColor">5,78</text><text x="443.5" y="266" text-anchor="middle" font-size="11" fill="currentColor">2022</text><rect x="478.8" y="161.4" width="36" height="88.6" fill="#2563eb"/><text x="496.8" y="156.4" text-anchor="middle" font-size="11" fill="currentColor">4,62</text><text x="496.8" y="266" text-anchor="middle" font-size="11" fill="currentColor">2023</text><rect x="532.1" y="157.4" width="36" height="92.6" fill="#2563eb"/><text x="550.1" y="152.4" text-anchor="middle" font-size="11" fill="currentColor">4,83</text><text x="550.1" y="266" text-anchor="middle" font-size="11" fill="currentColor">2024</text><rect x="585.4" y="168.3" width="36" height="81.7" fill="#2563eb"/><text x="603.4" y="163.3" text-anchor="middle" font-size="11" fill="currentColor">4,26</text><text x="603.4" y="266" text-anchor="middle" font-size="11" fill="currentColor">2025</text></svg>`,
  legenda: "Fonte: elaboração própria a partir da série 433 (IPCA, variação mensal) do Banco Central do Brasil, SGS. Acesso em 5 nov. 2026. Acumulado = produto dos 12 fatores mensais.",
  texto: `Dois anos passam de **10%**: 2015 (10,67%) e 2021 (10,06%). Entre eles, a inflação caiu para 2,95% em 2017 e voltou a subir.

Em 2026, de janeiro a setembro, o IPCA acumulou **3,95%**. Esse número cobre só o ano até setembro, e não os últimos 12 meses.

O gráfico mostra **quanto** os preços subiram, não **por quê** em cada ano. Não confirmei uma fonte oficial para as causas de 2015 ou 2021.`,
});

aula.problema({
  titulo: "Acumulando dois anos",
  enunciado: `Uma cesta custava R$ 100 em dezembro de 2020. Use o gráfico: quanto ela custava em dezembro de 2022? E por que não basta somar as duas inflações?`,
  dica: `Transforme cada taxa em fator (1 + taxa) e multiplique, como no exemplo dos 1% ao mês.`,
  resposta: `$100 \\times 1{,}1006 \\times 1{,}0578 \\approx$ **R$ 116,42**. A soma simples (10,06% + 5,78%) daria 15,84%, e o certo é cerca de 16,42%, porque os 5,78% de 2022 incidem sobre preços que já subiram em 2021.`,
});

aula.destaque(`Inflação é o aumento generalizado e contínuo dos preços. Ela acumula como juros compostos e nasce de moeda, demanda, custos e expectativas.`);

aula.quiz({
  pergunta: `Os preços sobem 3% ao ano por 2 anos seguidos. A inflação acumulada nos dois anos é:`,
  opcoes: [ { texto: "6,00%" }, { texto: "6,09%", certa: true }, { texto: "3,00%" } ],
  explicacao: `1,03 × 1,03 = 1,0609. O segundo ano incide sobre preços já reajustados.`,
});

aula.quiz({
  pergunta: `O dólar sobe e encarece insumos importados, e as empresas repassam isso aos preços. Qual a pressão principal?`,
  opcoes: [ { texto: "Custos", certa: true }, { texto: "Demanda" }, { texto: "Expectativas apenas" } ],
  explicacao: `O custo de produzir subiu e foi repassado ao preço.`,
});

aula.quiz({
  pergunta: `O preço do café sobe 20% e o do arroz cai 10%. Isso, sozinho, é inflação?`,
  opcoes: [ { texto: "Não: é mudança de preços relativos; inflação é alta generalizada", certa: true }, { texto: "Sim: um produto subiu muito" }, { texto: "Sim: basta qualquer preço subir" } ],
  explicacao: `Inflação exige alta generalizada e contínua do nível de preços.`,
});

aula.fontes([
  "BANCO CENTRAL DO BRASIL. **Série 433 – IPCA, variação mensal (%)**. Sistema Gerenciador de Séries Temporais (SGS). Disponível em: [api.bcb.gov.br](https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json). Acesso em: 5 nov. 2026.",
  "INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). **Índice Nacional de Preços ao Consumidor Amplo (IPCA)**. Disponível em: [ibge.gov.br](https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9256-indice-nacional-de-precos-ao-consumidoramplo.html). Acesso em: 5 nov. 2026. (Consultei só o resumo da busca; a página retornou erro 403.)",
  "As classificações de inflação de demanda, custos e expectativas são conceitos gerais de livro-texto; não confirmei capítulo nem fonte oficial para citá-las.",
]);

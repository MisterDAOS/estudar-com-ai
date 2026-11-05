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

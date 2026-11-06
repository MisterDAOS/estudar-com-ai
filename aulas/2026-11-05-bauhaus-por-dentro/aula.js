aula.inicio({
  tema: "Bauhaus (1919–1933): periodização, balanço industrial e construção historiográfica",
  modo: "curiosidade",
  nivel: "intermediário",
  data: "2026-11-05",
  objetivo: "Compreender a trajetória da Bauhaus em seus três períodos e quatro orientações, avaliar em que medida a escola cumpriu a promessa de produção industrial e examinar como a noção de \"estilo Bauhaus\" foi construída pela historiografia.",
});

aula.plano([
  "Cronologia geral, problema e instrumento de análise",
  "1919–1923 · Weimar: o programa artesanal",
  "1923–1925 · A inflexão industrial e o encerramento de Weimar",
  "1925–1928 · Dessau sob Gropius: a escola e a indústria",
  "1928–1930 · A direção de Hannes Meyer: o povo, não o luxo",
  "1930–1933 · Mies van der Rohe e o fim da escola",
  "1932–2019 · Recepção e construção historiográfica do \"mito Bauhaus\"",
  "Para ir além",
]);

// ================================================================ INTRODUÇÃO
aula.secao("Cronologia geral, problema e instrumento de análise");

aula.texto(`Esta aula dá continuidade a *Bauhaus: como reconhecer o estilo*. A aula anterior ensinou a olhar para um objeto ou para um edifício e a identificar os traços formais associados à escola: formas geométricas, ausência de ornamento, material industrial à mostra. Esta aula faz uma pergunta diferente. Em vez de perguntar *como a Bauhaus se parece*, pergunta *o que a escola foi*: como se organizou, o que pretendeu fazer, o que de fato conseguiu e por que a sua imagem pública é hoje tão diferente da sua história.

Para responder, o percurso segue a ordem em que os fatos ocorreram, de 1919 a 1933, e termina com o que foi escrito e exposto sobre a escola depois disso. A razão de seguir a cronologia é prática: a Bauhaus mudou de orientação várias vezes em catorze anos, e só é possível perceber essas mudanças se cada fato for visto no seu momento, com as pessoas e as pressões daquele momento. Misturar épocas produz a imagem de uma escola única e coerente, que é justamente a imagem construída pela historiografia posterior e que a última parte da aula examina.`);

aula.nota(`**Convenção desta aula.** Cada informação é acompanhada da sua fonte, no formato autor-data (a lista completa está no final). Quando um dado não pôde ser confirmado em fonte efetivamente consultada, ou quando a fonte foi consultada apenas em resumo, isso é declarado em notas como esta, logo depois do parágrafo a que se refere, para que o texto principal corra sem interrupções. Também se distingue o que é **fato documentado**, o que é **interpretação de um autor** e o que é **hipótese ou inferência desta aula**.`);

aula.termos([
  { termo: "Periodização", definicao: "divisão do tempo histórico em períodos, segundo um critério explícito. Aqui, o critério combina o lugar (Weimar, Dessau, Berlim) e a direção da escola (Gropius, Meyer, Mies)." },
  { termo: "Fonte primária", definicao: "documento produzido na época estudada (por exemplo, o Programa de 1919). **Fonte secundária:** texto posterior que interpreta o período (resenhas, artigos, livros)." },
  { termo: "Historiografia", definicao: "o conjunto das interpretações que historiadores e críticos produziram sobre um tema, e o estudo de como essas interpretações se formaram." },
  { termo: "Curso preliminar (Vorkurs)", definicao: "primeiro curso da escola, dedicado a forma, cor e materiais, anterior à especialização em oficinas." },
]);

aula.cronologia({
  titulo: "Cronologia geral da Bauhaus (1919–1933)",
  secoes: [
    { nome: "Weimar · 1919–1925", eventos: [
      { quando: "1919", texto: "Programa de Gropius" },
      { quando: "1920", texto: "Itten cria o curso preliminar" },
      { quando: "1923", texto: "Lema \"Arte e técnica\"; Itten deixa a escola; Moholy-Nagy assume o curso" },
      { quando: "1924", texto: "Eleições na Turíngia; em dezembro, anúncio do fechamento" },
    ] },
    { nome: "Dessau · 1925–1932", eventos: [
      { quando: "1925", texto: "Municipalização da escola" },
      { quando: "1926", texto: "Inauguração do prédio de Gropius (4 de dezembro)" },
      { quando: "1928", texto: "Meyer assume a direção" },
      { quando: "1929", texto: "Contrato com a Rasch (papel de parede)" },
      { quando: "1930", texto: "Demissão de Meyer (1º de agosto); Mies assume a direção no outono" },
      { quando: "1932", texto: "Voto do conselho de Dessau (22 de agosto)" },
    ] },
    { nome: "Berlim · 1932–1933", eventos: [
      { quando: "1932", texto: "Mudança para Berlim, em outubro" },
      { quando: "1933", texto: "Lacre policial (11 de abril); dissolução pelo corpo docente (20 de julho)" },
    ] },
  ],
});

aula.texto(`A periodização adotada combina dois critérios que as fontes institucionais usam para narrar a história da escola: o **lugar** e a **direção** (BAUHAUS, s.d.). Os três lugares (Weimar, de 1919 a 1925; Dessau, de 1925 a 1932; Berlim, de 1932 a 1933) correspondem a três fases institucionais, cada uma com condições políticas e materiais próprias. Dentro delas, quatro **orientações** se sucedem: o programa artesanal de Gropius (1919), a inflexão industrial do próprio Gropius (1923), a orientação social de Hannes Meyer (1928) e a orientação de Ludwig Mies van der Rohe (1930).

Cada parte da aula corresponde a um período dessa linha, na ordem em que ocorreram, de modo que o leitor saiba em que momento está. Uma faixa colorida no início de cada parte mostra essa posição. A recepção posterior, que começa ainda durante a existência da escola e vai até 2019, é tratada em parte separada.`);

aula.diagrama({
  titulo: "Hipótese de leitura: uma pergunta, quatro respostas",
  mermaid: `graph LR
    P["Para que e para quem<br/>serve o design?"] --> R1["1919 · Gropius<br/>artista = artesão"]
    P --> R2["1923 · Gropius<br/>arte e técnica"]
    P --> R3["1928 · Meyer<br/>necessidades do povo"]
    P --> R4["1930 · Mies<br/>escola fora da política"]`,
  texto: `A aula parte de uma **hipótese de leitura**: a Bauhaus pode ser compreendida como uma **sucessão de respostas** a uma mesma pergunta (para que e para quem serve o design?), e não como a expressão de uma doutrina estável. Na prática, isso significa que cada orientação é tratada como uma resposta diferente: o trabalho coletivo de artesãos em 1919, a produção industrial em 1923, a necessidade do povo em 1928 e uma escola afastada da política em 1930. Os fundamentos de cada resposta são examinados nas partes 1 a 5.

Convém reter que se trata de uma hipótese, e não de um fato estabelecido. Ela será posta à prova na parte 6, que apresenta um dado em sentido contrário: uma frase atribuída a Mies, segundo a qual a Bauhaus teria sido "uma ideia" (JONES, 1970), o que sugere unidade, e não sucessão.`,
});

aula.texto(`Para comparar as respostas de cada período de modo uniforme, a aula usa um **instrumento de análise** composto de quatro perguntas, feitas a cada período e a cada objeto. Elas foram escolhidas porque, juntas, cobrem o essencial do que um projeto de design define: a quem ele se destina (pergunta 1), como e por quem é produzido (pergunta 2), que papel tem nele a forma artística (pergunta 3) e em que condições externas ele sobrevive (pergunta 4). Aplicada a épocas diferentes, a mesma pergunta produz respostas diferentes, e é na comparação dessas respostas que a mudança de orientação da escola se torna visível.`);

aula.destaque(`**Instrumento de análise: quatro perguntas aplicadas a cada período e a cada objeto**
1. **Para quem é?** (uma comunidade de ofícios, o mercado, o povo)
2. **Quem produz, e como?** (à mão, em oficina, em fábrica)
3. **Qual o papel atribuído à arte?** (expressão, forma, função)
4. **Que pressão incide sobre a escola?** (econômica, política)`);

// ================================================================ PARTE 1
aula.secao("1. 1919–1923 · Weimar: o programa artesanal");

aula.periodo({
  de: 1919, ate: 1923, escala: [1919, 1933],
  titulo: "Weimar",
  detalhe: "Direção de Walter Gropius · curso preliminar sob Johannes Itten (1920–1923)",
  marcos: ["1919 · Programa de Gropius", "1920 · Curso preliminar", "1923 · Saída de Itten"],
});

aula.texto(`**Problema da parte:** em que termos a Bauhaus formulou, em 1919, a relação entre arte e ofício, e o que essa formulação deixava de fora?

Para entender a originalidade da escola, é preciso começar pelo que ela reuniu. A Bauhaus foi fundada em Weimar, em 1919, por Walter Gropius, a partir da fusão de duas instituições de tradições diferentes: uma academia de belas-artes e uma escola de artes e ofícios (BAUHAUS KOOPERATION, s.d.a). De modo geral, a primeira formava o *artista*, entendido como o criador de obras como pinturas e esculturas; a segunda formava o *artesão*, isto é, o trabalhador qualificado que domina um ofício, como a marcenaria ou a metalurgia. Reunir as duas num único lugar não era apenas uma decisão administrativa. Obrigava a escola a responder o que, afinal, distingue o artista do artesão e se essa distinção deveria continuar a existir. O documento que responde a essa pergunta é o Programa de abril de 1919.`);

aula.texto(`O **Programa** do Staatliches Bauhaus, escrito por Gropius, responde com uma negação: afirma que não há diferença essencial entre o artista e o artesão (GROPIUS, 1919, na tradução de Wingler). O artista, diz o texto, é um "artesão exaltado", isto é, um artesão elevado pelo talento, mas que continua a ser, no fundo, a mesma coisa que o artesão. Daí a proposta de uma "nova corporação de artesãos", sem a distinção de classe que separava as duas figuras.

A palavra "corporação" merece atenção. Ela remete às antigas corporações de ofício, em que mestres, oficiais e aprendizes trabalhavam juntos numa mesma oficina, sob regras comuns. Essa associação é uma **leitura** da palavra, e não uma afirmação do Programa; mas ela ajuda a entender o modelo de escola que o texto sugere: uma comunidade de trabalho, e não uma academia na qual o artista se isola dos ofícios.`);

aula.texto(`O Programa foi publicado com uma imagem na capa: a xilogravura *Catedral*, de Lyonel Feininger (1919). A escolha ajuda a ler o texto. Segundo a Bauhaus Kooperation, Gropius e Feininger associaram a imagem ao "milagre da catedral gótica", entendido como a força que unia todas as artes (BAUHAUS KOOPERATION, s.d.d). A catedral é um bom emblema do que o Programa propõe: uma obra imensa, que só existe porque pedreiros, vitralistas, escultores e carpinteiros trabalham juntos, cada um com o seu ofício, em torno de um objetivo comum. Em outras palavras, a imagem afirma que a grande obra não é a do gênio isolado, e sim a do trabalho coletivo.`);

aula.nota(`**Nota sobre as fontes.** A imagem da capa não é reproduzida aqui porque a sua licença não foi confirmada; ela pode ser vista [na página da Bauhaus Kooperation](https://bauhauskooperation.de/en/knowledge/the-bauhaus/works/graphic-printshop/cathedral). As fontes consultadas divergem quanto ao suporte da capa (xilogravura original ou reprodução em zincogravura), e a divergência não foi resolvida.`);

aula.exemplo({
  titulo: "Aplicação do instrumento ao Programa de 1919 (fonte primária)",
  problema: "Que resposta à pergunta \"para que e para quem serve o design?\" o Programa de 1919 oferece?",
  passos: [
    { faz: "**1. Para quem é?** Para uma comunidade de trabalhadores das artes, sem distinção de classe entre artesão e artista. O destinatário não é o mercado.", porque: "o texto fala em \"corporação\", e não em clientes ou consumidores." },
    { faz: "**2. Quem produz, e como?** Artesãos, em oficinas, manualmente.", porque: "a imagem da catedral gótica remete a uma obra coletiva, executada por vários ofícios em conjunto." },
    { faz: "**3. Qual o papel da arte?** A arte não se separa do ofício: o artista é um \"artesão exaltado\".", porque: "essa formulação é o que torna possível a fusão institucional entre a academia de belas-artes e a escola de artes e ofícios." },
    { faz: "**4. Que pressão incide?** A escola depende de um governo estadual social-democrata que a apoia. A pressão política só se manifesta em 1924.", porque: "segundo o site oficial, as eleições de fevereiro de 1924 na Turíngia substituíram esse governo (BAUHAUS, s.d.)." },
  ],
  resposta: "**Resposta de 1919:** o design (mais precisamente, a construção) como **obra coletiva de artesãos**. A indústria ainda não integra o programa.",
});

aula.explique({
  pergunta: `A Bauhaus resultou da fusão de uma academia de belas-artes com uma escola de artes e ofícios. **Explique como a afirmação de que não há diferença essencial entre o artista e o artesão fundamenta essa fusão e identifique o que ela não contempla.**`,
  resposta: `A afirmação nega a hierarquia entre quem "concebe" e quem "executa": se o artista é um artesão exaltado, justifica-se uma instituição única, com oficinas e ensino de forma em conjunto. O que ela **não contempla** é a máquina: o ideal do Programa é a corporação de ofícios (a catedral), e não a fábrica. A introdução da indústria exigirá, portanto, uma reformulação do problema.`,
  criterios: [
    "Indica que a afirmação elimina a hierarquia entre artista e artesão",
    "Relaciona essa eliminação à instituição única, com oficinas",
    "Identifica a ausência da indústria no Programa",
  ],
});

aula.texto(`Se o Programa define o ideal, é o **curso preliminar** (*Vorkurs*) que o traduz em ensino. Trata-se do curso que os estudantes frequentavam antes de escolher uma oficina, dedicado a exercícios de forma, cor e material. Ele foi criado sob Johannes Itten em 1920 e por ele ministrado até a primavera de 1923. Itten deixou Weimar em março de 1923; Georg Muche respondeu pelo curso no verão, e László Moholy-Nagy o assumiu no outono (BAUHAUS, s.d.; BAUHAUS KOOPERATION, s.d.c).

A troca importa porque indica uma mudança na própria escola. De acordo com a resenha de Jones (1970), Itten saiu depois de um desentendimento com Gropius a respeito do seu misticismo. A aula propõe ler esse episódio como um sinal da mudança de orientação examinada na parte seguinte, em que a escola deixa de se pensar como corporação de artesãos e passa a se voltar para a técnica e a indústria. Trata-se de uma **interpretação desta aula**, e não de uma afirmação da resenha.`);

aula.destaque(`**Em síntese.** Em 1919, a Bauhaus responde à pergunta "para que serve o design?" com o **trabalho coletivo de artesãos**, tendo a catedral gótica como imagem. A indústria ainda não aparece, e é a sua entrada, a partir de 1923, que a parte seguinte examina.`);

// ================================================================ PARTE 2
aula.secao("2. 1923–1925 · A inflexão industrial e o encerramento de Weimar");

aula.periodo({
  de: 1923, ate: 1925, escala: [1919, 1933],
  titulo: "Weimar (fase final)",
  detalhe: "Exposição de 1923 · crise política na Turíngia · anúncio do fechamento",
  marcos: ["1923 · Exposição e lema", "1924 · Eleições na Turíngia", "dez. 1924 · Anúncio do fechamento"],
});

aula.texto(`**Problema da parte:** em que consistiu a inflexão de 1923 e em que condições políticas a escola deixou Weimar?

Em agosto e setembro de 1923, a escola organizou em Weimar uma exposição pública e adotou para ela o lema **"Arte e técnica: uma nova unidade"**, formulado por Gropius, segundo o site oficial da Bauhaus (BAUHAUS, s.d.). A frase é curta, mas desloca o centro de gravidade do projeto. No Programa de 1919, o ideal era o ofício e a corporação de artesãos; no lema de 1923, ao lado da arte aparece a **técnica**, palavra que remete à máquina e à indústria. As fontes consultadas concordam que houve uma mudança real de ênfase, na direção da indústria. A aula chama essa mudança de **inflexão**, termo que indica uma mudança de direção sem pressupor o quão brusca ela foi, ponto que, segundo as fontes, é discutido pelos historiadores.`);

aula.nota(`**Nota sobre as fontes.** O grau de radicalidade da mudança de 1923 e a autoria exata do lema são apontados como matéria de debate. Não foi localizada, entre as fontes consultadas, uma exposição desse debate; por isso ele não é resumido aqui.`);

aula.texto(`Para medir o alcance dessa mudança, convém distinguir dois conceitos. Um **protótipo** é o primeiro exemplar de um objeto, feito para testar a forma e a construção: um modelo a partir do qual outros podem ser produzidos. A **produção em série** é a fabricação de muitas unidades iguais, geralmente por máquinas, a partir desse modelo. Entre um e outra há um passo decisivo, porque alguém precisa ter uma fábrica, um contrato e um mercado. Segundo o ZKM, a partir de 1923 as oficinas da Bauhaus passaram a produzir protótipos concebidos para a produção em série (ZKM, s.d.). Isso significa que a escola não pretendia fabricar milhares de peças nas suas próprias oficinas; pretendia criar os modelos que uma indústria poderia multiplicar. Essa distinção será decisiva para avaliar os resultados, nas partes seguintes.`);

aula.nota(`**Nota sobre as fontes.** O texto do ZKM foi consultado apenas em resumo de busca.`);

aula.texto(`O primeiro caso concreto é o infusor de chá **MT 49**, de Marianne Brandt, datado de 1924 pela Bauhaus Kooperation (s.d.e). Trata-se de um objeto de metal, de forma geométrica, desenhado na oficina de metal da escola; a sua análise formal consta da aula anterior. Interessa aqui o seu destino: o MT 49 **não foi produzido em série**. Permaneceu, portanto, no estágio de protótipo, o que o torna um bom teste do lema de 1923, pois esse lema pressupõe que a arte e a técnica se encontrem na fábrica, e não apenas na oficina.`);

aula.nota(`**Nota sobre as fontes.** As fontes divergem quanto à data de alguns exemplares do objeto (1924 ou cerca de 1927).`);

aula.completar({
  titulo: "O MT 49 à luz do lema de 1923",
  problema: "O objeto cumpre o lema \"arte e técnica\"? Aplique as perguntas 1 a 3 (a pergunta 4 é tratada adiante). O primeiro passo está resolvido; nos demais, formule a resposta antes de revelar.",
  passos: [
    { faz: "**Quem produz, e como?** A oficina de metal da escola. O objeto permaneceu no estágio de protótipo e não chegou à produção em série (BAUHAUS KOOPERATION, s.d.e).", porque: "o lema supõe que a fábrica produza o que a escola projeta; o objeto não passou da oficina." },
    { faz: "**Para quem é?** Para um público restrito: os exemplares conhecidos são de prata ou prata-níquel com ébano, materiais caros, e a própria escola criticou o uso de materiais dessa natureza.", porque: "um objeto de materiais nobres dificilmente alcança o mercado amplo que a produção em série pressupõe.", lacuna: true },
    { faz: "**Qual o papel da arte?** A arte aparece na **forma geométrica** (corpo em meia esfera, com detalhes de ébano) e na ausência de ornamento.", porque: "a coerência formal com a técnica está presente; o que falta é a condição industrial.", lacuna: true },
  ],
  resposta: "**Leitura:** o MT 49 cumpre a face **formal** do lema (forma geométrica, sem ornamento) e não a face **industrial** (produção em série). Por isso o caso é tratado como protótipo.",
});

aula.explique({
  pergunta: `**Explique em que sentido o lema de 1923 constitui uma inflexão em relação ao Programa de 1919 e em que sentido pode ser lido como continuidade.** Considere apenas o que foi apresentado até aqui.`,
  resposta: `**Inflexão:** o Programa de 1919 propõe uma corporação de artesãos e toma a catedral gótica como imagem; o lema de 1923 coloca a **técnica** e, segundo as fontes, orienta a ênfase para a indústria, com protótipos concebidos para a série (ZKM, s.d.). **Continuidade:** permanece a ideia de **unidade** entre arte e trabalho produtivo e a organização em oficinas. A extensão exata da ruptura é matéria de debate que, entre as fontes consultadas, não pôde ser examinada.`,
  criterios: [
    "Identifica a passagem do ofício à técnica e à indústria",
    "Identifica o que permanece (unidade entre arte e trabalho, oficinas)",
    "Reconhece que o grau da ruptura é debatido e não foi examinado",
  ],
});

aula.texto(`A inflexão industrial ocorreu, porém, num momento em que a própria existência da escola estava ameaçada por razões políticas. Em Weimar, a escola era apoiada por um governo estadual social-democrata, o da Turíngia. Em fevereiro de 1924, as eleições na Turíngia deram maioria a forças não socialistas, que substituíram esse governo (BAUHAUS, s.d.). A consequência foi o corte das verbas da escola. O site oficial caracteriza os cortes como "justificados por razões financeiras, mas politicamente motivados": apresentados como questão de orçamento, mas decorrentes da mudança de orientação política do governo. Em **26 de dezembro de 1924**, os mestres anunciaram o fechamento da escola para **1º de abril de 1925**.

Aplicada a esse período, a quarta pergunta do instrumento (que pressão incide?) tem resposta clara: a pressão é **estadual e política**, embora formulada como razão orçamentária. O ponto prepara o que se segue. Uma escola cuja sobrevivência depende de um governo precisa encontrar outro apoio quando esse governo muda, e é isso que a cidade de Dessau oferecerá em 1925.`);

aula.nota(`**Nota sobre as fontes.** Não foi possível confirmar, nas fontes consultadas, qual instância específica decidiu os cortes (governo estadual ou ministério).`);

aula.destaque(`**Em síntese.** Em 1923, o lema "arte e técnica" desloca o projeto do ofício para a **indústria**: as oficinas passam a fazer **protótipos** para a série. O MT 49 mostra que, em 1924, o protótipo existe, mas a série não. No mesmo período, a escola perde o apoio político do governo da Turíngia e anuncia o seu fechamento.`);

// ================================================================ PARTE 3
aula.secao("3. 1925–1928 · Dessau sob Gropius: a escola e a indústria");

aula.periodo({
  de: 1925, ate: 1928, escala: [1919, 1933],
  titulo: "Dessau (primeira fase)",
  detalhe: "Escola municipal · prédio projetado por Gropius · contratos com empresas",
  marcos: ["mar. 1925 · Municipalização", "4 dez. 1926 · Inauguração do prédio", "1928 · Contratos com a indústria"],
});

aula.texto(`**Problema da parte:** de que modo a escola, já em Dessau, buscou inserir a sua produção na indústria, e com que resultado?

O anúncio de fechamento de dezembro de 1924 não foi o fim da escola. Em março de 1925, o conselho municipal de Dessau assumiu a instituição, por iniciativa do prefeito Fritz Hesse, e as aulas recomeçaram em abril (BAUHAUS, s.d.; BAUHAUS KOOPERATION, s.d.c). Do ponto de vista do instrumento de análise, a mudança é significativa: a escola deixa de depender de um governo estadual e passa a depender de uma cidade, de modo que a pressão política não desaparece, apenas muda de origem. A mudança de lugar trouxe também um edifício novo. O prédio da escola em Dessau, projetado por Gropius, foi construído entre setembro de 1925 e março de 1926 e inaugurado em **4 de dezembro de 1926** (BAUHAUS KOOPERATION, s.d.b). A análise formal desse edifício (paredes brancas, vidro contínuo, ausência de ornamento) consta da aula anterior.`);

aula.texto(`Em Dessau, a promessa de 1923 ganha contornos mais concretos, porque a escola passa a firmar acordos com empresas. O funcionamento geral desses acordos é simples de descrever. A escola, ou um dos seus designers, cria o modelo de um objeto; uma empresa, que dispõe de fábrica, máquinas e meios de venda, fabrica esse objeto em série e o comercializa; e, em princípio, parte da receita retorna a quem criou o modelo sob a forma de **royalties**, isto é, de pagamentos proporcionais às vendas. Esse arranjo explica por que a escola, mesmo sem fábrica própria, podia pretender influir na produção industrial.`);

aula.texto(`Duas cooperações documentam esse movimento em 1928. A primeira é a de **Marcel Breuer** com a Thonet. Segundo o site da empresa, a Standard-Möbel fabricou quase toda a linha de móveis de tubo de aço até 1929, e a cadeira B 32 foi produzida pela Thonet; o acordo entre Breuer e a Thonet é de 1928, e a Thonet adquiriu a Standard-Möbel em 1929 (THONET, s.d.). A segunda é a de **Marianne Brandt**, então diretora da oficina de metal (1928–1929): segundo o Metropolitan Museum, ela facilitou o contrato entre a escola e a Körting & Mathiesen, empresa fabricante de luminárias (THE METROPOLITAN MUSEUM OF ART, s.d.). Nos dois casos, o desenho vem da escola e a fabricação, de uma empresa, que é exatamente o modelo descrito acima.`);

aula.nota(`**Nota sobre as fontes.** Os dois casos foram consultados apenas em resumo de busca. O início da produção da B 32 é datado de 1930 ou 1931, conforme a fonte. A tiragem das luminárias e as datas exatas **não foram confirmadas**, e também não foi encontrado dado sobre royalties.`);

aula.completar({
  titulo: "A cadeira de tubo de aço: aplicação do instrumento (1928)",
  problema: "Que resposta à pergunta central a cooperação com a Thonet representa? O primeiro passo está resolvido; nos demais, formule a resposta antes de revelar.",
  passos: [
    { faz: "**Quem produz, e como?** **Empresas**: a Standard-Möbel, e depois a Thonet. A escola projeta; a série é produzida por terceiros.", porque: "a produção em escala sai da oficina e passa para a empresa, que dispõe de linha de produção." },
    { faz: "**Qual o papel da arte?** O material industrial (aço tubular) integra a forma do objeto e é mantido à vista.", porque: "é a mesma lógica da aula anterior (material à mostra), agora aplicada a um produto de série.", lacuna: true },
    { faz: "**Que pressão incide?** A dependência de **contratos** com empresas: a escola não controla a produção. Quem lucrou com os royalties **não foi confirmado**.", porque: "ausência de dados sobre a remuneração impede concluir quem, entre escola, designer e empresa, se beneficiou.", lacuna: true },
  ],
  resposta: "**Leitura:** nesse caso, a promessa industrial se realiza **pela empresa, e não pela escola**. O projeto é da Bauhaus; a produção em série é de terceiros, o que torna a escola dependente de contratos.",
});

aula.texto(`Em 1928, no momento em que esses acordos se consolidavam, Gropius deixou a direção da escola e recomendou Hannes Meyer como sucessor (BAUHAUS KOOPERATION, s.d.c). A parte seguinte examina o que Meyer fez com a escola que recebeu.`);

aula.destaque(`**Em síntese.** Em Dessau, a promessa industrial de 1923 passa a depender de **contratos com empresas**: o projeto é da escola, mas a fabricação em série é de terceiros. Isso dá à escola alguma presença na indústria, ao custo de não controlar a produção.`);

// ================================================================ PARTE 4
aula.secao("4. 1928–1930 · A direção de Hannes Meyer: o povo, não o luxo");

aula.periodo({
  de: 1928, ate: 1930, escala: [1919, 1933],
  titulo: "Dessau (direção de Meyer)",
  detalhe: "Princípio das necessidades do povo · papel de parede · escola sindical de Bernau",
  marcos: ["1928 · Meyer assume", "1929 · Contrato com a Rasch", "1928–1930 · Escola de Bernau", "1º ago. 1930 · Demissão"],
});

aula.texto(`**Problema da parte:** que alteração a direção de Meyer introduziu na pergunta central, e de que modo o resultado pode ser avaliado a partir de obras e de produtos?

Hannes Meyer assumiu a direção em 1928, por recomendação de Gropius. Segundo a Bauhaus Kooperation, o seu princípio era "as necessidades do povo em vez da necessidade de luxo" (BAUHAUS KOOPERATION, s.d.c). A formulação é uma resposta direta à pergunta central da aula: o design deve servir a quem? Para Meyer, ao povo, e não a quem pode pagar pelo luxo. O contraste com um caso anterior ajuda a ver o alcance da frase. O infusor MT 49, de 1924, tem exemplares de prata ou prata-níquel com ébano, materiais caros; a aula propõe a leitura de que, à luz do princípio de Meyer, um objeto assim seria difícil de justificar.`);

aula.nota(`**Nota sobre as fontes.** A fórmula "função vezes economia", frequentemente atribuída a Meyer, **não pôde ser confirmada**: ela aparece em descrições, mas o texto de 1928 em que seria enunciada não foi consultado.`);

aula.texto(`O produto mais bem-sucedido da escola, segundo as fontes, pertence a esse período. Em 1929, a escola firmou contrato com a Rasch, uma fábrica de papel de parede, e a Bauhaus Kooperation designa o resultado como o "produto padronizado mais bem-sucedido" da escola (BAUHAUS KOOPERATION, s.d.f). "Padronizado" significa que o mesmo produto era fabricado em escala e vendido a muitos compradores, o que o coloca no extremo oposto do protótipo. O caso é instrutivo por um motivo adicional: o objeto de maior sucesso comercial não foi uma cadeira ou uma luminária célebre, e sim um revestimento de parede, um produto de uso corrente.`);

aula.nota(`**Nota sobre as fontes.** A página da Bauhaus Kooperation foi consultada apenas em resumo de busca. Uma fonte comercial menciona milhões de rolos vendidos; por ser fonte única e comercial, a informação foi descartada.`);

aula.imagem({
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bauhaus_Ausstellung_Nieders%C3%A4chsischer_Landtag_eine_Bauhaustapete.jpg/960px-Bauhaus_Ausstellung_Nieders%C3%A4chsischer_Landtag_eine_Bauhaustapete.jpg",
  alt: "Estande de exposição com painel de cor laranja lisa, amostras de cor chapada, um banner com o nome Rasch Tapeten e um livro aberto num suporte",
  titulo: "Estande de papéis de parede Bauhaus (Rasch), em exposição de 2019",
  credito: "Foto: Bauhäusler 100",
  licenca: "CC BY-SA 4.0",
  link: "https://commons.wikimedia.org/wiki/File:Bauhaus_Ausstellung_Niedersächsischer_Landtag_eine_Bauhaustapete.jpg",
  largura: 440,
  texto: `**Observação:** a imagem mostra superfícies de **cor lisa** (o painel laranja, as amostras de cor chapada), sem motivo figurativo ou ornamental.

**Limite da fonte:** trata-se de uma **montagem de exposição de 2019**, e não do produto original de 1929. A imagem serve para identificar o *tipo* de superfície, e não como documento histórico do produto.`,
});

aula.completar({
  titulo: "O papel de parede e a promessa industrial (1929)",
  problema: "O papel de parede cumpre a promessa de 1923? Aplique as quatro perguntas. O primeiro passo está resolvido; nos demais, formule a resposta antes de revelar.",
  passos: [
    { faz: "**Quem produz, e como?** Uma **fábrica**, a Rasch. A escola fornece o desenho e a cor, e a empresa produz.", porque: "em contraste com o MT 49 (1924), o objeto sai da oficina e entra em linha de produção." },
    { faz: "**Para quem é?** Para um **mercado amplo**: o produto é descrito como \"padronizado\" e o mais bem-sucedido da escola (BAUHAUS KOOPERATION, s.d.f).", porque: "\"padronizado\" indica que o mesmo produto era vendido a muitos compradores, e não feito sob encomenda.", lacuna: true },
    { faz: "**Qual o papel da arte?** A arte está na **cor e na superfície**, e não no ornamento (cf. a imagem acima).", porque: "é a mesma ideia de corte do ornamento examinada na aula anterior, aplicada a um produto de catálogo.", lacuna: true },
    { faz: "**Que pressão incide?** A pressão **econômica**: a escola necessitava de receita. **Não foi encontrado dado confiável** sobre o que a escola obteve com licenças.", porque: "uma fonte comercial menciona milhões de rolos vendidos; por ser fonte única e comercial, a informação foi descartada.", lacuna: true },
  ],
  resposta: "**Leitura:** neste caso a promessa foi cumprida, com produção em escala por uma empresa. Observa-se que o produto de maior sucesso comercial foi um revestimento de parede, e não um dos objetos hoje mais associados à escola.",
});

aula.texto(`Se o papel de parede mostra o princípio de Meyer aplicado a um produto, a escola sindical de Bernau mostra-o aplicado a um edifício. A Escola Sindical da ADGB foi feita por Meyer e por seus alunos (BAUHAUS KOOPERATION, s.d.c); a ficha do arquivo no Wikimedia Commons atribui o projeto a Hannes Meyer e Hans Wittwer, entre 1928 e 1930. O nome já indica o destinatário: era a escola de uma central sindical, isto é, de uma organização de trabalhadores.

A comparação com o edifício de Gropius em Dessau (1926) é útil porque os dois são associados à Bauhaus, e permite testar se o "visual Bauhaus" descreve também a obra de Meyer. As duas imagens a seguir devem ser vistas primeiro com os critérios de aparência da aula anterior (formas, ornamento e material) e só depois comentadas. A imagem de Dessau aparece apenas para fins de comparação.`);

aula.imagem({
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bauhaus_Dessau_2018.jpg/960px-Bauhaus_Dessau_2018.jpg",
  alt: "Prédio da Bauhaus em Dessau: volumes brancos com grandes superfícies de vidro",
  titulo: "Para comparação: Gropius, Dessau, 1926 (reboco branco e vidro)",
  credito: "Foto: Aufbacksalami",
  licenca: "CC BY-SA 4.0",
  link: "https://commons.wikimedia.org/wiki/File:Bauhaus_Dessau_2018.jpg",
  largura: 440,
  texto: `**Observação:** paredes brancas e superfícies de vidro contínuas. É o conjunto de traços que o senso comum associa ao "visual Bauhaus".`,
});

aula.imagem({
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/2022-09-01_ADGB-Bundesschule_Bernau_11.jpg/960px-2022-09-01_ADGB-Bundesschule_Bernau_11.jpg",
  alt: "Edifício de tijolo aparente de quatro andares com janelas regulares e cobertura plana, e um bloco baixo ao lado",
  titulo: "Meyer, Escola Sindical da ADGB, Bernau, 1928–1930 (tijolo aparente)",
  credito: "Foto: xiquinhosilva, 2022",
  licenca: "CC BY 2.0",
  link: "https://commons.wikimedia.org/wiki/File:2022-09-01_ADGB-Bundesschule_Bernau_11.jpg",
  largura: 440,
  texto: `**Observação:** o material é **tijolo aparente**, em tom laranja-avermelhado; as janelas são pequenas e regulares; a cobertura é plana, com beiral; há um bloco mais baixo à direita. Não há reboco branco.

**Limites da fonte:** a fotografia, de 2022, mostra apenas **um trecho** do conjunto, e nada revela sobre a planta ou o uso. O nome do prédio informa que se tratava da escola de uma central sindical.`,
});

aula.texto(`A gestão de Meyer terminou em **1º de agosto de 1930**, quando ele foi demitido pela cidade de Dessau por "supostas práticas comunistas" (BAUHAUS KOOPERATION, s.d.c; BAUHAUS, s.d.). O episódio ilustra, mais uma vez, a quarta pergunta do instrumento: a pressão política, que já havia levado ao quase fechamento da escola em 1924, volta a incidir sobre ela, agora por meio da cidade que a mantinha. Observa-se também que a demissão atinge justamente o diretor cujo princípio era servir às necessidades do povo, o que torna o episódio importante para entender o que a Bauhaus podia e não podia fazer no ambiente político da época.`);

aula.nota(`**Nota sobre as fontes.** Não foi confirmado quem exatamente tomou a decisão (o prefeito ou o conselho). O adjetivo "supostas" não é acompanhado, nas fontes consultadas, de evidência: todas repetem a palavra "comunismo", mas nenhuma apresenta o que a sustentaria.`);

aula.problema({
  titulo: "O que une Dessau e Bernau, se não é o aspecto visual?",
  enunciado: `Dessau e Bernau são ambas atribuídas à Bauhaus, mas **não se assemelham visualmente**. Aplique as **quatro perguntas** do instrumento às duas obras e responda:

**Os critérios de aparência da aula anterior permitiriam reconhecer a obra de Meyer como Bauhaus? O que isso indica sobre a expressão "estilo Bauhaus"?**`,
  dica: `Comece pela pergunta 1: para quem se destina cada edifício? Em seguida, compare o material. Os critérios de aparência (formas, ornamento, material) conduzem à mesma conclusão nos dois casos?`,
  resposta: `**Para quem?** Dessau é a sede da própria escola, projeto de Gropius. Bernau é a escola de uma central sindical, obra pensada para trabalhadores, coerente com o princípio de Meyer ("as necessidades do povo").

**Quem produz?** Em Bernau, Meyer e seus alunos (BAUHAUS KOOPERATION, s.d.c).

**Papel da arte e material:** em Dessau, branco e vidro; em Bernau, tijolo aparente. Os critérios visuais da aula anterior (reboco branco, vidro, superfícies lisas) **não reconheceriam** Bernau.

**Pressão:** Meyer foi demitido em 1930 por "supostas práticas comunistas": a pressão política interrompeu a sua gestão.

**Conclusão:** o que liga as duas obras é a **orientação** (projetar para uma finalidade social e empregar o que a construção moderna permite), e não o aspecto. Isso é um argumento contra o emprego de "Bauhaus" como estilo. *Ressalva:* uma fotografia não permite inferir planta ou uso; é apenas indício.`,
});

aula.explique({
  pergunta: `**Balanço de 1923–1930.** Considerando o MT 49 (1924), a cadeira de tubo de aço (1928) e o papel de parede (1929), **a promessa industrial da Bauhaus foi cumprida?** Fundamente a resposta em, pelo menos, um dos casos e indique que dado adicional seria necessário para decidir.`,
  resposta: `Há duas leituras, e a literatura consultada (apenas em resumos) trata a questão como debate entre **insucesso comercial** e **objetivo conceitual**. Segundo o Harvard Art Museums (s.d., em resumo), relativamente poucos objetos da Bauhaus foram produzidos em massa. **Leitura do insucesso:** o MT 49 permaneceu protótipo, e o sucesso comercial foi raro. **Leitura do objetivo conceitual:** as oficinas produziam **protótipos** para a série (ZKM, s.d.), e quem fabricava eram **empresas** (Standard-Möbel e Thonet nas cadeiras, Rasch no papel de parede); nesse caso, medir a escola pela tiragem seria medir o critério errado. Uma boa resposta toma posição e declara que dados faltariam: tiragens e receita de licenças **não foram confirmadas**.`,
  criterios: [
    "Distingue protótipo de produção em série",
    "Fundamenta a resposta em ao menos um dos três casos",
    "Reconhece que a produção era feita por empresas, e não pela escola",
    "Indica o dado que faltaria (tiragens, receita de licenças)",
  ],
});

aula.destaque(`**Em síntese.** Com Meyer, a resposta da escola passa a ser o **povo, e não o luxo**. O papel de parede (produto de maior sucesso) e a escola de Bernau (obra para trabalhadores, em tijolo) mostram essa orientação, e mostram também que o "visual Bauhaus" de Dessau **não** a descreve. A demissão de 1930 evidencia que a pressão política seguia decisiva.`);

// ================================================================ PARTE 5
aula.secao("5. 1930–1933 · Mies van der Rohe e o fim da escola");

aula.periodo({
  de: 1930, ate: 1933, escala: [1919, 1933],
  titulo: "Dessau e Berlim (direção de Mies van der Rohe)",
  detalhe: "Escola fora do debate político · voto de 1932 · exílio em Berlim · dissolução",
  marcos: ["1930 · Mies assume (outono)", "22 ago. 1932 · Voto em Dessau", "out. 1932 · Berlim", "11 abr. 1933 · Lacre", "20 jul. 1933 · Dissolução"],
});

aula.texto(`**Problema da parte:** em que ordem se deu o fim da escola e em que medida a fórmula "fechada pelos nazistas em 1933" descreve essa sequência?

Ludwig Mies van der Rohe assumiu a direção no outono de 1930. Segundo as fontes oficiais, manteve a escola **fora dos debates políticos** e encerrou as oficinas de produção (BAUHAUS, s.d.; BAUHAUS KOOPERATION, s.d.c). As duas decisões podem ser entendidas em conjunto: sem debate político, a escola deixava de ser um alvo fácil de acusações como a que atingira Meyer; sem oficinas de produção, deixava de ser uma escola que fabricava e passava a ser, sobretudo, uma escola que ensinava. Essa explicação é, porém, uma **inferência desta aula**: as fontes consultadas descrevem o que Mies fez, mas não dizem por que o fez.`);

aula.nota(`**Nota sobre as fontes.** Uma das fontes consultadas indica a nomeação de Mies em abril de 1930, data inconsistente com a demissão de Meyer em 1º de agosto; por isso ela não foi adotada, e a aula usa apenas "1930, no outono".`);

aula.texto(`A fórmula "a Bauhaus foi fechada pelos nazistas em 1933" não é falsa, mas condensa uma sequência de **três atos**, de datas e autores diferentes. Reconstituí-la em ordem é o melhor modo de ver o que a fórmula esconde, e por isso o exercício a seguir percorre os acontecimentos de 1932 e de 1933 um a um, aplicando a quarta pergunta do instrumento (que pressão incide?) a cada um.`);

aula.completar({
  titulo: "Reconstituição de 1932–1933, com a pergunta 4 (que pressão incide?)",
  problema: "Para cada data, indique o que ocorreu e quem decidiu. O primeiro passo está resolvido.",
  passos: [
    { faz: "**22 de agosto de 1932, Dessau.** O conselho municipal, de maioria nazista (NSDAP), aprova por **20 votos a 5** o fim do ensino na cidade, a partir de 1º de outubro (BAUHAUS, s.d.).", porque: "a primeira medida é **municipal e política**. (A Bauhaus Kooperation fala em efeito a partir de setembro; as duas datas provavelmente designam o mesmo ato lido em momentos diferentes.)" },
    { faz: "**Outubro de 1932, Berlim.** A escola passa a funcionar numa antiga fábrica de telefones, em Steglitz, ainda sob a direção de Mies.", porque: "a escola sobrevive à medida de Dessau mudando de cidade; a despolitização adotada desde 1930 **não impediu o voto**.", lacuna: true },
    { faz: "**11 de abril de 1933, Berlim.** A polícia lacra o prédio.", porque: "a segunda medida é **policial**; as fontes consultadas descrevem o fato, mas não o desenvolvem.", lacuna: true },
    { faz: "**20 de julho de 1933.** O **corpo docente** decide pela dissolução da escola.", porque: "o ato formal final é uma **decisão dos próprios professores**, tomada depois do lacre; ele difere do que a expressão \"fechada pelos nazistas\" sugere.", lacuna: true },
  ],
  resposta: "**A sequência tem três atos:** voto municipal em 1932 (maioria nazista), lacre policial em abril de 1933 e dissolução decidida pelo corpo docente em julho de 1933. A fórmula \"fechada pelos nazistas\" resume os dois primeiros atos e oculta o terceiro.",
});

aula.explique({
  pergunta: `**Explique por que a afirmação "a Bauhaus foi fechada pelos nazistas em 1933" constitui simplificação.** Reconstitua a ordem dos fatos.`,
  resposta: `Em **22 de agosto de 1932**, o conselho de Dessau, de maioria nazista, votou o fim do ensino na cidade. A escola prosseguiu em Berlim. Em **11 de abril de 1933**, a polícia lacrou o prédio. Em **20 de julho de 1933**, o corpo docente decidiu dissolver a escola. A pressão nazista é, portanto, real e anterior a 1933 (por via municipal), mas a fórmula oculta que o ato final foi decidido pelos próprios professores e que a escola já havia sido retirada de Dessau um ano antes.`,
  criterios: [
    "Menciona o voto de 1932 em Dessau",
    "Menciona o lacre policial de abril de 1933",
    "Indica que o corpo docente decidiu a dissolução em julho",
  ],
});

aula.texto(`A sequência permite ainda uma observação sobre a medida que Mies adotara em 1930. A despolitização da escola não impediu o voto de 1932: a pressão política vinha de fora, e não de uma atitude da própria escola. Tratar essa medida como **estratégia de sobrevivência** é uma interpretação plausível, mas as fontes consultadas não permitem sustentá-la nem refutá-la, porque não registram as razões de Mies. Trata-se, portanto, de uma questão em aberto, do tipo que separa um resumo de uma pesquisa: seria necessário consultar documentos da época (cartas, atas, textos do próprio Mies) para decidir.`);

aula.destaque(`**Em síntese.** Com Mies, a escola se afasta da política e das oficinas de produção, mas isso não a protege: o fim se dá em **três atos** (voto municipal em 1932, lacre policial e dissolução pelos professores em 1933). "Fechada pelos nazistas" é uma forma abreviada que apaga a ordem e os autores de cada ato.`);

// ================================================================ PARTE 6
aula.secao("6. 1932–2019 · Recepção e construção historiográfica do \"mito Bauhaus\"");

aula.periodo({
  de: 1932, ate: 2019, escala: [1919, 2019],
  titulo: "Depois da escola",
  detalhe: "A recepção começa antes do fim da escola (1932) e se prolonga até o centenário (2019)",
  marcos: ["1932 · Estilo Internacional", "1938 · MoMA", "1981 · Wolfe", "2009 · MoMA", "2019 · Centenário"],
});

aula.texto(`**Problema da parte:** como a imagem da Bauhaus, formada em grande parte depois do fim da escola, passou a funcionar como "estilo"?

A Bauhaus durou catorze anos, mas a sua fama é muito maior do que a sua duração. Essa fama não foi construída pela escola enquanto existiu, e sim, em grande parte, depois: por mostras, livros e críticas que, em momentos diferentes, escolheram o que mostrar e o que deixar de fora. Para entender como a Bauhaus passou a ser tratada como "estilo", é preciso seguir, em ordem cronológica, quem falou sobre ela e a partir de quê. A linha do tempo a seguir resume os marcos que serão examinados.`);

aula.cronologia({
  titulo: "Linha do tempo da recepção (1932–2019)",
  eventos: [
    { quando: "1932", texto: "Mostra *Modern Architecture* e livro *The International Style* (MoMA)" },
    { quando: "1938", texto: "Mostra *Bauhaus 1919–1928* (MoMA)" },
    { quando: "1969", texto: "Tradução inglesa do livro de Wingler (segundo Bergdoll, 2019, consultado em resumo)" },
    { quando: "1981", texto: "*From Bauhaus to Our House*, de Tom Wolfe" },
    { quando: "2009", texto: "Nova mostra do MoMA, que inclui as gestões de Meyer e de Mies" },
    { quando: "2019", texto: "Centenário da escola" },
  ],
  legenda: "Os marcos indicam que a imagem pública da Bauhaus foi construída por instituições e autores sucessivos, em geral fora da Alemanha e depois do fim da escola.",
});

aula.texto(`**1932: um rótulo anterior à mostra sobre a Bauhaus.** A mostra *Modern Architecture: International Exhibition*, no MoMA, e o livro *The International Style: Architecture since 1922*, de Henry-Russell Hitchcock e Philip Johnson, difundiram em 1932 o rótulo "Estilo Internacional" (ARCHITECTURAL RECORD, s.d.). O rótulo reunia sob um nome de caráter formal a arquitetura moderna de diferentes origens. A observação é importante porque mostra que a tendência de agrupar obras distintas sob um único nome "de estilo" já existia antes de 1938 e se deu fora da escola: foi um rótulo criado em Nova York para classificar formas, e não uma categoria da própria Bauhaus, que era uma escola.`);

aula.nota(`**Nota sobre as fontes.** O texto da *Architectural Record* foi consultado apenas em resumo de busca. A editora do livro e as datas exatas da mostra não foram confirmadas.`);

aula.texto(`**1938: a mostra sobre a Bauhaus.** Em 1938, o MoMA apresentou *Bauhaus 1919–1928*. Segundo Herboth (2009), a mostra foi organizada por Walter Gropius e desenhada por Herbert Bayer, com catálogo editado por Bayer sob a direção geral de Walter e Ise Gropius. Isso significa que a história da escola foi contada, em grande medida, por Gropius, que a havia fundado. E a mostra cobriu apenas a gestão de Gropius (1919–1928), deixando de fora os últimos cinco anos, isto é, as gestões de Meyer e de Mies. Quem conheceu a Bauhaus por essa mostra conheceu, portanto, apenas as orientações da gestão de Gropius (as duas primeiras da aula: a artesanal e a industrial) como se fossem a escola inteira.`);

aula.texto(`Os autores consultados concordam que houve um recorte, mas o explicam de maneiras diferentes. Para **Barry Bergdoll** (2019), o catálogo de 1938 foi, por décadas, a obra de referência em inglês sobre a escola, e a mostra produziu "equívocos" duradouros. Para **Eric Herboth** (2009), o recorte não foi um plano para apagar Meyer, e sim o resultado da relação pessoal de Alfred Barr, do MoMA, com Gropius, e deve ser entendido como um descuido; ele observa que, em 2009, o próprio MoMA fez uma mostra que incluiu as gestões de Meyer e de Mies.

A diferença entre as duas leituras é sutil e importante. Os dois **concordam quanto ao fato** (o recorte existiu), mas **divergem quanto ao diagnóstico**: para um, houve consequências duradouras de uma narrativa; para o outro, a origem foi um descuido. O que se aprende com isso é que a mesma evidência admite explicações diferentes, e que cada autor precisa ser lido com essa diferença em mente.`);

aula.nota(`**Nota sobre as fontes.** O artigo de Bergdoll foi consultado apenas no resumo; por isso a sua leitura é apresentada em termos gerais. Um trecho de busca atribui a Bergdoll a tese de que a exclusão de Meyer começou em Harvard, em 1930; como não foi confirmado, não é usado.`);

aula.texto(`**1981: a crítica de Tom Wolfe.** Em *From Bauhaus to Our House* (Nova York: Farrar, Straus & Giroux, 1981), Tom Wolfe criticou a arquitetura moderna e a sua adoção nos Estados Unidos. O título sugere (é uma leitura desta aula) que o nome "Bauhaus" já funcionava, no uso corrente, como símbolo de toda a arquitetura moderna, e não apenas da escola. Segundo a Wikipédia, que sintetiza as resenhas, críticos como Goldberger responderam que "dazzle is not history" (WIKIPEDIA, s.d.).

**2019: o centenário.** O centenário da escola motivou projetos de reavaliação, como o *Bauhaus Imaginista* e a coletânea *Bauhaus Bodies*, voltados à circulação internacional da escola e a questões de gênero.`);

aula.nota(`**Nota sobre as fontes.** A síntese de Wolfe vem da Wikipédia, que não substitui a leitura das resenhas; estas não foram lidas. Não foi localizada, entre as fontes consultadas, avaliação do livro por historiadores acadêmicos. As fontes sobre 2019 foram consultadas apenas em resumos de busca e **não são avaliadas aqui**.`);

aula.texto(`**Hoje: a posição institucional.** A página *Bauhaus knowledge in a nutshell*, do Bauhaus-Archiv, afirma sem rodeios que a Bauhaus **não é um estilo**: a escola e as suas obras eram muito diversas, e ela não se identifica por cores ou traços estilísticos individuais (BAUHAUS-ARCHIV, s.d.). A afirmação converge com a hipótese da aula e com o que foi visto na parte 4: Dessau e Bernau, ambas associadas à Bauhaus, não se parecem. Convém notar, porém, que o termo "estilo Bauhaus" segue em circulação; a observação institucional funciona, assim, como um **corretivo** ao uso corrente, e não como uma regra que o tenha eliminado.`);

aula.explique({
  pergunta: `**Explique por que o recorte da exposição do MoMA de 1938 é relevante para quem procura "o estilo Bauhaus" e indique em que as leituras de Bergdoll e de Herboth coincidem e divergem.**`,
  resposta: `O que se entende por "visual Bauhaus" corresponde, em boa parte, à **fase de Gropius**, a única coberta pela mostra de 1938; as fases de Meyer e de Mies ficaram de fora e, segundo Bergdoll (2019, em resumo), o catálogo foi por décadas a obra de referência em inglês. As duas leituras **coincidem no fato** (o recorte) e **divergem no diagnóstico**: Bergdoll fala em equívocos duradouros; Herboth (2009) vê um descuido associado à relação de Barr com Gropius. Uma boa resposta indica que Bergdoll foi consultado apenas em resumo.`,
  criterios: [
    "Relaciona o recorte de 1938 à ideia de estilo único",
    "Indica que a mostra cobriu apenas a gestão de Gropius",
    "Distingue o fato (recorte) do diagnóstico (equívoco ou descuido)",
  ],
});

aula.texto(`**Uma tensão com a hipótese da aula.** Na introdução, a aula propôs ler a Bauhaus como **sucessão de respostas** a uma mesma pergunta. A resenha de Jones (1970) lembra, porém, que o livro de Wingler traz, no frontispício, uma frase atribuída a **Mies**: ***"O Bauhaus foi uma ideia."*** Se a Bauhaus foi uma única ideia, a hipótese da sucessão perde força; se foi várias, a frase de Mies precisa ser lida como uma simplificação posterior, feita por alguém que dirigiu a escola apenas na sua fase final.

A oposição entre **ideia única** e **fases distintas** não foi encontrada, entre as fontes consultadas, numa exposição direta, e por isso não é resolvida aqui. O instrumento de quatro perguntas permite, contudo, **formular e testar** uma posição própria: basta verificar, para cada fase, se as respostas às quatro perguntas mudam (o que apoia a sucessão) ou permanecem (o que apoia a ideia única).`);

aula.destaque(`**Em síntese.** A imagem de "um estilo" foi construída **depois** da escola, por rótulos (1932), mostras (1938) e livros (1981) que recortaram o que mostrar. As leituras divergem quanto ao diagnóstico (equívoco duradouro ou descuido), e a própria instituição que guarda a memória da escola afirma hoje que a Bauhaus **não é um estilo**.`);

// ================================================================ FECHAMENTO
aula.secao("Fechamento");

aula.destaque(`**Síntese geral.** A trajetória da Bauhaus pode ser lida como **sucessão de respostas** à pergunta sobre a finalidade do design: o artesão (1919), a fábrica (1923), o povo (1928) e a escola sem política (1930). A imagem de "um estilo" foi, em parte, construída **depois**, por mostras e livros que recortaram uma das fases. *Limite da hipótese: uma frase atribuída a Mies descreve a Bauhaus como "uma ideia", e o debate não está encerrado.*`);

aula.quiz({
  pergunta: `Um colega escreve: "A Bauhaus foi fechada pelos nazistas em 1933." Quais precisões são válidas? (marque todas)`,
  opcoes: [
    { texto: "Em 22 de agosto de 1932, o conselho municipal de Dessau, de maioria nazista, aprovou por 20 votos a 5 o fim do ensino na cidade", certa: true },
    { texto: "Em abril de 1933 a polícia lacrou o prédio em Berlim, mas foi o corpo docente que decidiu dissolver a escola, em 20 de julho", certa: true },
    { texto: "A escola foi fechada em 1930, quando Hannes Meyer foi demitido, e só reabriu em Berlim por decisão de Mies" },
    { texto: "A escola nunca saiu de Dessau: o prédio lacrado em 1933 era o de Gropius" },
  ],
  explicacao: `As duas primeiras formam a sequência: voto municipal (1932), lacre policial (abril de 1933) e dissolução decidida pelo corpo docente (julho de 1933). A terceira confunde a demissão de Meyer (1930) com o fechamento: a escola continuou a funcionar depois dela. A quarta erra o lugar: em 1933 a escola estava em Berlim, numa antiga fábrica de telefones.`,
});

aula.quiz({
  pergunta: `Qual destas afirmações sobre Hannes Meyer **não** é sustentada pelas fontes consultadas?`,
  opcoes: [
    { texto: "Foi indicado para a direção por recomendação de Gropius" },
    { texto: "Foi demitido em 1930 por supostas práticas comunistas" },
    { texto: "Foi demitido porque a escola de Bernau excedeu o orçamento", certa: true },
    { texto: "Defendia as necessidades do povo no lugar da necessidade de luxo" },
  ],
  explicacao: `A terceira não consta das fontes consultadas: todas indicam motivação política (supostas práticas comunistas), e nenhuma relaciona a demissão a excesso de orçamento. As outras três constam da Bauhaus Kooperation e do site oficial. Uma afirmação sem fonte, repetida, converte-se em "fato"; por isso convém sempre solicitar a referência.`,
});

aula.quiz({
  pergunta: `Em 1929, uma cooperativa de moradia popular encomenda móveis simples, de compensado e tubo de aço, para 5.000 apartamentos. Ninguém assina as peças. Com o instrumento das quatro perguntas, qual leitura é a mais sólida?`,
  opcoes: [
    { texto: "Aproxima-se de Meyer: a pergunta 1 (\"para quem é?\") decide, pois o destinatário é a necessidade do povo, e não o luxo", certa: true },
    { texto: "Aproxima-se de Gropius em 1923: a pergunta 2 decide, pois o tubo de aço e a série indicam produção industrial" },
    { texto: "Aproxima-se de Mies: a pergunta 4 decide, pois a cooperativa é cliente com orçamento definido" },
    { texto: "Aproxima-se de Weimar em 1919: a pergunta 3 decide, pois a peça sem assinatura lembra o artesão anônimo da catedral" },
  ],
  explicacao: `A pergunta 2 também se aplica (série, material industrial), mas **não distingue** Meyer de Gropius em 1923: ambos podiam recorrer à fábrica. O que os distingue é o **destinatário**: moradia popular, custo baixo, sem pretensão autoral, ou seja, o povo. Mies não se ajusta: afastava a escola desse tipo de debate. E a peça de série não equivale ao artesão anônimo de 1919, que produzia manualmente, em oficina.`,
});

aula.quiz({
  pergunta: `Sobre a exposição *Bauhaus 1919–1928* do MoMA e o seu efeito na imagem da escola, quais afirmações são sustentadas pelas fontes consultadas? (marque todas)`,
  opcoes: [
    { texto: "A exposição de 1938 cobriu a gestão de Gropius e deixou de fora as de Meyer e de Mies", certa: true },
    { texto: "Para Herboth, o recorte decorre da relação de Alfred Barr com Gropius e de um descuido, e não de um plano de apagar Meyer", certa: true },
    { texto: "O rótulo \"Estilo Internacional\" nasceu dessa exposição de 1938" },
    { texto: "Quando o MoMA retomou o tema, em 2009, repetiu o mesmo recorte" },
  ],
  explicacao: `As duas primeiras estão corretas. "Estilo Internacional" é de 1932, da mostra e do livro de Hitchcock e Johnson, anteriores a 1938. E a mostra de 2009 **incluiu** os anos de Meyer e de Mies. Note-se ainda que Bergdoll lê o mesmo recorte como fonte de "equívocos" duradouros: os dois autores concordam no fato e divergem no diagnóstico.`,
});

aula.alem({
  perguntas: [
    `A demissão de Meyer ocorreu por "supostas práticas comunistas". **Suposta por quem, e com que evidência?** Como se poderia estabelecer quanto da demissão foi política e quanto foi pessoal ou administrativa?`,
    `Em 1930, Mies despolitizou a escola. As fontes consultadas informam **o que** ele fez, mas não **por quê**. Foi estratégia de sobrevivência? Se foi, falhou em 1932. Que documentos permitiriam testar essa hipótese?`,
    `Se a escola fabricou **poucos** objetos em série e o produto de maior sucesso comercial foi um papel de parede, em que sentido se pode dizer que a Bauhaus "revolucionou o design industrial"? É legítimo medir uma escola pela tiragem?`,
    `A tecelagem ficou conhecida como a "oficina das mulheres". Segundo a Wikipédia (que cita livro **não consultado**), Georg Muche via a tecelagem como "trabalho de mulheres". Houve **regra formal** ou **costume**? Isso **não foi confirmado**. Que fonte responderia à questão?`,
  ],
  simplificamos: `A aula **simplificou** a escola em quatro orientações. Ficaram de fora: o debate historiográfico sobre o grau de radicalidade da inflexão de 1923; os números de produção (tiragens e receita de licenças não foram confirmados); o papel das mulheres e da tecelagem; e as reavaliações do centenário de 2019, cujas fontes não puderam ser lidas. A leitura por "sucessão de respostas" é uma **hipótese de leitura** da aula, e não um fato: uma frase atribuída a Mies descreve a Bauhaus como "uma ideia".`,
  leituras: [
    `[GROPIUS, Walter. *Programa do Staatliches Bauhaus em Weimar* (1919)](https://germanhistorydocs.org/en/weimar-germany-1918-1933/walter-gropius-program-of-the-state-bauhaus-in-weimar-1919): **fonte primária** que a parte 1 apenas resumiu. Recomenda-se a leitura integral, com a marcação do que permanece válido em 1923, 1928 e 1930.`,
    `[BAUHAUS. *14 years of Bauhaus*](https://www.bauhaus.de/en/discover/article/14-years-of-bauhaus): a cronologia institucional que sustenta as partes 2 a 5.`,
    `[HERBOTH, Eric J. *The Bauhaus at MoMA*. Design Observer, 2009](https://designobserver.com/the-bauhaus-at-moma/): a argumentação sobre o recorte de 1938, resumida na parte 6.`,
    `[BAUHAUS-ARCHIV. *Bauhaus knowledge in a nutshell*](https://www.bauhaus.de/en/discover/article/bauhaus-knowledge-in-a-nutshell): a posição institucional sobre a noção de "estilo".`,
    `[JONES, Peter Lloyd. Resenha de *Bauhaus*, de Wingler. The New York Review of Books, 1970](https://www.nybooks.com/articles/1970/01/01/hausbroken/): **fonte secundária** em que aparece a frase atribuída a Mies, e a leitura sobre Itten.`,
  ],
  desafio: `Leia o **Programa de 1919** (primeira leitura acima) e a página **"Bauhaus knowledge in a nutshell"** (quarta). Redija, no caderno, uma resposta fundamentada à seguinte pergunta: **que proposição do Programa de 1919 foi abandonada primeiro, e em que ano?** Use as quatro perguntas para sustentar a resposta. Em seguida, confronte-a com a cronologia de *14 years of Bauhaus*: algum fato obriga a rever a hipótese?`,
});

aula.fontes([
  "ARCHITECTURAL RECORD. **Modernism's backstory**. [link](https://architecturalrecord.com/articles/11401-modernisms-backstory). Acesso em: 5 nov. 2026. (Consultado apenas em resumo de busca.) Referência de apoio para: HITCHCOCK, Henry-Russell; JOHNSON, Philip. **The International Style: Architecture since 1922**. Nova York, 1932. (Editora não confirmada.)",
  "BAUHAUS. **14 years of Bauhaus**. [link](https://www.bauhaus.de/en/discover/article/14-years-of-bauhaus). Acesso em: 5 nov. 2026. (Citada no texto como BAUHAUS, s.d.)",
  "BAUHAUS-ARCHIV / MUSEUM FÜR GESTALTUNG. **Bauhaus knowledge in a nutshell: FAQs about the Bauhaus**. [link](https://www.bauhaus.de/en/discover/article/bauhaus-knowledge-in-a-nutshell). Acesso em: 5 nov. 2026.",
  "BAUHAUS KOOPERATION. **Bauhaus Berlin**. [link](https://bauhauskooperation.de/en/knowledge/the-bauhaus/phases/berlin). Acesso em: 5 nov. 2026. (s.d.a)",
  "BAUHAUS KOOPERATION. **Bauhaus Building Dessau**. [link](https://bauhauskooperation.de/en/knowledge/the-bauhaus/works/architecture/bauhaus-building-dessau). Acesso em: 5 nov. 2026. (s.d.b)",
  "BAUHAUS KOOPERATION. **Bauhaus Dessau**. [link](https://bauhauskooperation.de/en/knowledge/the-bauhaus/phases/dessau). Acesso em: 5 nov. 2026. (s.d.c)",
  "BAUHAUS KOOPERATION. **Lyonel Feininger, Cathedral**. [link](https://bauhauskooperation.de/en/knowledge/the-bauhaus/works/graphic-printshop/cathedral). Acesso em: 5 nov. 2026. (s.d.d)",
  "BAUHAUS KOOPERATION. **Tea Infuser (MT 49)**. [link](https://bauhauskooperation.de/en/knowledge/the-bauhaus/works/metal/tea-infuser-mt-49). Acesso em: 5 nov. 2026. (s.d.e)",
  "BAUHAUS KOOPERATION. **Wall painting**. [link](https://bauhauskooperation.de/en/knowledge/the-bauhaus/training/workshops/wall-painting). Acesso em: 5 nov. 2026. (s.d.f; consultado apenas em resumo de busca.)",
  "BERGDOLL, Barry. Memento mori or eternal modernism? The Bauhaus at MoMA, 1938. **Docomomo Journal**, Amsterdã, n. 61, p. 8-17, 2019. [link](https://docomomojournal.com/index.php/journal/article/view/349). Acesso em: 5 nov. 2026. (Consultado apenas o resumo.)",
  "GROPIUS, Walter. **Programm des Staatlichen Bauhauses in Weimar**. Weimar, abr. 1919. Tradução inglesa em: GERMAN HISTORY IN DOCUMENTS AND IMAGES. [link](https://germanhistorydocs.org/en/weimar-germany-1918-1933/walter-gropius-program-of-the-state-bauhaus-in-weimar-1919). Acesso em: 5 nov. 2026. (Tradução creditada a WINGLER, Hans M. **Bauhaus**. Cambridge: MIT Press, 1978, p. 31-33.)",
  "HARVARD ART MUSEUMS. Texto sobre a produção em série de objetos da Bauhaus. [link](https://harvardartmuseums.org/art/147762). Acesso em: 5 nov. 2026. (s.d.; consultado apenas em resumo de busca; o vínculo entre o texto e a URL não foi confirmado.)",
  "HERBOTH, Eric J. The Bauhaus at MoMA. **Design Observer**, 15 nov. 2009. [link](https://designobserver.com/the-bauhaus-at-moma/). Acesso em: 5 nov. 2026.",
  "JONES, Peter Lloyd. Resenha de WINGLER, Hans. **Bauhaus**. The New York Review of Books, 1 jan. 1970. [link](https://www.nybooks.com/articles/1970/01/01/hausbroken/). Acesso em: 5 nov. 2026.",
  "THE METROPOLITAN MUSEUM OF ART. **Kandem Ceiling Light No. 777**. [link](https://www.metmuseum.org/art/collection/search/820382). Acesso em: 5 nov. 2026. (s.d.; a página retornou erro 429; consultado apenas em resumo de busca.)",
  "THONET. **Marcel Breuer and Thonet**. [link](https://www.thonet.de/en/magazine/history-brand/detail/marcel-breuer-and-thonet). Acesso em: 5 nov. 2026. (s.d.; consultado apenas em resumo de busca.)",
  "WIKIMEDIA COMMONS. Fotografias: **Bauhaus Dessau 2018** (Aufbacksalami, CC BY-SA 4.0); **ADGB-Bundesschule Bernau** (xiquinhosilva, CC BY 2.0); **Estande de papéis de parede Bauhaus** (Bauhäusler 100, CC BY-SA 4.0). [link](https://commons.wikimedia.org/wiki/File:2022-09-01_ADGB-Bundesschule_Bernau_11.jpg). Acesso em: 5 nov. 2026.",
  "WIKIPEDIA. **From Bauhaus to Our House**. [link](https://en.wikipedia.org/wiki/From_Bauhaus_to_Our_House). Acesso em: 5 nov. 2026. (s.d.; apoio; resenhas não lidas.) Referente a: WOLFE, Tom. **From Bauhaus to Our House**. Nova York: Farrar, Straus & Giroux, 1981. 143 p.",
  "ZKM. **Art, Crafts, Technology**. [link](https://zkm.de/en/node/4174). Acesso em: 5 nov. 2026. (s.d.; consultado apenas em resumo de busca.)",
]);

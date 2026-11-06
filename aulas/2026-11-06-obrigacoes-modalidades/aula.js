aula.inicio({
  tema: "Obrigações: conceito, elementos, fontes e modalidades",
  modo: "direito",
  nivel: "intermediário",
  data: "2026-11-06",
  objetivo: "Compreender, com base exclusivamente no Caderno de Estudos de Direito das Obrigações, o que é uma obrigação, de que elementos se compõe, de onde nasce e como se classifica: dar, fazer e não fazer; obrigações simples e complexas (cumulativas, alternativas, facultativas); divisíveis, indivisíveis e solidárias; de meio, de resultado e de garantia; e as obrigações condicionais, modais e a termo.",
});

aula.plano([
  "Fonte única, mapa dos tópicos e como ler esta aula",
  "1. Conceito",
  "2. Elementos",
  "3. Fontes",
  "4. Modalidades: o panorama",
  "5. Obrigações de dar",
  "6. Obrigações de fazer e de não fazer",
  "7. Obrigações simples e complexas: cumulativas, alternativas e facultativas",
  "8. Divisíveis, indivisíveis e solidárias",
  "9. Obrigações de meio, de resultado e de garantia",
  "10. Obrigações condicionais, modais e a termo",
  "Fechamento, testes e Para ir além",
]);

// ================================================================ INTRODUÇÃO
aula.secao("Fonte única, mapa dos tópicos e como ler esta aula");

aula.texto(`Esta aula organiza e explica os tópicos anotados no quadro: **conceito, elementos, fontes e modalidades** das obrigações, com as modalidades desdobradas em dar, fazer, não fazer, simples e complexas, cumulativas, alternativas, solidárias, facultativas, divisíveis, indivisíveis, de meio, de resultado e de garantia, além das obrigações condicionais, modais e a termo. A regra de trabalho é restritiva: **todo o conteúdo vem do Caderno de Estudos *Direito das Obrigações* (5º semestre), e de nenhuma outra fonte**. Nenhum artigo de lei, autor ou julgado foi acrescentado de fora; quando o Caderno menciona um artigo ou um autor, a aula apenas relata que o Caderno o menciona (DIREITO, s.d.).`);

aula.nota(`**Como as fontes são indicadas.** A citação é feita pelo formato autor-data da ABNT, usando o título do Caderno como entrada, porque o arquivo não informa autor nem ano: (DIREITO, s.d., p. X), em que X é a página do PDF. Assim é possível conferir cada afirmação na fonte. Quando o Caderno atribui uma ideia a um jurista (por exemplo, Alois von Brinz ou Caio Mário), a aula reproduz a atribuição **sem ter lido o jurista**; isso deve ser considerado ao citar em trabalho (a citação correta, nesses casos, é a "citação de citação", *apud*, e é conveniente consultar a obra original, se o professor exigir).`);

aula.nota(`**Dois avisos sobre o escopo.** (1) A folha de rosto do Caderno informa que o conteúdo da **primeira avaliação corresponde aos capítulos I a XI** (DIREITO, s.d., p. 1). Os tópicos do quadro vão além: incluem fazer e não fazer, simples e complexas, solidariedade, meio/resultado/garantia e elementos acidentais, que estão nos capítulos XII a XVII. Convém confirmar com o professor o que cai em cada avaliação. (2) O Caderno **não traz uma definição formal de "obrigação"** em uma frase; o tópico "Conceito" foi construído a partir do que ele diz sobre objeto, elementos e direito pessoal, e isso é indicado na própria seção.`);

aula.termos([
  { termo: "Prestação", definicao: "a conduta devida pelo devedor: dar, fazer ou não fazer. Segundo o Caderno, é o objeto da obrigação (p. 3)." },
  { termo: "Sujeito ativo e sujeito passivo", definicao: "credor (titular do direito de exigir) e devedor (de quem se exige a conduta)." },
  { termo: "Modalidade", definicao: "espécie em que a obrigação se enquadra. Enquadrar a obrigação na categoria adequada serve para encontrar os preceitos aplicáveis a ela (p. 11)." },
  { termo: "Elemento acidental", definicao: "cláusula facultativa (condição, termo, encargo) que, se colocada na obrigação, passa a reger a sua eficácia (p. 26)." },
]);

aula.diagrama({
  titulo: "Mapa dos tópicos do quadro dentro do Caderno",
  mermaid: `graph TD
  O["Obrigação"] --> C["1. Conceito"]
  O --> E["2. Elementos"]
  O --> F["3. Fontes"]
  O --> M["4. Modalidades"]
  M --> OBJ["Quanto ao objeto"]
  M --> ELE["Quanto aos elementos"]
  M --> FIM["Quanto ao fim"]
  M --> ACI["Quanto aos elementos acidentais"]
  OBJ --> D["Dar"]
  OBJ --> FZ["Fazer"]
  OBJ --> NF["Não fazer"]
  ELE --> SC["Simples e complexas"]
  SC --> OB["Pluralidade de objetos: cumulativas, alternativas, facultativas"]
  SC --> SU["Pluralidade de sujeitos: divisíveis, indivisíveis, solidárias"]
  FIM --> MRG["Meio, resultado, garantia"]
  ACI --> CMT["Condicionais, modais, a termo"]`,
  legenda: "Organização dos tópicos do quadro segundo a classificação do Caderno (p. 11–13).",
  texto: `O quadro lista tópicos de **níveis diferentes**: *conceito, elementos* e *fontes* tratam da obrigação em geral; *modalidades* é o grupo de classificações. Dentro das modalidades, cada tópico responde a um critério distinto (objeto, elementos, fim, elementos acidentais). Olhar o mapa antes evita um erro comum: tratar "cumulativas" e "meio" como se fossem da mesma lista, quando respondem a perguntas diferentes sobre a mesma obrigação.`,
});

// ================================================================ 1. CONCEITO
aula.secao("1. Conceito");

aula.texto(`**Problema da seção.** O que se entende por obrigação, se o Caderno não oferece uma definição de uma frase? A resposta pode ser reconstruída a partir de três passagens que, juntas, delimitam a noção: a que trata do objeto, a que trata do vínculo e a que trata do direito pessoal. É essa reconstrução, e não uma definição pronta, que a seção apresenta; por isso ela deve ser lida como **síntese da aula** a partir da fonte, e não como citação literal de uma definição.`);

aula.texto(`A primeira passagem fixa o que a obrigação *não* é. O Caderno afirma que o erro mais comum no início da matéria é imaginar que o objeto da obrigação seja a coisa. Não é: o objeto da obrigação é a **prestação**, isto é, a conduta devida pelo devedor, seja ela de dar, de fazer ou de não fazer (DIREITO, s.d., p. 3). O bem sobre o qual a conduta recai ocupa posição secundária. Daí a distinção entre **objeto imediato**, que é a conduta, e **objeto mediato**, que é o bem. Quem compra um automóvel não tem, contra o vendedor, uma obrigação que "é o carro", mas uma obrigação cujo conteúdo é o comportamento de entregá-lo. O carro é apenas aquilo sobre o que a conduta incide. A consequência prática, também registrada no Caderno, é que os requisitos do art. 104, II (licitude, possibilidade e determinabilidade) são aferidos quanto à prestação, nunca quanto ao objeto material (p. 3).`);

aula.texto(`A segunda passagem explica o que prende as pessoas à prestação. O Caderno chama de **elemento imaterial** (também dito virtual, espiritual ou ideal) o **vínculo jurídico** que une os sujeitos: é aquilo que converte um dever moral em dever exigível. É o elemento menos palpável e, ao mesmo tempo, o mais decisivo, porque, segundo o texto, "sem ele há dever, mas não há obrigação" (DIREITO, s.d., p. 4). A ideia é que a obrigação não se esgota em alguém "dever algo" no plano moral ou de fato: exige-se um laço reconhecido pelo Direito, capaz de autorizar o credor a cobrar. Essa mesma ideia reaparece na obrigação natural, em que há dever sem exigibilidade judicial (p. 28), o que mostra, por contraste, o que o vínculo jurídico acrescenta.`);

aula.texto(`A terceira passagem situa a obrigação entre os direitos. Ao comparar direitos reais e pessoais, o Caderno define o **direito pessoal** como o vínculo pelo qual o sujeito ativo pode exigir do sujeito passivo determinada prestação, uma relação de pessoa a pessoa, cujos elementos são o sujeito ativo, o sujeito passivo e a prestação (DIREITO, s.d., p. 6). O contraste é elucidativo: no direito real não há ninguém entre a pessoa e a coisa, ao passo que no direito pessoal "há sempre alguém no meio", o devedor, e é essa figura intermediária que muda tudo. O credor, por isso, não tem poder sobre a coisa: tem direito *contra* o devedor, exigindo dele um comportamento (p. 3). Só com a tradição nasce o direito real sobre o bem (p. 3).`);

aula.destaque(`**Em síntese (construção da aula, a partir do Caderno).** A obrigação é uma relação jurídica de pessoa a pessoa, em que um sujeito ativo (credor) pode exigir de um sujeito passivo (devedor) uma **prestação**, isto é, uma conduta de dar, fazer ou não fazer. O que sustenta a relação é o **vínculo jurídico**, que a distingue de um mero dever moral. O objeto é a conduta, e não a coisa.`);

aula.nota(`**Nota sobre a fonte.** A frase de síntese acima é da aula, não do Caderno. Para um trabalho, vale conferir se o professor ou o livro-texto adotado traz uma definição própria e citá-la; essa definição **não foi fornecida** no material e, portanto, não foi inventada aqui.`);

aula.explique({
  titulo: "Explique o conceito sem olhar o texto",
  pergunta: `Explique com suas palavras por que, na compra de um automóvel, o objeto da obrigação do vendedor não é "o carro", e o que o vínculo jurídico acrescenta a um simples dever moral.`,
  resposta: `O objeto da obrigação é a prestação, a conduta devida (aqui, entregar o carro, uma conduta de dar). O carro é o objeto mediato, o bem sobre o qual a conduta recai; a conduta é o objeto imediato. O comprador, portanto, tem um direito pessoal contra o vendedor, e não um poder direto sobre a coisa, que só virá com a tradição. O vínculo jurídico é o elemento que transforma o dever em algo exigível pelo credor; sem ele há dever, mas não há obrigação.`,
  criterios: [
    "Distingue objeto imediato (conduta) de objeto mediato (bem)",
    "Diz que o comprador tem direito contra o devedor, não sobre a coisa",
    "Associa o vínculo jurídico à exigibilidade (dever moral × dever exigível)",
  ],
});

// ================================================================ 2. ELEMENTOS
aula.secao("2. Elementos");

aula.texto(`**Problema da seção.** Em que partes se decompõe uma relação obrigacional e por que o Caderno insiste em que dois desses "elementos" têm nomes diferentes mas são a mesma coisa? Segundo o Caderno, toda relação obrigacional se decompõe em **três elementos**; convém registrar de saída que o **elemento objetivo e o elemento material são o mesmo**, tratando-se apenas de dupla nomenclatura para a prestação (DIREITO, s.d., p. 4). Os três são o subjetivo, o objetivo (ou material) e o imaterial.`);

aula.texto(`O **elemento subjetivo** são os sujeitos da relação: o **sujeito ativo** (credor, titular do direito de exigir) e o **sujeito passivo** (devedor, de quem se exige a conduta). Esses sujeitos precisam ser **determinados ou, ao menos, determináveis**. O Caderno dá o exemplo do título ao portador: o credor só se define no momento da apresentação, e nem por isso a obrigação deixa de existir antes disso (DIREITO, s.d., p. 4). Isso importa porque evita a conclusão apressada de que, sem um nome conhecido desde o início, não haveria obrigação: basta que haja um critério pelo qual o sujeito possa ser identificado.`);

aula.texto(`O **elemento objetivo ou material** é a prestação, já tratada no conceito. Dentro dele vale a distinção entre objeto imediato e mediato, e é nele que se aferem os requisitos de validade: licitude, possibilidade física e jurídica, determinabilidade e, "para boa parte da doutrina", economicidade (DIREITO, s.d., p. 4). Já o **elemento imaterial**, o vínculo jurídico, é o que prende os sujeitos e converte dever moral em dever exigível; é o menos palpável e o mais decisivo (p. 4).`);

aula.texto(`O Caderno vai além e mostra que o elemento imaterial **se decompõe em dois momentos**, segundo a **teoria dualista da obrigação**, construção atribuída a Alois von Brinz, no século XIX (DIREITO, s.d., p. 4). O primeiro momento é o ***Schuld***, o **débito**: o dever de prestar, o vínculo pessoal que impõe ao devedor a conduta devida. Nele espera-se o cumprimento espontâneo, "o devedor deve, e paga", e a obrigação vive sua fase normal, sem coerção. O segundo é o ***Haftung***, a **responsabilidade**: surge com o inadimplemento e consiste na sujeição do patrimônio do devedor à satisfação do credor, ou seja, a garantia. Traduz o art. 391, segundo o qual pelo inadimplemento respondem os bens do devedor: **não se coage a pessoa, coage-se o patrimônio** (p. 4–5).`);

aula.texto(`A utilidade da distinção aparece quando os dois momentos se separam. Há **Schuld sem Haftung** na **obrigação natural**: na dívida de jogo (art. 814, segundo o Caderno) existe o dever, e o pagamento espontâneo é válido e irrepetível, mas o credor não pode executar o patrimônio do devedor; o mesmo vale para a dívida prescrita (p. 5). Há **Haftung sem Schuld** no caso do fiador: ele não deve prestação própria, não é o devedor, e ainda assim seu patrimônio responde por dívida alheia (art. 818); igual raciocínio vale para o terceiro que oferece bem em hipoteca por dívida de outrem (p. 5). À teoria dualista contrapõe-se a **monista**, que vê a obrigação como vínculo único e indivisível; prevalece hoje, segundo o Caderno, o entendimento intermediário: *Schuld* e *Haftung* são dois momentos de uma mesma relação, e não duas relações autônomas (p. 5).`);

aula.destaque(`**Em síntese.** Os elementos são três: **subjetivo** (credor e devedor, determinados ou determináveis), **objetivo/material** (a prestação, com seus requisitos de validade) e **imaterial** (o vínculo jurídico). O imaterial desdobra-se em **débito (*Schuld*)** e **responsabilidade (*Haftung*)**, que podem aparecer separados: obrigação natural (débito sem responsabilidade) e fiança (responsabilidade sem débito).`);

aula.explique({
  titulo: "Débito e responsabilidade",
  pergunta: `Explique a diferença entre *Schuld* e *Haftung* e dê um exemplo de cada hipótese em que um aparece sem o outro.`,
  resposta: `*Schuld* é o débito: o dever de prestar, que se espera cumprido espontaneamente. *Haftung* é a responsabilidade: a sujeição do patrimônio do devedor ao credor quando há inadimplemento. Schuld sem Haftung: obrigação natural, como a dívida de jogo ou a dívida prescrita; o pagamento espontâneo vale, mas o credor não pode executar o patrimônio. Haftung sem Schuld: o fiador, que não é devedor, mas responde com seu patrimônio por dívida de outro (também o terceiro que dá bem em hipoteca).`,
  criterios: [
    "Define Schuld como dever de prestar e Haftung como sujeição do patrimônio",
    "Dá exemplo de Schuld sem Haftung (obrigação natural)",
    "Dá exemplo de Haftung sem Schuld (fiador ou hipoteca de terceiro)",
    "Diz que se coage o patrimônio, não a pessoa",
  ],
});

// ================================================================ 3. FONTES
aula.secao("3. Fontes");

aula.texto(`**Problema da seção.** O que faz nascer o vínculo obrigacional? O Caderno define **fonte** como o **fato jurídico que dá origem ao vínculo obrigacional** e apresenta duas classificações dominantes (DIREITO, s.d., p. 5). A razão de estudá-las em sequência é que a primeira, mais antiga, ajuda a compreender por que a segunda foi montada como foi.`);

aula.texto(`A **classificação clássica**, de origem romana, é atribuída a Gaio e foi consolidada em Justiniano: **contrato, quase-contrato, delito e quase-delito**. O Caderno a considera **superada**, mas diz que ainda aparece em questões de fundo histórico (DIREITO, s.d., p. 5). Na **classificação contemporânea**, as fontes são três: a lei, o negócio jurídico (ou declaração de vontade) e o ato ilícito (p. 5–6).`);

aula.texto(`A **lei** é descrita como a **fonte imediata** e, "em sentido próprio, única": toda obrigação, em última análise, deriva da lei, porque é ela que atribui eficácia obrigacional aos demais fatos. Algumas obrigações nascem diretamente dela, sem qualquer conduta voluntária: o dever de alimentos (art. 1.694), a obrigação tributária e as obrigações *propter rem* (DIREITO, s.d., p. 5). O **negócio jurídico ou declaração de vontade** abrange os contratos, bilaterais por definição, e as declarações unilaterais de vontade: promessa de recompensa (art. 854), gestão de negócios (art. 861), pagamento indevido (art. 876), enriquecimento sem causa (art. 884) e títulos de crédito (art. 887) (p. 5). O **ato ilícito** (arts. 186, 187 e 927) gera a obrigação de indenizar e compreende também o abuso de direito e as hipóteses de responsabilidade objetiva pelo risco da atividade (art. 927, parágrafo único) (p. 6).`);

aula.texto(`Há, no Caderno, uma **divergência doutrinária** a ser guardada, porque altera a resposta esperada em prova discursiva: boa parte da doutrina, citando-se Caio Mário e Tartuce, reduz tudo a **lei e vontade humana**, sustentando a lei como fonte única mediata; Pontes de Miranda trabalha com a noção mais ampla de **fato jurídico *lato sensu*** como origem de toda obrigação (DIREITO, s.d., p. 6). O texto recomenda identificar a linha adotada em sala (p. 6).`);

aula.destaque(`**Em síntese.** Fonte é o fato jurídico que origina o vínculo. A classificação clássica (contrato, quase-contrato, delito, quase-delito) está superada; a contemporânea fala em **lei, negócio jurídico/declaração de vontade e ato ilícito**. Há divergência entre reduzir tudo à lei e à vontade humana (Caio Mário e Tartuce, segundo o Caderno) e partir do fato jurídico *lato sensu* (Pontes de Miranda).`);

aula.explique({
  titulo: "Por que a lei é fonte única e, ao mesmo tempo, uma entre três?",
  pergunta: `A classificação contemporânea lista lei, negócio jurídico e ato ilícito, mas o Caderno diz que a lei é fonte "única, em sentido próprio". Explique como essas duas afirmações convivem.`,
  resposta: `A lei é a fonte imediata e, em última análise, a única, porque é ela que atribui eficácia obrigacional aos demais fatos: o contrato e o ato ilícito geram obrigação porque a lei assim determina. Na classificação contemporânea, a lista aparece em três porque distingue as **formas de origem**: obrigações nascidas diretamente da lei (alimentos, tributo, *propter rem*), da declaração de vontade (contratos e declarações unilaterais) e do ato ilícito (dever de indenizar). Por isso Caio Mário e Tartuce, segundo o Caderno, reduzem tudo a lei e vontade humana, enquanto Pontes de Miranda parte do fato jurídico lato sensu.`,
  criterios: [
    "Diz que a lei é quem dá eficácia obrigacional aos demais fatos",
    "Cita as obrigações que nascem diretamente da lei",
    "Reconhece que a lista de três distingue as formas de origem",
  ],
});

// ================================================================ 4. MODALIDADES
aula.secao("4. Modalidades: o panorama");

aula.texto(`**Problema da seção.** Para que serve classificar as obrigações? O Caderno responde que a classificação "não é exercício de erudição": serve para **enquadrar cada obrigação na categoria adequada** e, com isso, encontrar os preceitos que lhe são aplicáveis (DIREITO, s.d., p. 11). Sem esse enquadramento, o intérprete não sabe qual regime jurídico aplicar. Por isso, cada modalidade estudada a seguir deve ser lida com a pergunta: *que consequência jurídica muda se a obrigação for desta espécie?*`);

aula.texto(`Desde o direito romano, a distinção básica é feita **quanto ao objeto**, dividindo as obrigações em **dar, fazer e não fazer**; é classificação objetiva, porque considera a qualidade da prestação, que é o objeto imediato (DIREITO, s.d., p. 11–12). As de dar e de fazer são **positivas**, pois exigem uma conduta; a de não fazer é **negativa**, pois exige abstenção (p. 12). O Caderno adverte, em ponto que "costuma cair", que a obrigação de não fazer **não se confunde com o dever geral de abstenção** próprio dos direitos reais: este é imposto por lei a todas as pessoas, que não devem molestar o titular, e ninguém o assumiu; as obrigações de não fazer, ao contrário, são **contraídas voluntariamente pelo próprio devedor**, diminuindo sua liberdade e sua atividade (p. 12).`);

aula.texto(`Na prática, as modalidades **raramente aparecem isoladas**. Na compra e venda, o vendedor tem a obrigação de entregar a coisa (dar), mas também responde pela evicção e pelos vícios redibitórios (fazer) e pode assumir o transporte (outra obrigação de fazer). Na empreitada com fornecimento de material, a obrigação de fazer abrange uma de dar: o empreiteiro constrói (fazer) e fornece o material (dar) (DIREITO, s.d., p. 12). Isso significa que "enquadrar" uma obrigação é, muitas vezes, descobrir **várias** modalidades dentro do mesmo contrato.`);

aula.texto(`O Caderno resume os eixos de classificação em um quadro que serve de roteiro para o restante da aula:`);

aula.texto(`| Critério | Espécies |
|---|---|
| Quanto ao objeto | Dar (coisa certa ou incerta), fazer (fungível ou infungível), não fazer |
| Quanto aos elementos | Simples e compostas ou complexas: multiplicidade de objetos (cumulativas, alternativas, facultativas) ou de sujeitos (divisíveis, indivisíveis, solidárias) |
| Quanto à exigibilidade | Civis e naturais |
| Quanto ao fim | De meio, de resultado e de garantia |
| Quanto ao momento do cumprimento | Instantâneas, de execução diferida e periódicas |
| Quanto aos elementos acidentais | Puras, condicionais, a termo e modais |
| Quanto à liquidez | Líquidas e ilíquidas |`);

aula.nota(`**Fonte do quadro.** Reprodução do quadro de DIREITO (s.d., p. 13). Exigibilidade, momento do cumprimento e liquidez são tratados nos capítulos XVI e XVIII do Caderno e não constam dos tópicos do quadro-branco; por isso aparecem aqui apenas como contexto.`);

aula.destaque(`**Em síntese.** Classificar é enquadrar para aplicar o regime correto. A divisão básica é em dar, fazer e não fazer; essas modalidades se entrelaçam no mesmo contrato; e a obrigação de não fazer (assumida voluntariamente) não é o dever geral de abstenção dos direitos reais.`);

// ================================================================ 5. DAR
aula.secao("5. Obrigações de dar");

aula.texto(`**Problema da seção.** O que significa "dar", em Direito das Obrigações, e por que a compra de um bem não torna o comprador dono dele no momento do contrato? O Caderno define a obrigação de dar como aquela em que o devedor se compromete a **entregar uma coisa**, móvel ou imóvel, ao credor, seja para constituir novo direito, seja para restituir a mesma coisa ao seu titular. Na formulação de Rubens Limongi França, citada no Caderno, é aquela em que o devedor fica obrigado a promover, em benefício do credor, a **tradição da coisa** (DIREITO, s.d., p. 13).`);

aula.texto(`O sentido técnico é amplo: "dar" exprime a transferência não somente da propriedade, mas também da **posse**, de modo que a obrigação de dar consiste tanto em transmitir a propriedade ou outro direito real quanto na simples entrega de uma coisa em posse, em uso ou à guarda (DIREITO, s.d., p. 13). O Caderno distingue três verbos: **dar** (transfere a propriedade; exemplo: compra e venda, título permanente), **entregar** (transfere a posse ou a detenção; exemplo: locação, título provisório) e **restituir** (devolve ao credor a posse ou a detenção da coisa que ele havia entregado ao devedor; exemplo: devolução do bem no comodato ou no depósito). Entregar e restituir resumem-se numa palavra, **tradição**, e a obrigação de dar é sempre de prestação de coisa, podendo ser **determinada** (coisa certa, arts. 233 a 242) ou **indeterminada** (coisa incerta, arts. 243 a 246) (p. 13–14).`);

aula.texto(`Um ponto central é a **natureza obrigacional, e não real**, da obrigação de dar coisa certa: ela confere ao credor **simples direito pessoal**. O contrato de compra e venda é meramente obrigacional: o vendedor apenas *se obriga* a transferir o domínio e o comprador a pagar o preço. A transferência do domínio depende de **outro ato**: a tradição, para os móveis (arts. 1.226 e 1.267), e o registro, que é uma tradição solene, para os imóveis (arts. 1.227 e 1.245). Enquanto o contrato que institui uma hipoteca ou servidão, ou que contém promessa de transferência de domínio de imóvel, não estiver registrado no Cartório de Registro de Imóveis, existirá entre as partes apenas vínculo obrigacional; o direito real, com todas as suas características, só surge **depois do registro** (DIREITO, s.d., p. 14). O Caderno acrescenta que o Código brasileiro se filiou, nesse ponto, aos **sistemas romano e alemão** (o contrato obriga, mas não transfere), em contraste com o **sistema francês**, que atribui caráter real ao contrato (p. 14).`);

aula.texto(`A tradição pressupõe um acordo de vontades, um negócio jurídico de alienação, a título gratuito (como a doação) ou oneroso (como a compra e venda), e pode ser de três formas: **real** (entrega efetiva e material da coisa), **simbólica** (representada por ato que traduz a alienação, como a entrega das chaves do veículo vendido) e **ficta**, no caso do constituto possessório (cláusula *constituti*), em que, por exemplo, o vendedor transfere a outro o domínio da coisa, mas a conserva em seu poder, agora como locatário: nada se desloca fisicamente, a posse muda de título (DIREITO, s.d., p. 14).`);

aula.secao("5.1 Dar coisa certa");

aula.texto(`**Coisa certa** é a coisa **individualizada**, que se distingue das demais por características próprias (móvel ou imóvel): o automóvel identificado pelo número do chassi, do motor e da placa; o quadro de determinado pintor; o imóvel de determinada rua e número (DIREITO, s.d., p. 15). O devedor se compromete a entregar ou restituir um objeto perfeitamente determinado, considerado em sua individualidade. Segundo o art. 233, a obrigação de dar coisa certa **abrange os acessórios dela**, embora não mencionados, salvo se o contrário resultar do título ou das circunstâncias; é decorrência do princípio de que **o acessório segue o destino do principal**. Principal é o bem que tem existência própria; acessório é aquele cuja existência depende do principal. Vendido o carro, vão junto o estepe e as ferramentas, ainda que o contrato silencie (p. 15).`);

aula.texto(`Valem ainda duas regras sobre o modo de cumprir: o art. 313 diz que o credor **não é obrigado a receber prestação diversa** da que lhe é devida, ainda que mais valiosa (a troca é *faculdade* dele, não direito do devedor); e o art. 314 completa que, ainda que a obrigação tenha por objeto prestação divisível, não pode o credor ser obrigado a receber, nem o devedor a pagar, **por partes**, se assim não se ajustou (DIREITO, s.d., p. 15).`);

aula.texto(`O ponto de maior importância é a **teoria dos riscos**, que responde a uma pergunta: quando, antes da entrega ou da restituição, a coisa **pereceu** (perda total) ou se **deteriorou** (perda parcial), *quem suporta o prejuízo?* O princípio que norteia as soluções vem do direito romano: ***res perit domino***, a coisa perece para o dono; sempre que não houver possibilidade de imputar a alguém a responsabilidade pelo descumprimento, isto é, inexistindo culpa, **o proprietário sofre o prejuízo**, e o proprietário, antes da tradição, ainda é o devedor (DIREITO, s.d., p. 15–16). Daí as quatro hipóteses do Caderno:`);

aula.texto(`| Hipótese | Culpa do devedor | Solução |
|---|---|---|
| Perecimento | Sem culpa | Resolve-se a obrigação para ambas as partes, sem indenização; o proprietário suporta o prejuízo (art. 234, 1ª parte). Se o preço já foi pago, devolve-se, sem perdas e danos |
| Perecimento | Com culpa | Equivalente em dinheiro **mais** perdas e danos (art. 234, 2ª parte) |
| Deterioração | Sem culpa | O credor escolhe: resolver a obrigação **ou** aceitar a coisa com abatimento proporcional do preço (art. 235) |
| Deterioração | Com culpa | O credor escolhe: exigir o equivalente **ou** aceitar a coisa no estado em que está, e em **qualquer caso** tem direito a perdas e danos comprovados (art. 236) |`);

aula.nota(`**Fonte do quadro.** DIREITO (s.d., p. 16–17). Na primeira linha, o Caderno acrescenta que, se o perecimento ocorre *pendente condição suspensiva* (aprovação em concurso, casamento, vitória em disputa), não se terá adquirido o direito visado e o devedor suportará o risco da coisa (p. 16).`);

aula.destaque(`**Como memorizar (Caderno, p. 17).** A culpa não muda *quais* são as saídas; muda apenas se **entram ou não as perdas e danos**. Sem culpa, ninguém indeniza ninguém: o dono absorve. Com culpa, acrescentam-se perdas e danos em todas as hipóteses. E a deterioração, por ser perda parcial, sempre abre ao credor uma escolha que o perecimento não permite.`);

aula.secao("5.2 Dar coisa incerta");

aula.texto(`Na obrigação de **coisa incerta**, o objeto é **indeterminado, mas determinável**: segundo o art. 243, a coisa incerta será indicada ao menos pelo **gênero e pela quantidade**, e falta determinar apenas a **qualidade** (DIREITO, s.d., p. 17). Se faltar gênero ou quantidade, a indeterminação é absoluta e a avença **não gera obrigação**. O Caderno propõe o teste dos três exemplos: "entregar sacas de café" não vale (falta a quantidade); "entregar dez sacas" não vale (falta o gênero); "entregar dez sacas de café" vale, pois há gênero e quantidade, e falta só a qualidade (p. 17).`);

aula.texto(`A característica principal é que o objeto, indicado genericamente no começo da relação, vem a ser determinado **por um ato de escolha**, no instante do pagamento, ato unilateral chamado **concentração**. Feita a escolha e cientificado o credor, acaba a incerteza e a coisa torna-se certa, passando a valer as normas da seção anterior (art. 245). Há um detalhe cobrado: **não basta escolher**; a escolha precisa se exteriorizar (pela entrega, pelo depósito em pagamento, pela constituição em mora ou por outro ato jurídico que importe a cientificação do credor) (DIREITO, s.d., p. 17–18). A escolha cabe, em regra, ao **devedor** (art. 244), que, porém, não pode dar a coisa pior nem é obrigado a prestar a melhor; adotou-se o **critério da qualidade média ou intermediária**. A escolha só competirá ao credor se o contrato assim dispuser; sendo omisso, é do devedor (p. 18). O Caderno traz três situações particulares: se só existem duas qualidades, o devedor pode entregar qualquer delas, até a pior; as partes podem convencionar escolha por terceiro (aplicando-se por analogia o art. 1.930); e, se a escolha couber ao credor, será citado para esse fim, sob pena de perder o direito, que passará ao devedor (art. 342) (p. 18).`);

aula.texto(`Quanto aos **riscos**, o art. 246 estabelece que, antes da escolha, **não poderá o devedor alegar perda ou deterioração da coisa, ainda que por força maior ou caso fortuito**. A razão, diz o Caderno, é que **o gênero nunca perece**: *genus nunquam perit* (DIREITO, s.d., p. 18). Quem se obrigou a entregar dez sacas de café não se exime ainda que se percam todas as que possui, porque pode obter o café no mercado; entram nessa categoria também as obrigações em dinheiro. A **exceção é o gênero limitado**, circunscrito a coisas em determinado lugar (animais de determinada fazenda, cereais de determinado depósito): nele, o perecimento de todas as espécies extingue a obrigação (p. 19).`);

aula.secao("5.3 Obrigações pecuniárias");

aula.texto(`A **obrigação pecuniária** é a de entregar dinheiro, ou seja, de solver dívida em dinheiro. É **espécie particular de obrigação de dar**, com uma peculiaridade: tem por objeto uma prestação em dinheiro, e não uma coisa (DIREITO, s.d., p. 19). O art. 315 consagra o **princípio do nominalismo**: as dívidas em dinheiro serão pagas no vencimento, em moeda corrente e **pelo valor nominal**, salvo o disposto nos artigos subsequentes que preveem correção monetária. A consequência é que o devedor se libera entregando a quantidade de moeda mencionada, **ainda que desvalorizada pela inflação**. Uma forma de combater essa desvalorização é a **cláusula de escala móvel**, em que o valor da prestação varia segundo índices de custo de vida (p. 19).`);

aula.texto(`O Caderno distingue ainda: a **escala móvel** decorre de prévia estipulação contratual ou da lei, é automática; a **teoria da imprevisão** depende de atuação do juiz e só se aplica quando fatos extraordinários e imprevisíveis tornam excessivamente oneroso o cumprimento do contrato, recomendando sua revisão (DIREITO, s.d., p. 20). Na **dívida em dinheiro**, o objeto é o próprio dinheiro (mútuo); na **dívida de valor**, o dinheiro apenas *representa* o valor (indenização por ato ilícito, por desapropriação, e obrigação alimentar). Registra também **curso legal** (toda moeda admitida pela lei como meio de pagamento, que não pode ser recusada) e **curso forçado** (a única admitida), as regras dos arts. 326 e 325 sobre medida/peso e despesas de pagamento e quitação, e os **juros**, dívidas remuneratórias de natureza **acessória** (p. 20).`);

aula.explique({
  titulo: "Riscos na coisa certa e na coisa incerta",
  pergunta: `Um incêndio acidental, sem culpa de ninguém, destrói o carro que João vendeu a Pedro, antes da entrega; em outra situação, destrói as dez sacas de café que Maria separou para entregar a Lúcia, mas ela ainda não havia feito a escolha formal. Explique por que o resultado é diferente nos dois casos.`,
  resposta: `No primeiro caso, a coisa é certa: perdendo-se sem culpa antes da tradição, resolve-se a obrigação para ambas as partes (art. 234, 1ª parte); o proprietário suporta o prejuízo, e João devolve o preço, se recebido, sem perdas e danos. No segundo, a coisa é incerta (gênero e quantidade), e antes da escolha (concentração) o devedor não pode alegar perda ou deterioração, nem por caso fortuito ou força maior (art. 246), porque o gênero não perece. Maria continua obrigada a entregar dez sacas de café, obtendo-as em outro lugar. A exceção seria o gênero limitado (por exemplo, o café de determinado depósito): se todas as sacas desse conjunto perecessem, a obrigação se extinguiria.`,
  criterios: [
    "Identifica coisa certa × coisa incerta",
    "Aplica res perit domino e o art. 234, 1ª parte, no primeiro caso",
    "Aplica genus nunquam perit e o art. 246 no segundo caso",
    "Menciona a exceção do gênero limitado",
  ],
});

aula.destaque(`**Em síntese.** Dar é promover a tradição de uma coisa (dar, entregar, restituir), e o contrato só obriga: a transferência do domínio exige tradição (móveis) ou registro (imóveis). Na coisa certa vale *res perit domino* e a tabela de quatro hipóteses; na incerta, o gênero não perece antes da concentração (salvo gênero limitado); e a obrigação pecuniária é regida pelo nominalismo (art. 315).`);

// ================================================================ 6. FAZER E NÃO FAZER
aula.secao("6. Obrigações de fazer e de não fazer");

aula.texto(`**Problema da seção.** Como se cumpre, ou se executa, uma conduta que não consiste em entregar coisa? A **obrigação de fazer** (arts. 247 a 249) é uma conduta positiva de prestar um fato. Será **fungível** quando impessoal, podendo ser executada por terceiro à custa do devedor; e **infungível** ou personalíssima (*intuitu personae*) quando só o devedor puder cumpri-la. Nesta última, a recusa **converte a obrigação em perdas e danos**, porque "ninguém é fisicamente coagido a fazer" (DIREITO, s.d., p. 21).`);

aula.texto(`A **obrigação de não fazer** (arts. 250 e 251) é conduta negativa, de abstenção: não construir acima de certa altura, não divulgar informação sigilosa, não concorrer em determinado ramo. O inadimplemento configura-se pela **simples prática do ato**, e o credor pode exigir o **desfazimento** à custa do devedor (DIREITO, s.d., p. 21). Retoma-se a advertência do panorama: essa obrigação não se confunde com o dever geral de abstenção próprio dos direitos reais; aqui, foi o devedor quem **voluntariamente restringiu a própria liberdade** (p. 21). Como exemplo, o Caderno cita a cláusula de não concorrência, na qual o objeto é pura abstenção; se o objeto da obrigação fosse o bem, as obrigações de não fazer simplesmente não teriam objeto (p. 3).`);

aula.destaque(`**Em síntese.** Fazer é conduta positiva (fungível: terceiro pode executar; infungível: só o devedor, e a recusa vira perdas e danos). Não fazer é abstenção assumida voluntariamente; descumpre-se pela mera prática do ato, cabendo o desfazimento à custa do devedor.`);

aula.explique({
  titulo: "Fungível ou infungível?",
  pergunta: `Um pintor célebre é contratado para pintar um retrato, e outra pessoa é contratada para pintar uma parede de casa. Classifique as duas obrigações de fazer e explique o que muda se cada devedor se recusar a cumprir.`,
  resposta: `A pintura do retrato pelo pintor célebre é infungível (personalíssima, *intuitu personae*): só ele pode cumpri-la; recusando-se, a obrigação se converte em perdas e danos, pois ninguém é fisicamente coagido a fazer. A pintura da parede é, em regra, fungível (impessoal): terceiro pode executá-la à custa do devedor.`,
  criterios: [
    "Associa infungível a obrigação personalíssima (intuitu personae)",
    "Diz que a recusa na infungível vira perdas e danos",
    "Diz que na fungível terceiro executa à custa do devedor",
  ],
});

// ================================================================ 7. SIMPLES E COMPLEXAS
aula.secao("7. Obrigações simples e complexas: cumulativas, alternativas e facultativas");

aula.texto(`**Problema da seção.** O que muda no regime da obrigação quando há mais de um objeto ou mais de um sujeito? É a classificação **quanto aos elementos**, cujo critério é a **unidade ou a pluralidade** (DIREITO, s.d., p. 21). **Obrigação simples** tem um único sujeito ativo, um único sujeito passivo e uma única prestação ("João deve entregar o carro a Pedro"); todos os elementos aparecem no singular. A **complexa ou composta** tem multiplicidade em algum dos elementos, e divide-se conforme a localização da pluralidade: no objeto ou nos sujeitos (p. 21).`);

aula.texto(`Quando a complexidade está no **objeto**, há três espécies (DIREITO, s.d., p. 21–22):

- **Cumulativa ou conjuntiva:** várias prestações ligadas pela conjunção "e". O devedor cumpre **todas**: entregar o imóvel *e* pagar as benfeitorias. O adimplemento parcial é inadimplemento.
- **Alternativa** (arts. 252 a 256): prestações ligadas por "ou". O devedor se libera cumprindo **apenas uma**; a escolha cabe a ele, salvo estipulação em contrário. Todas as prestações são *devidas*, mas apenas uma será *paga*.
- **Facultativa:** há **uma só** prestação devida, com **faculdade de substituição** por outra. Não possui disciplina própria no Código.`);

aula.texto(`O ponto de prova é a diferença entre alternativa e facultativa. O teste é perguntar **quantas prestações são efetivamente devidas**: duas ou mais na alternativa, apenas uma na facultativa. A consequência prática aparece no perecimento: se a prestação principal perece sem culpa, a obrigação **facultativa se extingue**, ao passo que na alternativa **subsiste a outra**. Na facultativa, a segunda prestação é mera *facultas solutionis* (DIREITO, s.d., p. 22). Quando a complexidade está nos **sujeitos**, trata-se da pluralidade de credores ou devedores, que conduz às obrigações divisíveis e indivisíveis (arts. 257 a 263) e às solidárias (arts. 264 a 285), tratadas na seção seguinte (p. 22).`);

aula.destaque(`**Em síntese.** Simples: um sujeito ativo, um passivo, uma prestação. Complexa: pluralidade de objetos (cumulativa "e", alternativa "ou", facultativa: uma só devida, com substituição) ou de sujeitos (divisíveis, indivisíveis, solidárias). Alternativa × facultativa: conte as prestações devidas; o perecimento mostra a diferença.`);

aula.explique({
  titulo: "Alternativa × facultativa",
  pergunta: `Explique a diferença entre obrigação alternativa e facultativa e mostre, com um exemplo de perecimento sem culpa, por que a diferença tem consequência prática.`,
  resposta: `Na alternativa, duas ou mais prestações são devidas, mas só uma será paga (ligadas por "ou"; a escolha cabe ao devedor, salvo estipulação em contrário). Na facultativa, só uma prestação é devida, com faculdade de substituí-la por outra (a segunda é mera *facultas solutionis*). Se a prestação principal perece sem culpa, na alternativa subsiste a outra prestação; na facultativa, a obrigação se extingue, porque a única devida deixou de existir.`,
  criterios: [
    "Diz quantas prestações são devidas em cada uma",
    "Cita a consequência no perecimento sem culpa",
    "Usa os termos alternativa (ou) e facultativa (faculdade de substituição)",
  ],
});

// ================================================================ 8. DIVISIBILIDADE E SOLIDARIEDADE
aula.secao("8. Divisíveis, indivisíveis e solidárias");

aula.texto(`**Problema da seção.** Quando há vários credores ou vários devedores, cada um responde por quê? São classificações **quanto aos sujeitos**: só produzem efeito diante de pluralidade, porque com um credor e um devedor a questão é irrelevante, já que o art. 314 impede o pagamento parcial (DIREITO, s.d., p. 22).`);

aula.texto(`Na **obrigação divisível** (art. 257), a prestação comporta fracionamento **sem perda de substância ou de valor proporcional**; havendo pluralidade, presume-se dividida **em tantas partes iguais quantos forem os sujeitos**, cada uma constituindo dívida distinta. A divisibilidade é a regra. Exemplo do Caderno: três irmãos herdam dívida de R$ 90 mil; cada um responde por R$ 30 mil, em três dívidas autônomas; cobrado pelo total, qualquer um pode recusar o excedente à sua cota; se um for insolvente, os outros continuam devendo apenas R$ 30 mil cada, e **o prejuízo recai sobre o credor** (DIREITO, s.d., p. 22).`);

aula.texto(`Na **obrigação indivisível** (art. 258), a prestação **não comporta fracionamento**, por natureza, por motivo de ordem econômica ou pela razão determinante do negócio. Cada devedor responde pela dívida **inteira**; quem paga sub-roga-se no direito do credor contra os demais (art. 259, parágrafo único). Havendo vários credores, cada um pode exigir o total, cabendo ao devedor exigir caução de ratificação (art. 260). Exemplo: dois sócios se obrigam a entregar um cavalo de corrida; não há como entregar meio cavalo (metade do animal não vale metade do preço nem serve ao fim do negócio); o credor cobra o cavalo inteiro de qualquer um, e quem entregar cobrará a cota do outro (DIREITO, s.d., p. 22–23).`);

aula.texto(`A **obrigação solidária** (arts. 264 a 285) também permite que cada credor exija, ou cada devedor responda, pela dívida **inteira**, mas **a razão é outra**: não decorre do objeto, e sim do **vínculo**. Por isso o art. 265 é categórico: **a solidariedade não se presume**; resulta da lei ou da vontade das partes. Exemplo de solidariedade convencional: dois amigos assinam contrato de locação com cláusula de solidariedade; o objeto (dinheiro) é perfeitamente divisível, e ainda assim o locador pode exigir o aluguel integral de qualquer um. Exemplos de solidariedade legal: coautores de ato ilícito respondem solidariamente pela indenização (art. 942); sócios respondem solidariamente pela integralização do capital social na sociedade limitada (art. 1.052) (DIREITO, s.d., p. 23).`);

aula.texto(`A distinção decisiva entre indivisibilidade e solidariedade está no quadro do Caderno:

| Critério | Indivisibilidade | Solidariedade |
|---|---|---|
| Origem | Decorre do objeto (natureza da prestação) | Decorre do título: lei ou vontade das partes |
| Presunção | Verifica-se objetivamente na prestação | Nunca se presume (art. 265) |
| Conversão em perdas e danos | Cessa a indivisibilidade (art. 263): cada devedor responde só por sua cota | Subsiste a solidariedade (art. 271): o credor continua cobrando o valor integral de qualquer um |`);

aula.destaque(`**Em síntese (Caderno, p. 23).** Morto o cavalo por culpa dos devedores, na obrigação indivisível cada um passa a dever metade do valor; na solidária, o credor segue podendo exigir tudo de qualquer deles. **A indivisibilidade morre com o objeto; a solidariedade nasce do vínculo e sobrevive a ele.**`);

aula.explique({
  titulo: "Mesmo resultado, causas diferentes",
  pergunta: `Em dois contratos, o credor pode exigir a dívida inteira de qualquer dos devedores. No primeiro, o objeto é um cavalo de corrida; no segundo, é dinheiro, com cláusula de solidariedade. Explique por que a razão é diferente e o que acontece em cada um se o objeto se converter em perdas e danos.`,
  resposta: `No primeiro, o objeto é indivisível por natureza: não se entrega meio cavalo; a indivisibilidade decorre do objeto. No segundo, o dinheiro é divisível; a possibilidade de cobrar o total decorre do vínculo, a solidariedade convencional (que nunca se presume, art. 265). Se o cavalo morrer por culpa dos devedores e a obrigação virar perdas e danos (dinheiro, divisível), cessa a indivisibilidade (art. 263) e cada devedor responde só por sua cota. Na solidária, subsiste a solidariedade (art. 271): o credor continua podendo cobrar o valor integral de qualquer um.`,
  criterios: [
    "Associa indivisibilidade ao objeto e solidariedade ao vínculo",
    "Cita que a solidariedade não se presume (art. 265)",
    "Diz o que acontece com cada uma na conversão em perdas e danos",
  ],
});

// ================================================================ 9. MEIO, RESULTADO, GARANTIA
aula.secao("9. Obrigações de meio, de resultado e de garantia");

aula.texto(`**Problema da seção.** O que, exatamente, o devedor prometeu: esforço, resultado ou segurança? Trata-se de classificação **estritamente doutrinária**, que não figura no Código Civil, desenvolvida por René Demogue e aplicada sobretudo às obrigações de fazer. O critério é **aquilo a que o devedor efetivamente se vinculou** (DIREITO, s.d., p. 24).`);

aula.texto(`Na **obrigação de meio**, o devedor se compromete a empregar toda a diligência, a técnica e o cuidado disponíveis, mas **não garante o resultado**; cumpre quem atuou corretamente, ainda que o fim desejado não sobrevenha. Exemplos do Caderno: o médico que trata um paciente não promete a cura, e sim tratamento adequado; o advogado que patrocina uma causa não promete a vitória, e sim atuação técnica competente; o mesmo vale para o professor particular (DIREITO, s.d., p. 24). Na **obrigação de resultado**, o devedor se obriga ao fim em si mesmo; só há adimplemento com a entrega do resultado prometido, e a diligência empregada torna-se irrelevante se o fim não se produziu. Exemplos: o contrato de transporte, em que o transportador deve levar o passageiro incólume ao destino (art. 730); a empreitada; os exames laboratoriais; a cirurgia estética; e o advogado contratado apenas para elaborar um contrato ou peça determinada (p. 24).`);

aula.texto(`A **obrigação de garantia** é a terceira categoria, acrescentada à classificação de Demogue e defendida no Brasil sobretudo por Álvaro Villaça Azevedo. O devedor se obriga a **eliminar um risco** que pesa sobre o credor; o que se deve não é conduta nem resultado material, mas a própria segurança jurídica. A peculiaridade decisiva: **o adimplemento independe de qualquer atuação do devedor**. A obrigação se considera cumprida pelo simples fato de o devedor estar vinculado, mesmo que o sinistro jamais ocorra. Exemplos: o contrato de seguro (a seguradora presta cobertura desde a celebração; não é o pagamento da indenização que caracteriza o cumprimento, mas a garantia contra o risco), o fiador, a garantia contra evicção (arts. 447 e ss.) e a responsabilidade por vícios redibitórios (arts. 441 e ss.). Como o devedor assumiu o risco, **o caso fortuito e a força maior não o exoneram**, porque foi exatamente contra eles que se obrigou; a responsabilidade é objetiva (DIREITO, s.d., p. 24–25).`);

aula.texto(`O quadro comparativo do Caderno (p. 25):

| Critério | Meio | Resultado | Garantia |
|---|---|---|---|
| O que é devido | Diligência e técnica | O fim prometido | Eliminação do risco |
| Adimplemento | Atuação adequada, ainda que sem êxito | Entrega efetiva do resultado | Assunção do risco, mesmo sem sinistro |
| Ônus da prova | Do credor, que deve demonstrar a negligência | Do devedor, que deve provar excludente | Do devedor, sem valer o fortuito |
| Responsabilidade | Subjetiva, apurada pela culpa | Presumida pelo não atingimento do fim | Objetiva |`);

aula.nota(`**Dois pontos controvertidos, segundo o Caderno (p. 25).** (1) A jurisprudência do STJ trata a **cirurgia estética** como obrigação de **resultado**, com culpa presumida do cirurgião, diferentemente da cirurgia reparadora, que permanece de meio; há, porém, corrente doutrinária relevante (Tartuce, entre outros) que sustenta tratar-se de obrigação de meio com dever reforçado de informação. (2) Parte considerável da doutrina **recusa a terceira espécie**, sustentando que a garantia seria apenas modalidade de obrigação de resultado, o resultado consistindo na manutenção do credor a salvo do risco; Caio Mário e Pontes de Miranda alinham-se a essa posição. Nenhum julgado ou obra foi consultado fora do Caderno.`);

aula.destaque(`**Em síntese.** Meio: deve-se esforço técnico (culpa a provar pelo credor). Resultado: deve-se o fim (culpa presumida; ônus do devedor). Garantia: deve-se a eliminação do risco (responsabilidade objetiva; o fortuito não exonera). A categoria "garantia" é contestada por parte da doutrina.`);

aula.explique({
  titulo: "Classificar pela promessa",
  pergunta: `Classifique como obrigação de meio, de resultado ou de garantia e justifique: (a) o advogado contratado para defender uma causa; (b) o advogado contratado só para redigir um contrato; (c) a seguradora de um automóvel.`,
  resposta: `(a) Meio: o advogado promete atuação técnica competente, não a vitória; o credor deve provar a negligência. (b) Resultado: contratado apenas para elaborar o contrato ou peça determinada, só há adimplemento com a entrega do resultado prometido. (c) Garantia: a seguradora assume o risco; o cumprimento está na cobertura desde a celebração, ainda que o sinistro não ocorra, e o caso fortuito não a exonera.`,
  criterios: [
    "Classifica corretamente os três casos",
    "Justifica pelo que o devedor se vinculou (esforço, fim, risco)",
    "Relaciona a classificação ao ônus da prova ou à responsabilidade",
  ],
});

// ================================================================ 10. CONDICIONAIS, MODAIS, A TERMO
aula.secao("10. Obrigações condicionais, modais e a termo");

aula.texto(`**Problema da seção.** Como uma cláusula acrescentada à obrigação pode alterar o momento ou o modo de produção dos seus efeitos? Nesta classificação, importa-se para a relação obrigacional a teoria dos **elementos acidentais do negócio jurídico** (arts. 121 a 137). São **acidentais** porque **facultativos**: não integram a estrutura da obrigação, mas, uma vez apostos, passam a reger sua eficácia. **Não se presumem** (DIREITO, s.d., p. 26).`);

aula.texto(`Como ponto de partida, a **obrigação pura e simples** não contém nenhum elemento acidental: produz efeitos desde logo, e o cumprimento é exigível de imediato; conforme o art. 331, não havendo prazo estipulado, o credor pode exigir o pagamento imediatamente. É a regra geral (DIREITO, s.d., p. 27). A partir dela, o Caderno trata de três figuras:`);

aula.texto(`**1. Obrigação a termo.** Subordina a eficácia a acontecimento **futuro e certo**, certo porque ocorrerá inevitavelmente, ainda que não se saiba quando. Por isso, a morte de alguém é **termo, e não condição**. O **termo inicial ou suspensivo** (*dies a quo*) suspende o **exercício** do direito, mas não a sua **aquisição** (art. 131): o direito já existe, apenas não é exigível ainda. O **termo final ou resolutivo** (*dies ad quem*) põe fim aos efeitos da relação (DIREITO, s.d., p. 27).`);

aula.texto(`**2. Obrigação condicional.** Subordina a eficácia a evento **futuro e incerto** (art. 121). Sob **condição suspensiva**, não se adquire o direito enquanto o evento não se verificar (art. 125); há mera **expectativa de direito**, embora o titular possa praticar atos destinados a conservá-lo (art. 130). Sob **condição resolutiva**, o direito é adquirido e exercido desde já, **extinguindo-se com o implemento do evento** (art. 127). São ilícitas as condições que sujeitam o negócio ao puro arbítrio de uma das partes, as chamadas **puramente potestativas** (art. 122) (DIREITO, s.d., p. 27).`);

aula.texto(`**3. Obrigação modal ou com encargo.** Impõe ao beneficiário um **ônus**, um dever de conduta, sem contrapartida correspondente; é típica das liberalidades: doação com encargo, legado modal. O ponto central está no art. 136: o **encargo não suspende a aquisição nem o exercício do direito**, salvo quando imposto expressamente como condição suspensiva. O beneficiário recebe desde logo, mas fica obrigado a cumprir, e o descumprimento autoriza a **revogação da liberalidade** (art. 555) (DIREITO, s.d., p. 27).`);

aula.texto(`O quadro comparativo do Caderno (p. 28):

| Elemento | Natureza do evento | Aquisição do direito | Exercício |
|---|---|---|---|
| Pura | Não há evento | Imediata | Imediato |
| Termo inicial | Futuro e certo | Já adquirido (art. 131) | Suspenso |
| Condição suspensiva | Futuro e incerto | Não adquirido (mera expectativa, art. 125) | Suspenso |
| Condição resolutiva | Futuro e incerto | Adquirido; extingue-se com o implemento (art. 127) | Imediato |
| Encargo | Ônus imposto ao beneficiário | Adquirido (art. 136) | Imediato |`);

aula.destaque(`**Os três testes de prova (Caderno, p. 28).** **Termo × condição:** o critério é a certeza do evento; certo é termo, incerto é condição (a morte é evento certo, portanto, termo). **Condição suspensiva × encargo:** a partícula denuncia: "doo *se* você se formar" é condição (nada se adquire antes); "doo *para que* você se forme" é encargo (adquire-se desde já, com dever de cumprir). **Suspensivo × resolutivo:** o suspensivo adia o começo dos efeitos; o resolutivo determina o fim deles.`);

aula.explique({
  titulo: "Aplique os três testes",
  pergunta: `Classifique cada cláusula: (a) "pagarei R$ 10 mil quando você morrer"; (b) "doo este terreno se você se formar"; (c) "doo este terreno para que você construa uma escola"; (d) "você poderá usar o apartamento até que se case". Justifique usando os testes do Caderno.`,
  resposta: `(a) Termo: a morte é evento futuro e certo (mesmo sem saber quando); o direito já existe, mas o exercício fica suspenso (termo inicial). (b) Condição suspensiva: "se" indica evento futuro e incerto; nada se adquire até a formatura (mera expectativa). (c) Encargo: "para que" impõe ônus ao beneficiário; ele recebe desde logo e fica obrigado a cumprir, sob pena de revogação da liberalidade. (d) Condição resolutiva: o direito é adquirido e exercido desde já e se extingue com o casamento, evento futuro e incerto.`,
  criterios: [
    "Usa certeza do evento para separar termo e condição",
    "Usa a partícula (se × para que) para separar condição suspensiva e encargo",
    "Diferencia suspensivo (adia os efeitos) e resolutivo (põe fim)",
  ],
});

// ================================================================ FECHAMENTO
aula.secao("Fechamento, testes e Para ir além");

aula.destaque(`**Ideia que une os tópicos.** Toda obrigação é um vínculo jurídico entre credor e devedor cujo objeto é uma **prestação**. Os tópicos seguintes respondem a perguntas diferentes sobre essa mesma prestação: *o que é devido?* (dar, fazer, não fazer), *quantos objetos e sujeitos há?* (simples e complexas, divisíveis, indivisíveis, solidárias, cumulativas, alternativas, facultativas), *o que o devedor prometeu?* (meio, resultado, garantia) e *quando e em que condições os efeitos se produzem?* (pura, a termo, condicional, modal). Classificar é descobrir qual regime se aplica.`);

aula.quiz({
  pergunta: `Um colega afirma: "Na obrigação de dar coisa incerta, se o devedor separou as dez sacas de café que iria entregar e o armazém pegou fogo por caso fortuito antes de ele comunicar a escolha ao credor, a obrigação se extingue, porque ele perdeu a coisa sem culpa." Qual correção é válida?`,
  opcoes: [
    { texto: "A obrigação não se extingue: antes da escolha cientificada ao credor, o gênero não perece, e o devedor continua obrigado a entregar dez sacas de café.", certa: true },
    { texto: "A obrigação se extingue, mas o devedor deve devolver o preço e pagar perdas e danos, por ter descuidado da guarda." },
    { texto: "A obrigação se extingue para ambas as partes, aplicando-se o art. 234, primeira parte, a qualquer obrigação de dar." },
    { texto: "O devedor pode escolher outra coisa, mas apenas se o credor aceitar, porque a coisa já havia sido individualizada pelo ato de separar." },
  ],
  explicacao: `A escolha só concentra a obrigação quando se **exterioriza** e o credor é cientificado; separar as sacas, sem comunicar, não basta. Antes disso, aplica-se o art. 246: o devedor não pode alegar perda ou deterioração, nem por força maior ou caso fortuito, porque *genus nunquam perit*. A segunda tenta aplicar perdas e danos sem culpa; a terceira confunde coisa incerta com coisa certa (art. 234); a quarta supõe que a separação individualizou a coisa, o que o Caderno nega (não basta escolher).`,
});

aula.quiz({
  pergunta: `Em um contrato, o devedor deve entregar o imóvel **ou** pagar R$ 500 mil; em outro, deve entregar o imóvel, podendo, se preferir, pagar R$ 500 mil no lugar. O imóvel é destruído por raio, sem culpa do devedor, em ambos. Quais afirmações estão corretas?`,
  opcoes: [
    { texto: "No primeiro (alternativa), subsiste a obrigação de pagar R$ 500 mil.", certa: true },
    { texto: "No segundo (facultativa), a obrigação se extingue, porque a única prestação devida pereceu sem culpa.", certa: true },
    { texto: "Nos dois, a obrigação se extingue, pois o imóvel era a prestação principal." },
    { texto: "Nos dois, subsiste a obrigação de pagar R$ 500 mil, porque a outra prestação continua possível." },
  ],
  explicacao: `A diferença está em **quantas prestações são devidas**: na alternativa, duas (o imóvel ou o dinheiro), de modo que o perecimento de uma deixa a outra; na facultativa, uma só (o imóvel), e o dinheiro é mera *facultas solutionis*, que não é devida; perecida a única devida, extingue-se a obrigação. A terceira trata os dois como facultativas; a quarta, como alternativas.`,
  embaralhar: true,
});

aula.quiz({
  pergunta: `Dois amigos assinam contrato de locação como locatários, sem cláusula de solidariedade, e o aluguel é de R$ 4 mil. O locador cobra de um deles os R$ 4 mil integrais. O que o Caderno permite responder?`,
  opcoes: [
    { texto: "O locatário cobrado pode recusar o excedente à sua cota (R$ 2 mil), pois a obrigação, sendo divisível, presume-se dividida em partes iguais e a solidariedade não se presume.", certa: true },
    { texto: "O locador pode cobrar o total de qualquer um, pois o dinheiro é divisível e, por isso, a obrigação é solidária." },
    { texto: "O locador pode cobrar o total de qualquer um, pois a obrigação de pagar aluguel é indivisível por razão econômica." },
    { texto: "O locatário cobrado deve pagar o total e depois, por sub-rogação, cobrar do outro, como em toda obrigação plural." },
  ],
  explicacao: `A prestação em dinheiro é divisível (art. 257), de modo que, havendo dois devedores, a dívida se presume dividida em duas partes iguais; **a solidariedade não se presume** (art. 265) e, aqui, não foi pactuada. A segunda confunde divisibilidade com solidariedade; a terceira atribui indivisibilidade ao dinheiro; a quarta aplica a sub-rogação própria da indivisível/solidária, quando quem paga a dívida inteira se sub-roga. (Contraste com o exemplo do Caderno, em que há cláusula de solidariedade.)`,
});

aula.quiz({
  pergunta: `Uma cláusula diz: "Concedo a você o uso deste apartamento *para que* cuide da minha mãe". O beneficiário nada faz. Qual é a análise mais fiel ao Caderno?`,
  opcoes: [
    { texto: "Trata-se de encargo: o beneficiário adquire e exerce o direito desde logo, mas fica obrigado a cumprir, e o descumprimento autoriza a revogação da liberalidade.", certa: true },
    { texto: "Trata-se de condição suspensiva: sem cuidar da mãe, o direito sequer foi adquirido, restando mera expectativa." },
    { texto: "Trata-se de termo inicial: o direito existe, mas o exercício só começa quando a mãe falecer." },
    { texto: "Trata-se de condição resolutiva: o direito se extingue automaticamente quando o beneficiário deixa de cuidar da mãe." },
  ],
  explicacao: `A partícula "para que" denuncia **encargo** (art. 136): não suspende a aquisição nem o exercício, e o descumprimento autoriza a revogação (art. 555). "Se" indicaria condição suspensiva. A terceira confunde evento certo com ônus; a quarta confunde o encargo com condição resolutiva, que supõe evento futuro e incerto que extingue o direito por si.`,
});

aula.quiz({
  pergunta: `Integre duas partes: um vendedor se obriga a entregar um carro certo, e o carro é destruído por raio, antes da tradição, sem culpa dele. O comprador já havia pago o preço. Qual das descrições abaixo identifica corretamente a modalidade e a consequência?`,
  opcoes: [
    { texto: "Obrigação de dar coisa certa, de natureza meramente obrigacional: resolve-se para ambas as partes, o vendedor devolve o preço e não responde por perdas e danos (res perit domino).", certa: true },
    { texto: "Obrigação de dar coisa incerta: o vendedor deve entregar outro carro, porque o gênero não perece." },
    { texto: "Obrigação de garantia: o vendedor continua obrigado, porque o caso fortuito não o exonera." },
    { texto: "Obrigação de dar coisa certa: o vendedor devolve o preço e paga o equivalente mais perdas e danos, pois o perecimento ocorreu antes da tradição." },
  ],
  explicacao: `O carro individualizado é coisa certa; o perecimento sem culpa antes da tradição resolve a obrigação e devolve-se o preço, sem perdas e danos (art. 234, 1ª parte). O contrato apenas obriga, e o proprietário (ainda o vendedor) suporta o prejuízo. A segunda trata o carro como gênero; a terceira usa a lógica da garantia, em que o devedor assumiu o risco; a quarta aplica a 2ª parte do art. 234, que exige culpa.`,
});

aula.alem({
  perguntas: [
    `A divergência sobre fontes (lei e vontade humana × fato jurídico *lato sensu*) muda a resposta de uma questão discursiva sobre o contrato? De que modo?`,
    `Se a categoria "obrigação de garantia" é apenas uma obrigação de resultado (segundo parte da doutrina citada no Caderno), o que mudaria na responsabilidade do segurador e do fiador?`,
    `O Caderno afirma que o contrato, no sistema brasileiro, não transfere a propriedade. Que problemas práticos o sistema francês, em que o contrato transfere, evitaria, e quais criaria?`,
    `Uma obrigação pode ser, ao mesmo tempo, de dar coisa certa, solidária e sujeita a condição suspensiva? Monte um exemplo e descreva os efeitos de cada classificação.`,
  ],
  simplificamos: `Esta aula usa **somente o Caderno**. Ficaram de fora, por não estarem no material: o texto dos artigos do Código Civil (apenas relatados como o Caderno os cita), jurisprudência (o Caderno menciona o STJ na cirurgia estética, sem identificar julgado) e a leitura direta dos autores citados (Brinz, Caio Mário, Tartuce, Pontes de Miranda, Demogue, Villaça Azevedo, Limongi França), de modo que as atribuições aqui são de segunda mão. O Caderno também não traz definição formal de obrigação. Foram deixados de lado os capítulos sobre direitos reais e pessoais, figuras híbridas (*propter rem*, ônus reais), momento do cumprimento e liquidez, por não constarem do quadro.`,
  leituras: [
    `Caderno de Estudos *Direito das Obrigações* (PDF do curso): capítulos I–III (conceito e elementos), IV (fontes), VII (modalidades), VIII–XI (dar), XII (fazer e não fazer), XIII–XIV (simples, complexas, divisibilidade e solidariedade), XV (meio, resultado, garantia) e XVII (elementos acidentais). É a única fonte desta aula.`,
    `Obras citadas pelo Caderno (Brinz, Caio Mário, Tartuce, Pontes de Miranda, Demogue, Villaça Azevedo): não foram consultadas aqui; só se deve citá-las em trabalho depois de lidas ou como citação de citação (*apud*).`,
  ],
  desafio: `Escolha um contrato do seu cotidiano (aluguel, compra de um celular, matrícula na faculdade) e o classifique em todos os eixos do quadro da seção 4, indicando, para cada eixo, qual seria a consequência jurídica que o enquadramento revela. Depois, confira no Caderno se a página citada sustenta cada passo.`,
});

aula.fontes([
  "DIREITO das obrigações: caderno de estudos. 5º semestre. [S. l.: s. n., s.d.]. 29 p. Material do curso, em PDF, fornecido pelo aluno. Teoria geral: estrutura, fontes e classificação. Referências ao Código Civil de 2002 (Lei nº 10.406/2002).",
]);

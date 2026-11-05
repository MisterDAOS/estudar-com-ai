aula.inicio({
  tema: "Bauhaus: como reconhecer o estilo",
  modo: "curiosidade",
  nivel: "iniciante",
  data: "2026-11-05",
  objetivo: "Olhar um objeto, um cartaz ou um prédio e saber dizer o que nele é \"Bauhaus\", e por quê.",
});

aula.plano([
  "A ideia que explica o visual: arte + indústria",
  "As marcas do estilo, numa cadeira (exemplo resolvido)",
  "Você completa a análise de um prédio",
  "Você analisa um objeto sozinho",
  "A influência da Bauhaus no mundo e no Brasil",
]);

aula.secao("1. A ideia que explica o visual");

aula.termos([
  { termo: "Ornamento", definicao: "elemento que só enfeita: entalhes, flores, volutas, frisos. Não ajuda o objeto a funcionar." },
  { termo: "Produção em série", definicao: "fabricar muitas unidades iguais, com máquinas, em vez de uma peça por vez à mão." },
  { termo: "Letra sem serifa", definicao: "letra sem os \"pezinhos\" nas pontas dos traços. Esta frase está em letra com serifa; os títulos da página, sem." },
]);

aula.texto(`Muita gente acha que reconhecer um estilo é decorar uma lista de características. Com a Bauhaus dá para fazer melhor: **entender uma única ideia de onde as características saem**. Aí você não precisa decorar nada, consegue deduzir.

A escola foi fundada em **1919, em Weimar**, por Walter Gropius, juntando uma academia de belas-artes com uma escola de artes e ofícios. Ou seja, nasceu para **unir o artista e o artesão**.

Em **1923**, ela adotou um lema que muda tudo: *"Arte e técnica: uma nova unidade"*. A partir daí, a pergunta passa a ser: **como desenhar objetos bonitos que uma fábrica consiga produzir?**`);

aula.diagrama({
  titulo: "Uma ideia, quatro marcas visuais",
  mermaid: `graph TD
    A["Arte + técnica<br/>(lema de 1923)"] --> B["Desenhar pensando<br/>na fábrica"]
    B --> C["Formas geométricas<br/>simples"]
    B --> D["Nenhum ornamento"]
    B --> E["Material industrial<br/>à mostra"]
    F["Ensino de forma e cor<br/>(Kandinsky)"] --> G["Cores primárias e<br/>letras geométricas"]`,
  texto: `Leia de cima para baixo: **as três marcas da linha de baixo saem da mesma ideia**. Se a máquina vai fabricar, faz sentido usar formas que ela produz bem, cortar o enfeite feito à mão e assumir materiais modernos como o aço e o vidro.

A quarta marca (o ramo separado, no alto à direita) vem de outra origem: as aulas de forma e cor. Ela aparece sobretudo em cartazes e impressos.`,
});

aula.explique({
  pergunta: `Por que a ideia "arte + técnica" leva a formas simples, sem ornamento e com o material industrial à mostra? Explique a cadeia de causa e consequência com as suas palavras.`,
  resposta: `A fábrica produz bem formas simples e repetíveis. O ornamento feito à mão não cabe na máquina e só encarece a peça, então sai. E assumir o aço e o vidro, em vez de disfarçá-los, é coerente com desenhar para a indústria. As três marcas são **consequências de uma mesma escolha** (desenhar pensando na fábrica), e não itens independentes de uma lista.`,
  criterios: [
    "Liga cada marca à fábrica, em vez de só listá-las",
    "Explica por que o ornamento sai",
    "Diz que o material à mostra também decorre da ideia",
  ],
});

aula.destaque("Na Bauhaus, **o visual é consequência de uma ideia**: fazer arte que a indústria consiga fabricar. Quem entende a ideia consegue deduzir boa parte do estilo, mas veremos onde essa dedução falha.");

aula.texto(`*Um mito para descartar já:* a frase "a forma segue a função" **não é da Bauhaus**. Ela foi escrita pelo arquiteto americano Louis Sullivan em 1896, mais de 20 anos antes da escola existir.`);

aula.secao("2. As marcas do estilo, numa cadeira");

aula.texto(`Para treinar o olho, nada melhor que um **contraste**. Abaixo estão duas poltronas separadas por só 25 anos. Olhe primeiro para as imagens e só depois leia o texto ao lado.`);

aula.imagem({
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Armchair%2C_Louis_Majorelle%2C_1900_-_IMG_1639.JPG/960px-Armchair%2C_Louis_Majorelle%2C_1900_-_IMG_1639.JPG",
  alt: "Poltrona Art Nouveau de madeira com encosto recortado em arcos e couro gravado com motivos de plantas",
  titulo: "Antes: poltrona de Louis Majorelle, 1900 (Art Nouveau)",
  credito: "Foto: Daderot, Carnegie Museum of Art",
  licenca: "domínio público",
  link: "https://commons.wikimedia.org/wiki/File:Armchair,_Louis_Majorelle,_1900_-_IMG_1639.JPG",
  largura: 340,
  texto: `**O contraexemplo.** Repare como quase tudo aqui é **enfeite**: o encosto recortado em arcos, as pernas e os braços curvos, o couro gravado com desenho de planta.

É uma peça linda, mas é **trabalho de mão, peça por peça**. Nenhuma fábrica da época produziria isso em série com facilidade.`,
});

aula.imagem({
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wassily_Chair_by_Marcel_Breuer%2C_reproduction%2C_1925%2C_chrome_covered_steel_and_belting_leather_-_University_of_Arizona_Museum_of_Art_-_University_of_Arizona_-_Tucson%2C_AZ_-_DSC08026.jpg/960px-Wassily_Chair_by_Marcel_Breuer%2C_reproduction%2C_1925%2C_chrome_covered_steel_and_belting_leather_-_University_of_Arizona_Museum_of_Art_-_University_of_Arizona_-_Tucson%2C_AZ_-_DSC08026.jpg",
  alt: "Cadeira Wassily: estrutura de tubos de aço cromado com assento, encosto e braços de tiras de couro",
  titulo: "Depois: cadeira de Marcel Breuer, 1925–1926 (Bauhaus)",
  credito: "Foto: Daderot, University of Arizona Museum of Art (reprodução)",
  licenca: "CC0",
  link: "https://commons.wikimedia.org/wiki/File:Wassily_Chair_by_Marcel_Breuer,_reproduction,_1925,_chrome_covered_steel_and_belting_leather_-_University_of_Arizona_Museum_of_Art_-_University_of_Arizona_-_Tucson,_AZ_-_DSC08026.jpg",
  largura: 420,
  texto: `**O exemplo Bauhaus.** Breuer a desenhou quando chefiava a oficina de marcenaria da Bauhaus em Dessau.

Ela ficou famosa como **"cadeira Wassily"**, mas esse nome só veio décadas depois, quando a cadeira foi reeditada. Ela **não** foi feita para o pintor Wassily Kandinsky, como muita gente pensa.`,
});

aula.exemplo({
  titulo: "Lendo a cadeira de Breuer com três perguntas",
  problema: "Como saber, olhando só para o objeto, que ele é Bauhaus? Aplique as três marcas do diagrama da parte 1.",
  passos: [
    { faz: "**1. As formas são geométricas e simples?** Sim. O esqueleto é feito de linhas retas e curvas regulares de tubo. Nenhuma forma imita planta ou flor.", porque: "formas simples e repetíveis combinam com a fabricação; formas orgânicas esculpidas, não." },
    { faz: "**2. Há algo que só enfeita?** Não. Cada parte tem uma tarefa: o tubo é a estrutura, as tiras de couro sustentam o corpo.", porque: "na Bauhaus, o que não tem função é cortado." },
    { faz: "**3. O material industrial está à mostra?** Sim. O aço tubular dobrado aparece inteiro, sem estar escondido por estofado ou madeira.", porque: "a escola assumia os materiais modernos em vez de disfarçá-los." },
  ],
  resposta: "**Veredito: Bauhaus.** Forma geométrica, zero ornamento e material industrial à mostra. A poltrona de 1900 falha nas três perguntas.",
});

aula.destaque(`**As 4 perguntas para reconhecer a Bauhaus**
1. As formas são geométricas e simples?
2. Há algo que só enfeita? (a resposta Bauhaus é *não*)
3. O material industrial está à mostra?
4. Em cartazes: cores primárias e letras geométricas, sem serifa?`);

aula.imagem({
  src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Joost_Schmidt_Bauhausausstellung_1923.jpg",
  alt: "Cartaz da exposição da Bauhaus de 1923, com formas geométricas em preto e vermelho sobre fundo amarelo e letras sem serifa",
  titulo: "A 4ª pergunta, num cartaz: Joost Schmidt, exposição da Bauhaus, 1923",
  credito: "Joost Schmidt",
  licenca: "domínio público",
  link: "https://commons.wikimedia.org/wiki/File:Joost_Schmidt_Bauhausausstellung_1923.jpg",
  largura: 409,
  texto: `Este é o cartaz da exposição de 1923, a mesma do lema "arte e técnica". Aplique a 4ª pergunta:

- **Cores:** poucas e chapadas. Amarelo-ocre, vermelho e preto, mais um cinza.
- **Formas:** círculos e semicírculos, quadrados e retângulos.
- **Letras:** sem serifa, construídas com traços geométricos.

Por trás disso estavam as aulas de forma e cor. Por volta de 1923, Kandinsky aplicou um questionário pedindo que se associasse cada forma básica a uma cor. A combinação que ele defendia era **triângulo–amarelo, quadrado–vermelho, círculo–azul**.`,
});

aula.secao("3. Você completa a análise de um prédio");

aula.texto(`A cadeira era fácil: cabe na mão. Agora o desafio é maior. Em **1926**, a própria escola ganhou casa nova em **Dessau**, projetada por Gropius. Ela virou **Patrimônio Mundial da UNESCO em 1996**.

Aqui você faz parte do trabalho: nos passos marcados com *"pense antes de revelar"*, tente responder **sozinho**, olhando a foto. Só depois abra a resposta.`);

aula.imagem({
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bauhaus_Dessau_2018.jpg/960px-Bauhaus_Dessau_2018.jpg",
  alt: "Prédio da Bauhaus em Dessau: volumes brancos com grandes superfícies de vidro",
  titulo: "O prédio da Bauhaus em Dessau (inaugurado em 4 de dezembro de 1926)",
  credito: "Foto: Aufbacksalami",
  licenca: "CC BY-SA 4.0",
  link: "https://commons.wikimedia.org/wiki/File:Bauhaus_Dessau_2018.jpg",
  largura: 520,
  texto: `Antes de ler a análise, **olhe a foto por 20 segundos** com as três perguntas na cabeça: formas, enfeite, material.

Um detalhe do projeto que a foto não entrega: o prédio **não tem uma "frente"**. Cada função da escola (oficinas, administração, escola técnica, auditório, ateliês) ficou numa ala própria. Gropius dizia que a forma se entende melhor **vista de cima**.`,
});

aula.completar({
  titulo: "Lendo o prédio de Dessau com as três perguntas",
  problema: "Aplique as perguntas da parte 2 ao prédio. O primeiro passo está resolvido; nos outros dois, pense antes de revelar.",
  passos: [
    { faz: "**1. As formas são geométricas e simples?** Sim. O conjunto é feito de blocos de formas retas, cada um com uma função, ligados entre si.", porque: "blocos simples são fáceis de projetar, de construir e de repetir, que é o que a indústria pede." },
    { faz: "**2. Há algo que só enfeita?** Não. As paredes são lisas e de cor clara (o reboco é branco). Na foto você vê vidro e o nome da escola em letras verticais sem serifa, que informam e não enfeitam. Não há molduras nem esculturas.", porque: "o prédio é a própria vitrine da ideia da escola: se a Bauhaus defende cortar o enfeite, a casa dela não pode ter. As letras são a 4ª pergunta em ação.", lacuna: true },
    { faz: "**3. O material industrial está à mostra?** Sim, de um jeito novo: concreto armado e vidro. Na ala das oficinas, uma fachada de vidro contínua cobre os três andares, e os apoios ficam recuados, com estrutura de aço.", porque: "aqui o 'material à mostra' não é o aço aparente da cadeira, e sim a **técnica moderna de construir** que aparece: vidro de ponta a ponta.", lacuna: true },
  ],
  resposta: "**Veredito: Bauhaus.** Passa nas três perguntas, e ainda mostra uma quarta ideia: uma construção que se organiza **pelas funções**, e não por uma fachada de cartão-postal.",
});

aula.secao("4. Você analisa um objeto sozinho");

aula.texto(`Agora sem rede de proteção. Este é um serviço de chá de **Marianne Brandt**, feito na oficina de metal da Bauhaus em **1924**. Você já tem as ferramentas: as quatro perguntas.`);

aula.imagem({
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Marianne_brandt_per_bauhaus%2C_servito_da_the%2C_in_argento_ed_ebano%2C_1924_%28prodotto_entro_il_1929%29_01.jpg/960px-Marianne_brandt_per_bauhaus%2C_servito_da_the%2C_in_argento_ed_ebano%2C_1924_%28prodotto_entro_il_1929%29_01.jpg",
  alt: "Serviço de chá de Marianne Brandt em metal e ébano, de formas geométricas",
  titulo: "Serviço de chá de Marianne Brandt, 1924 (prata e ébano)",
  credito: "Foto: Sailko, Smart Museum of Art",
  licenca: "CC BY 3.0",
  link: "https://commons.wikimedia.org/wiki/File:Marianne_brandt_per_bauhaus,_servito_da_the,_in_argento_ed_ebano,_1924_(prodotto_entro_il_1929)_01.jpg",
  largura: 520,
});

aula.problema({
  titulo: "Este bule é Bauhaus? E ele cumpre a promessa da escola?",
  enunciado: `Aplique as **três perguntas** (formas, enfeite, material) ao serviço de chá. Depois responda a uma quarta, que vai além da aparência:

**Esse objeto realmente combina "arte e técnica", como o lema de 1923 prometia?** Pense no que o título da foto diz sobre o material.`,
  dica: `Releia o título da imagem: que materiais ele cita? E lembre da frase central da escola: desenhar objetos que **uma fábrica consiga produzir**. Um objeto de prata é barato de fabricar em grande quantidade?`,
  resposta: `**As três perguntas:** formas geométricas, sim (o corpo é uma meia esfera, com tampa e detalhes de ébano em formas simples); ornamento, nenhum; material, metal à mostra, sem disfarce.

**A reviravolta:** pela aparência, é Bauhaus de livro. Mas os materiais (**prata e ébano**) são **caros**, e o infusor desta linha, o MT 49 (1924), **não chegou a ser produzido em série**. A própria escola criticou o uso de materiais tão nobres. O objeto *parece* feito para a fábrica, mas na prática foi artesanal.

**Lição:** o visual Bauhaus e a ideia Bauhaus nem sempre coincidem. Ter a aparência não garante cumprir a promessa. Por isso o estilo se reconhece pela ideia, e não só pelo desenho.`,
});

aula.secao("5. A Bauhaus no mundo e no Brasil");

aula.termos([
  { termo: "Diáspora", definicao: "espalhamento de um grupo por vários lugares. Aqui: professores e alunos da Bauhaus que saíram da Alemanha." },
  { termo: "Curso preliminar", definicao: "primeiro curso da Bauhaus, que ensinava forma, cor e materiais antes da especialização." },
]);

aula.texto(`A escola durou só **14 anos** (1919–1933), mas as ideias viajaram. Se o estilo se reconhece pela ideia, a pergunta é: **por quais caminhos a ideia chegou ao Brasil?**`);

aula.diagrama({
  titulo: "Dois caminhos da ideia",
  mermaid: `graph LR
    A["Bauhaus<br/>1919–1933"] --> B["Diáspora<br/>para os EUA"]
    B --> C["Gropius: Harvard, 1937<br/>Mies: Chicago, 1938"]
    B --> D["Moholy-Nagy: New Bauhaus<br/>Chicago, 1937"]
    A --> E["Max Bill<br/>(ex-aluno)"]
    E --> F["HfG Ulm<br/>1953–1968"]
    F --> G["ESDI, Rio<br/>criada em 1962"]
    E --> H["Retrospectiva no MASP<br/>1951"]`,
  texto: `**Caminho de cima:** professores que **levaram a escola na mala**. A New Bauhaus herdou o curso preliminar e as oficinas.

**Caminho de baixo:** um ex-aluno, **Max Bill**, ajudou a fundar a **HfG Ulm**, na Alemanha. Ulm adotou o curso preliminar, mas depois **se afastou** do modelo Bauhaus.

Repare que, no diagrama, **a ESDI sai de Ulm, e não da Bauhaus**.`,
});

aula.texto(`**No Brasil, o caminho de baixo foi o que mais pesou no design.**

- **ESDI (Rio):** criada por decreto em **25 de dezembro de 1962**, com aulas a partir de 1963, inspirada no modelo de Ulm. É a primeira escola de design de nível superior do país. **Alexandre Wollner** estudou em **Ulm** (não na Bauhaus) e participou da criação da ESDI.
- **Max Bill** chegou antes: sua retrospectiva no **MASP** abriu em **1º de março de 1951**, e ele ganhou o prêmio internacional de escultura da **I Bienal de São Paulo** com *Unidade Tripartida*. Foi um catalisador do concretismo, mas **não a única origem**: artistas daqui já trabalhavam com abstração antes.`);

aula.explique({
  pergunta: `Um colega diz que a ESDI é "filha direta da Bauhaus". Trace o caminho da ideia, usando o diagrama, e explique por que "direta" é uma palavra problemática.`,
  resposta: `A ESDI foi inspirada no modelo da HfG Ulm. Ulm foi cofundada por Max Bill, que estudou na Bauhaus, e adotou o curso preliminar, mas depois se afastou do modelo Bauhaus. Alexandre Wollner, que participou da criação da ESDI, estudou em Ulm e não na Bauhaus. Há uma ligação, mas **indireta**, por Ulm.`,
  criterios: [
    "Cita Ulm como o intermediário",
    "Lembra que Max Bill vem da Bauhaus, mas Ulm depois se afastou dela",
    "Aponta que Wollner estudou em Ulm",
  ],
});

aula.destaque(`**Cuidado com o exagero.** A arquitetura moderna brasileira (Lúcio Costa, Niemeyer, o Palácio Capanema) costuma ser chamada de "Bauhaus", mas as fontes que li apontam **Le Corbusier** como o principal vetor. Lúcio Costa via a Bauhaus como modelo de **escola**, e não de estilo de arquitetura. *Ponto visto só em resumos de busca: trate como indicação, não como certeza.*`);

aula.secao("Fechamento");

aula.destaque(`**A Bauhaus se reconhece pela ideia, e não só pelo desenho:** fazer arte que a indústria consiga fabricar. Dela saem as marcas visuais (formas simples, nenhum ornamento, material à mostra). E um objeto pode ter a *aparência* sem cumprir a *promessa*, como o bule de prata.`);

aula.quiz({
  pergunta: `Um colega afirma: "A Bauhaus nasceu em 1919 para fazer a forma seguir a função, como diz o lema da escola." Quais correções são válidas? (marque todas)`,
  opcoes: [
    { texto: `A frase "a forma segue a função" é do arquiteto Louis Sullivan, de 1896, anterior à escola`, certa: true },
    { texto: `O lema da exposição de 1923 foi "Arte e técnica: uma nova unidade", e a virada para a indústria veio a partir daí`, certa: true },
    { texto: `O lema da produção em série foi adotado já na fundação, em 1919, junto com o programa da escola` },
    { texto: `A frase é de Gropius, mas só foi escrita depois da mudança para Dessau, em 1925` },
  ],
  explicacao: `As duas primeiras estão certas: a frase é de Sullivan (1896), e o lema da escola é outro, de 1923, que marca a virada para pensar na produção industrial. Em 1919 a proposta era unir o artista e o artesão. A terceira erra a data da virada. A quarta atribui a frase a Gropius, o que não se sustenta.`,
});

aula.quiz({
  pergunta: `Uma marca lança uma cadeira "inspirada na Bauhaus": tubo de aço aparente, couro liso, nenhum enfeite. Cada unidade é feita à mão, numerada, em tiragem de 20 peças, vendida a colecionadores. Qual leitura é a mais fiel à ideia da escola?`,
  opcoes: [
    { texto: "Tem o visual, mas descumpre a promessa de desenhar para a fábrica, como o serviço de chá de Brandt", certa: true },
    { texto: "É Bauhaus plena: o que define a escola é o visual, e o visual está todo ali" },
    { texto: "Não pode ser Bauhaus, porque a escola nunca usou aço tubular nos seus móveis" },
    { texto: "É Bauhaus plena, porque o lema da escola defendia a peça única, feita à mão" },
  ],
  explicacao: `As três perguntas medem a **aparência**; a ideia é outra: arte que a indústria consiga fabricar. Uma peça numerada, feita à mão, para colecionadores, repete o desencontro do bule de Brandt. "O visual basta" ignora a ideia. "Nunca usou aço tubular" é falso: a cadeira de Breuer é de aço tubular. E a peça única feita à mão contraria o lema de 1923.`,
});

aula.quiz({
  pergunta: `Um trabalho de faculdade diz: "A ESDI, no Rio, é herdeira direta da Bauhaus." Qual é a objeção mais precisa?`,
  opcoes: [
    { texto: "A ESDI se inspirou na HfG Ulm, cofundada por Max Bill, ex-aluno da Bauhaus: a ligação existe, mas é indireta", certa: true },
    { texto: "A ESDI não tem nenhuma relação com a Bauhaus, nem indireta" },
    { texto: "A ESDI foi criada por Alexandre Wollner, ex-aluno da Bauhaus" },
    { texto: "A ESDI se inspirou na New Bauhaus de Chicago, de Moholy-Nagy" },
  ],
  explicacao: `O caminho passa por Ulm: Max Bill estudou na Bauhaus e cofundou a HfG Ulm, que adotou o curso preliminar e depois se afastou do modelo Bauhaus; a ESDI se inspirou em Ulm. "Nenhuma relação" exagera para o outro lado. Wollner estudou em Ulm, e não na Bauhaus, e participou da criação da ESDI (não a criou sozinho). Quanto à New Bauhaus de Chicago, ela é o caminho da diáspora para os EUA, e não o da ESDI.`,
});

aula.alem({
  perguntas: [
    `Se o lema de 1923 virou a ideia da escola, por que poucos objetos Bauhaus chegaram de fato à produção em série? O que isso diz sobre a distância entre uma ideia e a sua execução?`,
    `Em 1919 a escola nasceu para unir o artista e o artesão; em 1923 o lema passou a falar em técnica. O que mudou nesse intervalo, e o que se perdeu e o que se ganhou com a mudança?`,
    `O dossiê do ICOMOS (2003) diz que "estilo Bauhaus" não é necessariamente um rótulo apropriado para a Cidade Branca de Tel Aviv, que a UNESCO chama de "Movimento Moderno". Quando um rótulo ajuda a enxergar e quando ele apaga diferenças?`,
  ],
  simplificamos: `A lente das 4 perguntas é uma ferramenta de **reconhecimento**, não uma definição da Bauhaus. Ficaram de fora a história da escola em suas três cidades (Weimar, Dessau e Berlim), o fechamento por razões políticas, e as diferenças entre fases e direções. E o bule de Brandt já mostrou onde a lente falha: o visual pode estar lá sem a ideia.`,
  leituras: [
    `[Bauhaus Kooperation, *Tea Infuser (MT 49)*](https://bauhauskooperation.de/en/knowledge/the-bauhaus/works/metal/tea-infuser-mt-49): a ficha do objeto que testa a lente. Veja o que a instituição diz sobre materiais e produção.`,
    `[ICOMOS, *Evaluation: Tel Aviv (Israel), n. 1096* (2003)](https://whc.unesco.org/document/151735): o dossiê que discute o rótulo "estilo Bauhaus", um exemplo real de como um rótulo pode apagar diferenças.`,
    `[GARCÍA, M. A., *Revista USP*, n. 79, 2008](https://revistas.usp.br/revusp/article/download/13705/15523/16680): sobre as intervenções de Max Bill em 1951. Boa para testar quanto da "influência da Bauhaus" no Brasil passou por Ulm e por Max Bill.`,
  ],
  desafio: `Escolha um objeto ou prédio perto de você (a cadeira do seu escritório, um prédio do centro, o banco de uma praça) e aplique as 4 perguntas. Depois procure descobrir: ele foi mesmo **desenhado para a fábrica** ou só imita o visual? Se achar um que passe nas perguntas mas contradiga a ideia, você acabou de refazer o argumento do bule de Brandt, só que com um caso seu.`,
});

aula.fontes([
  "BAUHAUS KOOPERATION. **Bauhaus Berlin**; **Bauhaus Dessau**. [link](https://bauhauskooperation.de/en/knowledge/the-bauhaus/phases/berlin). Acesso em: 5 nov. 2026.",
  "LETTERFORM ARCHIVE. **The First Exhibition** (lema de 1923). [link](https://exhibitions.letterformarchive.org/bauhaus/exhibit/the-first-exhibition). Acesso em: 5 nov. 2026.",
  "BAUHAUS KOOPERATION. **Bauhaus Building Dessau**. [link](https://bauhauskooperation.de/en/knowledge/the-bauhaus/works/architecture/bauhaus-building-dessau). Acesso em: 5 nov. 2026.",
  "WIKIPEDIA. **Bauhaus Dessau**; **Wassily Chair**. [link](https://en.wikipedia.org/wiki/Bauhaus_Dessau). Acesso em: 5 nov. 2026. (Apoio; dados cruzados com a fonte da Bauhaus Kooperation.)",
  "GOOGLE ARTS & CULTURE. **Bauhaus: The Importance of Shapes** (questionário de Kandinsky). [link](https://artsandculture.google.com/story/OwURAJwcVUkTow). Acesso em: 5 nov. 2026.",
  "BAUHAUS KOOPERATION. **Tea Infuser (MT 49)**. [link](https://bauhauskooperation.de/en/knowledge/the-bauhaus/works/metal/tea-infuser-mt-49). Acesso em: 5 nov. 2026.",
  "BAUNETZWISSEN. **Form follows function** (Sullivan, 1896). [link](https://www.baunetzwissen.de/fenster-und-tueren/fachwissen/planungsgrundlagen/form-follows-function-10317094). Acesso em: 5 nov. 2026.",
  "HARVARD GRADUATE SCHOOL OF DESIGN. **Walter Gropius and the Making of the Modern GSD**; ILLINOIS INSTITUTE OF TECHNOLOGY. **History** (College of Architecture). [link](https://arch.iit.edu/about/history). Acesso em: 5 nov. 2026.",
  "STIFTUNG BAUHAUS DESSAU. **Bauhaus Atlas: New Bauhaus**; **HfG Ulm**; **ESDI**. [link](https://atlas-mobile.bauhaus-dessau.de/en/schools/new-bauhaus). Acesso em: 5 nov. 2026.",
  "GARCÍA, M. A. Ações e contatos regionais da arte concreta: intervenções de Max Bill em 1951. **Revista USP**, São Paulo, n. 79, p. 196-204, 2008. [link](https://revistas.usp.br/revusp/article/download/13705/15523/16680). Acesso em: 5 nov. 2026.",
  "UERJ. ESDI. **Projeto Político Pedagógico do curso de Desenho Industrial**. [link](https://www.esdi.uerj.br/assets/ef59b1fd81ea2c02a77bfbd08158273d/13fc8e830d2b39b2cddbd93495e11a68.pdf). Acesso em: 5 nov. 2026.",
  "VITRUVIUS. **Arquitextos**, v. 14, n. 168 (autor e título não conferidos); BAUHAUS IMAGINISTA. **In the Footsteps of the Bauhaus** (vistos só em resumo de busca). [link](https://www.bauhaus-imaginista.org/articles/4911/in-the-footsteps-of-the-bauhaus). Acesso em: 5 nov. 2026.",
]);

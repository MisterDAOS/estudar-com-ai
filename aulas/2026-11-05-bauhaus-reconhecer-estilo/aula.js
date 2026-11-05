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

aula.destaque("Na Bauhaus, **o visual é consequência de uma ideia**: fazer arte que a indústria consiga fabricar. Quem entende a ideia consegue deduzir o estilo.");

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

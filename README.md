# Estudar com AI

Seu sistema pessoal de estudo. Você pede um tema, a IA mede o que você já
sabe, verifica os fatos em fontes confiáveis e escreve uma **aula com a
profundidade que o tema pedir (sem teto de tempo)** numa página que abre no
seu navegador. A página tem explicação, exemplos resolvidos, campos para você
explicar com as próprias palavras, diagramas, imagens, testes desafiadores e
uma seção "Para ir além".

## Como usar

1. Abra o **Claude Code** nesta pasta (`Estudar com AI`).
2. Digite:
   ```
   /aula como a taxa Selic afeta a inflação
   ```
3. A IA vai:
   1. perguntar o que exatamente você quer entender (se o pedido for amplo);
   2. fazer perguntas rápidas para saber por onde começar e até onde ir;
   3. verificar os fatos com o agente `pesquisador`;
   4. abrir a página da aula e escrever parte por parte, enquanto você lê;
   5. pedir que você explique a parte com as próprias palavras antes de
      mostrar a resposta, e checar com uma pergunta desafiadora no chat;
   6. fechar com a ideia central, testes desafiadores, pistas para ir além
      (perguntas em aberto, leituras, um desafio) e as fontes em ABNT.

**Reler e refazer os testes depois não gasta nada de IA**: abra a página e
clique. Ela funciona sozinha.

### Gastar menos tokens
- **Comece cada aula numa conversa nova**, aberta nesta pasta. Uma conversa
  longa encarece cada passo, porque o histórico inteiro é relido.
- O modelo padrão desta pasta é o **Sonnet** (definido em `.claude/settings.json`).
  O pesquisador usa o **Haiku**, com limite de 15 buscas por tarefa.
- Cada aula guarda a pesquisa em `aulas/<pasta>/pesquisa.md`. Se a aula for
  interrompida, abra uma conversa nova e diga "continue a aula de <tema>":
  ela retoma sem pesquisar de novo.

### Abrir as aulas sem o Claude
- Duplo clique em `index.html` (nesta pasta), **ou**
- no terminal: `node ferramenta/servidor.mjs` e abra http://localhost:4321

As páginas precisam de internet para carregar as bibliotecas de fórmulas e
diagramas.

### Seus PDFs da faculdade
Coloque em `pdfs/`, de preferência numa subpasta por disciplina
(`pdfs/direito-civil/`, `pdfs/constitucional/`…). Nas aulas de faculdade e
de Direito, a IA lê esses arquivos **antes** de buscar fora.

## O que acontece por trás

| Peça | Arquivo | Função |
|---|---|---|
| Instruções gerais e seu perfil | `AGENTS.md` | lido em toda sessão |
| O método de aula | `.claude/skills/aula/SKILL.md` | o comando `/aula` |
| Diagramas e imagens | `.claude/skills/visualizar/SKILL.md` | quando e como fazer um visual, e conferir olhando |
| Pesquisador | `.claude/agents/pesquisador.md` | verifica fatos e devolve referências ABNT |
| Página de estudo | `ferramenta/` | desenha a aula a partir de `aulas/<pasta>/aula.js` |
| Blocos disponíveis | `ferramenta/BLOCOS.md` | o "vocabulário" das aulas |

A aula `aulas/2026-11-05-bauhaus-reconhecer-estilo/` é a **aula de referência**:
as novas seguem o jeito dela (uma ideia que explica o resto, uma lente de
perguntas, casos cada vez mais difíceis, contrastes e imagens reais).

A aula de demonstração em `aulas/2026-11-05-exemplo-juros-compostos/` mostra
todos os tipos de bloco. Pode apagá-la (e a linha dela em `aulas/lista.js`)
quando quiser.

## Como os textos são escritos

Estas regras valem para todas as aulas (estão em `AGENTS.md` e no método):

- **Registro acadêmico:** voz impessoal, vocabulário preciso, citação
  autor-data no texto e fontes em ABNT; fato, interpretação e hipótese
  sempre distinguidos.
- **Texto desenvolvido e acessível:** parágrafos longos e conectados, que
  explicam o porquê (não resumos telegráficos). Sem limite de tamanho.
- **Ressalvas de fonte em notas separadas** ("não confirmado", "consultado
  só em resumo"), para não quebrar o fio da leitura.
- **Cronologia clara:** em temas com sequência no tempo, uma linha do tempo
  geral no início, uma parte por período, em ordem de data, cada uma aberta
  por uma faixa de período, e uma síntese ("Em síntese") no fim.
- **Você explica antes de ver a resposta**, os testes são desafiadores e a
  aula termina com perguntas em aberto ("Para ir além").

A aula `aulas/2026-11-05-bauhaus-por-dentro/` é a referência desse padrão.

## A base pedagógica

1. **Teoria da Carga Cognitiva** (John Sweller): a memória de trabalho é
   pequena, então a profundidade vem **em camadas e em ordem**, e não em
   cortes: não há teto de tamanho, e a aula é dividida em blocos curtos com a
   base antes do que depende dela. **Exemplos resolvidos** são a porta de
   entrada, e a ajuda vai diminuindo (exemplo → exemplo com lacunas →
   problema sozinho). O seu nível decide por onde a aula começa e até onde
   ela sobe, nunca quanto conteúdo é cortado.
   - Kirschner, Sweller & Clark (2006), *Educational Psychologist* 41(2).
2. **Aprendizagem multimídia e codificação dual** (Richard Mayer, Allan
   Paivio): texto e imagem juntos ensinam mais, desde que o visual seja
   essencial, fique junto da explicação e não repita o texto.
   - Mayer & Moreno (2002), *Learning and Instruction* 12.
3. **Esforço produtivo** (autoexplicação e prática de recuperação): ler uma
   explicação limpa dá a sensação de entender, mesmo sem entender. Por isso
   você escreve a sua explicação antes de ver a resposta, e os testes pedem
   raciocínio, não memória. *(Referências ainda não conferidas: peça ao
   `pesquisador` antes de citar.)*
4. **A aula abre o assunto**: termina com perguntas em aberto, o que foi
   simplificado, leituras verificadas e um desafio, para dar vontade de
   procurar mais.

Além disso, o sistema segue o que a pesquisa diz sobre tutores de IA: a IA
deve **dar dicas e passos, não respostas prontas**. Sem essa regra, os alunos
pioram quando estudam sem a IA (Bastani et al., *PNAS*, 2025).

**O que veio do repositório [amosblomqvist/learn](https://github.com/amosblomqvist/learn):**
- o método escrito como skill;
- a sondagem de nível com perguntas;
- as regras para escrever boas alternativas de quiz;
- o pesquisador que verifica fatos;
- a regra "visual mínimo, conferido olhando".

**O que mudou:**
- explicar com exemplo resolvido é o padrão, e não fazer o aluno descobrir sozinho;
- sessões sem teto de tempo, com aulas que abrem o assunto em vez de fechá-lo;
- você explica com as próprias palavras antes de ver a resposta;
- página interativa em vez do Obsidian;
- tudo em português, adaptado ao seu perfil e ao Windows.

## Usar sem o Claude (outros modelos)

Quase tudo aqui é texto e HTML comuns:

| Peça | Portátil? | Em outro agente |
|---|---|---|
| `AGENTS.md`, skills, agente pesquisador | sim, é Markdown | cole como instruções, ou use um agente que leia `AGENTS.md` (pi, OpenCode etc.) |
| Página de estudo (`ferramenta/`, `aulas/`) | sim, é HTML e JavaScript | funciona igual, com qualquer IA que saiba editar arquivos |
| Perguntas com botões no chat | **exclusivo do Claude Code** | a IA faz as perguntas em texto, com opções numeradas |
| Subagente pesquisador | **exclusivo do Claude Code** | o próprio agente principal pesquisa |
| Abrir a página no navegador do app e conferir diagramas por screenshot | **exclusivo do Claude Code** | você abre a página e confirma visualmente |

## Ajustar ao seu jeito

Tudo é texto editável:
- Mudou de ideia sobre o tom, o tempo de sessão ou as fontes? Edite `AGENTS.md`.
- Quer mudar a forma de ensinar? Edite `.claude/skills/aula/SKILL.md`.
- Quer mudar o visual da página? Edite `ferramenta/pagina.css`.

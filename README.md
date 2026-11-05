# Estudar com AI

Seu sistema pessoal de estudo. Você pede um tema, a IA mede o que você já
sabe, verifica os fatos em fontes confiáveis e escreve uma **aula curta
(até 30 min)** numa página que abre no seu navegador. A página tem explicação,
exemplos resolvidos, diagramas, imagens e testes clicáveis.

## Como usar

1. Abra o **Claude Code** nesta pasta (`Estudar com AI`).
2. Digite:
   ```
   /aula como a taxa Selic afeta a inflação
   ```
3. A IA vai:
   1. perguntar o que exatamente você quer entender (se o pedido for amplo);
   2. fazer até 4 perguntas rápidas para medir seu nível;
   3. verificar os fatos com o agente `pesquisador`;
   4. abrir a página da aula e escrever parte por parte, enquanto você lê;
   5. checar com uma pergunta no chat ao fim de cada parte;
   6. fechar com a ideia central, testes de revisão e as fontes em ABNT.

**Reler e refazer os testes depois não gasta nada de IA**: abra a página e
clique. Ela funciona sozinha.

### Gastar menos tokens
- **Comece cada aula numa conversa nova**, aberta nesta pasta. Uma conversa
  longa encarece cada passo, porque o histórico inteiro é relido.
- O modelo padrão desta pasta é o **Sonnet** (definido em `.claude/settings.json`).
  O pesquisador usa o **Haiku**, com limite de 8 buscas por aula.
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

A aula de demonstração em `aulas/2026-11-05-exemplo-juros-compostos/` mostra
todos os tipos de bloco. Pode apagá-la (e a linha dela em `aulas/lista.js`)
quando quiser.

## A base pedagógica

1. **Teoria da Carga Cognitiva** (John Sweller): a memória de trabalho é
   pequena, então entram poucas ideias novas por vez. Quem está começando
   aprende com **exemplos resolvidos**, e a ajuda vai diminuindo
   (exemplo → exemplo com lacunas → problema sozinho). Quem já sabe pula os
   exemplos, porque para essa pessoa eles atrapalham (efeito reverso da expertise).
   - Kirschner, Sweller & Clark (2006), *Educational Psychologist* 41(2).
   - Kalyuga et al. (2003), *Educational Psychologist* 38.
2. **Aprendizagem multimídia e codificação dual** (Richard Mayer, Allan
   Paivio): texto e imagem juntos ensinam mais, desde que o visual seja
   essencial, fique junto da explicação e não repita o texto.
   - Mayer & Moreno (2002), *Learning and Instruction* 12.

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
- sessões curtas;
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

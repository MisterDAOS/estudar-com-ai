@AGENTS.md

## Específico do Claude Code

- Para começar uma sessão de estudo, o aluno digita `/aula <tema>`.
- Perguntas de sondagem e de checagem: use a ferramenta `AskUserQuestion`.
- Verificação de fatos e fontes: subagente `pesquisador` (ferramenta `Agent`).
- A página da aula abre no navegador do app com `preview_start` usando a
  configuração `estudo` de `.claude/launch.json` (porta 4321).

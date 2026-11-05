---
name: visualizar
description: Acrescenta a uma aula UM visual correto e mínimo — diagrama (Mermaid), figura ou gráfico (SVG) ou imagem de referência — seguindo os princípios da aprendizagem multimídia, e confere o resultado olhando a página renderizada. Use durante uma aula quando uma ideia fica mais clara vista do que lida — estrutura, processo, causa e efeito, comparação, linha do tempo, espaço, dados ou uma obra de arquitetura/design.
---

# Visualizar

Um visual só entra na aula se mostrar algo que as palavras não mostram bem:
forma, estrutura, direção, relação, proporção, espaço. Um visual decorativo
ou que repete o texto **aumenta** a carga e ainda pode estar errado.
Na dúvida, não faça: **um visual que falta custa menos que um visual errado.**

## 1. Escolha o tipo

| A ideia é… | Bloco | Exemplo |
|---|---|---|
| relação, dependência, fluxo, causa → efeito | `aula.diagrama` (Mermaid `graph TD`/`LR`) | como a Selic chega ao preço do pão |
| sequência de interações entre atores | `aula.diagrama` (`sequenceDiagram`) | fases de um processo judicial |
| linha do tempo | `aula.diagrama` (`timeline`) | constituições brasileiras |
| hierarquia / classificação | `aula.diagrama` (`graph TD` ou `mindmap`) | hierarquia das normas |
| dados numéricos, proporção, geometria, planta | `aula.figura` (SVG feito à mão) | inflação mês a mês |
| uma obra, objeto ou lugar real | `aula.imagem` | o Palácio da Alvorada |

## 2. Corte até sobrar só a ideia

- **Uma ideia por visual.** Se precisa de duas, são dois visuais.
- **No máximo ~7 elementos** (nós, barras, rótulos). Para cada um, pergunte:
  "se eu tirar isto, a ideia continua clara?" Se sim, tire.
- Rótulos curtos: uma palavra ou expressão, não frases.
- Sem título dentro do diagrama (o bloco já tem `titulo`).

## 3. Junte o visual e a explicação (contiguidade, sem redundância)

- Use o campo `texto` do bloco: a explicação aparece **ao lado** (ou logo
  abaixo, se o visual for largo).
- O texto **não descreve o visual elemento por elemento** — ele diz **para onde
  olhar** e **o que concluir** ("repare que a seta volta: é um ciclo").
- Se um rótulo pode ficar **dentro** do visual, ele fica lá, não numa legenda separada.

## 4. Regras por tipo

**Mermaid**
- Texto com caracteres especiais ou `R$` vai entre aspas: `A["R$ 1.000"]`.
- Quebra de linha num rótulo: `<br/>`.
- `graph TD` (de cima para baixo) para fundamentos → consequências;
  `graph LR` para processos no tempo.

**SVG (figuras e gráficos)**
- Calcule as coordenadas **com um script** (por exemplo `node -e "..."`),
  não "no olho": proporções erradas mentem.
- `viewBox` com margem, `font-family="Inter, sans-serif"`, textos com
  `fill="currentColor"` (funciona no tema claro e no escuro).
- No máximo 2 cores de dado + neutro. Fonte dos dados na `legenda`.

**Imagens**
- Prefira **Wikimedia Commons**. Confira na página do arquivo o **autor** e a
  **licença** e preencha `credito`, `licenca` e `link` (a página do arquivo).
- Use o link direto da imagem (`upload.wikimedia.org/...`) em `src`.
- Nunca use imagem sem crédito ou de site que proíbe reprodução.

## 5. Confira olhando — obrigatório

Renderizar sem erro não prova que o visual está **certo**. Depois de escrever o bloco:

1. Espere ~3 segundos (a página se atualiza sozinha).
2. **[Claude Code]** No navegador do app, role até o bloco e tire um screenshot
   (por exemplo, `javascript_tool` com
   `document.querySelectorAll('[data-tipo="diagrama"]')` → último →
   `scrollIntoView()`, depois `computer` → `screenshot`).
   Em outro agente: peça para o aluno olhar e confirmar.
3. Confira de forma crítica:
   - Cada seta aponta para o lado certo? Cada relação é **verdadeira**?
   - Os números e as proporções batem com os dados?
   - Algum rótulo cortado, sobreposto ou ilegível?
   - Apareceu um quadro vermelho "Erro no diagrama"? → corrija a sintaxe.
   - Imagem: carregou? (`img.naturalWidth > 0`)
   - Dá para entender a ideia só olhando?
4. Corrija e confira de novo. Se não conseguir um visual correto e claro,
   **remova o bloco** e explique em texto.

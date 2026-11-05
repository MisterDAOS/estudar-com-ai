// Servidor local mínimo (sem dependências) para abrir as aulas no navegador.
// Uso:  node ferramenta/servidor.mjs        →  http://localhost:4321
// Não é obrigatório: as páginas também abrem com duplo clique (file://).

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = resolve(fileURLToPath(new URL("..", import.meta.url)));
const PORTA = Number(process.env.PORT) || 4321;
const TIPOS = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".gif": "image/gif", ".pdf": "application/pdf", ".ico": "image/x-icon",
};

createServer(async (req, res) => {
  try {
    let caminho = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let arquivo = normalize(join(RAIZ, caminho));
    if (arquivo !== RAIZ && !arquivo.startsWith(RAIZ + sep)) { res.writeHead(403).end("proibido"); return; }
    const info = await stat(arquivo).catch(() => null);
    if (info && info.isDirectory()) arquivo = join(arquivo, "index.html");
    const dados = await readFile(arquivo);
    res.writeHead(200, {
      "Content-Type": TIPOS[extname(arquivo).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(dados);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("não encontrado");
  }
}).listen(PORTA, "127.0.0.1", () => {
  console.log(`Estudar com AI: http://localhost:${PORTA}`);
});

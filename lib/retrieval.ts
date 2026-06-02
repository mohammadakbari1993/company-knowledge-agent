import fs from "fs";
import path from "path";

const DOCS_DIR = path.join(process.cwd(), "docs");

export function getDocuments() {
  const files = fs.readdirSync(DOCS_DIR);

  return files.map((file) => ({
    name: file,
    content: fs.readFileSync(path.join(DOCS_DIR, file), "utf-8"),
  }));
}

export function findBestMatch(question: string) {
  const chunks = getChunks();

  const queryWords = question.toLowerCase().split(/\W+/).filter(Boolean);

  let bestChunk = null;
  let bestScore = 0;

  for (const chunk of chunks) {
    const content = chunk.content.toLowerCase();

    const score = queryWords.reduce(
      (total, word) => total + (content.includes(word) ? 1 : 0),
      0
    );

    if (score > bestScore) {
      bestScore = score;
      bestChunk = chunk;
    }
  }

  return bestChunk;
}
function getChunks() {
  const docs = getDocuments();

  const chunks: { source: string; content: string }[] = [];

  for (const doc of docs) {
    if (doc.content.includes("## ")) {
      const sections = doc.content.split(/^## /gm).filter(Boolean);

      for (const section of sections) {
        chunks.push({
          source: doc.name,
          content: section.trim(),
        });
      }
    } else {
      chunks.push({
        source: doc.name,
        content: doc.content,
      });
    }
  }

  return chunks;
}

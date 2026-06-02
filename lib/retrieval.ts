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
  const docs = getDocuments();

  const queryWords = question.toLowerCase().split(/\W+/).filter(Boolean);

  let bestDoc = null;
  let bestScore = 0;

  for (const doc of docs) {
    const content = doc.content.toLowerCase();

    const score = queryWords.reduce(
      (total, word) => total + (content.includes(word) ? 1 : 0),
      0
    );

    if (score > bestScore) {
      bestScore = score;
      bestDoc = doc;
    }
  }

  return bestDoc;
}

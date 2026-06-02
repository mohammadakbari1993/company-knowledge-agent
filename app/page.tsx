"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [source, setSource] = useState("");

  const askQuestion = async () => {
    if (!question.trim()) return;

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    });

    const data = await response.json();

    setAnswer(data.answer);
    setSource(data.source);
  };

  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Company Knowledge Bot</h1>

      <textarea
        className="w-full border rounded-lg p-3"
        rows={4}
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={askQuestion}
        className="mt-4 px-4 py-2 border rounded-lg"
      >
        Ask
      </button>

      {answer && (
        <div className="mt-8 border rounded-lg p-4">
          <h2 className="font-semibold mb-2">Answer</h2>

          <pre className="whitespace-pre-wrap">{answer}</pre>

          <p className="mt-4 text-sm opacity-70">Source: {source}</p>
        </div>
      )}
    </main>
  );
}

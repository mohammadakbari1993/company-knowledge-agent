# Agent Context

## Project

Mini Company Knowledge Bot

## Purpose

Provide answers to company-related questions using information stored in local documentation files.

The project was intentionally designed as a lightweight retrieval-based MVP to demonstrate agentic development practices, context management, and iterative engineering decisions.

---

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS

---

## Current Architecture

User Question
→ API Route
→ Retrieval Service
→ Chunk Matching
→ Response Formatting
→ UI

---

## Knowledge Sources

All knowledge is stored in Markdown documents under:

```text
docs/
```

Current documents:

* faq.md
* leave-policy.md
* product-guide.md

---

## Current Status

MVP completed.

Implemented:

* Knowledge documents
* Retrieval service
* Chunk-based matching
* Chat API
* Web UI
* Evaluation cases
* Agentic documentation

---

## Known Limitations

* Uses keyword-based matching
* No semantic search
* No embeddings
* No LLM integration
* No multi-document ranking

---

## Future Improvements

* Semantic retrieval
* Embedding-based search
* LLM-generated answers
* Source citations
* Confidence scoring

---

## Important Decisions

1. Chose local retrieval instead of external AI APIs.
2. Refactored retrieval from document-level matching to chunk-level matching.
3. Separated retrieval logic from response formatting.
4. Prioritized simplicity and maintainability over infrastructure complexity.

---

## Primary Files

```text
lib/retrieval.ts
app/api/chat/route.ts
app/page.tsx
```

These files contain the core application logic.

# Tasks

This file tracks the development progress of the Mini Company Knowledge Bot project.

---

## Completed

### Project Setup

* [x] Initialize Next.js project
* [x] Setup TypeScript and project structure
* [x] Create docs/ folder with company knowledge

### Knowledge Layer

* [x] Add FAQ document
* [x] Add Leave Policy document
* [x] Add Product Guide document

### Retrieval System

* [x] Implement file-based document loader
* [x] Implement keyword-based retrieval
* [x] Introduce chunk-based document splitting
* [x] Improve retrieval accuracy (fix heading vs answer issue)

### API Layer

* [x] Build `/api/chat` endpoint
* [x] Connect retrieval system to API response
* [x] Return structured JSON response (answer + source)

### UI Layer

* [x] Build simple chat interface
* [x] Connect frontend to API
* [x] Display answer + source metadata

### Agentic Brain

* [x] Define project brief
* [x] Maintain context documentation
* [x] Track memory and decisions
* [x] Define evaluation test cases

### Documentation

* [x] Create README.md
* [x] Document architecture and design decisions
* [x] Add AI usage explanation
* [x] Add evaluation scenarios

---

## Done Through Iteration

* Improved retrieval from full-document response → chunk-based response
* Fixed issue where FAQ headings were returned instead of answers
* Refactored response formatting for better UX
* Iteratively improved system based on testing feedback

---

## Pending / Future Improvements

* Semantic search (embeddings-based retrieval)
* LLM-based answer generation
* Ranking multiple chunks
* Confidence scoring
* Citations highlighting exact text spans

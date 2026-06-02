# Mini Company Knowledge Bot

A lightweight company knowledge assistant built for the Soli Season 0 assessment.

The application allows users to ask questions about company policies, product information, and support procedures. Answers are retrieved directly from internal documentation stored in the repository.

---

## Project Goal

Build a simple but maintainable knowledge bot while demonstrating:

* AI-assisted development workflows
* Context management
* Memory tracking
* Iterative engineering decisions
* Git-based project evolution

---

## Features

* Company knowledge stored as Markdown documents
* Local document retrieval
* Chunk-based matching
* Chat API endpoint
* Simple web interface
* Agentic project documentation

---

## Knowledge Sources

The bot uses information from:

* FAQ
* Leave Policy
* Product Guide

All documents are stored inside the `docs/` directory.

---

## Architecture

User Question
→ API Route
→ Retrieval Service
→ Best Matching Chunk
→ Response

---

## Project Structure

```text
docs/
agentic-brain/
app/
lib/
```

### docs/

Contains company knowledge documents.

### agentic-brain/

Contains project context and decision history.

* PROJECT_BRIEF.md
* AGENT_CONTEXT.md
* MEMORY.md
* TASKS.md
* EVALS.md

### lib/

Core retrieval logic.

### app/

Next.js UI and API routes.

---

## Running Locally

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Evaluation Examples

Example questions:

* How many annual leave days do employees receive?
* What support channels are available?
* How can customers reset their password?
* What are support hours?

See `agentic-brain/EVALS.md` for the complete evaluation set.

---

## Design Decisions

### Why no LLM?

The assessment focuses on context management, memory handling, project organization, and development workflow.

A lightweight retrieval-based MVP was chosen to keep the solution simple, maintainable, and focused on the assessment goals.

### Why Chunk-Based Retrieval?

The initial implementation returned entire documents.

After testing, retrieval was refactored to return smaller document sections, resulting in more focused and user-friendly answers.

---

## Future Improvements

* Semantic search
* Embeddings-based retrieval
* LLM answer generation
* Source citations
* Multi-document ranking

# Memory

## 2026-06-02

### Initial Approach

The initial plan was to build the knowledge bot using a large language model and external AI APIs.

### Observation

After reviewing the assessment requirements, it became clear that the primary evaluation criteria were:

* Project organization
* Context management
* Memory tracking
* Agentic development workflows
* Git history and iteration quality

Rather than advanced AI infrastructure.

### Decision

Implement a lightweight local retrieval system for the MVP instead of integrating an external LLM.

### Rationale

* Faster implementation within the assessment timeframe
* No dependency on paid APIs or external services
* Easier to understand and evaluate
* Keeps the project focused on the requested objectives
* Reduces unnecessary architectural complexity

### Learning

For a small and controlled knowledge base, simple retrieval techniques can provide sufficient value without introducing the overhead of embeddings, vector databases, or complex RAG pipelines.

---

## Retrieval Evolution

### Version 1: Document-Level Retrieval

The first implementation identified the most relevant document and returned its entire contents.

### Observation

Although the correct document was selected, responses were overly verbose. Users had to manually locate the relevant information within the returned document.

### Decision

Refactor the retrieval layer to operate on document sections (chunks) rather than entire documents.

### Expected Benefit

* More focused responses
* Better user experience
* Improved retrieval precision

---

## Chunking Issue

### Observation

After introducing chunk-based retrieval, some queries returned FAQ section headings instead of actual answers.

Example:

Question:

> How can customers reset their password?

Returned:

> How can customers reset their password?

Instead of the associated answer.

### Root Cause

The retrieval algorithm scored FAQ headings highly because they closely matched the user's query. Since headings and answers were stored as separate chunks, the heading often received the highest score.

### Decision

Group each FAQ question and its corresponding answer into a single retrieval chunk.

### Additional Improvement

Separate response formatting from retrieval logic and return only the answer content to the user.

### Result

The system now provides concise, relevant answers instead of entire documents or section headings.

### Learning

Retrieval quality depends not only on scoring algorithms but also on how knowledge is structured and chunked. Proper chunk design can significantly improve answer relevance even when using simple matching techniques.

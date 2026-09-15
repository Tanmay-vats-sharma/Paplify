import {
  AlignLeft,
  ChevronDown,
  FileText,
  Heading1,
  List,
  MoreHorizontal,
  PanelRight,
  Plus,
  Search,
  Sparkles,
} from 'lucide-react'

function ProductPreview() {
  return (
    <div className="product-preview-wrapper">
      <div className="product-preview-shadow" />

      <div className="product-preview">
        <div className="product-preview-topbar">
          <div className="product-preview-document">
            <div className="product-preview-file-icon">
              <FileText
                size={14}
                aria-hidden="true"
              />
            </div>

            <div>
              <strong>
                AI in Modern Education
              </strong>

              <span>
                Saved just now
              </span>
            </div>

            <ChevronDown
              size={14}
              aria-hidden="true"
            />
          </div>

          <div className="product-preview-top-actions">
            <span className="product-preview-saved">
              Saved
            </span>

            <button
              type="button"
              aria-label="Search document"
            >
              <Search
                size={16}
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              aria-label="More options"
            >
              <MoreHorizontal
                size={17}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div className="product-preview-body">
          <aside className="product-preview-outline">
            <div className="preview-panel-heading">
              <span>Outline</span>

              <button
                type="button"
                aria-label="Add section"
              >
                <Plus
                  size={14}
                  aria-hidden="true"
                />
              </button>
            </div>

            <nav aria-label="Document outline">
              <a
                href="#preview-introduction"
                className="active"
              >
                Introduction
              </a>

              <a href="#preview-methodology">
                Methodology
              </a>

              <a href="#preview-findings">
                Findings
              </a>

              <a href="#preview-discussion">
                Discussion
              </a>

              <a href="#preview-conclusion">
                Conclusion
              </a>
            </nav>
          </aside>

          <div className="product-preview-editor">
            <div className="preview-toolbar">
              <button
                type="button"
                aria-label="Paragraph style"
              >
                <AlignLeft
                  size={15}
                  aria-hidden="true"
                />

                <ChevronDown
                  size={12}
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                aria-label="Heading style"
              >
                <Heading1
                  size={15}
                  aria-hidden="true"
                />
              </button>

              <span className="preview-toolbar-divider" />

              <button
                type="button"
                aria-label="Bullet list"
              >
                <List
                  size={15}
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                aria-label="AI assistance"
                className="preview-ai-button"
              >
                <Sparkles
                  size={14}
                  aria-hidden="true"
                />

                <span>Ask AI</span>
              </button>
            </div>

            <article className="preview-document-page">
              <span className="preview-document-label">
                RESEARCH PAPER
              </span>

              <h2 id="preview-introduction">
                AI in Modern Education
              </h2>

              <p className="preview-document-meta">
                Exploring how artificial intelligence is
                transforming learning, teaching, and
                academic research.
              </p>

              <div className="preview-document-rule" />

              <h3 id="preview-methodology">
                Introduction
              </h3>

              <p>
                Artificial intelligence is rapidly
                changing the way educational content is
                created, delivered, and personalized.
                Modern learning environments can use
                intelligent systems to support students
                while helping educators focus on higher
                value interactions.
              </p>

              <p>
                The integration of AI introduces new
                opportunities for adaptive learning,
                automated feedback, and more accessible
                educational experiences.
              </p>

              <h3 id="preview-findings">
                Findings
              </h3>

              <p>
                Early applications demonstrate that
                intelligent tools can help organize
                information, identify learning patterns,
                and assist with repetitive academic work.
              </p>

              <div
                id="preview-discussion"
                className="preview-ai-suggestion"
              >
                <div className="preview-ai-suggestion-header">
                  <span>
                    <Sparkles
                      size={13}
                      aria-hidden="true"
                    />

                    AI suggestion
                  </span>

                  <span>Improve clarity</span>
                </div>

                <p>
                  Consider connecting this paragraph to
                  the research objective for a stronger
                  transition.
                </p>
              </div>

              <h3 id="preview-conclusion">
                Conclusion
              </h3>

              <p>
                AI can become a practical layer within
                modern education when it supports human
                judgment rather than replacing it.
              </p>
            </article>
          </div>

          <aside className="product-preview-ai-panel">
            <div className="preview-panel-heading">
              <span>
                <Sparkles
                  size={14}
                  aria-hidden="true"
                />

                AI Assistant
              </span>

              <button
                type="button"
                aria-label="Close AI assistant"
              >
                <PanelRight
                  size={14}
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="preview-ai-content">
              <div className="preview-ai-welcome">
                <div className="preview-ai-icon">
                  <Sparkles
                    size={15}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <strong>
                    What would you like to improve?
                  </strong>

                  <p>
                    Select text or choose an action below.
                  </p>
                </div>
              </div>

              <div className="preview-ai-actions">
                <button type="button">
                  Improve writing
                </button>

                <button type="button">
                  Make academic
                </button>

                <button type="button">
                  Shorten
                </button>

                <button type="button">
                  Expand
                </button>
              </div>

              <div className="preview-ai-command">
                <span>
                  Ask Paplify anything...
                </span>

                <Sparkles
                  size={14}
                  aria-hidden="true"
                />
              </div>
            </div>
          </aside>
        </div>

        <div className="product-preview-statusbar">
          <span>Page 1 of 6</span>
          <span>1,284 words</span>
          <span>Academic format</span>
          <span className="product-preview-status-ai">
            <Sparkles
              size={12}
              aria-hidden="true"
            />
            AI ready
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview
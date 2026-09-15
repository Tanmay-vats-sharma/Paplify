import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  Command,
  FileText,
  Search,
  X,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { mockDocuments } from '../../constants/mockDocuments'

function CommandSearch({ open, onClose }) {
  const navigate = useNavigate()

  const [query, setQuery] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) {
      return
    }

    setQuery('')

    const timer = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 0)

    return () => {
      window.clearTimeout(timer)
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [open, onClose])

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return mockDocuments.slice(0, 4)
    }

    return mockDocuments.filter((document) => {
      return [
        document.title,
        document.type,
        document.category,
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery)
    })
  }, [query])

  const openDocument = (document) => {
    onClose()

    navigate(
      `/app/documents?document=${encodeURIComponent(
        document.id,
      )}`,
    )
  }

  if (!open) {
    return null
  }

  return (
    <div className="command-search">
      <button
        type="button"
        className="command-search-backdrop"
        aria-label="Close search"
        onClick={onClose}
      />

      <div
        className="command-search-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Search documents"
      >
        <div className="command-search-input-row">
          <Search
            size={19}
            aria-hidden="true"
            className="command-search-input-icon"
          />

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search documents..."
            aria-label="Search documents"
          />

          <button
            type="button"
            className="command-search-close"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="command-search-meta">
          <span>
            {query.trim()
              ? `${results.length} ${
                  results.length === 1
                    ? 'result'
                    : 'results'
                }`
              : 'Recent documents'}
          </span>

          <kbd>ESC</kbd>
        </div>

        <div className="command-search-results">
          {results.length > 0 ? (
            results.map((document) => (
              <button
                key={document.id}
                type="button"
                className="command-search-result"
                onClick={() => openDocument(document)}
              >
                <span className="command-search-result-icon">
                  <FileText
                    size={17}
                    aria-hidden="true"
                  />
                </span>

                <span className="command-search-result-content">
                  <strong>{document.title}</strong>

                  <span>
                    {document.type} ·{' '}
                    {document.updatedAt}
                  </span>
                </span>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="command-search-result-arrow"
                />
              </button>
            ))
          ) : (
            <div className="command-search-empty">
              <div className="command-search-empty-icon">
                <Search
                  size={19}
                  aria-hidden="true"
                />
              </div>

              <strong>No documents found</strong>

              <p>
                Try searching for a document title,
                type, or category.
              </p>
            </div>
          )}
        </div>

        <div className="command-search-footer">
          <span>
            <Command
              size={13}
              aria-hidden="true"
            />
            Search your workspace
          </span>

          <span>Mock data for now</span>
        </div>
      </div>
    </div>
  )
}

export default CommandSearch
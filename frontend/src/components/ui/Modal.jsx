import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = 'md',
  closeOnOverlay = true,
  showClose = true,
}) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  const sizeClass =
    size === 'sm'
      ? 'modal-sm'
      : size === 'lg'
        ? 'modal-lg'
        : size === 'xl'
          ? 'modal-xl'
          : 'modal-md'

  const handleOverlayClick = (event) => {
    if (
      closeOnOverlay &&
      event.target === event.currentTarget
    ) {
      onClose?.()
    }
  }

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onMouseDown={handleOverlayClick}
    >
      <section
        className={`modal ${sizeClass}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={
          description ? 'modal-description' : undefined
        }
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-heading">
            {title && (
              <h2 id="modal-title">{title}</h2>
            )}

            {description && (
              <p id="modal-description">
                {description}
              </p>
            )}
          </div>

          {showClose && (
            <button
              ref={closeButtonRef}
              type="button"
              className="icon-button"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="modal-content">
          {children}
        </div>
      </section>
    </div>
  )
}

export default Modal
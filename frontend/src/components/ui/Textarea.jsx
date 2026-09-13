import { forwardRef } from 'react'

const Textarea = forwardRef(function Textarea(
  {
    label,
    hint,
    error,
    required = false,
    id,
    className = '',
    ...props
  },
  ref,
) {
  const textareaId =
    id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-')}`

  const classes = [
    'form-textarea',
    error ? 'form-input-error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="form-field">
      {label && (
        <label className="form-label" htmlFor={textareaId}>
          {label}

          {required && (
            <span className="form-required" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <textarea
        ref={ref}
        id={textareaId}
        className={classes}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={
          hint || error ? `${textareaId}-description` : undefined
        }
        {...props}
      />

      {(hint || error) && (
        <p
          id={`${textareaId}-description`}
          className={`form-message ${error ? 'form-message-error' : ''}`}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
})

export default Textarea
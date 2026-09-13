import { forwardRef } from 'react'

const Input = forwardRef(function Input(
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
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`

  const classes = [
    'form-input',
    error ? 'form-input-error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="form-field">
      {label && (
        <label className="form-label" htmlFor={inputId}>
          {label}

          {required && (
            <span className="form-required" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <input
        ref={ref}
        id={inputId}
        className={classes}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={
          hint || error ? `${inputId}-description` : undefined
        }
        {...props}
      />

      {(hint || error) && (
        <p
          id={`${inputId}-description`}
          className={`form-message ${error ? 'form-message-error' : ''}`}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
})

export default Input
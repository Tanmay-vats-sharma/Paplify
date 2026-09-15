import { forwardRef, useId } from 'react'

const Input = forwardRef(function Input(
  {
    label,
    error,
    hint,
    leftIcon,
    rightIcon,
    className = '',
    id,
    ...props
  },
  ref,
) {
  const generatedId = useId()
  const inputId = id || `input-${generatedId}`

  const messageId = error
    ? `${inputId}-error`
    : hint
      ? `${inputId}-hint`
      : undefined

  const describedBy = messageId || undefined

  const inputClasses = [
    'form-input',
    error ? 'form-input-error' : '',
    leftIcon ? 'form-input-with-left-icon' : '',
    rightIcon ? 'form-input-with-right-icon' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="form-field">
      {label && (
        <label
          className="form-label"
          htmlFor={inputId}
        >
          <span>{label}</span>

          {props.required && (
            <span
              className="form-required"
              aria-hidden="true"
            >
              *
            </span>
          )}
        </label>
      )}

      <div className="form-input-wrapper">
        {leftIcon && (
          <span
            className="form-input-adornment form-input-adornment-left"
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}

        <input
          {...props}
          ref={ref}
          id={inputId}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={describedBy}
        />

        {rightIcon && (
          <span
            className="form-input-adornment form-input-adornment-right"
            aria-hidden="true"
          >
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <p
          id={`${inputId}-error`}
          className="form-message form-message-error"
          role="alert"
        >
          {error}
        </p>
      )}

      {!error && hint && (
        <p
          id={`${inputId}-hint`}
          className="form-message"
        >
          {hint}
        </p>
      )}
    </div>
  )
})

export default Input
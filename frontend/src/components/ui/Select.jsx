import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'

const Select = forwardRef(function Select(
  {
    label,
    hint,
    error,
    required = false,
    id,
    options = [],
    placeholder = 'Select an option',
    className = '',
    ...props
  },
  ref,
) {
  const selectId =
    id || `select-${label?.toLowerCase().replace(/\s+/g, '-')}`

  const classes = [
    'form-select',
    error ? 'form-input-error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="form-field">
      {label && (
        <label className="form-label" htmlFor={selectId}>
          {label}

          {required && (
            <span className="form-required" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className="form-select-wrapper">
        <select
          ref={ref}
          id={selectId}
          className={classes}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            hint || error ? `${selectId}-description` : undefined
          }
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="form-select-icon"
          aria-hidden="true"
        />
      </div>

      {(hint || error) && (
        <p
          id={`${selectId}-description`}
          className={`form-message ${error ? 'form-message-error' : ''}`}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
})

export default Select
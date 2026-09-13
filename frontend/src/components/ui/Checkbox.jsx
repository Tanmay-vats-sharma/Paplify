import { Check } from 'lucide-react'

function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  id,
  ...props
}) {
  const checkboxId =
    id || `checkbox-${label?.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <label
      className={`checkbox-field ${
        disabled ? 'checkbox-disabled' : ''
      }`}
      htmlFor={checkboxId}
    >
      <span className="checkbox-control">
        <input
          id={checkboxId}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />

        <span className="checkbox-box">
          <Check size={13} strokeWidth={3} aria-hidden="true" />
        </span>
      </span>

      {(label || description) && (
        <span className="checkbox-content">
          {label && (
            <span className="checkbox-label">
              {label}
            </span>
          )}

          {description && (
            <span className="checkbox-description">
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  )
}

export default Checkbox
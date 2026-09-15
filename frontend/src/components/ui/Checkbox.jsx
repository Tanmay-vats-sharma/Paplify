import { Check } from 'lucide-react'

function Checkbox({
  label,
  description,
  checked = false,
  defaultChecked = false,
  onChange,
  disabled = false,
  required = false,
  id,
  name,
  className = '',
}) {
  const checkboxId =
    id || `checkbox-${Math.random().toString(36).slice(2, 9)}`

  const classes = [
    'checkbox-field',
    disabled ? 'checkbox-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label
      htmlFor={checkboxId}
      className={classes}
    >
      <span className="checkbox-control">
        <input
          id={checkboxId}
          name={name}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />

        <span className="checkbox-box" aria-hidden="true">
          {checked && <Check size={13} strokeWidth={2.5} />}
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
function Switch({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  id,
}) {
  const switchId =
    id || `switch-${label?.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <label
      className={`switch-field ${
        disabled ? 'switch-disabled' : ''
      }`}
      htmlFor={switchId}
    >
      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        className={`switch ${checked ? 'switch-active' : ''}`}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
      >
        <span className="switch-thumb" />
      </button>

      {(label || description) && (
        <span className="switch-content">
          {label && (
            <span className="switch-label">
              {label}
            </span>
          )}

          {description && (
            <span className="switch-description">
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  )
}

export default Switch
import { Loader2 } from 'lucide-react'

const variantClasses = {
  primary: 'button button-primary',
  secondary: 'button button-secondary',
  outline: 'button button-outline',
  ghost: 'button button-ghost',
  danger: 'button button-danger',
  ai: 'button button-ai',
}

const sizeClasses = {
  sm: 'button-sm',
  md: 'button-md',
  lg: 'button-lg',
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  type = 'button',
  className = '',
  onClick,
  ...props
}) {
  const variantClass =
    variantClasses[variant] || variantClasses.primary

  const sizeClass = sizeClasses[size] || sizeClasses.md

  const classes = [
    variantClass,
    sizeClass,
    loading ? 'button-loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <Loader2
          size={16}
          aria-hidden="true"
          className="button-spinner"
        />
      ) : (
        leftIcon
      )}

      <span>{children}</span>

      {!loading && rightIcon}
    </button>
  )
}

export default Button
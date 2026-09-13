const variantClasses = {
  neutral: 'badge-neutral',
  primary: 'badge-primary',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
  info: 'badge-info',
  ai: 'badge-ai',
}

function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
}) {
  const classes = [
    'badge',
    variantClasses[variant] || variantClasses.neutral,
    size === 'sm' ? 'badge-sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={classes}>{children}</span>
}

export default Badge
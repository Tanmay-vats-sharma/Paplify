function Card({
  children,
  className = '',
  padding = 'md',
  hoverable = false,
  onClick,
  ...props
}) {
  const classes = [
    'card',
    `card-padding-${padding}`,
    hoverable ? 'card-hoverable' : '',
    onClick ? 'card-interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
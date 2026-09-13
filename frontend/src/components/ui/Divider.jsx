function Divider({
  orientation = 'horizontal',
  label,
  className = '',
}) {
  const classes = [
    'divider',
    orientation === 'vertical'
      ? 'divider-vertical'
      : 'divider-horizontal',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (label && orientation === 'horizontal') {
    return (
      <div className={classes}>
        <span className="divider-line" />
        <span className="divider-label">{label}</span>
        <span className="divider-line" />
      </div>
    )
  }

  return <div className={classes} />
}

export default Divider
function Grid({
  children,
  columns = 'auto',
  gap = 'md',
  className = '',
}) {
  const classes = [
    'grid',
    `grid-columns-${columns}`,
    `grid-gap-${gap}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

export default Grid
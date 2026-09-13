function Stack({
  children,
  gap = 'md',
  align = 'stretch',
  className = '',
}) {
  const classes = [
    'stack',
    `stack-gap-${gap}`,
    `stack-align-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

export default Stack
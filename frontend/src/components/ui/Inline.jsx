function Inline({
  children,
  gap = 'md',
  align = 'center',
  justify = 'start',
  wrap = true,
  className = '',
}) {
  const classes = [
    'inline',
    `inline-gap-${gap}`,
    `inline-align-${align}`,
    `inline-justify-${justify}`,
    wrap ? 'inline-wrap' : 'inline-nowrap',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

export default Inline
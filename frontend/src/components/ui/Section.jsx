function Section({
  children,
  spacing = 'lg',
  className = '',
  as: Component = 'section',
}) {
  const classes = [
    'section',
    `section-${spacing}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Component className={classes}>{children}</Component>
}

export default Section
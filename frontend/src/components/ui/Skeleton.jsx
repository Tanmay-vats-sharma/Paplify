function Skeleton({
  width = '100%',
  height = '16px',
  radius = 'md',
  className = '',
}) {
  return (
    <span
      className={`skeleton skeleton-radius-${radius} ${className}`}
      style={{
        width,
        height,
      }}
      aria-hidden="true"
    />
  )
}

export default Skeleton
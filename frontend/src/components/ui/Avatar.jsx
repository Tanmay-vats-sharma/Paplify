import { User } from 'lucide-react'

function getInitials(name = '') {
  const words = name.trim().split(/\s+/).filter(Boolean)

  if (words.length === 0) {
    return ''
  }

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase()
  }

  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
}

function Avatar({
  src,
  name,
  size = 'md',
  alt,
  className = '',
}) {
  const sizes = {
    xs: 'avatar-xs',
    sm: 'avatar-sm',
    md: 'avatar-md',
    lg: 'avatar-lg',
    xl: 'avatar-xl',
  }

  const classes = [
    'avatar',
    sizes[size] || sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const accessibleName = alt || name || 'User'

  return (
    <div className={classes}>
      {src ? (
        <img
          src={src}
          alt={accessibleName}
          className="avatar-image"
        />
      ) : name ? (
        <span className="avatar-initials" aria-hidden="true">
          {getInitials(name)}
        </span>
      ) : (
        <User size={18} aria-hidden="true" />
      )}
    </div>
  )
}

export default Avatar
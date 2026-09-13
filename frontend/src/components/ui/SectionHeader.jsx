import Inline from './Inline'
import Stack from './Stack'

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className = '',
}) {
  const classes = ['section-header', className]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <Stack gap="xs">
        {eyebrow && (
          <span className="section-header-eyebrow">
            {eyebrow}
          </span>
        )}

        <h2 className="section-header-title">{title}</h2>

        {description && (
          <p className="section-header-description">
            {description}
          </p>
        )}
      </Stack>

      {action && (
        <Inline
          gap="sm"
          wrap={false}
          className="section-header-action"
        >
          {action}
        </Inline>
      )}
    </header>
  )
}

export default SectionHeader
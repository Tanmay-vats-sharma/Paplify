import Inline from './Inline'
import Stack from './Stack'

function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className = '',
}) {
  const classes = ['page-header', className]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <Stack gap="xs">
        {eyebrow && <span className="page-header-eyebrow">{eyebrow}</span>}

        <h1 className="page-header-title">{title}</h1>

        {description && (
          <p className="page-header-description">{description}</p>
        )}
      </Stack>

      {actions && (
        <Inline
          gap="sm"
          wrap
          className="page-header-actions"
        >
          {actions}
        </Inline>
      )}
    </header>
  )
}

export default PageHeader
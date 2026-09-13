import { FileText } from 'lucide-react'
import Button from './Button'

function EmptyState({
  icon: Icon = FileText,
  title = 'Nothing here yet',
  description,
  actionLabel,
  onAction,
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <Icon size={24} aria-hidden="true" />
      </div>

      <h3>{title}</h3>

      {description && (
        <p>{description}</p>
      )}

      {actionLabel && (
        <Button
          size="sm"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

export default EmptyState
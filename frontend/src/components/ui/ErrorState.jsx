import { AlertCircle } from 'lucide-react'
import Button from './Button'

function ErrorState({
  title = 'Something went wrong',
  description = "We couldn't complete this request. Please try again.",
  actionLabel = 'Try again',
  onAction,
}) {
  return (
    <div className="error-state">
      <div className="error-state-icon">
        <AlertCircle size={24} aria-hidden="true" />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {onAction && (
        <Button
          variant="outline"
          size="sm"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

export default ErrorState
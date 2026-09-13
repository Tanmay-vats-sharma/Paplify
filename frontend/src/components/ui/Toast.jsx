import {
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  X,
} from 'lucide-react'

const toastConfig = {
  success: {
    icon: CheckCircle2,
    className: 'toast-success',
  },
  error: {
    icon: AlertCircle,
    className: 'toast-error',
  },
  warning: {
    icon: AlertTriangle,
    className: 'toast-warning',
  },
  info: {
    icon: Info,
    className: 'toast-info',
  },
}

function Toast({
  toast,
  onDismiss,
}) {
  const config =
    toastConfig[toast.type] || toastConfig.info

  const Icon = config.icon

  return (
    <div
      className={`toast ${config.className}`}
      role="status"
      aria-live="polite"
    >
      <Icon
        size={19}
        className="toast-icon"
        aria-hidden="true"
      />

      <div className="toast-content">
        {toast.title && (
          <strong>{toast.title}</strong>
        )}

        {toast.message && (
          <p>{toast.message}</p>
        )}
      </div>

      <button
        type="button"
        className="toast-close"
        onClick={() => onDismiss(toast.id)}
        aria-label="Dismiss notification"
      >
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  )
}

export default Toast
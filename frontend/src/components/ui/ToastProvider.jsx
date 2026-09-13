import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Toast from './Toast'

const ToastContext = createContext(null)

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => {
    setToasts((current) =>
      current.filter((toast) => toast.id !== id),
    )
  }, [])

  const addToast = useCallback(
    ({
      type = 'info',
      title,
      message,
      duration = 4000,
    }) => {
      const id =
        typeof crypto !== 'undefined' &&
        crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random()}`

      setToasts((current) => [
        ...current,
        {
          id,
          type,
          title,
          message,
        },
      ])

      if (duration > 0) {
        window.setTimeout(() => {
          dismiss(id)
        }, duration)
      }

      return id
    },
    [dismiss],
  )

  const toast = useMemo(
    () => ({
      show: addToast,

      success: (options) =>
        addToast({
          ...options,
          type: 'success',
        }),

      error: (options) =>
        addToast({
          ...options,
          type: 'error',
        }),

      warning: (options) =>
        addToast({
          ...options,
          type: 'warning',
        }),

      info: (options) =>
        addToast({
          ...options,
          type: 'info',
        }),

      dismiss,
    }),
    [addToast, dismiss],
  )

  return (
    <ToastContext.Provider value={toast}>
      {children}

      <div
        className="toast-container"
        aria-label="Notifications"
      >
        {toasts.map((item) => (
          <Toast
            key={item.id}
            toast={item}
            onDismiss={dismiss}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error(
      'useToast must be used inside ToastProvider',
    )
  }

  return context
}

export default ToastProvider
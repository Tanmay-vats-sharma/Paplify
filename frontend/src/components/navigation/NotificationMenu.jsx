import {
  Bell,
  Check,
  FileText,
  Sparkles,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const notifications = [
  {
    id: 'notification-1',
    type: 'ai',
    title: 'AI suggestion ready',
    description:
      'Your introduction can be improved for a more academic tone.',
    time: '18 min ago',
    unread: true,
  },
  {
    id: 'notification-2',
    type: 'document',
    title: 'Document saved',
    description:
      'AI in Modern Education was saved successfully.',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 'notification-3',
    type: 'system',
    title: 'Welcome to Paplify',
    description:
      'Start with a template or create a document from scratch.',
    time: 'Today',
    unread: false,
  },
]

function NotificationMenu() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(notifications)

  const menuRef = useRef(null)

  const unreadCount = items.filter(
    (item) => item.unread,
  ).length

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener(
      'pointerdown',
      handlePointerDown,
    )

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener(
        'pointerdown',
        handlePointerDown,
      )

      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [open])

  const markAllAsRead = () => {
    setItems((current) =>
      current.map((item) => ({
        ...item,
        unread: false,
      })),
    )
  }

  const getIcon = (type) => {
    if (type === 'ai') {
      return (
        <Sparkles
          size={16}
          aria-hidden="true"
        />
      )
    }

    if (type === 'document') {
      return (
        <FileText
          size={16}
          aria-hidden="true"
        />
      )
    }

    return (
      <Bell
        size={16}
        aria-hidden="true"
      />
    )
  }

  return (
    <div
      ref={menuRef}
      className="app-notification-menu"
    >
      <button
        type="button"
        className="app-notification-trigger"
        aria-label={
          unreadCount > 0
            ? `${unreadCount} unread notifications`
            : 'Notifications'
        }
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() =>
          setOpen((current) => !current)
        }
      >
        <Bell
          size={18}
          aria-hidden="true"
        />

        {unreadCount > 0 && (
          <span
            className="app-notification-count"
            aria-hidden="true"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          className="app-notification-dropdown"
          role="dialog"
          aria-label="Notifications"
        >
          <header className="app-notification-header">
            <div>
              <h2>Notifications</h2>

              <p>
                {unreadCount > 0
                  ? `${unreadCount} unread`
                  : 'All caught up'}
              </p>
            </div>

            <button
              type="button"
              className="app-notification-close"
              onClick={() => setOpen(false)}
              aria-label="Close notifications"
            >
              <X
                size={16}
                aria-hidden="true"
              />
            </button>
          </header>

          <div className="app-notification-actions">
            <button
              type="button"
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
            >
              <Check
                size={14}
                aria-hidden="true"
              />
              Mark all as read
            </button>
          </div>

          <div className="app-notification-list">
            {items.map((item) => (
              <button
                type="button"
                key={item.id}
                className={[
                  'app-notification-item',
                  item.unread
                    ? 'app-notification-item-unread'
                    : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => {
                  setItems((current) =>
                    current.map((notification) =>
                      notification.id === item.id
                        ? {
                            ...notification,
                            unread: false,
                          }
                        : notification,
                    ),
                  )
                }}
              >
                <span
                  className={[
                    'app-notification-icon',
                    `app-notification-icon-${item.type}`,
                  ].join(' ')}
                >
                  {getIcon(item.type)}
                </span>

                <span className="app-notification-content">
                  <strong>{item.title}</strong>

                  <span>{item.description}</span>

                  <small>{item.time}</small>
                </span>

                {item.unread && (
                  <span
                    className="app-notification-unread-dot"
                    aria-label="Unread"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationMenu
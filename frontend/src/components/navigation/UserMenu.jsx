import {
  ChevronDown,
  LogOut,
  Settings,
  User,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function UserMenu() {
  const [open, setOpen] = useState(false)

  const menuRef = useRef(null)

  const navigate = useNavigate()

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

    document.addEventListener(
      'keydown',
      handleKeyDown,
    )

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

  const handleLogout = () => {
    setOpen(false)

    /*
     * Mock logout.
     *
     * Real authentication state will be connected
     * when the backend authentication layer is built.
     */

    navigate('/login')
  }

  return (
    <div
      ref={menuRef}
      className="app-user-menu"
    >
      <button
        type="button"
        className="app-user-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() =>
          setOpen((current) => !current)
        }
      >
        <span className="app-user-avatar">
          TS
        </span>

        <span className="app-user-trigger-info">
          <span className="app-user-name">
            Tanmay Sharma
          </span>

          <span className="app-user-plan">
            Free workspace
          </span>
        </span>

        <ChevronDown
          size={15}
          aria-hidden="true"
          className={[
            'app-user-chevron',
            open
              ? 'app-user-chevron-open'
              : '',
          ]
            .filter(Boolean)
            .join(' ')}
        />
      </button>

      {open && (
        <div
          className="app-user-dropdown"
          role="menu"
        >
          <div className="app-user-dropdown-header">
            <span className="app-user-dropdown-avatar">
              TS
            </span>

            <div>
              <span className="app-user-dropdown-name">
                Tanmay Sharma
              </span>

              <span className="app-user-dropdown-email">
                tanmay@example.com
              </span>
            </div>
          </div>

          <div className="app-user-dropdown-divider" />

          <Link
            to="/app/settings"
            className="app-user-dropdown-item"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <User
              size={16}
              aria-hidden="true"
            />

            <span>Profile</span>
          </Link>

          <Link
            to="/app/settings"
            className="app-user-dropdown-item"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <Settings
              size={16}
              aria-hidden="true"
            />

            <span>Settings</span>
          </Link>

          <div className="app-user-dropdown-divider" />

          <button
            type="button"
            className="app-user-dropdown-item app-user-dropdown-danger"
            role="menuitem"
            onClick={handleLogout}
          >
            <LogOut
              size={16}
              aria-hidden="true"
            />

            <span>Sign out</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default UserMenu
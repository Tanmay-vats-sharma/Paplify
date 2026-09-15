import {
  FilePlus2,
  FileText,
  LayoutTemplate,
  Settings,
  Sparkles,
  X,
} from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'

const primaryNavigation = [
  {
    label: 'Dashboard',
    to: '/app',
    icon: Sparkles,
    end: true,
  },
  {
    label: 'Documents',
    to: '/app/documents',
    icon: FileText,
  },
  {
    label: 'Templates',
    to: '/app/templates',
    icon: LayoutTemplate,
  },
]

function AppSidebar({ open = false, onClose }) {
  const navigate = useNavigate()

  const getNavClassName = ({ isActive }) =>
    [
      'app-sidebar-link',
      isActive ? 'app-sidebar-link-active' : '',
    ]
      .filter(Boolean)
      .join(' ')

  const handleCreate = () => {
    navigate('/app/create')

    if (onClose) {
      onClose()
    }
  }

  return (
    <aside
      className={[
        'app-sidebar',
        open ? 'app-sidebar-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label="Main navigation"
    >
      <div className="app-sidebar-header">
        <NavLink
          to="/app"
          className="app-sidebar-brand"
          onClick={onClose}
          aria-label="Paplify dashboard"
        >
          <span className="app-sidebar-brand-mark">
            <Sparkles size={16} aria-hidden="true" />
          </span>

          <span className="app-sidebar-brand-name">
            Paplify
          </span>
        </NavLink>

        <button
          type="button"
          className="app-sidebar-close"
          onClick={onClose}
          aria-label="Close navigation"
        >
          <X size={19} aria-hidden="true" />
        </button>
      </div>

      <div className="app-sidebar-body">
        <button
          type="button"
          className="app-sidebar-create"
          onClick={handleCreate}
        >
          <FilePlus2 size={17} aria-hidden="true" />
          <span>Create document</span>
        </button>

        <nav className="app-sidebar-nav">
          <div className="app-sidebar-nav-label">
            Workspace
          </div>

          {primaryNavigation.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={getNavClassName}
                onClick={onClose}
              >
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="app-sidebar-divider" />

        <nav className="app-sidebar-nav">
          <div className="app-sidebar-nav-label">
            Account
          </div>

          <NavLink
            to="/app/settings"
            className={getNavClassName}
            onClick={onClose}
          >
            <Settings
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      <div className="app-sidebar-footer">
        <div className="app-sidebar-user">
          <div className="app-sidebar-user-avatar">
            TS
          </div>

          <div className="app-sidebar-user-info">
            <span className="app-sidebar-user-name">
              Tanmay Sharma
            </span>

            <span className="app-sidebar-user-email">
              tanmay@example.com
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default AppSidebar
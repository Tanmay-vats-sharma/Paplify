import { HelpCircle, Menu, Search } from 'lucide-react'
import { useEffect, useState } from 'react'

import Button from '../ui/Button'
import NotificationMenu from './NotificationMenu'
import UserMenu from './UserMenu'
import CommandSearch from './CommandSearch'

function AppTopbar({ onMenuClick }) {
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === 'k'

      if (isShortcut) {
        event.preventDefault()
        setSearchOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [])

  return (
    <>
      <header className="app-topbar">
        <div className="app-topbar-left">
          <button
            type="button"
            className="app-topbar-menu"
            onClick={onMenuClick}
            aria-label="Open navigation"
          >
            <Menu
              size={20}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className="app-search-trigger"
            onClick={() => setSearchOpen(true)}
            aria-label="Search documents"
          >
            <Search
              size={17}
              aria-hidden="true"
            />

            <span>Search documents...</span>

           <kbd>Ctrl K</kbd>
          </button>
        </div>

        <div className="app-topbar-actions">
          <Button
            variant="ghost"
            size="sm"
            className="app-topbar-icon-button"
            aria-label="Help and support"
            title="Help and support"
          >
            <HelpCircle
              size={18}
              aria-hidden="true"
            />
          </Button>

          <NotificationMenu />

          <div className="app-topbar-divider" />

          <UserMenu />
        </div>
      </header>

      <CommandSearch
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  )
}

export default AppTopbar
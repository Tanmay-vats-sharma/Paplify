import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import AppSidebar from './AppSidebar'
import AppTopbar from './AppTopbar'

function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!sidebarOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  return (
    <div className="app-shell">
      <AppSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <button
          type="button"
          className="app-shell-overlay"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="app-shell-main">
        <AppTopbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="app-shell-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppShell
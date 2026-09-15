import { useState } from 'react'
import {
  ArrowRight,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

import Button from '../ui/Button'

function LandingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileOpen(false)
  }

  return (
    <header className="landing-navbar">
      <div className="landing-navbar-inner">
        <a
          href="#top"
          className="landing-brand"
          aria-label="Paplify home"
          onClick={closeMobileMenu}
        >
          <span className="landing-brand-mark">
            <Sparkles size={16} aria-hidden="true" />
          </span>

          <span className="landing-brand-name">
            Paplify
          </span>
        </a>

        <nav
          className={`landing-nav ${
            mobileOpen ? 'landing-nav-open' : ''
          }`}
          aria-label="Main navigation"
        >
          <a
            href="#workflow"
            onClick={closeMobileMenu}
          >
            How it works
          </a>

          <a
            href="#features"
            onClick={closeMobileMenu}
          >
            Features
          </a>

          <a
            href="#templates"
            onClick={closeMobileMenu}
          >
            Templates
          </a>

          <a
            href="#faq"
            onClick={closeMobileMenu}
          >
            FAQ
          </a>

          <div className="landing-mobile-actions">
            <Button
              variant="ghost"
              size="sm"
            >
              Sign in
            </Button>

            <Button
              size="sm"
              rightIcon={<ArrowRight size={15} />}
            >
              Get started
            </Button>
          </div>
        </nav>

        <div className="landing-navbar-actions">
          <Button
            variant="ghost"
            size="sm"
          >
            Sign in
          </Button>

          <Button
            size="sm"
            rightIcon={<ArrowRight size={15} />}
          >
            Get started
          </Button>
        </div>

        <button
          type="button"
          className="landing-mobile-menu-button"
          aria-label={
            mobileOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  )
}

export default LandingNavbar
import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'

function AuthLayout({
  children,
  eyebrow = 'Welcome to Paplify',
  title,
  description,
  footer,
  showBackLink = true,
}) {
  return (
    <main className="auth-page">
      <div className="auth-background" aria-hidden="true">
        <div className="auth-background-orb auth-background-orb-one" />
        <div className="auth-background-orb auth-background-orb-two" />
      </div>

      <div className="auth-container">
        <header className="auth-topbar">
          <Link
            to="/"
            className="auth-brand"
            aria-label="Paplify home"
          >
            <span className="auth-brand-mark">
              <Sparkles size={17} aria-hidden="true" />
            </span>

            <span>Paplify</span>
          </Link>

          {showBackLink && (
            <Link
              to="/"
              className="auth-back-link"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              <span>Back to home</span>
            </Link>
          )}
        </header>

        <section className="auth-content">
          <div className="auth-card">
            <div className="auth-heading">
              <span className="auth-eyebrow">
                {eyebrow}
              </span>

              <h1>{title}</h1>

              <p>{description}</p>
            </div>

            <div className="auth-form-content">
              {children}
            </div>

            {footer && (
              <div className="auth-footer">
                {footer}
              </div>
            )}
          </div>
        </section>

        <footer className="auth-page-footer">
          <span>© {new Date().getFullYear()} Paplify</span>
          <span className="auth-footer-dot">•</span>
          <span>Turn ideas into polished documents.</span>
        </footer>
      </div>
    </main>
  )
}

export default AuthLayout
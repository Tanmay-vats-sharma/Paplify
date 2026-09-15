import {
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="landing-footer-inner">
        <div className="landing-footer-brand">
          <a
            href="#top"
            className="landing-brand"
          >
            <span className="landing-brand-mark">
              <Sparkles
                size={16}
                aria-hidden="true"
              />
            </span>

            <span className="landing-brand-name">
              Paplify
            </span>
          </a>

          <p>
            An intelligent workspace for creating better
            documents.
          </p>
        </div>

        <div className="landing-footer-links">
          <div>
            <h3>Product</h3>

            <a href="#features">
              Features
            </a>

            <a href="#templates">
              Templates
            </a>

            <a href="#workflow">
              How it works
            </a>
          </div>

          <div>
            <h3>Resources</h3>

            <a href="#faq">
              FAQ
            </a>

            <a href="#templates">
              Document types
            </a>

            <a href="#top">
              Get started
              <ArrowUpRight
                size={12}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="landing-footer-bottom">
        <span>
          © {new Date().getFullYear()} Paplify
        </span>

        <span>
          Create. Edit. Improve. Format. Export.
        </span>
      </div>
    </footer>
  )
}

export default LandingFooter
import {
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'

import Button from '../ui/Button'
import Badge from '../ui/Badge'
import Stack from '../ui/Stack'
import Inline from '../ui/Inline'
import ProductPreview from './ProductPreview'

function HeroSection() {
  return (
    <section
      id="top"
      className="landing-hero"
    >
      <div className="landing-hero-glow" />

      <div className="landing-hero-content">
        <Badge
          variant="ai"
          size="sm"
        >
          <Sparkles
            size={13}
            aria-hidden="true"
          />

          AI-powered document workspace
        </Badge>

        <h1 className="landing-hero-title">
          Turn your ideas into
          <span> polished documents.</span>
        </h1>

        <p className="landing-hero-description">
          Create, edit, improve, format, and export
          professional documents from one intelligent
          workspace.
        </p>

        <Inline
          gap="sm"
          justify="center"
          className="landing-hero-actions"
        >
          <Button
            size="lg"
            rightIcon={
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            }
          >
            Start creating
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            Explore templates
          </Button>
        </Inline>

        <Inline
          gap="lg"
          justify="center"
          className="landing-hero-trust"
        >
          <span>
            <Check size={14} aria-hidden="true" />
            Structured documents
          </span>

          <span>
            <Check size={14} aria-hidden="true" />
            AI-assisted editing
          </span>

          <span>
            <Check size={14} aria-hidden="true" />
            Export-ready
          </span>
        </Inline>
      </div>

      <ProductPreview />
    </section>
  )
}

export default HeroSection
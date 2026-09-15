import {
  ArrowRight,
  Sparkles,
} from 'lucide-react'

import Button from '../ui/Button'
import Container from '../ui/Container'
import Section from '../ui/Section'

function CTASection() {
  return (
    <Section
      spacing="lg"
      className="landing-cta-section"
    >
      <Container size="lg">
        <div className="landing-cta">
          <div className="landing-cta-glow" />

          <div className="landing-cta-icon">
            <Sparkles
              size={20}
              aria-hidden="true"
            />
          </div>

          <h2>
            Your next document
            <span> starts here.</span>
          </h2>

          <p>
            Start with an idea, a template, or a blank page.
            Paplify helps you take it the rest of the way.
          </p>

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
        </div>
      </Container>
    </Section>
  )
}

export default CTASection
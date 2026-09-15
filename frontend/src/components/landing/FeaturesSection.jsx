import {
  FileCheck2,
  FileOutput,
  LayoutTemplate,
  PenLine,
  SearchCheck,
  Sparkles,
} from 'lucide-react'

import Badge from '../ui/Badge'
import Card from '../ui/Card'
import Container from '../ui/Container'
import Grid from '../ui/Grid'
import Section from '../ui/Section'
import Stack from '../ui/Stack'

const features = [
  {
    icon: FileCheck2,
    title: 'Structured documents',
    description:
      'Build documents from real structure instead of treating everything as a block of generated text.',
  },
  {
    icon: Sparkles,
    title: 'AI where you need it',
    description:
      'Generate sections, rewrite selected content, improve clarity, change tone, summarize, and more.',
  },
  {
    icon: PenLine,
    title: 'Rich editing',
    description:
      'Write and refine your work with headings, lists, links, tables, quotes, code, and document navigation.',
  },
  {
    icon: LayoutTemplate,
    title: 'Professional templates',
    description:
      'Start faster with carefully structured templates for academic, business, career, and technical work.',
  },
  {
    icon: SearchCheck,
    title: 'Review before export',
    description:
      'Check structure, grammar, formatting, and document consistency before you finalize your work.',
  },
  {
    icon: FileOutput,
    title: 'Export your way',
    description:
      'Move your structured document into the format you need without rebuilding it from scratch.',
  },
]

function FeaturesSection() {
  return (
    <Section
      spacing="lg"
      className="landing-section landing-features"
    >
      <Container>
        <div
          id="features"
          className="landing-section-anchor"
        />

        <div className="landing-section-heading landing-section-heading-left">
          <Badge size="sm">
            One workspace
          </Badge>

          <h2>
            Everything your document
            <span> actually needs.</span>
          </h2>

          <p>
            Powerful tools without turning the writing
            experience into a complicated control panel.
          </p>
        </div>

        <Grid
          columns="3"
          gap="md"
        >
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <Card
                key={feature.title}
                className="feature-card"
              >
                <Stack gap="lg">
                  <div className="feature-icon">
                    <Icon
                      size={20}
                      aria-hidden="true"
                    />
                  </div>

                  <Stack gap="sm">
                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                  </Stack>
                </Stack>
              </Card>
            )
          })}
        </Grid>
      </Container>
    </Section>
  )
}

export default FeaturesSection
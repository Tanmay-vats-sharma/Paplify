import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  PenTool,
} from 'lucide-react'

import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Stack from '../ui/Stack'

const templates = [
  {
    icon: GraduationCap,
    category: 'Academic',
    title: 'IEEE Research Paper',
    description:
      'A structured starting point for research papers, technical studies, and academic writing.',
    examples: 'Research Paper · Thesis · Assignment',
  },
  {
    icon: BriefcaseBusiness,
    category: 'Business',
    title: 'Project Proposal',
    description:
      'Turn an idea into a clear, professional proposal with the right sections already in place.',
    examples: 'Proposal · Business Report · Meeting Report',
  },
  {
    icon: PenTool,
    category: 'Career',
    title: 'Professional Resume',
    description:
      'Create a focused resume with a clean structure designed around your experience.',
    examples: 'Resume · CV · Cover Letter',
  },
  {
    icon: Code2,
    category: 'Technical',
    title: 'Software Documentation',
    description:
      'Document systems, APIs, requirements, and technical decisions in a structured format.',
    examples: 'SRS · API Docs · System Design',
  },
]

function TemplatesSection() {
  return (
    <Section
      spacing="lg"
      className="landing-section"
    >
      <Container>
        <div
          id="templates"
          className="landing-section-anchor"
        />

        <div className="landing-section-heading">
          <Badge size="sm">
            Start faster
          </Badge>

          <h2>
            A strong structure,
            <span> before you write.</span>
          </h2>

          <p>
            Choose a document type and start with a structure
            designed for the kind of work you're creating.
          </p>
        </div>

        <div className="template-showcase-grid">
          {templates.map((template) => {
            const Icon = template.icon

            return (
              <Card
                key={template.title}
                className="template-showcase-card"
              >
                <div className="template-card-visual">
                  <div className="template-paper">
                    <div className="template-paper-heading" />
                    <div className="template-paper-line template-paper-line-short" />
                    <div className="template-paper-line" />
                    <div className="template-paper-line" />
                    <div className="template-paper-section" />
                    <div className="template-paper-line" />
                    <div className="template-paper-line template-paper-line-medium" />
                  </div>

                  <div className="template-card-icon">
                    <Icon
                      size={18}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <Stack gap="sm">
                  <Badge size="sm">
                    {template.category}
                  </Badge>

                  <h3>{template.title}</h3>

                  <p>{template.description}</p>

                  <span className="template-examples">
                    {template.examples}
                  </span>
                </Stack>

                <Button
                  variant="ghost"
                  size="sm"
                  rightIcon={
                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                    />
                  }
                  className="template-use-button"
                >
                  Use template
                </Button>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default TemplatesSection
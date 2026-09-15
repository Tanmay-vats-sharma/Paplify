import {
  ArrowRight,
  Check,
  FilePlus2,
  PencilLine,
  Sparkles,
  Download,
} from 'lucide-react'

import Badge from '../ui/Badge'
import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Stack from '../ui/Stack'

const workflowSteps = [
  {
    number: '01',
    icon: FilePlus2,
    title: 'Create',
    description:
      'Start from an idea, choose a template, or describe what you need.',
  },
  {
    number: '02',
    icon: PencilLine,
    title: 'Edit',
    description:
      'Work inside a structured document editor designed for real writing.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Improve',
    description:
      'Use AI exactly where you need it to rewrite, expand, simplify, or refine content.',
  },
  {
    number: '04',
    icon: Check,
    title: 'Format',
    description:
      'Apply consistent structure, typography, spacing, and document formatting.',
  },
  {
    number: '05',
    icon: Download,
    title: 'Export',
    description:
      'Preview your finished document and export it in the format you need.',
  },
]

function WorkflowSection() {
  return (
    <Section
      spacing="lg"
      className="landing-section"
    >
      <Container>
        <div
          id="workflow"
          className="landing-section-anchor"
        />

        <div className="landing-section-heading">
          <Badge size="sm">
            The Paplify workflow
          </Badge>

          <h2>
            From a blank page to
            <span> finished work.</span>
          </h2>

          <p>
            Paplify brings creation, editing, AI assistance,
            formatting, and export into one continuous
            workspace.
          </p>
        </div>

        <div className="workflow-grid">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                className="workflow-step"
                key={step.number}
              >
                <Card className="workflow-card">
                  <div className="workflow-card-top">
                    <span className="workflow-number">
                      {step.number}
                    </span>

                    <div className="workflow-icon">
                      <Icon
                        size={19}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <Stack gap="sm">
                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </Stack>
                </Card>

                {index < workflowSteps.length - 1 && (
                  <ArrowRight
                    className="workflow-arrow"
                    size={18}
                    aria-hidden="true"
                  />
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default WorkflowSection
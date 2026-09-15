import {
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  Heart,
} from 'lucide-react'

import Container from '../ui/Container'
import Section from '../ui/Section'

const documentTypes = [
  {
    icon: GraduationCap,
    title: 'Academic',
    description:
      'Research papers, assignments, lab reports, projects, and theses.',
  },
  {
    icon: Briefcase,
    title: 'Business',
    description:
      'Reports, proposals, project documents, and meeting notes.',
  },
  {
    icon: Code2,
    title: 'Technical',
    description:
      'SRS documents, API documentation, system designs, and technical guides.',
  },
  {
    icon: BookOpen,
    title: 'Career',
    description:
      'Resumes, CVs, cover letters, and professional documents.',
  },
  {
    icon: Heart,
    title: 'Personal',
    description:
      'Plans, letters, structured notes, and other everyday documents.',
  },
]

function DocumentTypesSection() {
  return (
    <Section
      spacing="lg"
      className="landing-section landing-document-types"
    >
      <Container>
        <div className="document-types-content">
          <div className="document-types-heading">
            <span className="landing-kicker">
              Built for real work
            </span>

            <h2>
              Whatever you're
              <span> working on.</span>
            </h2>

            <p>
              Paplify adapts to the document instead of forcing
              every kind of work into the same format.
            </p>
          </div>

          <div className="document-types-list">
            {documentTypes.map((type) => {
              const Icon = type.icon

              return (
                <div
                  className="document-type-item"
                  key={type.title}
                >
                  <div className="document-type-icon">
                    <Icon
                      size={19}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3>{type.title}</h3>
                    <p>{type.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default DocumentTypesSection
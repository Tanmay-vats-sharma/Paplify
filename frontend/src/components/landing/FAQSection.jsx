import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import Badge from '../ui/Badge'
import Container from '../ui/Container'
import Section from '../ui/Section'

const questions = [
  {
    question: 'What is Paplify?',
    answer:
      'Paplify is an AI-powered document workspace that helps you create, edit, improve, format, review, and export structured documents.',
  },
  {
    question: 'Is Paplify just an AI text generator?',
    answer:
      'No. AI generation is only one part of Paplify. The product is designed around the complete document workflow, including templates, structured editing, AI-assisted improvements, formatting, review, preview, and export.',
  },
  {
    question: 'Can I edit AI-generated content myself?',
    answer:
      'Yes. AI-generated content is intended to remain editable. You can manually change the document and selectively use AI tools when you want assistance.',
  },
  {
    question: 'What kinds of documents can I create?',
    answer:
      'Paplify is designed for academic, business, career, technical, and personal documents, with specialized templates for common document types.',
  },
  {
    question: 'Can I use my own formatting?',
    answer:
      'Yes. Paplify is planned to support custom formatting and reusable templates, including page size, margins, fonts, headings, spacing, headers, footers, page numbers, and other document settings.',
  },
  {
    question: 'Will exported documents be publication-ready?',
    answer:
      'Paplify is designed to produce consistently structured and formatted documents. Specific publication or institutional requirements should still be reviewed against the relevant official guidelines before submission.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleQuestion = (index) => {
    setOpenIndex((current) =>
      current === index ? -1 : index,
    )
  }

  return (
    <Section
      spacing="lg"
      className="landing-section"
    >
      <Container size="md">
        <div
          id="faq"
          className="landing-section-anchor"
        />

        <div className="landing-section-heading">
          <Badge size="sm">
            FAQ
          </Badge>

          <h2>
            Questions,
            <span> answered.</span>
          </h2>

          <p>
            A few things you should know before getting started.
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                className={`faq-item ${
                  isOpen ? 'faq-item-open' : ''
                }`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{item.question}</span>

                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className="faq-answer"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default FAQSection
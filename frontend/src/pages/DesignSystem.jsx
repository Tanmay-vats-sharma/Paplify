import { useState } from 'react'
import {
  Check,
  FileText,
  MoreHorizontal,
  Settings,
  Sparkles,
  Trash2,
  User,
} from 'lucide-react'

import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Select from '../components/ui/Select'
import Checkbox from '../components/ui/Checkbox'
import Switch from '../components/ui/Switch'
import Tabs from '../components/ui/Tabs'
import Spinner from '../components/ui/Spinner'
import Skeleton from '../components/ui/Skeleton'
import EmptyState from '../components/ui/EmptyState'
import ErrorState from '../components/ui/ErrorState'
import Avatar from '../components/ui/Avatar'
import Divider from '../components/ui/Divider'
import Modal from '../components/ui/Modal'
import Dropdown from '../components/ui/Dropdown'
import Tooltip from '../components/ui/Tooltip'
import { useToast } from '../components/ui/ToastProvider'

import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Stack from '../components/ui/Stack'
import Inline from '../components/ui/Inline'
import Grid from '../components/ui/Grid'
import PageHeader from '../components/ui/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'

function DesignSystem() {
  const [tab, setTab] = useState('general')
  const [checked, setChecked] = useState(true)
  const [enabled, setEnabled] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  const toast = useToast()

  return (
    <main className="design-system">
      <header className="design-system-header">
        <Badge variant="ai" size="sm">
          <Sparkles size={12} />
          Design System
        </Badge>

        <h1>Paplify UI</h1>

        <p>
          The reusable visual foundation for the Paplify
          document workspace.
        </p>
      </header>

      {/* Buttons */}

      <section className="design-section">
        <div className="design-section-heading">
          <h2>Buttons</h2>
          <p>
            Primary actions and supporting interactions.
          </p>
        </div>

        <Card>
          <div className="component-row">
            <Button>Primary</Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>

            <Button variant="ghost">
              Ghost
            </Button>

            <Button variant="danger">
              Delete
            </Button>

            <Button
              variant="ai"
              leftIcon={<Sparkles size={16} />}
            >
              Ask AI
            </Button>

            <Button loading>
              Generating
            </Button>
          </div>

          <div className="component-row">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Card>
      </section>

      {/* Form Controls */}

      <section className="design-section">
        <div className="design-section-heading">
          <h2>Form Controls</h2>
          <p>
            Inputs used throughout document creation and
            settings.
          </p>
        </div>

        <Card>
          <div className="form-demo-grid">
            <Input
              label="Document title"
              placeholder="AI in Education"
            />

            <Input
              label="Author"
              placeholder="Enter author name"
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              hint="We'll never share your email."
            />

            <Input
              label="Invalid input"
              value="Something went wrong"
              readOnly
              error="Please enter a valid value."
            />

            <Select
              label="Document type"
              placeholder="Choose document type"
              options={[
                {
                  value: 'research-paper',
                  label: 'Research Paper',
                },
                {
                  value: 'assignment',
                  label: 'Assignment',
                },
                {
                  value: 'business-report',
                  label: 'Business Report',
                },
              ]}
            />

            <Textarea
              label="Requirements"
              placeholder="Describe what you want Paplify to create..."
            />
          </div>

          <div className="form-demo-options">
            <Checkbox
              label="Save as favorite"
              description="Keep this template easily accessible."
              checked={checked}
              onChange={setChecked}
            />

            <Switch
              label="AI assistance"
              description="Allow AI suggestions while editing."
              checked={enabled}
              onChange={setEnabled}
            />
          </div>
        </Card>
      </section>

      {/* Navigation */}

      <section className="design-section">
        <div className="design-section-heading">
          <h2>Navigation</h2>
          <p>
            Tabs, dropdowns and contextual controls.
          </p>
        </div>

        <Card>
          <div className="component-row">
            <Tabs
              value={tab}
              onChange={setTab}
              items={[
                {
                  value: 'general',
                  label: 'General',
                },
                {
                  value: 'formatting',
                  label: 'Formatting',
                },
                {
                  value: 'ai',
                  label: 'AI',
                  icon: <Sparkles size={14} />,
                },
              ]}
            />

            <Dropdown
              trigger="More"
              items={[
                {
                  id: 'settings',
                  label: 'Settings',
                  icon: Settings,
                  onClick: () => {},
                },
                {
                  id: 'profile',
                  label: 'Profile',
                  icon: User,
                  onClick: () => {},
                },
                {
                  separator: true,
                  id: 'separator',
                },
                {
                  id: 'delete',
                  label: 'Delete',
                  icon: Trash2,
                  danger: true,
                  onClick: () => {},
                },
              ]}
            />

            <Dropdown
              trigger={<MoreHorizontal size={18} />}
              align="right"
              items={[
                {
                  id: 'edit',
                  label: 'Edit',
                  onClick: () => {},
                },
                {
                  id: 'duplicate',
                  label: 'Duplicate',
                  onClick: () => {},
                },
              ]}
            />
          </div>

          <div className="tab-demo-content">
            {tab === 'general' && (
              <p>General document settings.</p>
            )}

            {tab === 'formatting' && (
              <p>Document formatting preferences.</p>
            )}

            {tab === 'ai' && (
              <p>AI assistance preferences.</p>
            )}
          </div>
        </Card>
      </section>

      {/* Overlays & Feedback */}

      <section className="design-section">
        <div className="design-section-heading">
          <h2>Overlays & Feedback</h2>
          <p>
            Dialogs, tooltips and notifications.
          </p>
        </div>

        <Card>
          <div className="component-row">
            <Button onClick={() => setModalOpen(true)}>
              Open Modal
            </Button>

            <Tooltip content="Save this document">
              <Button
                variant="outline"
                aria-label="Save document"
              >
                <Check size={16} />
                Save
              </Button>
            </Tooltip>

            <Tooltip
              content="This action uses AI"
              side="bottom"
            >
              <Button
                variant="ai"
                aria-label="AI action"
              >
                <Sparkles size={16} />
              </Button>
            </Tooltip>

            <Button
              variant="outline"
              onClick={() =>
                toast.success({
                  title: 'Document saved',
                  message:
                    'Your changes have been saved successfully.',
                })
              }
            >
              Success Toast
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast.error({
                  title: "Couldn't save document",
                  message:
                    'Please check your connection and try again.',
                })
              }
            >
              Error Toast
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast.info({
                  title: 'AI is ready',
                  message:
                    'Select text to see AI editing actions.',
                })
              }
            >
              Info Toast
            </Button>
          </div>
        </Card>
      </section>

      {/* Identity */}

      <section className="design-section">
        <div className="design-section-heading">
          <h2>Identity</h2>
          <p>
            Avatars and visual separators.
          </p>
        </div>

        <Card>
          <div className="component-row">
            <Avatar
              name="Paplify User"
              size="sm"
            />

            <Avatar
              name="Document Author"
              size="md"
            />

            <Avatar
              name="AI Assistant"
              size="lg"
            />

            <Avatar size="xl" />

            <Divider orientation="vertical" />

            <Badge variant="success">
              <Check size={12} />
              Saved
            </Badge>
          </div>

          <div style={{ marginTop: '24px' }}>
            <Divider label="OR" />
          </div>
        </Card>
      </section>

      {/* Loading */}

      <section className="design-section">
        <div className="design-section-heading">
          <h2>Loading</h2>
          <p>
            Clear feedback while content or AI generation is
            processing.
          </p>
        </div>

        <Card>
          <div className="component-row">
            <Spinner />

            <Spinner size={16} />

            <Spinner size={28} />

            <Skeleton
              width="180px"
              height="18px"
            />

            <Skeleton
              width="120px"
              height="36px"
              radius="lg"
            />

            <Skeleton
              width="40px"
              height="40px"
              radius="full"
            />
          </div>
        </Card>
      </section>

      {/* Application States */}

      <section className="design-section">
        <div className="design-section-heading">
          <h2>Application States</h2>
          <p>
            Helpful states instead of blank screens.
          </p>
        </div>

        <div className="component-grid">
          <Card padding="none">
            <EmptyState
              icon={FileText}
              title="No documents yet"
              description="Create your first document and start turning ideas into polished work."
              actionLabel="Create document"
            />
          </Card>

          <Card padding="none">
            <ErrorState
              title="Couldn't load documents"
              description="There was a problem retrieving your documents."
              actionLabel="Retry"
              onAction={() => {}}
            />
          </Card>
        </div>
      </section>

      {/* Layout Primitives */}

      <section className="design-section">
        <div className="design-section-heading">
          <h2>Layout Primitives</h2>
          <p>
            Reusable foundations for spacing, structure,
            alignment, and responsive layouts.
          </p>
        </div>

        <Container size="lg">
          <PageHeader
            eyebrow="Workspace"
            title="Documents"
            description="Create, edit, improve, format, and export your documents from one workspace."
            actions={
              <Button>
                Create document
              </Button>
            }
          />

          <Section spacing="lg">
            <SectionHeader
              title="Recent documents"
              description="Your latest documents and ongoing work."
              action={
                <Button
                  variant="ghost"
                  size="sm"
                >
                  View all
                </Button>
              }
            />

            <Grid
              columns="3"
              gap="lg"
            >
              <Card>
                <Stack gap="sm">
                  <Badge>
                    Academic
                  </Badge>

                  <h3>
                    Research Paper
                  </h3>

                  <p>
                    An example document card
                    demonstrating the layout system.
                  </p>
                </Stack>
              </Card>

              <Card>
                <Stack gap="sm">
                  <Badge variant="success">
                    Completed
                  </Badge>

                  <h3>
                    Project Report
                  </h3>

                  <p>
                    Layout primitives keep spacing
                    and structure consistent.
                  </p>
                </Stack>
              </Card>

              <Card>
                <Stack gap="sm">
                  <Badge variant="ai">
                    AI assisted
                  </Badge>

                  <h3>
                    Technical Documentation
                  </h3>

                  <p>
                    Responsive grids will adapt
                    automatically on smaller screens.
                  </p>
                </Stack>
              </Card>
            </Grid>
          </Section>

          <Section spacing="md">
            <SectionHeader
              title="Inline layout"
              description="Useful for actions, metadata, filters, and compact controls."
            />

            <Card>
              <Inline
                justify="between"
                gap="md"
              >
                <Inline gap="sm">
                  <Avatar name="Alex Morgan" />

                  <Stack gap="xs">
                    <strong>
                      Alex Morgan
                    </strong>

                    <span className="text-secondary">
                      Edited 2 minutes ago
                    </span>
                  </Stack>
                </Inline>

                <Inline gap="sm">
                  <Badge variant="success">
                    Saved
                  </Badge>

                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Open
                  </Button>
                </Inline>
              </Inline>
            </Card>
          </Section>
        </Container>
      </section>

      {/* Modal */}

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Create a document"
        description="Choose how you want to start your next document."
      >
        <div className="modal-demo">
          <Card>
            <div className="demo-card-content">
              <div className="demo-icon">
                <FileText size={20} />
              </div>

              <div>
                <h3>
                  Start with a template
                </h3>

                <p>
                  Choose from professionally structured
                  document templates.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="demo-card-content">
              <div className="demo-icon demo-icon-ai">
                <Sparkles size={20} />
              </div>

              <div>
                <h3>
                  Generate with AI
                </h3>

                <p>
                  Describe what you need and let Paplify
                  create the structure.
                </p>
              </div>
            </div>
          </Card>

          <div className="modal-actions">
            <Button
              variant="ghost"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                setModalOpen(false)

                toast.success({
                  title: 'Document creation started',
                  message:
                    'Your new document workspace is ready.',
                })
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  )
}

export default DesignSystem
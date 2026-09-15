import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Send,
} from 'lucide-react'

import AuthLayout from '../../components/auth/AuthLayout'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Divider from '../../components/ui/Divider'
import { useToast } from '../../components/ui/ToastProvider'

function ForgotPassword() {
  const { showToast } = useToast()

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setError('Email address is required.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }

    setError('')
    setIsSubmitting(true)

    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    setIsSubmitting(false)
    setIsSent(true)

    showToast({
      type: 'success',
      title: 'Reset link sent',
      message:
        'If an account exists for this email, a reset link has been prepared.',
    })
  }

  if (isSent) {
    return (
      <AuthLayout
        eyebrow="Check your inbox"
        title="Reset link is on its way"
        description="We've prepared the next step for your password reset."
        footer={
          <p className="auth-footer-text">
            Remembered your password?{' '}
            <Link to="/login">
              Sign in
            </Link>
          </p>
        }
      >
        <div className="auth-success-state">
          <div className="auth-success-icon">
            <Send size={22} aria-hidden="true" />
          </div>

          <h2>Check your email</h2>

          <p>
            If an account is associated with{' '}
            <strong>{email}</strong>, you'll receive
            instructions to reset your password.
          </p>

          <div className="auth-success-actions">
            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={() => {
                setIsSent(false)
                setEmail('')
              }}
            >
              Try another email
            </Button>

            <Link
              to="/login"
              className="auth-back-login"
            >
              <ArrowLeft
                size={15}
                aria-hidden="true"
              />
              Back to sign in
            </Link>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      eyebrow="Password recovery"
      title="Forgot your password?"
      description="Enter the email address associated with your Paplify account and we'll help you get back in."
      footer={
        <p className="auth-footer-text">
          Remembered your password?{' '}
          <Link to="/login">
            Sign in
          </Link>
        </p>
      }
    >
      <form
        className="auth-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <Input
          label="Email address"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            setError('')
          }}
          error={error}
          autoComplete="email"
          autoFocus
          leftIcon={
            <Mail size={17} aria-hidden="true" />
          }
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          fullWidth
          rightIcon={
            !isSubmitting ? (
              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            ) : undefined
          }
        >
          Send reset link
        </Button>

        <Divider label="or" />

        <Link
          to="/login"
          className="auth-back-login"
        >
          <ArrowLeft
            size={15}
            aria-hidden="true"
          />
          Back to sign in
        </Link>
      </form>
    </AuthLayout>
  )
}

export default ForgotPassword
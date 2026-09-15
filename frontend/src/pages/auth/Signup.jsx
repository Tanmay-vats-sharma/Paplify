import { useState } from 'react'
import {
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import AuthLayout from '../../components/auth/AuthLayout'
import Button from '../../components/ui/Button'
import Checkbox from '../../components/ui/Checkbox'
import Input from '../../components/ui/Input'
import { useToast } from '../../components/ui/ToastProvider'

function Signup() {
  const navigate = useNavigate()
  const { showToast } = useToast()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false)

  const [acceptTerms, setAcceptTerms] = useState(false)

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const clearError = (field) => {
    if (!errors[field]) {
      return
    }

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!name.trim()) {
      nextErrors.name = 'Please enter your name.'
    } else if (name.trim().length < 2) {
      nextErrors.name = 'Name must be at least 2 characters.'
    }

    if (!email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!password) {
      nextErrors.password = 'Please create a password.'
    } else if (password.length < 6) {
      nextErrors.password =
        'Password must be at least 6 characters.'
    }

    if (!confirmPassword) {
      nextErrors.confirmPassword =
        'Please confirm your password.'
    } else if (confirmPassword !== password) {
      nextErrors.confirmPassword =
        'Passwords do not match.'
    }

    if (!acceptTerms) {
      nextErrors.terms =
        'Please accept the Terms of Service and Privacy Policy.'
    }

    setErrors(nextErrors)

    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    /*
     * Mock registration.
     *
     * This will later be replaced by the authentication
     * service / API.
     */

    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    setIsSubmitting(false)

    showToast({
      type: 'success',
      title: 'Account created',
      message:
        'Your Paplify account has been created successfully.',
    })

    navigate('/app')
  }

  return (
    <AuthLayout
      eyebrow="Get started"
      title="Create your Paplify account"
      description="Build, edit, improve, and export polished documents from one workspace."
      footer={
        <div className="auth-secondary-action">
          Already have an account?
          <Link to="/login">Sign in</Link>
        </div>
      }
    >
      <form
        className="auth-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="auth-form-group">
          <Input
            label="Full name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
              clearError('name')
            }}
            error={errors.name}
            leftIcon={
              <User
                size={17}
                aria-hidden="true"
              />
            }
            required
          />

          <Input
            label="Email address"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              clearError('email')
            }}
            error={errors.email}
            leftIcon={
              <Mail
                size={17}
                aria-hidden="true"
              />
            }
            required
          />

          <div className="auth-password-input-wrapper">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="new-password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
                clearError('password')
              }}
              error={errors.password}
              leftIcon={
                <LockKeyhole
                  size={17}
                  aria-hidden="true"
                />
              }
              rightIcon={
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (current) => !current,
                    )
                  }
                  aria-label={
                    showPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  {showPassword ? (
                    <EyeOff
                      size={19}
                      aria-hidden="true"
                    />
                  ) : (
                    <Eye
                      size={19}
                      aria-hidden="true"
                    />
                  )}
                </button>
              }
              className="auth-password-input"
              required
            />
          </div>

          <div className="auth-password-input-wrapper">
            <Input
              label="Confirm password"
              type={
                showConfirmPassword
                  ? 'text'
                  : 'password'
              }
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value)
                clearError('confirmPassword')
              }}
              error={errors.confirmPassword}
              leftIcon={
                <LockKeyhole
                  size={17}
                  aria-hidden="true"
                />
              }
              rightIcon={
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (current) => !current,
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff
                      size={19}
                      aria-hidden="true"
                    />
                  ) : (
                    <Eye
                      size={19}
                      aria-hidden="true"
                    />
                  )}
                </button>
              }
              className="auth-password-input"
              required
            />
          </div>
        </div>

        <div className="auth-terms">
          <Checkbox
            id="accept-terms"
            name="acceptTerms"
            checked={acceptTerms}
            onChange={(event) => {
              setAcceptTerms(event.target.checked)

              if (errors.terms) {
                setErrors((current) => ({
                  ...current,
                  terms: undefined,
                }))
              }
            }}
            label={
              <span>
                I agree to the{' '}
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault()

                    showToast({
                      type: 'info',
                      title: 'Terms of Service',
                      message:
                        'Terms will be available when the production legal pages are added.',
                    })
                  }}
                >
                  Terms of Service
                </button>{' '}
                and{' '}
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault()

                    showToast({
                      type: 'info',
                      title: 'Privacy Policy',
                      message:
                        'Privacy information will be available when the production legal pages are added.',
                    })
                  }}
                >
                  Privacy Policy
                </button>
              </span>
            }
            required
          />

          {errors.terms && (
            <p
              className="form-message form-message-error"
              role="alert"
            >
              {errors.terms}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          fullWidth
          loading={isSubmitting}
        >
          Create account
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          fullWidth
          onClick={() => {
            showToast({
              type: 'info',
              title: 'Coming soon',
              message:
                'Google sign-up will be available once authentication is connected.',
            })
          }}
        >
          Continue with Google
        </Button>
      </form>
    </AuthLayout>
  )
}

export default Signup
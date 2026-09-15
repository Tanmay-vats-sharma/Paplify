import { useState } from 'react'
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import AuthLayout from '../../components/auth/AuthLayout'
import Button from '../../components/ui/Button'
import Checkbox from '../../components/ui/Checkbox'
import Divider from '../../components/ui/Divider'
import Input from '../../components/ui/Input'
import { useToast } from '../../components/ui/ToastProvider'

function Login() {
  const navigate = useNavigate()
  const { showToast } = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [errors, setErrors] = useState({})

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const nextErrors = {}

    if (!email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!password) {
      nextErrors.password = 'Please enter your password.'
    } else if (password.length < 6) {
      nextErrors.password =
        'Password must be at least 6 characters.'
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
     * Mock authentication.
     *
     * This will later be replaced by:
     * services/authService.js
     */

    await new Promise((resolve) => {
      setTimeout(resolve, 900)
    })

    setIsSubmitting(false)

    showToast({
      type: 'success',
      title: 'Welcome back',
      message: 'You have been signed in successfully.',
    })

    navigate('/app')
  }

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in to Paplify"
      description="Continue creating polished, structured documents with Paplify."
      footer={
        <div className="auth-secondary-action">
          Don't have an account?
          <Link to="/signup">Create one</Link>
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
            label="Email address"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)

              if (errors.email) {
                setErrors((current) => ({
                  ...current,
                  email: undefined,
                }))
              }
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
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)

                if (errors.password) {
                  setErrors((current) => ({
                    ...current,
                    password: undefined,
                  }))
                }
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
                    setShowPassword((current) => !current)
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
        </div>

        <div className="auth-remember-row">
          <Checkbox
            id="remember-me"
            name="rememberMe"
            label="Remember me"
            checked={rememberMe}
            onChange={(event) =>
              setRememberMe(event.target.checked)
            }
          />

          <Link
            to="/forgot-password"
            className="auth-forgot-link"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          size="lg"
          fullWidth
          loading={isSubmitting}
        >
          Sign in
        </Button>

        <Divider
          label="or"
          className="auth-divider"
        />

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
                'Google sign-in will be available once authentication is connected.',
            })
          }}
        >
          Continue with Google
        </Button>
      </form>
    </AuthLayout>
  )
}

export default Login
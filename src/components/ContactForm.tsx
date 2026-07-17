import { useState, type FormEvent } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { agency } from '../data/agency'

type InquiryType = 'employer' | 'candidate' | 'general'

interface FormData {
  name: string
  email: string
  phone: string
  inquiryType: InquiryType
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

interface ContactFormProps {
  defaultInquiryType?: InquiryType
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'general',
  message: '',
}

const inquiryLabels: Record<InquiryType, string> = {
  employer: 'Employer — I want to hire',
  candidate: 'Candidate — I want a job',
  general: 'General inquiry',
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address'
  }
  if (data.phone && !/^[\d\s+\-()]+$/.test(data.phone)) {
    errors.phone = 'Enter a valid phone number'
  }
  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }
  return errors
}

export function ContactForm({ defaultInquiryType = 'general' }: ContactFormProps) {
  const [form, setForm] = useState<FormData>({ ...initialForm, inquiryType: defaultInquiryType })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setSubmitError(
        'Email sending is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.',
      )
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New contact from ${form.name} (${inquiryLabels[form.inquiryType]})`,
          from_name: agency.shortName,
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          inquiry_type: inquiryLabels[form.inquiryType],
          message: form.message,
        }),
      })
      const result = (await response.json()) as { success?: boolean; message?: string }
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send message. Please try again.')
      }
      setSuccess(true)
      setForm({ ...initialForm, inquiryType: defaultInquiryType })
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email us directly.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center">
        <CheckCircle className="h-12 w-12 text-accent" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl text-cream">Message sent</h3>
        <p className="mt-2 text-sm text-mist">
          Thanks for reaching out — I will get back to you promptly.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-6 text-sm font-medium text-accent hover:text-accent-deep"
        >
          Send another message
        </button>
      </div>
    )
  }

  const fieldClass = (hasError: boolean) =>
    `input-dark ${hasError ? '!border-red-400/70' : ''}`

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-mist">
            Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={fieldClass(!!errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-mist">
            Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={fieldClass(!!errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-mist">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+92…"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={fieldClass(!!errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="inquiryType" className="mb-1.5 block text-sm text-mist">
            Inquiry type *
          </label>
          <select
            id="inquiryType"
            value={form.inquiryType}
            onChange={(e) => setForm({ ...form, inquiryType: e.target.value as InquiryType })}
            className={fieldClass(false)}
          >
            <option value="employer">Employer — I want to hire</option>
            <option value="candidate">Candidate — I want a job</option>
            <option value="general">General inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-mist">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about the role or opportunity…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={fieldClass(!!errors.message)}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      {submitError && (
        <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300" role="alert">
          {submitError}
        </p>
      )}

      <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}

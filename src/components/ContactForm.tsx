import { useState, type FormEvent } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitting(false)
    setSuccess(true)
    setForm({ ...initialForm, inquiryType: defaultInquiryType })
  }

  if (success) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-600" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold text-green-900">Message sent!</h3>
        <p className="mt-2 text-sm text-green-700">
          Thank you for reaching out. We will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-6 text-sm font-semibold text-green-700 hover:text-green-800"
        >
          Send another message
        </button>
      </div>
    )
  }

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/20 ${
      hasError
        ? 'border-red-300 bg-red-50 focus:border-red-400'
        : 'border-slate-300 bg-white focus:border-brand-500'
    }`

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={fieldClass(!!errors.name)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={fieldClass(!!errors.email)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={fieldClass(!!errors.phone)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="inquiryType" className="mb-1.5 block text-sm font-medium text-slate-700">
            Inquiry Type *
          </label>
          <select
            id="inquiryType"
            value={form.inquiryType}
            onChange={(e) =>
              setForm({ ...form, inquiryType: e.target.value as InquiryType })
            }
            className={fieldClass(false)}
          >
            <option value="employer">Employer — I want to hire</option>
            <option value="candidate">Candidate — I want a job</option>
            <option value="general">General inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={fieldClass(!!errors.message)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60 sm:w-auto"
      >
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

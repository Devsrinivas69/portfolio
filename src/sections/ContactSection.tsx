import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { ContactButton } from '../components/ContactButton'
import { FadeIn } from '../components/FadeIn'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const NOTIFY_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_NOTIFY_TEMPLATE_ID ??
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const AUTOREPLY_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  )

  const isReady = SERVICE_ID && NOTIFY_TEMPLATE_ID && PUBLIC_KEY
  const hasAutoReply = Boolean(AUTOREPLY_TEMPLATE_ID)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formRef.current || !isReady) {
      setStatus('error')
      return
    }

    try {
      setStatus('sending')
      const data = new FormData(formRef.current)
      const payload = {
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        title: String(data.get('title') ?? ''),
        message: String(data.get('message') ?? ''),
        to_email: String(data.get('email') ?? ''),
      }

      await emailjs.send(SERVICE_ID, NOTIFY_TEMPLATE_ID, payload, {
        publicKey: PUBLIC_KEY,
      })

      if (AUTOREPLY_TEMPLATE_ID) {
        await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, payload, {
          publicKey: PUBLIC_KEY,
        })
      }
      formRef.current.reset()
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 sm:rounded-[44px] sm:p-8 md:rounded-[56px] md:p-10">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-[clamp(1rem,1.8vw,1.4rem)] font-medium text-[#D7E2EA]">
                Let&apos;s collaborate on your next product.
              </p>
              <p className="text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/60">
                Reply within 24 hours
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8 grid gap-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/60">
                  Name
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-[#0C0C0C] px-4 py-3 text-base font-medium text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA]/60 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/60">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="rounded-2xl border border-white/10 bg-[#0C0C0C] px-4 py-3 text-base font-medium text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA]/60 focus:outline-none"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/60">
                Subject
                <input
                  name="title"
                  required
                  placeholder="Project inquiry"
                  className="rounded-2xl border border-white/10 bg-[#0C0C0C] px-4 py-3 text-base font-medium text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA]/60 focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/60">
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="rounded-2xl border border-white/10 bg-[#0C0C0C] px-4 py-3 text-base font-medium text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA]/60 focus:outline-none"
                ></textarea>
              </label>

              <div className="mt-4 flex flex-col items-center gap-3">
                <ContactButton
                  type="submit"
                  label={status === 'sending' ? 'Sending...' : 'Send Message'}
                  disabled={status === 'sending' || !isReady}
                  className="w-full justify-center sm:w-auto"
                />
                {status === 'success' && (
                  <p className="text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/70">
                    Message sent successfully.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/70">
                    Unable to send. Please try again.
                  </p>
                )}
                {!isReady && (
                  <p className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/50">
                    Missing EmailJS configuration.
                  </p>
                )}
                {isReady && !hasAutoReply && (
                  <p className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/50">
                    Auto-reply template not configured.
                  </p>
                )}
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

import { useState, useRef } from 'react'


const SERVICE_ID  = 'service_bzi2jjf'
const TEMPLATE_ID = 'template_m1c4vpq'
const PUBLIC_KEY  = 'MWehGSZKb5JYc_y8f'

const WA = 'https://wa.me/34608920445?text=%C2%A1Hola%2C%20Makero%21%20Estoy%20interesad%40%20en%20'

// Rate limiting: max 1 submit per 30s per session
let lastSubmit = 0

// Sanitize input: strip HTML tags and trim
const sanitize = str => str.replace(/<[^>]*>/g, '').trim().slice(0, 2000)

const WaInfoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--yellow)" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const InfoIcon = ({ d }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d={d} />
  </svg>
)

const infoItems = [
  {
    icon: <InfoIcon d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />,
    title: 'Ubicación', text: 'Cabra, Córdoba, España',
  },
  {
    icon: <WaInfoIcon />,
    title: 'WhatsApp', text: '+34 608 920 445', href: WA,
  },
  {
    icon: <InfoIcon d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />,
    title: 'Email', text: 'info@makero.es', href: 'mailto:info@makero.es',
  },
  {
    icon: <InfoIcon d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3M16 17h2a2 2 0 0 0 2-2v-3.34a2 2 0 0 0-.59-1.42l-2.65-2.65A2 2 0 0 0 15.35 7H13M9 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M20 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />,
    title: 'Tiempo de entrega', text: 'Entrega desde 72h tras confirmación',
  },
]

export default function Contacto() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', city: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | rate
  const [privacy, setPrivacy] = useState(false)
  const honeypotRef = useRef(null) // bot trap

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()

    // Honeypot check — bots fill hidden fields
    if (honeypotRef.current?.value) return

    // Rate limiting
    const now = Date.now()
    if (now - lastSubmit < 30000) {
      setStatus('rate')
      return
    }

    if (!privacy) return

    setStatus('sending')

    // Sanitize all fields
    const clean = {
      name:    sanitize(form.name),
      email:   sanitize(form.email),
      phone:   sanitize(form.phone),
      city:    sanitize(form.city),
      subject: sanitize(form.subject),
      message: sanitize(form.message),
    }

    // Basic email validation
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)
    if (!emailOk) { setStatus('error'); return }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, clean, PUBLIC_KEY)
      lastSubmit = Date.now()
      setStatus('sent')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Cuéntanos tu <span className="title-sticker">idea</span></h2>
          <p className="section-subtitle">Escríbenos y te respondemos en menos de 24h. Sin compromiso.</p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            {infoItems.map((item, i) => (
              <div key={i} className={`contact-info-item contact-info-item--${i + 1}`}>
                {item.icon}
                {item.href
                  ? <a href={item.href} className="contact-info-text" aria-label={`${item.title}: ${item.text}`}>{item.text}</a>
                  : <div className="contact-info-text"><span className="sr-only">{item.title}: </span>{item.text}</div>}
              </div>
            ))}
          </div>

          {/* Form */}
          {status === 'sent' ? (
            <div className="contact-sent" role="status">
              <div>
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round"/>
                  <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>¡Mensaje enviado!</h3>
                <p>Te responderemos en menos de 24h.</p>
              </div>
            </div>
          ) : (
            <form className="contact-form contact-ticket" onSubmit={submit}>
              <span className="ticket-stamp" aria-hidden="true">Sin compromiso</span>
              <div className="ticket-head">
                <span className="ticket-title">Tu pedido</span>
              </div>

              {/* Honeypot — hidden from humans, bots fill it */}
              <input
                ref={honeypotRef}
                name="website"
                tabIndex="-1"
                autoComplete="off"
                style={{ display: 'none' }}
              />

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nombre *</label>
                  <input name="name" className="form-input" required maxLength={100} value={form.name} onChange={handle} placeholder="Tu nombre" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input name="email" type="email" className="form-input" required maxLength={200} value={form.email} onChange={handle} placeholder="tu@email.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Teléfono *</label>
                  <input name="phone" className="form-input" required maxLength={20} value={form.phone} onChange={handle} placeholder="+34 600 000 000" />
                </div>
                <div className="form-group">
                  <label className="form-label">Ciudad / Población *</label>
                  <input name="city" className="form-input" required maxLength={100} value={form.city} onChange={handle} placeholder="¿Desde dónde nos escribes?" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Asunto *</label>
                <input name="subject" className="form-input" required maxLength={200} value={form.subject} onChange={handle} placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div className="form-group">
                <label className="form-label">Mensaje *</label>
                <textarea name="message" className="form-textarea" required maxLength={2000} value={form.message} onChange={handle} placeholder="Cuéntanos tu idea con el mayor detalle posible..." />
              </div>

              {/* Privacy checkbox */}
              <div className="form-group">
                <label className="form-check">
                  <input
                    type="checkbox"
                    required
                    checked={privacy}
                    onChange={e => setPrivacy(e.target.checked)}
                  />
                  He leído y acepto la{' '}
                  <a href="/privacidad">política de privacidad</a>
                  {' '}de MAKERO. *
                </label>
              </div>

              {/* Error messages */}
              {status === 'error' && (
                <p className="form-msg form-msg-error" role="alert">
                  Ha ocurrido un error. Por favor inténtalo de nuevo o escríbenos por WhatsApp.
                </p>
              )}
              {status === 'rate' && (
                <p className="form-msg form-msg-wait" role="status">
                  Por favor espera unos segundos antes de volver a enviar.
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
                style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                {status !== 'sending' && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

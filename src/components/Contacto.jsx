import { useState } from 'react'

const WA = 'https://wa.me/34608920445?text=%C2%A1Hola%2C%20Makero%21%20Estoy%20interesad%40%20en%20'

export default function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    // Replace with your form submission logic (e.g. EmailJS, Formspree)
    setSent(true)
  }

  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className="section-header">
          <span className="badge">Contacto</span>
          <h2 className="section-title" style={{ color: 'var(--orange)' }}>Cuéntanos tu idea</h2>
          <p className="section-subtitle">Escríbenos y te respondemos en menos de 24h. Sin compromiso.</p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { icon: '📍', title: 'Ubicación', text: 'Córdoba, España' },
              { icon: '📱', title: 'WhatsApp', text: '+34 608 920 445', href: WA },
              { icon: '✉️', title: 'Email', text: 'makero3d@gmail.com', href: 'mailto:makero3d@gmail.com' },
              { icon: '⏱️', title: 'Tiempo de entrega', text: 'Desde 72h tras confirmación' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 4 }}>{item.title}</div>
                  {item.href
                    ? <a href={item.href} style={{ color: 'var(--text)', fontSize: 15, textDecoration: 'none' }}>{item.text}</a>
                    : <div style={{ color: 'var(--text)', fontSize: 15 }}>{item.text}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          {sent ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 40, textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: 'Sora', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>¡Mensaje enviado!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Te responderemos en menos de 24h.</p>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">Nombre *</label>
                  <input name="name" className="form-input" required value={form.name} onChange={handle} placeholder="Tu nombre" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input name="email" type="email" className="form-input" required value={form.email} onChange={handle} placeholder="tu@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Teléfono</label>
                <input name="phone" className="form-input" value={form.phone} onChange={handle} placeholder="+34 600 000 000" />
              </div>
              <div className="form-group">
                <label className="form-label">Asunto *</label>
                <input name="subject" className="form-input" required value={form.subject} onChange={handle} placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div className="form-group">
                <label className="form-label">Mensaje *</label>
                <textarea name="message" className="form-textarea" required value={form.message} onChange={handle} placeholder="Cuéntanos tu idea con el mayor detalle posible..." />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Enviar mensaje
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

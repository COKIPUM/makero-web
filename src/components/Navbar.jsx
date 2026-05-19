import { useState } from 'react'
import { logoMakero } from '../assets/images'

const WA = 'https://wa.me/34608920445?text=%C2%A1Hola%2C%20Makero%21%20Estoy%20interesad%40%20en%20'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#promociones', label: 'Promociones' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#inicio" className="nav-logo">
            {logoMakero
              ? <img src={logoMakero} alt="MAKERO logo" style={{ height: 36, width: 'auto', display: 'block' }} />
              : <><span>MAKE</span>RO</>}
          </a>
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href={WA} className="btn btn-primary" style={{ padding: '10px 20px', fontSize: 13 }}>
              Pedir presupuesto
            </a>
            <button
              onClick={() => setOpen(o => !o)}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: 4 }}
              className="nav-hamburger"
              aria-label="Menú"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {open
                  ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                  : <><path d="M4 6h16" strokeLinecap="round" /><path d="M4 12h16" strokeLinecap="round" /><path d="M4 18h16" strokeLinecap="round" /></>}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(15,17,21,0.98)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 32, paddingTop: 80,
        }}>
          {links.map(l => (
            <a
              key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
          <a href={WA} className="btn btn-primary" style={{ marginTop: 16 }}>Pedir presupuesto</a>
        </div>
      )}
    </>
  )
}

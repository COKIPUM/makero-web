import { logoMakeroFooter } from '../assets/images'

const WA = 'https://wa.me/34608920445?text=%C2%A1Hola%2C%20Makero%21%20Estoy%20interesad%40%20en%20'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div>
            <div className="footer-logo">
              {logoMakeroFooter
                ? <img src={logoMakeroFooter} alt="MAKERO" style={{ height: 28 }} />
                : <><span>MAKE</span>RO</>}
            </div>
            <p className="footer-tagline">
              Diseño e impresión 3D personalizada. Tú pides, nosotros lo creamos. Así de fácil.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { href: 'https://instagram.com/makero3d', label: 'Instagram' },
                { href: 'https://tiktok.com/@makero3d', label: 'TikTok' },
                { href: WA, label: 'WhatsApp' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ padding: '8px 14px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { heading: 'Servicios', links: ['Impresión personalizada', 'Regalos exclusivos', 'Eventos', 'Trofeos', 'Proyectos a medida'] },
            { heading: 'Empresa',  links: ['Quiénes somos', 'Proyectos', 'Blog', 'Contacto'] },
            { heading: 'Legal',    links: ['Aviso legal', 'Privacidad', 'Cookies'] },
          ].map(col => (
            <div key={col.heading}>
              <h4 className="footer-heading">{col.heading}</h4>
              <ul className="footer-links">
                {col.links.map(l => (
                  <li key={l}><a href="#contacto">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {year} MAKERO · Todos los derechos reservados</span>
          <span>Hecho con ❤️ en Córdoba</span>
        </div>
      </div>
    </footer>
  )
}

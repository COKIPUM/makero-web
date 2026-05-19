const WA = 'https://wa.me/34608920445?text=%C2%A1Hola%2C%20Makero%21%20Estoy%20interesad%40%20en%20'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge fade-in">
              <span className="badge">Impresión 3D personalizada</span>
            </div>
            <h1 className="hero-title fade-in delay-1">
              <span style={{ color: 'var(--orange)' }}>Tú pides,</span><br />
              nosotros lo <span style={{ color: 'var(--text)' }}>creamos.</span><br />
              <span style={{ color: 'var(--yellow)' }}>Así de fácil.</span>
            </h1>
            <p className="hero-subtitle fade-in delay-2">
              Diseño e impresión 3D personalizada para eventos, regalos, piezas únicas y proyectos a medida.
            </p>
            <div className="hero-cta fade-in delay-3">
              <a href="#contacto" className="btn btn-primary">
                Pedir presupuesto
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href={WA} className="btn btn-ghost" style={{ color: 'var(--yellow)', borderColor: 'rgba(233,173,73,0.5)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--yellow)" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablamos por WhatsApp
              </a>
            </div>
            <div className="hero-stats fade-in delay-4">
              <div className="stat-item">
                <div className="stat-number" style={{ color: 'var(--orange)' }}>+300</div>
                <div className="stat-label">proyectos creados</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" style={{ color: 'var(--yellow)' }}>+50</div>
                <div className="stat-label">diseños únicos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" style={{ color: 'var(--text)' }}>24/7</div>
                <div className="stat-label">creatividad constante</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-3d-scene fade-in delay-2">
              <div className="hero-3d-main">
                {/* Add your video to /public/hero-video.mp4 */}
                <video autoPlay muted loop playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24, display: 'block' }}
                  aria-label="Timelapse de impresión 3D MAKERO"
                  onError={e => { e.target.style.display='none' }}
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div style={{
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'linear-gradient(135deg, #1a2035 0%, #243050 50%, #1a1e28 100%)',
                  borderRadius: 24, zIndex: -1,
                }}>
                  <span style={{ fontSize: 64, opacity: 0.3 }}>🖨️</span>
                </div>
              </div>
              <div className="hero-tag hero-tag-1">
                <span className="tag-dot dot-yellow" />
                <span>100% personalizado</span>
              </div>
              <div className="hero-tag hero-tag-2">
                <span className="tag-dot dot-green" />
                <span>Material ecológico</span>
              </div>
              <div className="hero-tag hero-tag-3">
                <span className="tag-dot dot-orange" />
                <span>Acabado premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

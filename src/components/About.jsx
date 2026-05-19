export default function About() {
  return (
    <section className="section" id="nosotros">
      <div className="container">
        <div className="about-inner">
          <div className="about-text fade-in">
            <span className="badge">Quiénes somos</span>
            <h2 className="about-title">
              Convertimos ideas en <span style={{ color: 'var(--orange)' }}>objetos reales</span>
            </h2>
            <p className="about-desc">
              MAKERO nació del amor por la tecnología y el diseño. Somos un estudio creativo especializado en impresión personalizada, con un equipo apasionado que entiende que cada proyecto es único.
            </p>
            <p className="about-desc">
              Combinamos las últimas tecnologías de fabricación digital con un servicio cercano y personalizado. Desde la idea hasta el artículo final, estamos contigo en cada paso del camino.
            </p>
            <p className="about-desc">
              No somos una fábrica. Somos un equipo que trata cada encargo como si fuera propio.
            </p>
          </div>

          <div className="about-visual fade-in delay-2">
            <div className="about-card">
              <div className="about-stat">
                <div className="about-stat-number n-orange">+300</div>
                <div className="about-stat-label">proyectos creados</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number n-yellow">+50</div>
                <div className="about-stat-label">diseños únicos</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number n-blue">+2000</div>
                <div className="about-stat-label">horas impresas</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number" style={{ color: 'var(--text)' }}>24/7</div>
                <div className="about-stat-label">creatividad constante</div>
              </div>

              {/* Materiales sostenibles */}
              <div style={{
                gridColumn: 'span 2', background: 'var(--bg)', borderRadius: 'var(--radius-sm)',
                padding: 13, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#4ce880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" style={{ filter: 'drop-shadow(0 0 6px rgba(76,232,128,0.45))' }}>
                    <path d="M12 22V12"/>
                    <path d="M12 12C12 12 7 10 5 6c4 0 7 2 7 6z"/>
                    <path d="M12 12c0 0 5-2 7-6-4 0-7 2-7 6z"/>
                    <path d="M5 22h14"/>
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Materiales sostenibles</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Usamos PLA biodegradable y filamentos respetuosos con el medio ambiente.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

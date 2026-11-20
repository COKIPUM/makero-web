export default function About() {
  return (
    <section className="section" id="nosotros">
      <div className="container">
        <div className="about-inner">
          <div className="about-text fade-in">
            <h2 className="about-title">
              Convertimos ideas en objetos reales
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
                <div className="about-stat-number">+300</div>
                <div className="about-stat-label">proyectos creados</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">+50</div>
                <div className="about-stat-label">diseños únicos</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">+2000</div>
                <div className="about-stat-label">horas impresas</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">24/7</div>
                <div className="about-stat-label">creatividad constante</div>
              </div>

              {/* Materiales sostenibles */}
              <div className="about-note">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden="true">
                  <path d="M12 22V12"/>
                  <path d="M12 12C12 12 7 10 5 6c4 0 7 2 7 6z"/>
                  <path d="M12 12c0 0 5-2 7-6-4 0-7 2-7 6z"/>
                  <path d="M5 22h14"/>
                </svg>
                <div>
                  <div className="about-note-title">Materiales sostenibles</div>
                  <div className="about-note-text">Usamos PLA biodegradable y filamentos respetuosos con el medio ambiente.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    glow: 'glow-orange-strong',
    svg: <svg viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h10M7 11h6"/></svg>,
    title: 'Impresión personalizada',
    desc: 'Creamos piezas únicas totalmente adaptadas a tu idea, tamaño y estilo.',
    extraStyle: { borderColor: 'rgba(234,122,71,0.3)' },
  },
  {
    glow: 'glow-blue',
    svg: <svg viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
    title: 'Regalos exclusivos',
    desc: 'Detalles personalizados que sorprenden de verdad.',
  },
  {
    glow: 'glow-orange',
    svg: <svg viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M9 11l3 3L22 4"/></svg>,
    title: 'Eventos y celebraciones',
    desc: 'Decoración y regalos personalizados para momentos especiales.',
  },
  {
    glow: 'glow-blue',
    svg: <svg viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>,
    title: 'Trofeos y reconocimientos',
    desc: 'Premios únicos para empresas, eventos y competiciones.',
  },
  {
    glow: 'glow-yellow',
    svg: <svg viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    title: 'Proyectos a medida',
    desc: 'Prototipos, maquetas y soluciones impresas sin límites.',
  },
  {
    glow: 'glow-yellow',
    svg: <svg viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    title: 'Diseño incluido',
    desc: 'Si no tienes el modelo, nosotros lo creamos contigo.',
  },
]

export default function Servicios() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-header">
          <span className="badge">Lo que hacemos</span>
          <h2 className="section-title" style={{ color: 'var(--orange)' }}>Servicios creativos</h2>
          <p className="section-subtitle">Desde una pieza única hasta una colección completa. Nos adaptamos a tu proyecto.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card fade-in${i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : ''}`}
              style={s.extraStyle || {}}
            >
              <div className={`service-icon ${s.glow}`}>{s.svg}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

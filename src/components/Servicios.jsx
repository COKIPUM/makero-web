const services = [
  {
    color: 'orange',
    title: 'Impresión personalizada',
    desc: 'Creamos piezas únicas totalmente adaptadas a tu idea, tamaño y estilo.',
  },
  {
    color: 'yellow',
    title: 'Regalos exclusivos',
    desc: 'Detalles personalizados que sorprenden de verdad.',
  },
  {
    color: 'blue',
    title: 'Eventos y celebraciones',
    desc: 'Decoración y regalos personalizados para momentos especiales.',
  },
  {
    color: 'blue',
    title: 'Trofeos y reconocimientos',
    desc: 'Premios únicos para empresas, eventos y competiciones.',
  },
  {
    color: 'orange',
    title: 'Proyectos a medida',
    desc: 'Prototipos, maquetas y soluciones impresas sin límites.',
  },
  {
    color: 'yellow',
    title: 'Diseño incluido',
    desc: 'Si no tienes el modelo, nosotros lo creamos contigo.',
  },
]

export default function Servicios() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Servicios creativos</h2>
          <p className="section-subtitle">Desde una pieza única hasta una colección completa. Nos adaptamos a tu proyecto.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card service-card--${s.color} fade-in${i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : ''}`}
            >
              <span className="service-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

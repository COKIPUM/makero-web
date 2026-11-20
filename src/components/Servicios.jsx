const groups = [
  {
    key: 'particulares',
    tag: 'Para ti',
    title: 'Regalos y momentos',
    items: [
      { title: 'Impresión personalizada', desc: 'Creamos piezas únicas totalmente adaptadas a tu idea, tamaño y estilo.' },
      { title: 'Regalos exclusivos', desc: 'Detalles personalizados que sorprenden de verdad.' },
      { title: 'Eventos y celebraciones', desc: 'Decoración y regalos personalizados para momentos especiales.' },
    ],
  },
  {
    key: 'empresas',
    tag: 'Para empresas',
    title: 'Marca y proyectos',
    items: [
      { title: 'Trofeos y reconocimientos', desc: 'Premios únicos para empresas, eventos y competiciones.' },
      { title: 'Proyectos a medida', desc: 'Prototipos, maquetas y soluciones impresas sin límites.' },
      { title: 'Diseño incluido', desc: 'Si no tienes el modelo, nosotros lo creamos contigo.' },
    ],
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
        <div className="services-duo">
          {groups.map((g, i) => (
            <div key={g.key} className={`services-side services-side--${g.key} fade-in${i ? ' delay-1' : ''}`}>
              <span className="services-tag">{g.tag}</span>
              <h3 className="services-side-title">{g.title}</h3>
              <ul className="services-list">
                {g.items.map(s => (
                  <li key={s.title}>
                    <h4 className="service-title">{s.title}</h4>
                    <p className="service-desc">{s.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

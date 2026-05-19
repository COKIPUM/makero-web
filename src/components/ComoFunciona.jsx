const steps = [
  { icon: '💡', title: 'Nos cuentas tu idea', desc: 'Escríbenos por WhatsApp o formulario. Cuéntanos qué tienes en mente, aunque solo sea una idea vaga. Estamos aquí.' },
  { icon: '✏️', title: 'Diseñamos el modelo', desc: 'Preparamos o creamos el modelo 3D. Te enviamos una preview antes de imprimir para que des tu visto bueno.' },
  { icon: '🖨️', title: 'Imprimimos en 3D',   desc: 'Ponemos a trabajar nuestras impresoras con los mejores materiales. Controlamos cada detalle del proceso.' },
  { icon: '📦', title: 'Te lo entregamos',    desc: 'Enviamos a toda España o recogida en local. Tu pieza llega perfecta, bien embalada y lista para usar.' },
]

export default function ComoFunciona() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <span className="badge">Proceso</span>
          <h2 className="section-title" style={{ color: 'var(--yellow)' }}>¿Creamos?</h2>
          <p className="section-subtitle">Simple, rápido y sin complicaciones. De tu idea a tus manos en cuatro pasos.</p>
        </div>
        <div className="how-steps">
          {steps.map((s, i) => (
            <div key={i} className={`step fade-in${i > 0 ? ` delay-${i}` : ''}`}>
              <div className="step-number"><span className="step-icon">{s.icon}</span></div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

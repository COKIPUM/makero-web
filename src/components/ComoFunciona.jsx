const steps = [
  { title: 'Nos cuentas tu idea', desc: 'Escríbenos por WhatsApp o formulario. Cuéntanos qué tienes en mente, aunque solo sea una idea vaga. Estamos aquí.' },
  { title: 'Diseñamos el modelo', desc: 'Preparamos o creamos el modelo 3D. Te enviamos una preview antes de imprimir para que des tu visto bueno.' },
  { title: 'Imprimimos en 3D',   desc: 'Ponemos a trabajar nuestras impresoras con los mejores materiales. Controlamos cada detalle del proceso.' },
  { title: 'Te lo entregamos',    desc: 'Enviamos a toda España o recogida en local. Tu pieza llega perfecta, bien embalada y lista para usar.' },
]

export default function ComoFunciona() {
  return (
    <section className="section creamos" id="como-funciona">
      <div className="container">
        <div className="creamos-head">
          <h2 className="creamos-title">
            <span className="creamos-q creamos-q--open" aria-hidden="true">¿</span>
            <span className="creamos-word">Creamos</span>
            <span className="creamos-q creamos-q--close" aria-hidden="true">?</span>
            <span className="sr-only">¿Creamos?</span>
          </h2>
          <p className="creamos-lead">
            <strong>Tú pones la idea, aunque sea un garabato.</strong> Nosotros la convertimos en algo único, en cuatro pasos.
          </p>
        </div>

        <div className="creamos-path">
          <svg className="creamos-line" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 40 C 150 40, 200 100, 333 100 S 520 40, 666 40 S 850 100, 1000 100" />
          </svg>
          <ol className="how-steps">
            {steps.map((s, i) => (
              <li key={i} className={`step step--${i + 1} fade-in${i > 0 ? ` delay-${i}` : ''}`}>
                <div className="step-number" aria-hidden="true">
                  {i + 1}
                  {i === steps.length - 1 && <span className="step-done">¡Listo!</span>}
                </div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

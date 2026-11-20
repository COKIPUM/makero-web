const WA = 'https://wa.me/34608920445?text=%C2%A1Hola%2C%20Makero%21%20Estoy%20interesad%40%20en%20'
const WA_ICON = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

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

        {/* Llamada final: invita a dar el paso 1 */}
        <div className="creamos-cta fade-in">
          <div>
            <p className="creamos-cta-title">¿Empezamos con la tuya?</p>
            <p className="creamos-cta-text">El paso 1 es tuyo: cuéntanos tu idea y te respondemos en menos de 24h.</p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-hero">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={WA_ICON} />
            </svg>
            Hablamos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

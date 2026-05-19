import { testimonial1, testimonial2, testimonial3, testimonial4, testimonial5 } from '../assets/images'

const reviews = [
  {
    img: testimonial1, alt: 'Laura Martínez', pos: 'center 60%',
    name: 'Laura Martínez', role: 'Cliente particular · Sevilla',
    text: '"Pedí un busto de mi perro para regalárselo a mi novia y quedó espectacular. Idéntico a nuestra mascota. La calidad es increíble y el trato fue muy cercano. 100% repetiría."',
  },
  {
    img: testimonial2, alt: 'Carlos y Rocío', pos: 'center 100%',
    name: 'Carlos y Rocío', role: 'Recién casados · Córdoba',
    text: '"Los detalles de nuestra boda fueron un éxito total. Cada invitado se llevó su figura personalizada. Makero superó todas nuestras expectativas. Gracias de corazón."',
  },
  {
    img: testimonial3, alt: 'Miguel Pereira', pos: 'center 60%',
    name: 'Miguel Pereira', role: 'Diseñador industrial · Madrid',
    text: '"Necesitaba un prototipo funcional en tiempo récord. Makero lo entregó en 48h con una precisión milimétrica. Servicio profesional y precio justo. Volvería sin dudar."',
  },
  {
    img: testimonial5, alt: 'Ana García', pos: 'center 60%',
    name: 'Ana García', role: 'Profesora · Granada',
    text: '"Encargué letras decorativas personalizadas para el cuarto de mi hija y quedaron preciosas. El proceso fue súper fácil y rápido. Totalmente recomendable."',
  },
  {
    img: testimonial4, alt: 'María Quero', pos: 'center 60%',
    name: 'María Quero', role: 'Empresaria · Málaga',
    text: '"Mandé hacer trofeos personalizados para nuestra empresa y el resultado fue impresionante. Todos los empleados quedaron encantados. Calidad y profesionalidad al máximo."',
  },
]

export default function Testimonials() {
  return (
    <section className="section" style={{ background: 'var(--bg2)' }} id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="badge">Clientes</span>
          <h2 className="section-title">Lo que dicen de MAKERO</h2>
          <p className="section-subtitle">Más de 300 clientes satisfechos avalan nuestro trabajo. Sus palabras, no las nuestras.</p>
        </div>
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div key={i} className={`testimonial-card fade-in${i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : ''}`}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">{r.text}</p>
              <div className="testimonial-author">
                <img
                  src={r.img} alt={r.alt}
                  style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', objectPosition: r.pos, flexShrink: 0 }}
                />
                <div>
                  <div className="testimonial-name">{r.name}</div>
                  <div className="testimonial-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

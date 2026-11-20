import wordmark from '../assets/makero-wordmark.svg?raw'

// Opiniones reales de la ficha de Google de MAKERO (texto tal cual).
const GOOGLE_REVIEWS = 'https://share.google/dqxcA3Y9fAHSUa4tS'

const reviews = [
  { name: 'Antonio Pavón M.',   text: 'Genial experiencia. Jose es un crack, capta rápidamente la idea de los clientes y la ejecuta a la perfección. Altamente recomendable😜' },
  { name: 'Marta Calvo M.',     text: 'Gran profesional! Me ha encantado el resultado. No dudes en encargarle tus ideas, porque las hace realidad!!!' },
  { name: 'Isaac Fernández G.', text: 'Muy profesional y atento. En todo momento te va explicando el proceso y siempre busca la mejor solución.' },
  { name: 'Paula C.',           text: 'Todo perfecto. Me hizo un pedido personalizado de llaveros. El trato 10/10' },
  { name: 'Fran Ruiz',          text: 'Es súper rápido, te informa de todo. La verdad que volveremos a repetir en otros productos 😊' },
  { name: 'Ana María Mesa M.',  text: 'Súper encantada con el trato recibido y por el diseño. Mil gracias' },
]

const GoogleG = () => (
  <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.7c4.3-4 6.9-9.9 6.9-17.1z"/>
    <path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C1 16.4 0 20.1 0 24s1 7.6 2.6 10.8l7.9-6.1z"/>
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2.1 1.4-4.8 2.3-8.5 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.6 42.6 14.6 48 24 48z"/>
  </svg>
)

export default function Testimonials() {
  return (
    <section className="section" style={{ background: 'var(--bg2)' }} id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title testimonials-title">
            Lo que dicen de{' '}
            <span className="makero-wordmark" dangerouslySetInnerHTML={{ __html: wordmark }} />
          </h2>
          <div>
            <p className="section-subtitle">Opiniones reales de nuestros clientes en Google. Sus palabras, no las nuestras.</p>
            <span className="google-stars">
              <GoogleG />
              <span className="google-stars-icons" aria-hidden="true">★★★★★</span>
              <span>en Google</span>
              <span className="sr-only">Valoración de 5 estrellas en Google</span>
            </span>
          </div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <figure key={r.name} className={`testimonial-card testimonial-card--${i + 1} fade-in${i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : ''}`}>
              <div className="testimonial-band">
                <span className="testimonial-stars" aria-label="5 de 5 estrellas">★★★★★</span>
                <GoogleG />
              </div>
              <blockquote className="testimonial-text">{r.text}</blockquote>
              <figcaption className="testimonial-author">
                <span className="testimonial-name">{r.name}</span>
                <span className="testimonial-role">Opinión de Google</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="testimonials-more">
          <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <GoogleG /> Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  )
}

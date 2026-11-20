const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const BoltIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)

const GiftIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.4 7.2 18.9l.9-5.4L4.2 9.7l5.4-.8z"/>
  </svg>
)

export default function Promociones() {
  return (
    <section className="section" id="promociones" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Descuentos exclusivos</h2>
          <p className="section-subtitle">Ahorra en tu primer pedido o en pedidos por volumen. Sin compromiso.</p>
        </div>
        <div className="promo-grid">

          {/* Card 1 — Naranja */}
          <div className="promo-card promo-card-featured fade-in">
            <span className="promo-badge promo-sticker">
              <StarIcon /> Más popular
            </span>
            <div className="promo-discount">20%</div>
            <div className="promo-discount-label">descuento en tu primer pedido</div>
            <h3 className="promo-title">Primera creación</h3>
            <p className="promo-desc">¿Primera vez con nosotros? Estrena tu experiencia MAKERO con un 20% de descuento en cualquier pedido. Sin mínimos.</p>
          </div>

          {/* Card 2 — Amarillo */}
          <div className="promo-card promo-card-yellow fade-in delay-1">
            <span className="promo-badge promo-sticker">
              <BoltIcon /> Limitado
            </span>
            <div className="promo-discount">15%</div>
            <div className="promo-discount-label">en pedidos de 3 o más piezas</div>
            <h3 className="promo-title">Pack múltiple</h3>
            <p className="promo-desc">¿Necesitas varias piezas? Cuantas más pidas, mayor es el ahorro. Ideal para eventos, equipos o regalos a grupo.</p>
          </div>

          {/* Card 3 — Azul */}
          <div className="promo-card promo-card-blue fade-in delay-2">
            <span className="promo-badge promo-sticker">
              <GiftIcon /> Eventos
            </span>
            <div className="promo-discount">10%</div>
            <div className="promo-discount-label">descuento en paquete de evento</div>
            <h3 className="promo-title">Paquete evento</h3>
            <p className="promo-desc">Planifica tu evento con tiempo y consigue el mejor precio. Bodas, cumpleaños, fiestas temáticas y más.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

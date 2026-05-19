const WA = 'https://wa.me/34608920445?text=%C2%A1Hola%2C%20Makero%21%20Estoy%20interesad%40%20en%20'

export default function Promociones() {
  return (
    <section className="section" id="promociones" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge">Ofertas especiales</span>
          <h2 className="section-title">Descuentos exclusivos</h2>
          <p className="section-subtitle">Ahorra en tu primer pedido o en pedidos por volumen. Sin compromiso.</p>
        </div>
        <div className="promo-grid">
          {/* Card 1 — Naranja */}
          <div className="promo-card promo-card-featured fade-in">
            <span className="promo-badge">🔥 Más popular</span>
            <div className="promo-discount">20%</div>
            <div className="promo-discount-label">descuento en tu primer pedido</div>
            <h3 className="promo-title">Primera creación</h3>
            <p className="promo-desc">¿Primera vez con nosotros? Estrena tu experiencia MAKERO con un 20% de descuento en cualquier pedido. Sin mínimos.</p>
            <a href="#contacto" className="btn btn-primary">Pedir ahora</a>
          </div>

          {/* Card 2 — Amarillo */}
          <div className="promo-card promo-card-yellow fade-in delay-1">
            <span className="promo-badge promo-badge-yellow">⚡ Limitado</span>
            <div className="promo-discount" style={{ color: 'var(--yellow)' }}>15%</div>
            <div className="promo-discount-label">en pedidos de 3 o más piezas</div>
            <h3 className="promo-title">Pack múltiple</h3>
            <p className="promo-desc">¿Necesitas varias piezas? Cuantas más pidas, mayor es el ahorro. Ideal para eventos, equipos o regalos a grupo.</p>
            <a href="#contacto" className="btn" style={{ background: 'var(--yellow)', color: '#0F1115', border: 'none', boxShadow: '0 0 30px rgba(233,173,73,0.3)' }}>
              Solicitar presupuesto
            </a>
          </div>

          {/* Card 3 — Azul */}
          <div className="promo-card promo-card-blue fade-in delay-2">
            <span className="promo-badge" style={{ background: 'var(--blue)' }}>🎉 Eventos</span>
            <div className="promo-discount" style={{ color: '#7aa3cc' }}>10%</div>
            <div className="promo-discount-label">descuento en paquete de evento</div>
            <h3 className="promo-title">Paquete evento</h3>
            <p className="promo-desc">Planifica tu evento con tiempo y consigue el mejor precio. Bodas, cumpleaños, fiestas temáticas y más.</p>
            <a href="#contacto" className="btn" style={{ background: 'var(--blue)', color: '#fff', border: 'none', boxShadow: '0 0 30px rgba(72,98,135,0.3)' }}>
              Más info
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CartaNoEncontrada({ slug }) {
  return (
    <div style={{
      background: '#0F1115', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Inter, sans-serif', padding: 24,
    }}>
      <div style={{ textAlign: 'center', maxWidth: 400 }}>
        <span style={{ fontSize: 64, display: 'block', marginBottom: 24 }}>🍽️</span>
        <h1 style={{
          fontFamily: 'Sora, sans-serif', fontSize: 'clamp(22px,4vw,28px)',
          fontWeight: 800, color: '#F0F2F5', marginBottom: 12,
        }}>
          Carta no encontrada
        </h1>
        <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, marginBottom: 8 }}>
          No existe ninguna carta con el identificador:
        </p>
        <code style={{
          display: 'inline-block', background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 8, padding: '4px 12px',
          color: '#EA7A47', fontSize: 14, marginBottom: 32,
        }}>
          {slug}
        </code>
        <br />
        <a href="https://www.makero.es" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '12px 24px', borderRadius: 10,
          background: '#EA7A47', color: '#fff',
          textDecoration: 'none', fontWeight: 600, fontSize: 14,
        }}>
          ← Volver a MAKERO
        </a>
      </div>
    </div>
  )
}

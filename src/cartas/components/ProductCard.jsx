const ALERGENOS = {
  gluten:       { label: 'Gluten',       emoji: '🌾' },
  huevo:        { label: 'Huevo',        emoji: '🥚' },
  leche:        { label: 'Lácteos',      emoji: '🥛' },
  pescado:      { label: 'Pescado',      emoji: '🐟' },
  marisco:      { label: 'Marisco',      emoji: '🦐' },
  apio:         { label: 'Apio',         emoji: '🌿' },
  sulfitos:     { label: 'Sulfitos',     emoji: '⭕' },
  soja:         { label: 'Soja',         emoji: '🫘' },
  frutos_secos: { label: 'Frutos secos', emoji: '🥜' },
}

export default function ProductCard({ producto, moneda, colorPrimario }) {
  if (!producto.disponible) return null

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 12,
        padding: 'clamp(10px,1.5vw,14px) clamp(12px,2vw,16px)',
        transition: 'all 0.2s ease',
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = `${colorPrimario}40`}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
    >
      {producto.destacado && (
        <div style={{
          position: 'absolute', bottom: 8, right: 8,
          background: colorPrimario, color: '#fff',
          fontSize: 'clamp(9px,0.8vw,11px)', fontWeight: 700,
          padding: '2px 8px', borderRadius: 999,
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          ★ Destacado
        </div>
      )}
      {producto.mas_popular && (
        <div style={{
          position: 'absolute', bottom: 8, right: 8,
          background: '#F4A460', color: '#fff',
          fontSize: 'clamp(9px,0.8vw,11px)', fontWeight: 700,
          padding: '2px 8px', borderRadius: 999,
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          🔥 Más popular
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: (producto.descripcion || producto.alergenos?.length) ? 5 : 0 }}>
        <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(13px,1.2vw,15px)', fontWeight: 700, color: '#F0F2F5', lineHeight: 1.3 }}>
          {producto.nombre}
        </h3>
        <span style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(14px,1.3vw,16px)', fontWeight: 800, color: colorPrimario, whiteSpace: 'nowrap', flexShrink: 0 }}>
          {producto.precio.toFixed(2)}{moneda}
        </span>
      </div>

      {producto.descripcion && (
        <p style={{ fontSize: 'clamp(11px,1vw,13px)', color: '#6B7280', lineHeight: 1.5, marginBottom: producto.alergenos?.length ? 6 : 0 }}>
          {producto.descripcion}
        </p>
      )}

      {producto.alergenos?.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {producto.alergenos.map(a => (
            ALERGENOS[a] && (
              <span key={a} title={ALERGENOS[a].label} style={{
                fontSize: 'clamp(10px,0.9vw,12px)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 6, padding: '2px 7px', color: '#9CA3AF',
                display: 'flex', alignItems: 'center', gap: 3,
              }}>
                {ALERGENOS[a].emoji} {ALERGENOS[a].label}
              </span>
            )
          ))}
        </div>
      )}
    </div>
  )
}

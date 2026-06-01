export default function CategoryNav({ categorias, activa, onSelect, colorPrimario }) {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'rgba(15,17,21,0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: 'clamp(10px,1.2vw,14px) 0',
    }}>
      <div style={{
        maxWidth: 'min(720px, 96vw)',
        marginInline: 'auto',
        display: 'flex', gap: 'clamp(6px,1vw,10px)',
        overflowX: 'auto', padding: '0 clamp(12px,3vw,24px)',
        scrollbarWidth: 'none', msOverflowStyle: 'none',
      }}>
        {[{ id: 'todos', nombre: 'Todos', emoji: '🍴' }, ...categorias].map(cat => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            style={{
              flexShrink: 0,
              padding: 'clamp(6px,0.8vw,9px) clamp(12px,1.5vw,18px)',
              borderRadius: 999,
              border: activa === cat.id ? `1.5px solid ${colorPrimario}` : '1.5px solid rgba(255,255,255,0.1)',
              background: activa === cat.id ? `${colorPrimario}20` : 'transparent',
              color: activa === cat.id ? colorPrimario : '#9CA3AF',
              fontSize: 'clamp(12px,1vw,14px)', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            {cat.emoji} {cat.nombre}
          </button>
        ))}
      </div>
    </div>
  )
}

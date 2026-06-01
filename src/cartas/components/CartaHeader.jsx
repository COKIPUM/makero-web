export default function CartaHeader({ carta }) {
  const { nombre, descripcion, logo, color_primario, telefono, direccion, horario, imagen_header, instagram } = carta

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {imagen_header && (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${imagen_header}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 75%',
          filter: 'brightness(0.35)',
          zIndex: 0,
        }} />
      )}
      <div style={{
        position: 'absolute', inset: 0,
        background: imagen_header
          ? 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)'
          : `linear-gradient(135deg, ${color_primario}18 0%, rgba(15,17,21,0) 60%)`,
        zIndex: 1,
      }} />
      <div style={{
        position: 'relative', zIndex: 2,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: 'clamp(32px,6vw,60px) clamp(16px,5vw,40px)',
        textAlign: 'center',
        maxWidth: 'min(720px, 96vw)',
        marginInline: 'auto',
      }}>
        {/* Logo más grande */}
        <div style={{
          width: 'clamp(90px,14vw,120px)', height: 'clamp(90px,14vw,120px)',
          borderRadius: 22, margin: '0 auto clamp(16px,2vw,22px)',
          background: logo ? '#000' : `${color_primario}20`,
          border: `2px solid ${color_primario}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
          boxShadow: `0 0 28px ${color_primario}50`,
          flexShrink: 0,
        }}>
          {logo
            ? <img src={logo} alt={nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <span style={{ fontSize: 42 }}>🍽️</span>}
        </div>

        <h1 style={{
          fontFamily: 'Sora, sans-serif',
          fontSize: 'clamp(22px,4vw,34px)',
          fontWeight: 800, color: '#FFFFFF',
          letterSpacing: '-0.5px', marginBottom: 8,
          textShadow: '0 2px 12px rgba(0,0,0,0.5)',
        }}>{nombre}</h1>

        {descripcion && (
          <p style={{
            fontSize: 'clamp(12px,1.1vw,14px)', color: 'rgba(255,255,255,0.7)',
            marginBottom: 'clamp(16px,2.5vw,24px)', maxWidth: 420, marginInline: 'auto',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
          }}>{descripcion}</p>
        )}

        {/* Info pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
          {horario && (
            <span style={{ fontSize: 'clamp(11px,1vw,13px)', padding: '6px 14px', borderRadius: 999, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: 5 }}>
              🕐 {horario}
            </span>
          )}
          {direccion && (
            <span style={{ fontSize: 'clamp(11px,1vw,13px)', padding: '6px 14px', borderRadius: 999, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: 5 }}>
              📍 {direccion}
            </span>
          )}
          {telefono && (
            <a href={`tel:${telefono}`} style={{ fontSize: 'clamp(11px,1vw,13px)', padding: '6px 14px', borderRadius: 999, background: color_primario, border: `1px solid ${color_primario}`, color: '#000', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none', boxShadow: `0 0 12px ${color_primario}60` }}>
              📞 {telefono}
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'clamp(11px,1vw,13px)', padding: '6px 14px', borderRadius: 999, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

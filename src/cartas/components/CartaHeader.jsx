export default function CartaHeader({ carta }) {
  const { nombre, descripcion, logo, color_primario, telefono, direccion, horario, imagen_header } = carta

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
        padding: 'clamp(28px,5vw,56px) clamp(16px,5vw,40px)',
        textAlign: 'center',
        maxWidth: 'min(720px, 96vw)',
        marginInline: 'auto',
      }}>
        <div style={{
          width: 'clamp(70px,10vw,90px)', height: 'clamp(70px,10vw,90px)',
          borderRadius: 18, margin: '0 auto clamp(14px,2vw,20px)',
          background: logo ? '#000' : `${color_primario}20`,
          border: `2px solid ${color_primario}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
          boxShadow: `0 0 24px ${color_primario}40`,
          flexShrink: 0,
        }}>
          {logo
            ? <img src={logo} alt={nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <span style={{ fontSize: 36 }}>🍽️</span>}
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
            fontSize: 'clamp(13px,1.2vw,15px)', color: 'rgba(255,255,255,0.75)',
            marginBottom: 'clamp(16px,2.5vw,24px)', maxWidth: 420, marginInline: 'auto',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
          }}>{descripcion}</p>
        )}
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
        </div>
      </div>
    </div>
  )
}

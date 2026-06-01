export default function SearchBar({ value, onChange, colorPrimario }) {
  return (
    <div style={{ position: 'relative', marginBottom: 8 }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        type="text" value={value} onChange={e => onChange(e.target.value)}
        placeholder="Buscar plato..."
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12,
          padding: 'clamp(10px,1.2vw,13px) clamp(12px,1.5vw,16px) clamp(10px,1.2vw,13px) 38px',
          color: '#F0F2F5',
          fontSize: 'clamp(13px,1.1vw,15px)',
          outline: 'none', transition: 'border-color 0.2s',
          fontFamily: 'Inter, sans-serif',
        }}
        onFocus={e => e.target.style.borderColor = colorPrimario + '80'}
        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
      />
      {value && (
        <button onClick={() => onChange('')}
          style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', fontSize: 18, lineHeight: 1, padding: 4 }}>
          ×
        </button>
      )}
    </div>
  )
}

import { useState, useMemo } from 'react'
import CartaHeader from './CartaHeader'
import CategoryNav from './CategoryNav'
import SearchBar from './SearchBar'
import ProductCard from './ProductCard'

export default function CartaDigital({ carta }) {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [busqueda, setBusqueda] = useState('')
  const { categorias, moneda = '€', color_primario = '#EA7A47' } = carta

  const categoriasFiltradas = useMemo(() => {
    const query = busqueda.toLowerCase().trim()
    return categorias.map(cat => {
      if (categoriaActiva !== 'todos' && categoriaActiva !== cat.id) return null
      const productos = cat.productos.filter(p => {
        if (!p.disponible) return false
        if (!query) return true
        return p.nombre.toLowerCase().includes(query) || p.descripcion?.toLowerCase().includes(query)
      })
      if (productos.length === 0) return null
      return { ...cat, productos }
    }).filter(Boolean)
  }, [categorias, categoriaActiva, busqueda])

  const totalResultados = categoriasFiltradas.reduce((acc, cat) => acc + cat.productos.length, 0)

  return (
    <div style={{ background: '#0F1115', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <CartaHeader carta={carta} />
      <CategoryNav categorias={categorias} activa={categoriaActiva} onSelect={id => { setCategoriaActiva(id); setBusqueda('') }} colorPrimario={color_primario} />

      <div style={{
        maxWidth: 'min(720px, 96vw)',
        marginInline: 'auto',
        padding: 'clamp(16px,3vw,32px) clamp(12px,3vw,24px)',
      }}>
        <SearchBar value={busqueda} onChange={setBusqueda} colorPrimario={color_primario} />

        {busqueda && (
          <p style={{ fontSize: 'clamp(12px,1vw,13px)', color: '#6B7280', marginBottom: 16, marginTop: 8 }}>
            {totalResultados === 0 ? 'No se encontraron resultados' : `${totalResultados} resultado${totalResultados !== 1 ? 's' : ''} para "${busqueda}"`}
          </p>
        )}

        {categoriasFiltradas.length === 0 && (
          <div style={{ textAlign: 'center', padding: 'clamp(32px,5vw,56px) 0' }}>
            <span style={{ fontSize: 'clamp(36px,5vw,52px)', display: 'block', marginBottom: 16 }}>🔍</span>
            <p style={{ color: '#6B7280', fontSize: 'clamp(13px,1.2vw,15px)' }}>No hay platos que coincidan con tu búsqueda.</p>
            <button onClick={() => { setBusqueda(''); setCategoriaActiva('todos') }}
              style={{ marginTop: 16, padding: 'clamp(9px,1vw,12px) clamp(18px,2vw,24px)', borderRadius: 10, background: color_primario, color: '#fff', border: 'none', cursor: 'pointer', fontSize: 'clamp(13px,1.1vw,15px)', fontWeight: 600 }}>
              Ver toda la carta
            </button>
          </div>
        )}

        {categoriasFiltradas.map(cat => (
          <div key={cat.id} style={{
            marginBottom: 'clamp(28px,4vw,44px)',
            ...(cat.id === 'extras' ? {
              background: 'rgba(255,255,255,0.02)',
              border: '1px dashed rgba(255,255,255,0.12)',
              borderRadius: 16,
              padding: 'clamp(14px,2vw,20px) clamp(12px,2vw,18px)',
            } : {})
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'clamp(12px,1.5vw,18px)', paddingBottom: 'clamp(10px,1.2vw,14px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ fontSize: 'clamp(18px,2.2vw,24px)' }}>{cat.emoji}</span>
              <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(16px,2vw,21px)', fontWeight: 800, color: '#F0F2F5' }}>
                {cat.nombre}
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(7px,1vw,10px)' }}>
              {cat.productos.map(producto => (
                <ProductCard key={producto.id} producto={producto} moneda={moneda} colorPrimario={color_primario} />
              ))}
            </div>
          </div>
        ))}

        <div style={{ textAlign: 'center', padding: 'clamp(20px,3vw,32px) 0 8px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 8 }}>
          <p style={{ fontSize: 'clamp(11px,0.9vw,13px)', color: '#4B5563' }}>
            Carta digital creada por{' '}
            <a href="https://www.makero.es" target="_blank" rel="noopener noreferrer" style={{ color: color_primario, textDecoration: 'none', fontWeight: 600 }}>
              MAKERO
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

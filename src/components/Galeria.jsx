import { galleryBg1, galleryBg2, galleryBg3, galleryBg4, galleryBg5, galleryBg6 } from '../assets/images'

const items = [
  { id: 1, bg: galleryBg1, isImg: true, label: 'Detalles únicos',     name: 'Busto de mascota personalizado', pos: 'center center' },
  { id: 2, bg: galleryBg2, isImg: false, label: 'Productos de empresa', name: 'Llaveros personalizados',        pos: 'center 75%' },
  { id: 3, bg: galleryBg3, isImg: false, label: 'Deco infantil',        name: 'Letra IMAGINE',                 pos: 'center 60%' },
  { id: 5, bg: galleryBg5, isImg: false, label: 'Regalos para bebés',   name: 'Letra + Animal personalizado',  pos: 'center 70%' },
  { id: 4, bg: galleryBg4, isImg: false, label: 'Eventos',              name: 'Premios',                       pos: 'center center', size: '60%' },
  { id: 6, bg: galleryBg6, isImg: false, label: 'Corporativo',          name: 'Logo de empresa',               pos: 'center center' },
]

export default function Galeria() {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <div className="section-header">
          <span className="badge">Nuestro trabajo</span>
          <h2 className="section-title" style={{ color: 'var(--yellow)' }}>Proyectos destacados</h2>
          <p className="section-subtitle">Una selección de lo que somos capaces de crear. Cada pieza, una historia.</p>
        </div>
        <div className="gallery-grid">
          {items.map(item => (
            <div key={item.id} className={`gallery-item gallery-item-${item.id} fade-in`}>
              {item.isImg ? (
                <div className="gallery-thumb" style={{ background: '#1a1e28', padding: 0, overflow: 'hidden' }}>
                  <img
                    src={item.bg}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', background: '#1a1e28', display: 'block', borderRadius: 16 }}
                  />
                </div>
              ) : (
                <div
                  className="gallery-thumb"
                  style={{
                    backgroundImage: `url('${item.bg}')`,
                    backgroundSize: item.size || 'cover',
                    backgroundPosition: item.pos,
                  }}
                />
              )}
              <div className="gallery-overlay">
                <span className="gallery-label">{item.label}</span>
                <span className="gallery-name">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

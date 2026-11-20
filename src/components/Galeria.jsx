import { galleryBg1, galleryBg2, galleryBg3, galleryBg4, galleryBg5, galleryBg6 } from '../assets/images'

// Encuadre de cada foto para que la etiqueta no tape el producto.
// pos: escritorio (etiqueta abajo) · posM: tablet y móvil (etiqueta arriba)
const items = [
  { id: 1, src: galleryBg1, color: 'orange', name: 'Busto de mascota personalizado', pos: 'center 100%', posM: 'center 62%' },
  { id: 2, src: galleryBg2, color: 'yellow', name: 'Llaveros personalizados',        pos: 'center 82%',  posM: 'center 80%' },
  { id: 3, src: galleryBg3, color: 'blue',   name: 'Letra IMAGINE',                  pos: 'center 58%',  posM: 'center 62%' },
  { id: 5, src: galleryBg5, color: 'blue',   name: 'Letra + Animal personalizado',   pos: 'center 100%', posM: 'center 78%' },
  { id: 4, src: galleryBg4, color: 'orange', name: 'Premios',                        pos: 'center 84%',  posM: 'center 80%' },
  { id: 6, src: galleryBg6, color: 'yellow', name: 'Logo de empresa',                pos: 'center 62%',  posM: 'center 60%' },
]

export default function Galeria() {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Proyectos <span className="title-sticker title-sticker--orange">destacados</span></h2>
          <p className="section-subtitle">Una selección de lo que somos capaces de crear. Cada pieza, una historia.</p>
        </div>
        <div className="gallery-grid">
          {items.map(item => (
            <figure
              key={item.id}
              className={`gallery-item gallery-item-${item.id} gallery-item--${item.color} fade-in`}
              style={{ '--pos': item.pos, '--pos-m': item.posM }}
            >
              <img className="gallery-img" src={item.src} alt={item.name} loading="lazy" />
              <figcaption className="gallery-name">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

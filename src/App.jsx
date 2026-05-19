import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Servicios   from './components/Servicios'
import Galeria     from './components/Galeria'
import Promociones from './components/Promociones'
import ComoFunciona from './components/ComoFunciona'
import Testimonials from './components/Testimonials'
import About       from './components/About'
import Redes       from './components/Redes'
import Contacto    from './components/Contacto'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <Servicios />
        <div className="divider" />
        <Galeria />
        <div className="divider" />
        <Promociones />
        <div className="divider" />
        <ComoFunciona />
        <div className="divider" />
        <Testimonials />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Redes />
        <div className="divider" />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

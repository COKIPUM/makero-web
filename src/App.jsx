import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Servicios     from './components/Servicios'
import Galeria       from './components/Galeria'
import Promociones   from './components/Promociones'
import ComoFunciona  from './components/ComoFunciona'
import Testimonials  from './components/Testimonials'
import About         from './components/About'
import Redes         from './components/Redes'
import Contacto      from './components/Contacto'
import Footer        from './components/Footer'
import AvisoLegal    from './components/AvisoLegal'
import Privacidad    from './components/Privacidad'
import Cookies       from './components/Cookies'
import CartaDigitalPage from './cartas/pages/CartaDigitalPage'

function Home() {
  return (
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
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta oculta — carta digital sin navbar ni footer de MAKERO */}
        <Route path="/connect/:slug/carta" element={<CartaDigitalPage />} />

        {/* Rutas principales */}
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/"            element={<Home />} />
              <Route path="/aviso-legal" element={<AvisoLegal />} />
              <Route path="/privacidad"  element={<Privacidad />} />
              <Route path="/cookies"     element={<Cookies />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

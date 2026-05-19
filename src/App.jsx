import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Servicios    from './components/Servicios'
import Galeria      from './components/Galeria'
import Promociones  from './components/Promociones'
import ComoFunciona from './components/ComoFunciona'
import Testimonials from './components/Testimonials'
import About        from './components/About'
import Redes        from './components/Redes'
import Contacto     from './components/Contacto'
import Footer       from './components/Footer'
import AvisoLegal   from './components/AvisoLegal'
import Privacidad   from './components/Privacidad'
import Cookies      from './components/Cookies'

function getCurrentPage() {
  const path = window.location.pathname
  if (path === '/aviso-legal') return 'aviso-legal'
  if (path === '/privacidad') return 'privacidad'
  if (path === '/cookies') return 'cookies'
  return 'home'
}

export default function App() {
  const page = getCurrentPage()

  if (page === 'aviso-legal') return <><Navbar /><AvisoLegal /><Footer /></>
  if (page === 'privacidad')  return <><Navbar /><Privacidad /><Footer /></>
  if (page === 'cookies')     return <><Navbar /><Cookies /><Footer /></>

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

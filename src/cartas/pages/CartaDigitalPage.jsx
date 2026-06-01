import { useParams } from 'react-router-dom'
import { getCarta } from '../data/index.js'
import CartaDigital from '../components/CartaDigital'
import CartaNoEncontrada from './CartaNoEncontrada'

export default function CartaDigitalPage() {
  const { slug } = useParams()
  const carta = getCarta(slug)

  if (!carta) return <CartaNoEncontrada slug={slug} />

  return <CartaDigital carta={carta} />
}

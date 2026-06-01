import restauranteDemo from './restaurante-demo.json'
import bohemios from './bohemios.json'

const cartas = {
  'restaurante-demo': restauranteDemo,
  'bohemios': bohemios,
}

export function getCarta(slug) {
  return cartas[slug] || null
}

export function getAllSlugs() {
  return Object.keys(cartas)
}

import bohemios from './bohemios.json'

const cartas = {
  'bohemios': bohemios,
}

export function getCarta(slug) {
  return cartas[slug] || null
}

export function getAllSlugs() {
  return Object.keys(cartas)
}

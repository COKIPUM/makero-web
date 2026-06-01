const CARTAS_META = {
  'bohemios': {
    title: 'BOHEMIOS PLAZA',
    description: 'Ven a pasar un buen rato con nosotros. Disfruta de nuestra carta de productos con la mejor compañía 😍',
    image: 'https://www.makero.es/cartas/bohemios-logo.jpg',
    url: 'https://www.makero.es/connect/bohemios/carta',
  },
}

const BOT_AGENTS = [
  'facebookexternalhit', 'whatsapp', 'twitterbot', 'linkedinbot',
  'telegrambot', 'slackbot', 'discordbot', 'googlebot', 'bingbot',
]

export default async function handler(req) {
  const url = new URL(req.url)
  const slug = url.searchParams.get('slug')
  const meta = CARTAS_META[slug]

  const ua = (req.headers.get('user-agent') || '').toLowerCase()
  const isBot = BOT_AGENTS.some(bot => ua.includes(bot))

  // Si no es bot O no hay meta, sirve el index.html del SPA
  if (!isBot || !meta) {
    const spaUrl = new URL(req.url)
    spaUrl.pathname = '/index.html'
    spaUrl.search = ''
    const response = await fetch(`https://www.makero.es/index.html`)
    const html = await response.text()
    return new Response(html, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }

  // Si es bot, devuelve HTML con meta OG de Bohemios
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${meta.title} | Carta Digital</title>
  <meta name="description" content="${meta.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${meta.url}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="${meta.image}" />
  <meta property="og:image:width" content="720" />
  <meta property="og:image:height" content="720" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="CARTA DIGITAL" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${meta.image}" />
</head>
<body>
  <h1>${meta.title}</h1>
  <p>${meta.description}</p>
</body>
</html>`

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

export const config = { runtime: 'edge' }

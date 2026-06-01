// Vercel Edge Function — inyecta meta OG tags para bots de redes sociales
// Se ejecuta en el edge antes de servir el HTML

const CARTAS_META = {
  'bohemios': {
    title: 'BOHEMIOS PLAZA',
    description: 'Ven a pasar un buen rato con nosotros. Disfruta de nuestra carta de productos con la mejor compañía 😍',
    image: 'https://www.makero.es/cartas/bohemios-logo.jpg',
    url: 'https://www.makero.es/connect/bohemios/carta',
  },
  // Añade más restaurantes aquí:
  // 'mi-restaurante': {
  //   title: 'MI RESTAURANTE',
  //   description: 'Descripción...',
  //   image: 'https://www.makero.es/cartas/mi-restaurante-logo.jpg',
  //   url: 'https://www.makero.es/connect/mi-restaurante/carta',
  // },
}

const BOT_AGENTS = [
  'facebookexternalhit',
  'whatsapp',
  'twitterbot',
  'linkedinbot',
  'telegrambot',
  'slackbot',
  'discordbot',
  'googlebot',
  'bingbot',
]

export default async function handler(req) {
  const url = new URL(req.url)
  const parts = url.pathname.split('/')
  // /connect/:slug/carta → parts = ['', 'connect', slug, 'carta']
  const slug = parts[2]
  const meta = CARTAS_META[slug]

  if (!meta) {
    return new Response(null, { status: 302, headers: { Location: '/' } })
  }

  const ua = (req.headers.get('user-agent') || '').toLowerCase()
  const isBot = BOT_AGENTS.some(bot => ua.includes(bot))

  // Si no es bot, redirige al SPA normal
  if (!isBot) {
    return new Response(null, {
      status: 302,
      headers: { Location: `/connect/${slug}/carta` },
    })
  }

  // Si es bot, devuelve HTML con meta tags
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
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${meta.image}" />
</head>
<body>
  <p>${meta.title}</p>
</body>
</html>`

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

export const config = {
  matcher: ['/connect/:slug/carta'],
}

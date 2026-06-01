# 📋 Sistema de Cartas Digitales — MAKERO

## ¿Cómo añadir una nueva carta de restaurante?

### 1. Crear el JSON del restaurante

Crea el archivo `src/cartas/data/nombre-slug.json` copiando esta plantilla:

```json
{
  "slug": "nombre-slug",
  "nombre": "Nombre del Restaurante",
  "descripcion": "Descripción corta del restaurante",
  "logo": "",
  "imagen_header": "",
  "color_primario": "#EA7A47",
  "color_secundario": "#E9AD49",
  "telefono": "+34 600 000 000",
  "direccion": "Calle, Número, Ciudad",
  "horario": "Lun-Dom 10:00-23:00",
  "moneda": "€",
  "notas": "Texto de notas opcionales (ej: servicio de pan, salsas...)",
  "categorias": [
    {
      "id": "categoria-1",
      "nombre": "Nombre Categoría",
      "emoji": "🍽️",
      "productos": [
        {
          "id": "p1",
          "nombre": "Nombre del plato",
          "descripcion": "Descripción del plato",
          "precio": 9.50,
          "imagen": "",
          "alergenos": ["gluten", "leche"],
          "destacado": false,
          "disponible": true
        }
      ]
    }
  ]
}
```

> **Categoría especial:** Usa `"id": "extras"` para que aparezca con borde discontinuo (salsas, pan, suplementos).

---

### 2. Añadir logo e imagen de header

Convierte las imágenes a base64 con este script Python:

```python
import base64

with open('logo.jpg', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode()
    print('data:image/jpeg;base64,' + b64)
```

Pega el resultado en el campo `"logo"` o `"imagen_header"` del JSON.

---

### 3. Registrar en el índice

Edita `src/cartas/data/index.js` y añade:

```js
import miRestaurante from './nombre-slug.json'

const cartas = {
  'restaurante-demo': restauranteDemo,
  'bohemios': bohemios,
  'nombre-slug': miRestaurante,  // ← añade aquí
}
```

---

### 4. Añadir meta tags OG para WhatsApp

Edita `api/carta-meta.js` y añade en `CARTAS_META`:

```js
const CARTAS_META = {
  'bohemios': { ... },
  'nombre-slug': {
    title: 'NOMBRE RESTAURANTE EN MAYÚSCULAS',
    description: 'Descripción que aparecerá en WhatsApp al compartir el enlace',
    image: 'https://www.makero.es/cartas/nombre-slug-logo.jpg',
    url: 'https://www.makero.es/connect/nombre-slug/carta',
  },
}
```

Guarda también el logo en `public/cartas/nombre-slug-logo.jpg` como archivo (no base64).

---

### 5. Subir a producción

```bash
git add .
git commit -m "Nueva carta: Nombre Restaurante"
git push
```

URL pública: `https://www.makero.es/connect/nombre-slug/carta`

---

## 🎨 Paleta de colores recomendada

Adapta `color_primario` y `color_secundario` a los colores del restaurante.
El `color_primario` se usa en: precio, botón de teléfono, badge destacado, categoría activa.

---

## 🥗 Alérgenos disponibles

| Clave | Emoji | Etiqueta |
|-------|-------|----------|
| `gluten` | 🌾 | Gluten |
| `huevo` | 🥚 | Huevo |
| `leche` | 🥛 | Lácteos |
| `pescado` | 🐟 | Pescado |
| `marisco` | 🦐 | Marisco |
| `apio` | 🌿 | Apio |
| `sulfitos` | ⭕ | Sulfitos |
| `soja` | 🫘 | Soja |
| `frutos_secos` | 🥜 | Frutos secos |

---

## 📁 Estructura de archivos

```
src/cartas/
├── data/
│   ├── index.js                  ← registro central
│   ├── restaurante-demo.json     ← plantilla demo
│   └── bohemios.json             ← Bohemios Plaza
├── components/
│   ├── CartaDigital.jsx          ← componente principal
│   ├── CartaHeader.jsx           ← cabecera con foto y datos
│   ├── CategoryNav.jsx           ← navegación categorías
│   ├── SearchBar.jsx             ← buscador
│   └── ProductCard.jsx           ← tarjeta producto
└── pages/
    ├── CartaDigitalPage.jsx      ← página con useParams
    └── CartaNoEncontrada.jsx     ← 404

api/
└── carta-meta.js                 ← Edge Function OG tags WhatsApp

public/cartas/
└── bohemios-logo.jpg             ← logos para OG (no base64)
```

---

## 🚀 Clientes activos

| Restaurante | Slug | URL |
|-------------|------|-----|
| Bohemios Plaza | `bohemios` | [/connect/bohemios/carta](https://www.makero.es/connect/bohemios/carta) |

---

## 📌 Notas importantes

- El logo e imagen de header van en **base64** dentro del JSON (no necesitan hosting externo)
- El logo para WhatsApp/OG va como **archivo** en `public/cartas/` (los bots no ejecutan JS)
- Las cartas no aparecen en el menú ni en el SEO de MAKERO (`noindex`)
- WhatsApp puede tardar hasta 24h en actualizar la preview tras un cambio
- Para forzar actualización: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)

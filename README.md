# MAKERO · React + Vite + Tailwind

## 🚀 Instalación

```bash
npm install
npm run dev
```

## 📁 Estructura

```
makero-react/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          ← Estilos globales + variables CSS
    ├── assets/
    │   └── images.js      ← Imágenes en base64 (auto-generado)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Servicios.jsx
        ├── Galeria.jsx
        ├── Promociones.jsx
        ├── ComoFunciona.jsx
        ├── Testimonials.jsx
        ├── About.jsx
        ├── Redes.jsx
        ├── Contacto.jsx
        └── Footer.jsx
```

## 🎥 Vídeo hero

El vídeo no se incluye en base64 por su tamaño (42MB).
Añade tu vídeo en `/public/hero-video.mp4`.

## 📬 Formulario de contacto

El componente `Contacto.jsx` incluye la lógica de estado pero no el envío real.
Puedes integrarlo con:
- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- Tu propio backend

## 🏗️ Build producción

```bash
npm run build
npm run preview
```

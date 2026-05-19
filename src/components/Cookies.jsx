export default function Cookies() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <a href="/" style={{ color: 'var(--orange)', textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 40 }}>
          ← Volver a inicio
        </a>
        <h1 style={{ fontFamily: 'Sora', fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Política de Cookies</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 48 }}>Última actualización: mayo 2026</p>

        {[
          {
            title: '1. ¿Qué son las cookies?',
            content: `Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y mejorar tu experiencia de navegación.`,
          },
          {
            title: '2. Cookies que utilizamos',
            content: `Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para el funcionamiento de la web. No utilizamos cookies de seguimiento, publicidad ni analítica de terceros sin tu consentimiento.`,
          },
          {
            title: '3. Cookies de terceros',
            content: `Podemos utilizar servicios de terceros como Google Analytics para medir el tráfico de la web de forma anónima. Estos servicios pueden instalar sus propias cookies. Puedes consultar su política en: policies.google.com/privacy.`,
          },
          {
            title: '4. Cómo desactivar las cookies',
            content: `Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que esto puede afectar al funcionamiento de algunas partes del sitio web. Instrucciones según navegador: Chrome → Configuración → Privacidad → Cookies. Firefox → Opciones → Privacidad → Cookies. Safari → Preferencias → Privacidad.`,
          },
          {
            title: '5. Más información',
            content: `Para cualquier consulta sobre el uso de cookies en este sitio web, puedes contactarnos en makero3d@gmail.com.`,
          },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Sora', fontSize: 20, fontWeight: 700, marginBottom: 12, color: 'var(--orange)' }}>{s.title}</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AvisoLegal() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <a href="/" style={{ color: 'var(--orange)', textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 40 }}>
          ← Volver a inicio
        </a>
        <h1 style={{ fontFamily: 'Sora', fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Aviso Legal</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 48 }}>Última actualización: mayo 2026</p>

        {[
          {
            title: '1. Datos identificativos',
            content: `En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa que el titular de este sitio web es MAKERO, con domicilio en Cabra, Córdoba, España. Contacto: makero3d@gmail.com · Teléfono: +34 608 920 445.`,
          },
          {
            title: '2. Objeto y ámbito de aplicación',
            content: `El presente Aviso Legal regula el acceso y uso del sitio web www.makero.es, titularidad de MAKERO. El acceso al sitio web implica la aceptación plena de las condiciones aquí establecidas.`,
          },
          {
            title: '3. Propiedad intelectual e industrial',
            content: `Todos los contenidos del sitio web (textos, imágenes, logotipos, diseños, código fuente, etc.) son propiedad de MAKERO o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.`,
          },
          {
            title: '4. Responsabilidad',
            content: `MAKERO no se hace responsable de los daños derivados del uso del sitio web, de errores en los contenidos ni de la disponibilidad del servicio. El usuario es el único responsable del uso que haga del sitio.`,
          },
          {
            title: '5. Legislación aplicable',
            content: `Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del acceso o uso del sitio web, las partes se someten a los juzgados y tribunales de Córdoba.`,
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

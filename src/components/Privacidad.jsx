export default function Privacidad() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <a href="/" style={{ color: 'var(--orange)', textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 40 }}>
          ← Volver a inicio
        </a>
        <h1 style={{ fontFamily: 'Sora', fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Política de Privacidad</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 48 }}>Última actualización: mayo 2026</p>

        {[
          {
            title: '1. Responsable del tratamiento',
            content: `MAKERO, con domicilio en Cabra, Córdoba, España. Email: info@makero.es. Teléfono: +34 608 920 445.`,
          },
          {
            title: '2. Datos que recopilamos',
            content: `Recopilamos los datos que nos facilitas voluntariamente a través del formulario de contacto: nombre, correo electrónico, teléfono y el mensaje que nos envías. No recopilamos datos sin tu consentimiento explícito.`,
          },
          {
            title: '3. Finalidad del tratamiento',
            content: `Los datos recogidos se utilizan exclusivamente para responder a tus consultas y gestionar los pedidos o presupuestos solicitados. No utilizamos tus datos para envíos de publicidad sin tu consentimiento previo.`,
          },
          {
            title: '4. Legitimación',
            content: `La base legal para el tratamiento de tus datos es el consentimiento que nos otorgas al rellenar el formulario de contacto y el interés legítimo en la gestión de nuestra relación comercial.`,
          },
          {
            title: '5. Conservación de datos',
            content: `Conservamos tus datos durante el tiempo necesario para atender tu solicitud y, posteriormente, durante los plazos legales exigibles. Puedes solicitar su eliminación en cualquier momento.`,
          },
          {
            title: '6. Destinatarios',
            content: `Tus datos no se ceden a terceros, salvo obligación legal. Podemos utilizar proveedores de servicios (como plataformas de email) que actúan como encargados del tratamiento bajo acuerdos de confidencialidad.`,
          },
          {
            title: '7. Tus derechos',
            content: `Tienes derecho a acceder, rectificar, suprimir, limitar u oponerte al tratamiento de tus datos, así como a la portabilidad de los mismos. Puedes ejercerlos escribiendo a info@makero.es. Si consideras que tus derechos no se han atendido correctamente, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).`,
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

import LegalLayout from '@/components/ui/LegalLayout';

export const metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de Activa Asesores. Qué cookies usamos, para qué y cómo puedes gestionarlas.',
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" lastUpdated="mayo de 2025">
      <p>
        Esta política explica qué son las cookies, qué tipos utilizamos en activaasesores.com y cómo puedes gestionarlas. Cumplimos con la Ley 34/2002 (LSSICE) y el RGPD.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Permiten que el sitio recuerde tus preferencias, analice cómo lo usas y ofrezca funcionalidades mejoradas.
      </p>

      <h2>2. Cookies que utilizamos</h2>

      <h3>Cookies estrictamente necesarias</h3>
      <p>
        Son imprescindibles para el funcionamiento básico del sitio. No requieren consentimiento previo. Incluyen cookies de sesión y seguridad.
      </p>

      <h3>Cookies analíticas</h3>
      <p>
        Nos ayudan a entender cómo interactúan los usuarios con el sitio web (páginas visitadas, tiempo de permanencia, origen del tráfico). Utilizamos estas cookies únicamente con tu consentimiento previo.
      </p>
      <ul>
        <li><strong>Google Analytics:</strong> mide el tráfico y el comportamiento en el sitio. Los datos se anonomizan antes de ser procesados.</li>
      </ul>

      <h3>Cookies de preferencias</h3>
      <p>
        Almacenan tus preferencias de navegación (por ejemplo, el idioma o si has aceptado las cookies) para que no tengas que configurarlas en cada visita.
      </p>

      <h3>Cookies de marketing</h3>
      <p>
        Actualmente <strong>no utilizamos</strong> cookies de publicidad o retargeting en este sitio web.
      </p>

      <h2>3. Tabla de cookies</h2>
      <div className="overflow-x-auto rounded-2xl border border-neutral-100 my-4">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-neutral-700">Cookie</th>
              <th className="text-left px-4 py-3 font-semibold text-neutral-700">Tipo</th>
              <th className="text-left px-4 py-3 font-semibold text-neutral-700">Duración</th>
              <th className="text-left px-4 py-3 font-semibold text-neutral-700">Finalidad</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {[
              ['_session', 'Necesaria', 'Sesión', 'Mantener la sesión del usuario'],
              ['cookie_consent', 'Preferencia', '12 meses', 'Recordar tu elección sobre cookies'],
              ['_ga', 'Analítica', '2 años', 'Análisis de tráfico (Google Analytics)'],
              ['_gid', 'Analítica', '24 horas', 'Diferenciación de usuarios (Google Analytics)'],
            ].map(([name, type, duration, purpose]) => (
              <tr key={name} className="hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-neutral-600">{name}</td>
                <td className="px-4 py-3 text-neutral-500">{type}</td>
                <td className="px-4 py-3 text-neutral-500">{duration}</td>
                <td className="px-4 py-3 text-neutral-500">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        Puedes controlar y/o eliminar las cookies cuando quieras. Puedes eliminar todas las cookies que ya están en tu dispositivo y configurar la mayoría de los navegadores para impedir que se coloquen.
      </p>
      <p>Instrucciones para los navegadores más comunes:</p>
      <ul>
        <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies.</li>
        <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio.</li>
        <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies.</li>
        <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies.</li>
      </ul>
      <p>
        Ten en cuenta que si desactivas las cookies, algunas funcionalidades del sitio pueden no funcionar correctamente.
      </p>

      <h2>5. Actualizaciones de esta política</h2>
      <p>
        Podemos actualizar esta política de cookies en cualquier momento. Te recomendamos revisarla periódicamente. La fecha de última actualización aparece al principio del documento.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Si tienes dudas sobre el uso de cookies en nuestro sitio, puedes contactarnos en:{' '}
        <a href="mailto:privacidad@activaasesores.com">privacidad@activaasesores.com</a>
      </p>
    </LegalLayout>
  );
}

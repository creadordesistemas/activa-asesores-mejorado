import LegalLayout from '@/components/ui/LegalLayout';

export const metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Activa Asesores. Cómo recogemos, usamos y protegemos tus datos personales conforme al RGPD.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="enero de 2024">
      <p>
        En Activa Asesores nos tomamos muy en serio la privacidad de nuestros clientes y usuarios. Esta política describe cómo recogemos, usamos y protegemos tus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> Activa Asesores S.L.</li>
        <li><strong>CIF:</strong> B-XXXXXXXX</li>
        <li><strong>Contacto DPO:</strong> privacidad@activaasesores.com</li>
      </ul>

      <h2>2. Datos que recogemos</h2>
      <p>Recogemos los siguientes tipos de datos personales:</p>
      <ul>
        <li><strong>Datos de contacto:</strong> nombre, apellidos, correo electrónico, teléfono.</li>
        <li><strong>Datos del suministro:</strong> CUPS, dirección del punto de suministro, datos de la factura energética cuando nos la proporcionas voluntariamente.</li>
        <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas (vía cookies).</li>
      </ul>

      <h2>3. Finalidad y base legal del tratamiento</h2>
      <p>Tratamos tus datos para las siguientes finalidades:</p>
      <ul>
        <li><strong>Prestación del servicio contratado</strong> (base legal: ejecución de contrato). Gestionar los trámites energéticos que nos encomiendas.</li>
        <li><strong>Atención al cliente</strong> (base legal: interés legítimo). Responder consultas y gestionar incidencias.</li>
        <li><strong>Comunicaciones comerciales</strong> (base legal: consentimiento). Solo si nos lo autorizas expresamente, te enviaremos información sobre nuestros servicios.</li>
        <li><strong>Cumplimiento de obligaciones legales</strong> (base legal: obligación legal).</li>
      </ul>

      <h2>4. Conservación de datos</h2>
      <p>
        Conservamos tus datos durante el tiempo necesario para prestar el servicio y, posteriormente, durante los plazos de prescripción legal que correspondan (generalmente 5 años para obligaciones civiles y 4 años para obligaciones tributarias).
      </p>

      <h2>5. Destinatarios y transferencias internacionales</h2>
      <p>
        No cedemos tus datos a terceros, salvo obligación legal o cuando sea necesario para prestar el servicio (por ejemplo, comunicar datos a la comercializadora o distribuidora en el marco de un trámite).
      </p>
      <p>
        No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo.
      </p>

      <h2>6. Tus derechos</h2>
      <p>Puedes ejercer los siguientes derechos enviando un email a privacidad@activaasesores.com:</p>
      <ul>
        <li><strong>Acceso:</strong> conocer qué datos tuyos tratamos.</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
        <li><strong>Oposición y limitación:</strong> oponerte a ciertos tratamientos o limitarlos.</li>
        <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
        <li><strong>Retirar el consentimiento:</strong> en cualquier momento, para los tratamientos basados en él.</li>
      </ul>
      <p>
        Si consideras que tus derechos no han sido atendidos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
      </p>

      <h2>7. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la pérdida accidental o la destrucción, conforme al artículo 32 del RGPD.
      </p>

      <h2>8. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política de privacidad para reflejar cambios normativos o en nuestras prácticas. Te informaremos de cambios significativos a través del sitio web o por email.
      </p>
    </LegalLayout>
  );
}

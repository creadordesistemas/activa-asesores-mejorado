import LegalLayout from '@/components/ui/LegalLayout';

export const metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Activa Asesores. Información sobre el titular del sitio web, condiciones de uso y propiedad intelectual.',
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" lastUpdated="enero de 2024">
      <h2>1. Datos identificativos del titular</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se facilitan los siguientes datos identificativos:
      </p>
      <ul>
        <li><strong>Denominación social:</strong> Activa Asesores S.L.</li>
        <li><strong>CIF:</strong> B-XXXXXXXX</li>
        <li><strong>Domicilio social:</strong> España</li>
        <li><strong>Correo electrónico:</strong> info@activaasesores.com</li>
        <li><strong>Teléfono:</strong> 900 000 000</li>
        <li><strong>Web:</strong> www.activaasesores.com</li>
      </ul>

      <h2>2. Objeto y ámbito de aplicación</h2>
      <p>
        El presente Aviso Legal regula las condiciones de uso del sitio web www.activaasesores.com. El acceso y uso de este sitio web implica la aceptación expresa de estas condiciones.
      </p>
      <p>
        Activa Asesores se reserva el derecho a modificar unilateralmente las presentes condiciones, así como los contenidos, servicios y tarifas ofrecidos en el sitio web, sin previo aviso.
      </p>

      <h2>3. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web (textos, fotografías, gráficos, logotipos, marcas, código fuente y software) son propiedad de Activa Asesores o de terceros que han autorizado su uso, y están protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial.
      </p>
      <p>
        Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de estos contenidos sin la autorización expresa de Activa Asesores.
      </p>

      <h2>4. Condiciones de uso</h2>
      <p>
        El usuario se compromete a utilizar el sitio web conforme a la ley, al presente Aviso Legal, a la moral y a las buenas costumbres. El usuario no podrá:
      </p>
      <ul>
        <li>Utilizar el sitio web con fines ilícitos o que dañen los derechos de terceros.</li>
        <li>Intentar acceder de manera no autorizada a sistemas o redes conectados al sitio web.</li>
        <li>Introducir o difundir virus informáticos o cualquier otro sistema susceptible de dañar el sitio web.</li>
      </ul>

      <h2>5. Exclusión de responsabilidades</h2>
      <p>
        Activa Asesores no garantiza la disponibilidad continua e ininterrumpida del sitio web y no se responsabiliza por los posibles daños o perjuicios causados por la falta de disponibilidad del mismo.
      </p>
      <p>
        La información contenida en este sitio web tiene carácter meramente orientativo. Para cualquier cuestión específica, le recomendamos contactar directamente con nuestro equipo.
      </p>

      <h2>6. Legislación aplicable y jurisdicción</h2>
      <p>
        Las relaciones entre Activa Asesores y los usuarios se regirán por la legislación española vigente. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio del usuario, sin perjuicio de otros fueros que pudieran corresponder conforme a derecho.
      </p>
    </LegalLayout>
  );
}

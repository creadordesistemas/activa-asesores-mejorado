import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CookieBanner from '@/components/ui/CookieBanner';
import WhatsAppBubble from '@/components/ui/WhatsAppBubble';

// next/font descarga y sirve la fuente localmente en build-time:
// sin peticiones externas en runtime, con preload automático → LCP óptimo
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-primary',
  display: 'swap',
  preload: true,
});


export const metadata = {
  title: {
    default: 'Activa Asesores | Gestoría Energética — Ahorra en tu factura de luz y gas',
    template: '%s | Activa Asesores',
  },
  description:
    'Optimizamos tu factura de luz y gas, gestionamos cambios de titular y altas de suministros. Rápido, transparente y sin papeleos. Tu gestoría energética de confianza.',
  keywords: [
    'gestoría energética',
    'optimizar factura luz',
    'ahorro factura gas',
    'cambio titular electricidad',
    'alta suministro luz',
    'gestoria energia españa',
  ],
  authors: [{ name: 'Activa Asesores' }],
  creator: 'Activa Asesores',
  metadataBase: new URL('https://activaasesores.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://activaasesores.com',
    siteName: 'Activa Asesores',
    title: 'Activa Asesores | Gestoría Energética',
    description: 'Optimizamos tu factura de luz y gas, gestionamos cambios de titular y altas de suministros.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Activa Asesores | Gestoría Energética',
    description: 'Optimizamos tu factura de luz y gas sin complicaciones.',
  },
  icons: {
    icon: [
      { url: '/activa-logo-orange.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/activa-logo-orange.webp', sizes: '192x192', type: 'image/webp' },
    ],
    shortcut: '/activa-logo-orange.webp',
    apple: { url: '/activa-logo-orange.webp', sizes: '180x180', type: 'image/webp' },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://activaasesores.com/#organization',
  name: 'Activa Asesores',
  alternateName: 'Activa Asesores Gestoría Energética',
  url: 'https://activaasesores.com',
  logo: 'https://activaasesores.com/activa-logo-orange.webp',
  telephone: '+34854615199',
  email: 'info@activaasesores.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. San Francisco Javier, 9 STN 7',
    addressLocality: 'Sevilla',
    postalCode: '41018',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.3886,
    longitude: -5.9823,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '20:00',
  },
  sameAs: [
    'https://www.instagram.com/activa.asesores',
    'https://www.tiktok.com/@activaasesores',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de gestión energética de luz y gas',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Alta de suministro de luz y gas',
          description: 'Activación de energía eléctrica o gas en inmuebles nuevos o tras periodos de baja. Tramitación rápida y gratuita.',
          url: 'https://activaasesores.com/gestiones/alta-suministro-luz',
          provider: { '@id': 'https://activaasesores.com/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cambio de titular de suministro energético',
          description: 'Transferencia de titularidad del contrato de luz o gas sin cortes de suministro. Gestión 100% gratuita.',
          url: 'https://activaasesores.com/gestiones/cambio-titular-luz',
          provider: { '@id': 'https://activaasesores.com/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Alta nuevo punto de suministro (Acometida)',
          description: 'Expedientes técnicos de acometida eléctrica o de gas para nuevos inmuebles, locales y negocios.',
          url: 'https://activaasesores.com/gestiones/alta-nuevo-punto-suministro-luz',
          provider: { '@id': 'https://activaasesores.com/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mejora de condiciones y optimización de tarifas de luz y gas',
          description: 'Comparación de tarifas vigentes del mercado eléctrico y gasístico. Blindaje anual contra subidas de precio.',
          url: 'https://activaasesores.com/gestiones/mejora-condiciones-luz',
          provider: { '@id': 'https://activaasesores.com/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Optimización de potencia contratada',
          description: 'Ajuste de kW contratados para eliminar sobrecostes en la factura eléctrica.',
          url: 'https://activaasesores.com/gestiones/subida-potencia-luz',
          provider: { '@id': 'https://activaasesores.com/#organization' },
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <WhatsAppBubble />
      </body>
    </html>
  );
}

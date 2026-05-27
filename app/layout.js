import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

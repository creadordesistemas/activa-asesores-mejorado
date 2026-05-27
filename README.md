# Activa Asesores — Web Corporativa

Web corporativa de Activa Asesores, gestoría especializada en energía. Construida con Next.js 14 (App Router) y TailwindCSS.

## Stack tecnológico

- **Framework:** Next.js 14 (App Router)
- **Estilos:** TailwindCSS 3
- **Tipografía:** Plus Jakarta Sans (Google Fonts)
- **Despliegue:** Vercel (recomendado)

## Estructura del proyecto

```
activa-asesores/
├── app/
│   ├── layout.js              # Layout raíz (Navbar + Footer)
│   ├── globals.css            # Estilos globales + design tokens
│   ├── page.js                # / — Home
│   ├── error.js               # Error boundary
│   ├── loading.js             # Loading UI
│   ├── not-found.js           # 404
│   ├── servicios/
│   │   └── page.js            # /servicios
│   ├── quienes-somos/
│   │   └── page.js            # /quienes-somos
│   ├── contacto/
│   │   └── page.js            # /contacto
│   ├── aviso-legal/
│   │   └── page.js            # /aviso-legal
│   ├── politica-de-privacidad/
│   │   └── page.js            # /politica-de-privacidad
│   └── politica-de-cookies/
│       └── page.js            # /politica-de-cookies
├── components/
│   └── ui/
│       ├── Navbar.js          # Navbar sticky con blur
│       ├── Footer.js          # Footer completo
│       ├── ContactForm.js     # Formulario multi-paso
│       └── LegalLayout.js     # Layout reutilizable para páginas legales
├── lib/
│   └── utils.js               # Helpers
├── tailwind.config.js         # Config Tailwind con colores corporativos
├── next.config.js
└── package.json
```

## Rutas disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Home — Hero + servicios + proceso + testimonios |
| `/servicios` | Detalle de todos los servicios |
| `/quienes-somos` | Equipo, misión y valores |
| `/contacto` | Formulario de contacto multi-paso |
| `/aviso-legal` | Aviso legal |
| `/politica-de-privacidad` | Política de privacidad |
| `/politica-de-cookies` | Política de cookies |

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Servidor de producción
npm run start
```

## Despliegue en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. En [Vercel](https://vercel.com), crea un nuevo proyecto e importa el repositorio.
3. Vercel detecta automáticamente Next.js. No necesitas configuración adicional.
4. Haz clic en **Deploy**.

## Personalización

### Colores corporativos

Edita `tailwind.config.js`. Los colores principales son:
- `brand` — Verde energético (principal)
- `electric` — Azul eléctrico (secundario)
- `neutral` — Grises refinados

### Información de contacto

Busca y reemplaza en los archivos:
- `900 000 000` → tu teléfono real
- `info@activaasesores.com` → tu email real
- `B-XXXXXXXX` → tu CIF real

### Integración del formulario

El formulario de contacto en `/contacto` está preparado para conectarse a cualquier backend. En `ContactForm.js`, busca el comentario `// In production, submit to backend/API` y añade tu lógica de envío (API Route de Next.js, Resend, EmailJS, etc.).

## Tipografía

Se usa **Plus Jakarta Sans** cargada desde Google Fonts. Para producción con mejor rendimiento, considera usar `next/font/google`:

```js
// app/layout.js
import { Plus_Jakarta_Sans } from 'next/font/google';
const font = Plus_Jakarta_Sans({ subsets: ['latin'] });
```

## SEO

Cada página tiene su propio bloque `export const metadata` con título, descripción y OpenGraph. El layout raíz define los metadatos base heredables.

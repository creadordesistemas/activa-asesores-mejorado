/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Azul corporativo (principal) ──────────────────────────────
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1A5FAD',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3270',
          950: '#0f1e4a',
        },
        // ── Naranja energía (acento) ──────────────────────────────────
        accent: {
          50:  '#fff8f0',
          100: '#ffecd8',
          200: '#ffd4a8',
          300: '#ffb56a',
          400: '#f4a261',
          500: '#f08030',
          600: '#e06020',
          700: '#c44d18',
          800: '#9c3d18',
          900: '#7c3318',
          950: '#431709',
        },
        // ── Grises neutros (texto, fondos, bordes) ────────────────────
        neutral: {
          50:  '#f8f9fb',
          100: '#f1f3f7',
          200: '#e4e8ef',
          300: '#cdd3de',
          400: '#9aa3b3',
          500: '#6b7789',
          600: '#505c6e',
          700: '#3e4a5a',
          800: '#2d3848',
          900: '#1c2535',
          950: '#0f1622',
        },
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft':      '0 2px 16px 0 rgba(15,30,74,0.06)',
        'card':      '0 4px 32px 0 rgba(15,30,74,0.09)',
        'glow':      '0 0 40px 0 rgba(26,95,173,0.22)',
        'glow-accent': '0 0 40px 0 rgba(244,162,97,0.30)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh': "radial-gradient(at 20% 20%, rgba(26,95,173,0.10) 0, transparent 50%), radial-gradient(at 80% 80%, rgba(244,162,97,0.08) 0, transparent 50%), radial-gradient(at 50% 0%, rgba(26,95,173,0.06) 0, transparent 60%)",
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'float':   'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}

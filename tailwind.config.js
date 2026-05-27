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
        brand: {
          50:  '#eefbf3',
          100: '#d6f5e3',
          200: '#b0e9cb',
          300: '#7dd6ab',
          400: '#47bc86',
          500: '#25a26b',
          600: '#188356',
          700: '#146847',
          800: '#13523a',
          900: '#114431',
          950: '#08271d',
        },
        electric: {
          50:  '#eff8ff',
          100: '#dbeffe',
          200: '#bfe3fd',
          300: '#93d0fb',
          400: '#61b4f6',
          500: '#3b94f0',
          600: '#2575e4',
          700: '#1d5fd1',
          800: '#1d4da9',
          900: '#1e4285',
          950: '#162952',
        },
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
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 16px 0 rgba(15,22,34,0.06)',
        'card': '0 4px 32px 0 rgba(15,22,34,0.08)',
        'glow': '0 0 40px 0 rgba(37,162,107,0.18)',
        'glow-blue': '0 0 40px 0 rgba(59,148,240,0.18)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh': "radial-gradient(at 20% 20%, rgba(37,162,107,0.12) 0, transparent 50%), radial-gradient(at 80% 80%, rgba(59,148,240,0.10) 0, transparent 50%), radial-gradient(at 50% 0%, rgba(37,162,107,0.06) 0, transparent 60%)",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}

import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
        base: {
          950: '#0b0f19',
          900: '#0f172a',
          800: '#111827',
          700: '#1f2937',
        },
        surface: {
          DEFAULT: '#111827',
          soft: '#0b1220',
          glow: '#0f1b2d',
        },
        accent: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        teal: {
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        border: 'rgba(148, 163, 184, 0.18)',
        glow: 'rgba(56, 189, 248, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 20px 50px -30px rgba(15, 23, 42, 0.8)',
        glow: '0 0 0 1px rgba(56, 189, 248, 0.12), 0 0 30px rgba(45, 212, 191, 0.15)',
        lift: '0 18px 40px -20px rgba(15, 23, 42, 0.9)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -18px, 0) rotate(6deg)' },
        },
        gridShift: {
          '0%': { backgroundPosition: '0 0, 0 0' },
          '100%': { backgroundPosition: '160px 160px, -160px -160px' },
        },
        orbit: {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '100%': { transform: 'translate3d(0, 0, 0) rotate(360deg)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        slowFloat: 'float 18s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        gridShift: 'gridShift 40s linear infinite',
        orbit: 'orbit 22s linear infinite',
        spinSlower: 'spinSlow 28s linear infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        shimmer: 'shimmer 2.4s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top, rgba(56,189,248,0.12), transparent 60%), radial-gradient(circle at 20% 20%, rgba(45,212,191,0.18), transparent 50%)',
      },
    },
  },
  plugins: [typography],
}

export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      colors: {
        ink: '#0C1322',
        mist: '#EEF0FF',
        indigo: {
          50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd',
          400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca',
          800: '#3730a3', 900: '#1e1b4b', 950: '#0f0d2e',
        },
      },
      boxShadow: {
        glass: '0 20px 40px -18px rgba(79,70,229,.18), inset 0 0 0 1px rgba(255,255,255,.75)',
        'glass-lg': '0 30px 60px -20px rgba(79,70,229,.28), inset 0 0 0 1px rgba(255,255,255,.85)',
        ink: '0 30px 60px -20px rgba(2,6,23,.65), inset 0 0 0 1px rgba(255,255,255,.08)',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(30px,-40px,0) scale(1.08)' },
        },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'drift-slow': 'drift 26s ease-in-out infinite reverse',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}

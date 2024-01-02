import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xsm: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      colors: {
        text: '#050505',
        background: '#fafafa',
        primary: '#b52639',
        secondary: '#fdced3',
        accent: '#f50a29',
        darktext: '#fafafa',
        darkbackground: '#050505',
        darkprimary: '#b52639',
        darksecondary: '#310207',
        darkaccent: '#f96c7f'
      }
    }
  },
  plugins: []
}
export default config

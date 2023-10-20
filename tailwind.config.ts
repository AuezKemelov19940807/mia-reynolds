import { Alex_Brush } from 'next/font/google';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
       sm: '640px',
       md: '768px',
       lg: '960px',
       xl: '1300px',
    },
    extend: {
      backgroundImage: {
       singerOverlay: 'url(/assets/hero/singer-overlay.png)',
       newsletter: 'url(/assets/newsletter/bg.png)'
      },
      fontFamily: {
        alexBrush: [`var(--font-alexbrush)`, 'sans-serif'],
        montserrat: [`var(--font-montserrat)`, 'sant-serif'],
      },
      colors: {
        primary: '#06062a',
        secondary:'#151538',
        tertiary: '#242445',
        accent: {
          DEFAULT: '#7f1cfc',
          hover: '#6519c6'
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      colors: {
        'gray-on-white': '#555',
        'gray-on-black': '#ccc',
      },
      // For Radix Accordion
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      // For Radix Accordion
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        'bebas-neue': ['Bebas Neue', ...defaultTheme.fontFamily.sans],
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['Mona Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};

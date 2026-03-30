/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pine: '#1a2e1a',
        forest: '#2d4a2d',
        sage: '#6b8f6b',
        moss: '#a8c5a0',
        cream: '#f5f0e8',
        amber: '#d4840a',
        gold: '#e8a020',
        stone: '#8b7355',
        ink: '#0f1a0f',
        mist: '#e8ede8',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        body: ['Libre Franklin', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

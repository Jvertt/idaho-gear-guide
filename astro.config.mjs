import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://idahogearguide.com',
  output: 'static',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  vite: {
    define: {
      'import.meta.env.PUBLIC_KIT_FORM_ID': JSON.stringify(process.env.PUBLIC_KIT_FORM_ID || ''),
      'import.meta.env.PUBLIC_FATHOM_SITE_ID': JSON.stringify(process.env.PUBLIC_FATHOM_SITE_ID || ''),
    },
  },
});

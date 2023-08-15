import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://crewzusa0905.github.io',
  base: '/krewztech',
  integrations: [mdx(), sitemap(), react(), tailwind()]
});
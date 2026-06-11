import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://gallery.furst.blue',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), icon(), sitemap()]
});
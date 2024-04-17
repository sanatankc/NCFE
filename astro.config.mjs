import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  site: "https://glentreeacademy.com/",
  integrations: [sitemap(), tailwind()],
  output: 'hybrid',
  adapter: cloudflare({
      imageService: 'cloudflare'
  }),
  server: (command) => ({ port: command === 'dev' ? 3000 : 4000, host: true })
});
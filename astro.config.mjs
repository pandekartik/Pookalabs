import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://pookalabs.com',
  integrations: [tailwind(), partytown(), image(), sitemap(), robotsTxt()]
});
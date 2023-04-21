import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://pookalabs.com',
  integrations: [tailwind(), partytown(), image(), sitemap(), robotsTxt(), compress({
    path: ["./build", "./dist"]
  }), alpinejs()]
});
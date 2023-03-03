import { defineConfig } from "astro/config";
import { SITE } from "./src/config.mjs";
const whenExternalScripts = (items = []) => SITE.googleAnalyticsId ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? "always" : "never",
  integrations: [tailwind(), image(), ...whenExternalScripts(() => partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })), sitemap()]
});
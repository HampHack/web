import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://hamphack.hampshire.edu",
  integrations: [
    tailwind(),
    react(),
    robotsTxt({
      sitemap: "https://hamphack.hampshire.edu/sitemap.xml",
      policy: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    }),
    sitemap(),
  ],
});

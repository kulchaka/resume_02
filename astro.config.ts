import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://kulchaka.github.io',
  base: '/resume_02',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
});

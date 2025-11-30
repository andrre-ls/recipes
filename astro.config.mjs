// @ts-check

import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [mdx()],
  server: {
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
});

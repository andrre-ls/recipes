// @ts-check

import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import { PATH_BASE } from "./src/constants";

export default defineConfig({
	integrations: [mdx()],
	base: PATH_BASE,
	server: {
		port: 3000,
	},
	devToolbar: {
		enabled: false,
	},
});

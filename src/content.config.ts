import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const recipes = defineCollection({
	loader: glob({
		pattern: "**/*.mdx",
		base: "./content/recipes",
	}),
	schema: z.object({
		metadata: z.object({
			title: z.string(),
			description: z.string(),
		}),
	}),
});

export const collections = { recipes };

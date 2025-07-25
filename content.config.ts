import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		posts: defineCollection({
			type: 'page',
			source: 'posts/*.md',
			schema: z.object({
				title: z.string(),
				date: z.date(),
				description: z.string(),
				tags: z.array(z.string()),
				image: z.string(),
			}),
		}),
	},
})

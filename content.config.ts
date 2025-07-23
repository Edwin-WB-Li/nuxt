import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		posts: defineCollection({
			type: 'page',
			source: 'posts/*.{md|json|yml}',
			// schema: z.object({
			// 	date: z.string(),
			// }),
		}),
	},
})

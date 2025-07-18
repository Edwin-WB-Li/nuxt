import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

export default <Config>{
	content: [
		'./src/pages/**/*.{vue,js,ts}',
		'./src/utils/*.ts',
		'./src/layouts/**/*.vue',
		'./src/plugins/**/*.{js,ts}',
		'./src/app.vue',
		'./src/error.vue',
	],
	theme: {},
	plugins: [typography()],
}

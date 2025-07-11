import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

export default <Config>{
  content: ['./src/pages/**/*.{vue,js,ts}', './src/utils/*.ts'],
  theme: {},
  plugins: [typography()],
}

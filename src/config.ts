import type { NavigationMenuItem } from '@nuxt/ui'
import type { NavConfigType } from '@/types'

const navConfig = ref<NavigationMenuItem[][]>([
	[
		{
			label: 'Home',
			icon: 'i-lucide-book-open',
			to: '/',
		},
		{
			label: 'Signin',
			icon: 'i-lucide-database',
			to: '/signin',
		},
		{
			label: 'About',
			icon: 'i-lucide-box',
			to: '/about',
		},
	],
])

const nav = ref<NavConfigType[]>([
	{
		name: 'nav.home',
		icon: 'i-lucide-book-open',
		path: '/',
	},
	{
		name: 'nav.blog',
		icon: 'i-lucide-database',
		path: '/blog',
	},
	{
		name: 'nav.about',
		icon: 'i-lucide-box',
		path: '/about',
	},
])

export { navConfig, nav }

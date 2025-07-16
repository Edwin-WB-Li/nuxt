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

const photoGalleryItems = ref([
	{
		src: 'https://raw.githubusercontent.com/Edwin-WB-Li/static/master/images/scenery/2.jpg',
	},
	{
		src: 'https://raw.githubusercontent.com/Edwin-WB-Li/static/master/images/scenery/1.jpg',
	},
	{
		src: 'https://raw.githubusercontent.com/Edwin-WB-Li/static/master/images/scenery/3.jpg',
	},
	{
		src: 'https://raw.githubusercontent.com/Edwin-WB-Li/static/master/images/scenery/4.jpg',
	},
	{
		src: 'https://raw.githubusercontent.com/Edwin-WB-Li/static/master/images/scenery/6.jpg',
	},
	{
		src: 'https://raw.githubusercontent.com/Edwin-WB-Li/static/master/images/scenery/5.jpg',
	},
	{
		src: 'https://raw.githubusercontent.com/Edwin-WB-Li/static/master/images/scenery/7.jpg',
	},
	{
		src: 'https://raw.githubusercontent.com/Edwin-WB-Li/static/master/images/scenery/9.jpg',
	},
])

export { navConfig, nav, photoGalleryItems }

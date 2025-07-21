import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

const { NUXT_PUBLIC_UMAMI_HOST, NUXT_PUBLIC_UMAMI_ID, NUXT_PUBLIC_UMAMI_DOMAINS } = process.env

export default defineNuxtConfig({
	compatibilityDate: '2025-07-09',
	srcDir: 'src',
	runtimeConfig: {
		public: {
			umamiApi: '',
			umamiApiKey: '',
			umami: {
				// https://umami.nuxt.dev/getting-started/introduction
				id: NUXT_PUBLIC_UMAMI_ID,
				host: NUXT_PUBLIC_UMAMI_HOST,
				autoTrack: true,
				// proxy: 'cloak',
				useDirective: true,
				domains: NUXT_PUBLIC_UMAMI_DOMAINS?.split(','),
				ignoreLocalhost: true,
				// excludeQueryParams: false,
				// customEndpoint: '/my-custom-endpoint',
				// enabled: false,
				// logErrors: true,
			},
		},
	},
	typescript: {
		typeCheck: true,
	},
	app: {
		head: {
			title: 'Nuxt Blog', // 默认备用标题
			htmlAttrs: {
				lang: 'en',
			},
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},
	modules: [
		// '@nuxtjs/tailwindcss',
		'@nuxt/eslint',
		'nuxt-umami',
		'@nuxt/ui',
		'@clerk/nuxt',
		// '@pinia/nuxt',
		'@nuxt/image',
		'@nuxtjs/i18n',
		'@nuxtjs/color-mode',
		// '@nuxt/content',
	],
	// umami: {
	// 	// https://umami.nuxt.dev/getting-started/introduction
	// 	id: '7e8c67ee-760d-4f16-a4c1-12f9ac0452f4',
	// 	host: 'https://cloud.umami.is',
	// 	autoTrack: true,
	// 	// proxy: 'cloak',
	// 	useDirective: true,
	// 	domains: ['nuxt-blog.weiibn.shop'],
	// 	ignoreLocalhost: true,
	// 	// excludeQueryParams: false,
	// 	// customEndpoint: '/my-custom-endpoint',
	// 	// enabled: false,
	// 	// logErrors: true,
	// },
	colorMode: {
		// 根据系统设置自动切换
		preference: 'light', // 可选 'light'/'dark'/'system'
		fallback: 'dark', // fallback value if not system preference found
		storage: 'localStorage', // or 'sessionStorage' or 'cookie'
		storageKey: 'nuxt-theme', // 本地存储键名
		// classSuffix: '', // 移除默认类名后缀（如 -mode）
		// darkMode: 'class', // 使用 class 模式
	},
	i18n: {
		// langDir: path.resolve(__dirname, '/i18n/locales/'), // 动态解析路径,
		locales: [
			{ code: 'en', name: 'English', file: 'en.json' },
			{ code: 'zh', name: '简体中文', file: 'zh.json' },
		],
		defaultLocale: 'zh',
		detectBrowserLanguage: {
			// 自动检测浏览器语言
			useCookie: true,
			cookieKey: 'nuxt-language',
		},
		strategy: 'prefix_except_default',
		lazy: true, // 启用懒加载
		// vueI18n: './i18n.config.ts' // 指向独立配置文件
		bundle: { optimizeTranslationDirective: true },
	},
	plugins: ['@/plugins/nprogress.client.ts'],
	serverDir: '@/server',
	clerk: {
		skipServerMiddleware: true,
	},
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss(), svgLoader()],
		optimizeDeps: {
			exclude: ['clsx', 'tailwind-merge'], // 避免 Vite 预构建问题
		},
	},
	ui: {
		fonts: false,
	},
	imports: {
		// 禁用部分自动导入
		scan: false,
		// 自动导入 useI18n
		// 这里的 presets 配置可以根据需要添加或修改
		presets: [
			// {
			// 	from: '@nuxt/ui',
			// 	imports: ['useToast'],
			// },
		],
	},
	// 基于组件名称而非路径进行自动导入
	components: [
		{
			path: '@/components',
			pathPrefix: false,
			extensions: ['.vue', '.tsx'],
		},
	],
	// postcss: {
	// 	plugins: {
	// 		'@tailwindcss/postcss': {},
	// 		// "postcss-color-gray": {}, // 启用 postcss-color-gray 插件，支持灰色函数
	// 		// "postcss-import": {},
	// 		// "postcss-nesting": {},
	// 		autoprefixer: {},
	// 	},
	// },
})

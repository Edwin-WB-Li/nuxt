import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-09',
	srcDir: 'src',
	typescript: {
		typeCheck: true,
	},
	modules: [
		// '@nuxtjs/tailwindcss',
		'@nuxt/eslint',
		// 'nuxt-umami',
		'@nuxt/ui',
		'@clerk/nuxt',
		'@nuxt/image',
		'@nuxtjs/i18n',
		'@nuxtjs/color-mode',
		// "@nuxt/content",
	],
	// nitro: {
	// devProxy: {
	// 	'/apis': {
	// 		target: 'https://api.daidr.me',
	// 		changeOrigin: true,
	// 	},
	// },
	// 开发环境代理
	// devProxy: {
	// 	'/apis': {
	// 		target: 'https://api.daidr.me',
	// 		changeOrigin: true,
	// 		// 可选：重写路径（若接口路径需调整）
	// 		// rewrite: path => path.replace(/^\/hitokoto/, ''),
	// 	},
	// },
	// // 生产环境代理（推荐）
	// routeRules: {
	// 	'/hitokoto/**': {
	// 		proxy: 'https://api.daidr.me/apis/**',
	// 		ssr: false, // 禁用服务端渲染避免重复请求
	// 	},
	// },
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
	// tailwindcss: {
	//   configPath: "./tailwind.config.ts", // 指定 tailwind 配置文件
	// },
	// postcss: {
	// 	plugins: {
	// 		'@tailwindcss/postcss': {},
	// 		// "postcss-color-gray": {}, // 启用 postcss-color-gray 插件，支持灰色函数
	// 		// "postcss-import": {},
	// 		// "postcss-nesting": {},
	// 		autoprefixer: {},
	// 	},
	// },
	// tailwindcss: { exposeConfig: true }, // 允许在运行时获取 Tailwind 配置
})

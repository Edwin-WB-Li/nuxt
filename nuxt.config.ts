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
				domains: NUXT_PUBLIC_UMAMI_DOMAINS?.split(',') ?? [],
				ignoreLocalhost: true,
				// excludeQueryParams: false,
				// customEndpoint: '/my-custom-endpoint',
				// enabled: false,
				// logErrors: true,
			},
		},
	},
	modules: [
		// '@nuxtjs/tailwindcss',
		'@nuxt/eslint',
		'@vueuse/nuxt',
		'@nuxt/content',
		// 'dayjs-nuxt',
		'nuxt-umami',
		'@nuxt/ui',
		'@clerk/nuxt',
		// '@pinia/nuxt',
		'@nuxt/image',
		'nuxt-swiper',
		'@nuxtjs/i18n',
		'@nuxtjs/color-mode',
	],
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
	colorMode: {
		// 根据系统设置自动切换
		preference: 'light', // 可选 'light'/'dark'/'system'
		fallback: 'dark', // fallback value if not system preference found
		storage: 'localStorage', // or 'sessionStorage' or 'cookie'
		storageKey: 'nuxt-theme', // 本地存储键名
		// classSuffix: '', // 移除默认类名后缀（如 -mode）
		// darkMode: 'class', // 使用 class 模式
	},
	// @nuxt/content 配置
	content: {
		build: {
			markdown: {
				toc: {
					depth: 5, // 包含h6级别的标题
					searchDepth: 5, // 搜索嵌套标签的深度
				},
				// remarkPlugins: {
				// 	'remark-emoji': {
				// 		options: {
				// 			emoticon: true,
				// 			padSpaceAfter: false, // 防止添加额外空格
				// 		},
				// 	},
				// 	'remark-gfm': {
				// 		options: {
				// 			tablePipeAlign: true,
				// 			autolink: true,
				// 			stringLength: (str: string) => str.length, // 精确计算表格宽度
				// 			// strikethrough: true,
				// 			tableCellPadding: true, // 启用表格单元格内边距
				// 			gfm: true, // 启用 GitHub Flavored Markdown
				// 		},
				// 	},
				// 	'remark-toc': {
				// 		options: {
				// 			heading: '目录',
				// 			maxDepth: 4,
				// 			tight: true,
				// 			ordered: false, // 生成无序列表
				// 		},
				// 	},
				// },
				// rehypePlugins: {
				// 	'rehype-slug': {
				// 		options: {
				// 			slugify: (str: string) => str.replace(/[^a-z0-9]+/gi, '-'),
				// 		},
				// 	},
				// 	'rehype-highlight': {
				// 		options: {
				// 			ignoreMissing: true,
				// 			aliases: { vue: 'html' },
				// 		},
				// 	},
				// },
				highlight: {
					// theme: 'github-light',
					// 或者
					theme: {
						// 默认主题（同单一字符串）
						default: 'github-dark',
						// `html.dark` 时使用的主题
						light: 'github-light',
						// `html.sepia` 时使用的主题
						sepia: 'monokai',
					},

					// 代码高亮配置
					langs: [
						'html',
						'css',
						'json',
						'tsx',
						'jsx',
						'javascript',
						'typescript',
						'vue',
						'shell',
						'mdc',
						'md',
						'yaml',
						'c',
						'bash',
						'java',
						'scss',
						'less',
					],
				},
			},
		},
		renderer: {
			// 为所有标题启用链接生成
			// anchorLinks: true,
			// 替换 markdown 组件，渲染自定义组件替代默认组件
			// alias: {},
		},
		preview: {
			// api: 'https://nuxt-blog-studio.nuxt.space',
			api: 'https://api.nuxt.studio',
			dev: true,
		},
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

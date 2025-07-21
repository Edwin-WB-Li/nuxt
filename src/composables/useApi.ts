// import type { NitroFetchRequest } from 'nitropack'
// import type { FetchOptions } from 'ofetch'
// import type { UseFetchOptions } from '#app' // 导入 Nuxt 类型
// export const useApi = () => {
// 	const config = useRuntimeConfig()
// 	const { umamiApi, umamiApiKey } = config.public
// 	// const baseURL = config.public.umamiApi // 从 runtimeConfig 读取

// 	// 统一请求封装
// 	const request = async <T>(url: NitroFetchRequest, opts?: UseFetchOptions<T>) => {
// 		const { data, error } = await useFetch<T>(url, {
// 			baseURL: umamiApi,
// 			...opts,
// 			onRequest({ options }) {
// 				// 请求拦截：添加 Token
// 				const headers = (options.headers as Record<string, string>) || {}
// 				options.headers = {
// 					...options.headers,
// 					'x-umami-api-key': umamiApiKey,
// 				}
// 			},
// 			onResponseError({ error }) {
// 				// 统一错误处理
// 				console.error('API Error:', error)
// 			},
// 		})
// 		return { data, error }
// 	}

// 	return { request }
// }

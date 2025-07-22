<template>
	<div class="flex w-full items-center justify-center">
		<p class="text-sm text-zinc-500 dark:text-zinc-400">
			&copy; {{ new Date().getFullYear() }} - Nuxt Starter
		</p>
		<div class="flex items-center text-sm text-zinc-500 dark:text-zinc-400">
			浏览量<ViewIcon />{{ umamiState?.pageviews.value }}
		</div>
	</div>
</template>
<script setup lang="ts">
import type { UmamiStats } from '@/types'
defineOptions({
	name: 'AppFooter',
})
const config = useRuntimeConfig()
const { umamiApi, umamiApiKey, umami } = config.public

const umamiState = ref<UmamiStats>()

const { data, error } = await useFetch<UmamiStats>(`/websites/${umami.id}/stats`, {
	baseURL: umamiApi,
	headers: {
		'x-umami-api-key': umamiApiKey,
	},
	query: {
		startAt: 1683262800000,
		endAt: new Date().getTime(),
	},
})

// 错误处理
if (error.value) {
	console.error('Umami API 请求失败:', error.value)
}

// 打印调试信息
console.log('网站数据数组:', data.value)

// 存储到 Ref
if (data.value) {
	umamiState.value = data.value
	console.log('处理后的数据:', umamiState.value)
}
</script>

<template>
	<div class="relative h-96 w-full">
		<SnowfallBg
			color="ADD8E6"
			class="absolute inset-0"
			:min-radius="0.2"
			:max-radius="5"
			:speed="0.5"
		/>
	</div>
</template>

<script setup lang="ts">
import type { UmamiWebsitesResponse, WebsitesResponse } from '@/types'

const config = useRuntimeConfig()
const { umamiApi, umamiApiKey } = config.public

const umamiWebsites = ref<WebsitesResponse[]>()

const { data, error } = await useFetch<UmamiWebsitesResponse>('/websites', {
	baseURL: umamiApi,
	headers: {
		'x-umami-api-key': umamiApiKey,
	},
})

// 错误处理
if (error.value) {
	console.error('Umami API 请求失败:', error.value)
}

// 打印调试信息
console.log('完整响应:', data.value)
console.log('网站数据数组:', data.value?.data)

// 存储到 Ref
if (data.value?.data) {
	umamiWebsites.value = data.value.data
	console.log('处理后的数据:', umamiWebsites.value)
}
</script>

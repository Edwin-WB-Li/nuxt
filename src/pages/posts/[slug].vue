<template>
	<div class="mx-auto max-w-3xl p-4">
		<!-- 渲染Markdown内容 -->
		<template v-if="posts">
			<ContentRenderer :value="posts" />
		</template>
		<template v-else>
			<div class="empty-page">
				<h1>页面未找到</h1>
				<p>抱歉！您查找的内容不存在。</p>
				<NuxtLink to="/">返回首页</NuxtLink>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAsyncData } from '#app'
const slug = useRoute().params.slug

const { data: posts } = await useAsyncData(`posts-${slug}`, () => {
	return queryCollection('posts').path(`/posts/${slug}`).first()
})
</script>

<template>
	<div class="flex w-full items-center justify-center">
		<!-- 渲染Markdown内容 -->
		<template v-if="posts">
			<article
				class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-indigo dark:prose-invert dark:prose-dark mx-auto"
			>
				<ContentRenderer :value="posts" />
			</article>
		</template>
		<template v-else>
			<div class="empty-page">
				<h1>页面未找到</h1>
				<p class="pb-4">抱歉！您查找的内容不存在</p>
				<NuxtLink to="/" class="w-full text-center">返回首页</NuxtLink>
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

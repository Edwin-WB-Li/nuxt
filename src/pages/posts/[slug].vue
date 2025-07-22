<template>
	<div class="mx-auto max-w-3xl p-4">
		<!-- 渲染Markdown内容 -->
		<ContentRenderer v-if="posts" :value="posts" />
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

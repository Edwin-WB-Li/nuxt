<template>
	<UPageSection
		:ui="{
			container: 'px-0 !pt-0',
		}"
	>
		<UCarousel
			v-slot="{ item }"
			:items="page.testimonials"
			:autoplay="{ delay: 4000 }"
			loop
			dots
			:ui="{
				viewport: '-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 max-w-(--ui-container)',
			}"
		>
			<UPageCTA
				:description="item?.quote"
				variant="naked"
				class="rounded-none"
				:ui="{
					container: 'sm:py-12 lg:py-12 sm:gap-8',
					description:
						'!text-base text-balance before:content-[open-quote] before:text-5xl lg:before:text-7xl before:inline-block before:text-dimmed before:absolute before:-ml-6 lg:before:-ml-10 before:-mt-2 lg:before:-mt-4 after:content-[close-quote] after:text-5xl lg:after:text-7xl after:inline-block after:text-dimmed after:absolute after:mt-1 lg:after:mt-0 after:ml-1 lg:after:ml-2',
				}"
			>
				<UUser v-bind="item?.author" size="xl" class="justify-center" />
			</UPageCTA>
		</UCarousel>
	</UPageSection>
</template>

<script setup lang="ts">
// 扩展类型定义
interface Testimonial {
	quote: string
	author: Author
}

interface Author {
	name: string
	avatar?: string
	description?: string
	// 根据 UUser 组件支持的属性补充
	label?: string
	chip?: string
	src?: string
	size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' // 适配 UUser 的 size="xl"
}

// 扩展原有类型
interface CustomPage {
	testimonials: Testimonial[]
}

defineProps<{
	page: CustomPage
}>()
defineOptions({
	name: 'TestimonialsSection',
})
</script>

<template>
	<div class="w-full">
		<div>
			<ClientOnly>
				<BlurReveal :delay="0.2" :duration="0.75" class="pb-4">
					<div class="flex items-center justify-center">
						<UAvatar :src="logoUrl" size="3xl" />
					</div>
					<CustomTags />
					<div class="flex items-center justify-center">
						<SparklesText
							text="🎉 你好, 欢迎光临我的博客✨, 我是 Edwin WB Li, 目前在深圳从事 web前端开发 👨‍💻"
							:colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
							:sparkles-count="10"
							class="my-4 text-lg font-normal"
						/>
					</div>
					<div class="flex items-center justify-center">
						<PhotoGallery :items="items" />
					</div>
				</BlurReveal>
			</ClientOnly>
		</div>
		<div class="flex items-center justify-center">
			<ExpandableGallery :images="images" class="p-4" />
		</div>
		<div
			class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
		>
			<!-- First Marquee -->
			<MarqueeComponent pause-on-hover class="[--duration:20s]">
				<ReviewCard
					v-for="review in firstRow"
					:key="review.username"
					:img="review.img"
					:name="review.name"
					:username="review.username"
					:body="review.body"
				/>
			</MarqueeComponent>

			<!-- Second Marquee (reverse) -->
			<!-- <MarqueeComponent reverse pause-on-hover class="[--duration:20s]">
				<ReviewCard
					v-for="review in secondRow"
					:key="review.username"
					:img="review.img"
					:name="review.name"
					:username="review.username"
					:body="review.body"
				/>
			</MarqueeComponent> -->

			<!-- Left Gradient -->
			<div
				class="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"
			/>

			<!-- Right Gradient -->
			<div
				class="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"
			/>
		</div>
		<div>
			<AnimatedLogoCloud :logos title="learning resources" />
		</div>
		<div>
			<ClientOnly>
				<MorphingText :texts="texts" />
			</ClientOnly>
		</div>
	</div>
</template>
<script setup lang="ts">
// import { photoGalleryItems } from '@/config'

useSeoMeta({
	title: 'Edwin WB Li | Nuxt Blog',
	ogTitle: 'Edwin WB Li  Nuxt Blog',
	description: '这是我搭建的 Nuxt 博客，记录我的前端学习和生活点滴',
	ogDescription: '这是我搭建的 Nuxt 博客，记录我的前端学习和生活点滴',
	ogImage: 'https://raw.githubusercontent.com/Edwin-WB-Li/static/master/images/svg/nuxt-blog.png',
	twitterCard: 'summary_large_image',
})

const logoUrl = new URL('@/assets/images/wechat.jpg', import.meta.url).href
const items = [
	{
		src: 'https://images.pexels.com/photos/16834200/pexels-photo-16834200/free-photo-of-young-brunette-in-a-white-dress-sitting-on-a-bench-and-holding-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
	},
	{
		src: 'https://images.pexels.com/photos/16834202/pexels-photo-16834202/free-photo-of-young-woman-in-a-white-dress-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
	},
	{
		src: 'https://images.pexels.com/photos/16834194/pexels-photo-16834194/free-photo-of-woman-in-white-dress-posing-with-red-flowers-on-lap.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
	},
	{
		src: 'https://images.pexels.com/photos/17362900/pexels-photo-17362900/free-photo-of-pretty-young-model-in-chinese-retro-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
	},
	{
		src: 'https://images.pexels.com/photos/19447919/pexels-photo-19447919/free-photo-of-model-in-a-pink-ao-dai-dress-with-a-bouquet-of-tulips-by-the-river.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
	},
	{
		src: 'https://images.pexels.com/photos/20332975/pexels-photo-20332975/free-photo-of-young-woman-posing-in-a-silk-slip-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
	},
	{
		src: 'https://images.pexels.com/photos/19732643/pexels-photo-19732643/free-photo-of-woman-in-white-dress-sitting-and-reading-book.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
	},
	{
		src: 'https://images.pexels.com/photos/17347482/pexels-photo-17347482/free-photo-of-woman-in-dress-posing-with-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
	},
]
const images = [
	'https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=3628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=3626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]
const reviews = [
	{
		name: 'Jack',
		username: '@jack',
		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: 'https://avatar.vercel.sh/jack',
	},
	{
		name: 'Jill',
		username: '@jill',
		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: 'https://avatar.vercel.sh/jill',
	},
	{
		name: 'John',
		username: '@john',
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: 'https://avatar.vercel.sh/john',
	},
	{
		name: 'Jane',
		username: '@jane',
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: 'https://avatar.vercel.sh/jane',
	},
	{
		name: 'Jenny',
		username: '@jenny',
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: 'https://avatar.vercel.sh/jenny',
	},
	{
		name: 'James',
		username: '@james',
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: 'https://avatar.vercel.sh/james',
	},
]
const logos = [
	{
		name: 'Vercel',
		path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
		link: 'https://vercel.com',
	},
	{
		name: 'Prime',
		path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
		link: 'https://vercel.com',
	},
	{
		name: 'Trustpilot',
		path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
		link: 'https://vercel.com',
	},
	{
		name: 'Webflow',
		path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
		link: 'https://vercel.com',
	},
	{
		name: 'Airbnb',
		path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
		link: 'https://vercel.com',
	},
	{
		name: 'Tina',
		path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
		link: 'https://vercel.com',
	},
	{
		name: 'Stackoverflow',
		path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
		link: 'https://vercel.com',
	},
	{
		name: 'mistral',
		path: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
		link: 'https://vercel.com',
	},
]
// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2))
// const secondRow = ref(reviews.slice(reviews.length / 2))
const texts = ['vue', 'nuxt', 'vite', 'next ui', '@clerk/nuxt', 'motion-v', 'tailwindcss']
</script>

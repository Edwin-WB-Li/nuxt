<template>
	<div class="relative h-96 w-full">
		<SnowfallBg
			color="ADD8E6"
			class="absolute inset-0"
			:min-radius="0.2"
			:max-radius="5"
			:speed="0.5"
		/>
		<div class="flex h-full w-full items-center justify-center">
			<LinkPreview url="https://motion.unovue.com/" class="font-bold"> motion-v </LinkPreview>
		</div>
		<!-- <div>
			<span class="group">
				<span class="font-mono">&lt;</span>
				开发者
				<span class="font-mono">/&gt;</span>
				<span
					class="group-hover:animate-typing invisible inline-flex text-zinc-300 group-hover:visible before:content-['|'] dark:text-zinc-500"
				/>
			</span>
		</div>
		<div>
			<span className="group relative bg-black/5 p-2 dark:bg-white/5">
				<span
					className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90"
				>
					<span
						className="absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
					/>
					<span
						className="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
					/>
					<span
						className="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
					/>
					<span
						className="absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
					/>
				</span>
				切图仔
			</span>
		</div>
		<div>
			<span class="group inline-flex items-center">
				<SparkleIcon
					class="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180"
				/>
				<span>细节控</span>
			</span>
		</div>
		<div>
			<span className="group inline-flex items-center">
				<UserSecurityIcon
					class="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20"
				/>
				<span>探索者</span>
			</span>
		</div> -->
	</div>
</template>

<script setup lang="ts">
// 在页面或组件中直接调用
// import type { HitokotoResponse } from '@/types'
// const data = ref<HitokotoResponse | null>(null)

// async function addTodo() {
// 	data.value = await $fetch('https://api.daidr.me/apis/hitokoto.json', {
// 		method: 'GET',
// 	})
// 	console.log(data.value)
// }
// onMounted(() => {
// 	addTodo()
// })
</script>

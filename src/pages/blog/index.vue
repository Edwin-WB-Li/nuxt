<template>
	<div>
		<div>
			<div class="grid grid-cols-10 gap-2">
				<div class="aspect-square bg-sky-50" />
				<div class="aspect-square bg-sky-100" />
				<div class="aspect-square bg-sky-200" />
				<div class="aspect-square bg-sky-300" />
				<div class="aspect-square bg-sky-400" />
				<div class="aspect-square bg-sky-500" />
				<div class="aspect-square bg-sky-600" />
				<div class="aspect-square bg-sky-700" />
				<div class="aspect-square bg-sky-800" />
				<div class="aspect-square bg-sky-900" />
			</div>
			<div class="grid grid-cols-10 gap-2">
				<div class="aspect-square bg-blue-50" />
				<div class="aspect-square bg-blue-100" />
				<div class="aspect-square bg-blue-200" />
				<div class="aspect-square bg-blue-300" />
				<div class="aspect-square bg-blue-400" />
				<div class="aspect-square bg-blue-500" />
				<div class="aspect-square bg-blue-600" />
				<div class="aspect-square bg-blue-700" />
				<div class="aspect-square bg-blue-800" />
				<div class="aspect-square bg-blue-900" />
			</div>
			<div class="grid grid-cols-10 gap-2">
				<div class="aspect-square bg-indigo-50" />
				<div class="aspect-square bg-indigo-100" />
				<div class="aspect-square bg-indigo-200" />
				<div class="aspect-square bg-indigo-300" />
				<div class="aspect-square bg-indigo-400" />
				<div class="aspect-square bg-indigo-500" />
				<div class="aspect-square bg-indigo-600" />
				<div class="aspect-square bg-indigo-700" />
				<div class="aspect-square bg-indigo-800" />
				<div class="aspect-square bg-indigo-900" />
			</div>
			<div class="grid grid-cols-10 gap-2">
				<div class="aspect-square bg-violet-50" />
				<div class="aspect-square bg-violet-100" />
				<div class="aspect-square bg-violet-200" />
				<div class="aspect-square bg-violet-300" />
				<div class="aspect-square bg-violet-400" />
				<div class="aspect-square bg-violet-500" />
				<div class="aspect-square bg-violet-600" />
				<div class="aspect-square bg-violet-700" />
				<div class="aspect-square bg-violet-800" />
				<div class="aspect-square bg-violet-900" />
			</div>
		</div>
		<div>
			<div
				class="space-y-6 rounded-t-xl border-b border-slate-100 bg-white p-4 pb-6 sm:space-y-8 sm:p-10 sm:pb-8 lg:space-y-6 lg:p-6 xl:space-y-8 xl:p-10 xl:pb-8 dark:border-slate-500 dark:bg-slate-800"
			>
				<div class="flex items-center space-x-4">
					<img
						src="https://www.tailwindcss.cn/_next/static/media/full-stack-radio.afb14e4e.png"
						alt=""
						width="88"
						height="88"
						class="flex-none rounded-lg bg-slate-100"
						loading="lazy"
					/>
					<div class="min-w-0 flex-auto space-y-1 font-semibold">
						<p class="text-sm leading-6 text-cyan-500 dark:text-cyan-400">
							<abbr title="Episode">Ep.</abbr> 128
						</p>
						<h2 class="truncate text-sm leading-6 text-slate-500 dark:text-slate-400">
							Scaling CSS at Heroku with Utility Classes
						</h2>
						<p class="text-lg text-slate-900 dark:text-slate-50">Full Stack Radio</p>
					</div>
				</div>
				<div class="space-y-2">
					<div class="relative">
						<div class="overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
							<div
								class="h-2 w-1/2 bg-cyan-500 dark:bg-cyan-400"
								role="progressbar"
								aria-label="music progress"
								aria-valuenow="1456"
								aria-valuemin="0"
								aria-valuemax="4550"
							/>
						</div>
						<div
							class="absolute top-1/2 left-1/2 -mt-2 -ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow ring-2 ring-cyan-500 dark:ring-cyan-400"
						>
							<div
								class="h-1.5 w-1.5 rounded-full bg-cyan-500 ring-1 ring-slate-900/5 ring-inset dark:bg-cyan-400"
							/>
						</div>
					</div>
					<div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
						<div class="text-cyan-500 dark:text-slate-100">24:16</div>
						<div class="text-slate-500 dark:text-slate-400">75:50</div>
					</div>
				</div>
			</div>
			<div
				class="flex items-center rounded-b-xl bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200"
			>
				<div class="flex flex-auto items-center justify-evenly">
					<button type="button" aria-label="Add to favorites">
						<svg width="24" height="24">
							<path
								d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
								fill="currentColor"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
					<button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Previous">
						<svg width="24" height="24" fill="none">
							<path
								d="m10 12 8-6v12l-8-6Z"
								fill="currentColor"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M6 6v12"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
					<button type="button" aria-label="Rewind 10 seconds">
						<svg width="24" height="24" fill="none">
							<path
								d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M5 5v3.111c0 .491.398.889.889.889H9"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
				<button
					type="button"
					class="mx-auto -my-2 flex h-20 w-20 flex-none items-center justify-center rounded-full bg-white text-slate-900 shadow-md ring-1 ring-slate-900/5 dark:bg-slate-100 dark:text-slate-700"
					aria-label="Pause"
				>
					<svg width="30" height="32" fill="currentColor">
						<rect x="6" y="4" width="4" height="24" rx="2" />
						<rect x="20" y="4" width="4" height="24" rx="2" />
					</svg>
				</button>
				<div class="flex flex-auto items-center justify-evenly">
					<button type="button" aria-label="Skip 10 seconds">
						<svg width="24" height="24" fill="none">
							<path
								d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M19 5v3.111c0 .491-.398.889-.889.889H15"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
					<button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Next">
						<svg width="24" height="24" fill="none">
							<path
								d="M14 12 6 6v12l8-6Z"
								fill="currentColor"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M18 6v12"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
					<button
						type="button"
						class="rounded-lg px-2 text-xs leading-6 font-semibold text-slate-500 ring-2 ring-slate-500 ring-inset dark:bg-slate-500 dark:text-slate-100 dark:ring-0"
					>
						1x
					</button>
				</div>
			</div>
		</div>
		<div class="py-8">
			<ClientOnly>
				<div
					class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
				>
					<span
						class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
					>
						Border Beam
					</span>
					<BorderBeam :size="250" :duration="12" :delay="9" :border-width="2" />
				</div>
			</ClientOnly>
		</div>
		<div className="relative h-[500px] w-full overflow-hidden">
			<GlowBorder :color="['#A07CFE', '#FE8FB5', '#FFBE7B']" :border-radius="10" />
			<div class="flex h-full w-full items-center justify-center">
				<span
					class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-zinc-700/75"
				>
					Glow Border
				</span>
			</div>
		</div>
		<div class="pt-8">
			<div class="relative z-2 text-center font-sans text-2xl font-bold md:text-5xl lg:text-3xl">
				🎉 你好, 欢迎光临我的博客☀️, 我是
				<ColourfulText text="Edwin WB Li" />
				目前在深圳从事
				<ColourfulText text="web前端开发👨‍💻" />
			</div>
		</div>
		<div>
			<LetterPullup
				words="Staggered Letter Pull Up"
				:delay="0.05"
				class="text-black dark:text-white"
			/>
		</div>
		<div class="flex items-center justify-center">
			<RadiantText
				class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
				:duration="5"
			>
				<span class="text-3xl font-bold">✨ Introducing Inspira UI</span>
			</RadiantText>
		</div>
		<div>
			<ClientOnly>
				<div class="flex h-64 items-center justify-center max-lg:w-full min-md:flex-1">
					<TextGenerateEffect
						words="Nuxt is an open source framework that makes web development intuitive and powerful.Create performant and production-grade full-stack web apps and websites with confidence."
					/>
				</div>
			</ClientOnly>
		</div>
		<div class="flex h-80 items-center justify-center">
			<SparklesText
				text="Inspira UI"
				:colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
				:sparkles-count="10"
				class="my-8"
			/>
		</div>
		<div class="flex h-[20rem] items-center justify-center px-4">
			<div class="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
				Vuejs: The
				<FlipWords
					:words="['Progressive', 'Approachable', 'Performant', 'Versatile']"
					:duration="3000"
					class="!text-primary text-4xl"
				/>
				<div>
					JavaScript Framework for building <br />
					Modern Web Apps
				</div>
			</div>
		</div>
		<div class="mb-10 flex min-h-96 w-full flex-row items-center justify-center">
			<AnimatedTooltip :items="people" />
		</div>
		<nav>
			<div v-if="navData">
				<template v-for="item in navData">
					<div
						v-for="data in item.children"
						:key="data.path"
						class="flex flex-row items-center gap-2 py-4"
					>
						<NuxtImg :src="data.image as string" class="size-10" />
						<!-- <span class="pr-2">{{ $dayjs(data.date).format('YYYY-MM-DD') }}</span> -->
						<div>
							<h2>
								<NuxtLink :to="data.path">{{ data.title }}</NuxtLink>
							</h2>
							<p>{{ data.description }}</p>
						</div>
					</div>
				</template>
			</div>
		</nav>
	</div>
</template>
<script setup lang="ts">
// const images = [
// 	'https://picsum.photos/seed/waiting/1920/1080',
// 	'https://picsum.photos/seed/full-collapse/1920/1080',
// 	'https://picsum.photos/seed/five-stories-falling/1920/1080',
// 	'https://picsum.photos/seed/war-all-the-time/1920/1080',
// 	'https://picsum.photos/seed/a-city-by-the-light-divided/1920/1080',
// 	'https://picsum.photos/seed/common-existence/1920/1080',
// 	'https://picsum.photos/seed/no-devolucion/1920/1080',
// ]

const people = [
	{
		id: 1,
		name: 'John Doe',
		designation: 'Software Engineer',
		image:
			'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
	},
	{
		id: 2,
		name: 'Robert Johnson',
		designation: 'Product Manager',
		image:
			'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 3,
		name: 'Jane Smith',
		designation: 'Data Scientist',
		image:
			'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 4,
		name: 'Emily Davis',
		designation: 'UX Designer',
		image:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 5,
		name: 'Tyler Durden',
		designation: 'Soap Developer',
		image:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
	},
	{
		id: 6,
		name: 'Dora',
		designation: 'The Explorer',
		image:
			'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
	},
]

const { data: navData } = await useAsyncData('blog-list', () => {
	return queryCollectionNavigation('posts', ['title', 'date', 'image', 'description']).order(
		'date',
		'DESC'
	)
})

console.log('nav:', navData.value)
</script>

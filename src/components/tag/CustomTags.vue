<template>
	<div
		class="text-center text-2xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
	>
		<div class="inline-flex">
			<span class="font-mono">&lt;</span>
			开发者
			<span class="font-mono">/&gt;</span>
			<span
				class="group-hover:animate-typing invisible inline-flex text-zinc-300 group-hover:visible before:content-['|'] dark:text-zinc-500"
			/>
		</div>
		,
		<div class="relative inline-flex bg-black/5 p-2 dark:bg-white/5">
			<span
				class="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90"
			>
				<span
					class="absolute -top-[3.5px] -left-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
				/>
				<span
					class="absolute -right-[3.5px] -bottom-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
				/>
				<span
					class="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
				/>
				<span
					class="absolute -top-[3.5px] -right-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
				/>
			</span>
			切图仔
		</div>
		<span class="block h-4" />
		<div class="inline-flex items-center">
			<SparkleIcon
				class="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180"
			/>
			<span>细节控</span>
		</div>
		,
		<span class="group inline-flex items-center">
			<UserSecurityIcon
				class="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20"
			/>
			<span>探索者</span>
		</span>
	</div>
</template>

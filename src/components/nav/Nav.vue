<template>
	<nav
		class="flex h-10 min-w-60 items-center justify-center gap-6 rounded-3xl border border-solid leading-10 font-normal text-zinc-500 dark:border-white dark:text-zinc-400"
	>
		<NuxtLink
			v-for="item in nav"
			:key="item.path"
			:to="localePath(item.path)"
			:class="
				cn('px-0.5 text-base transition hover:text-lime-400 dark:hover:text-lime-400', {
					'font-bold text-lime-300 dark:text-lime-300': currentPath === localePath(item.path),
				})
			"
		>
			{{ $t(item.name) }}
		</NuxtLink>
	</nav>
</template>
<script setup lang="ts">
import { nav } from '@/config'
import { cn } from '@/utils'
const route = useRoute()
const currentPath = computed(() => route.path)
const localePath = useLocalePath()
defineOptions({
	name: 'AppNav',
})
</script>

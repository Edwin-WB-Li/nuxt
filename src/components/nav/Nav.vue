<template>
	<nav
		class="flex h-10 min-w-75 justify-center gap-6 rounded-3xl border border-solid border-black leading-10 font-medium text-zinc-500 dark:text-zinc-400"
	>
		<NuxtLink
			v-for="item in nav"
			:key="item.path"
			:to="localePath(item.path)"
			:class="
				cn('px-0.5 transition hover:text-lime-500 dark:hover:text-lime-400', {
					'font-bold text-lime-500 dark:text-lime-400': currentPath === localePath(item.path),
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

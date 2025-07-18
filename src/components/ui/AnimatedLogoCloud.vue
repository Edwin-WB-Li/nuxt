<template>
	<div class="w-full py-12">
		<div class="mx-auto w-full px-4 md:px-8">
			<div v-if="props.title" class="text-muted-foreground text-center font-medium">
				{{ props.title }}
			</div>
			<div
				:class="
					cn('mask-animation group relative mt-6 flex gap-6 overflow-hidden p-2', props.class)
				"
			>
				<div
					v-for="index in Array(5).fill(null)"
					:key="index"
					class="animate-logo-cloud flex shrink-0 flex-row justify-around gap-6"
				>
					<!-- <NuxtLink v-for="(logo, key) in props.logos" :key="key" :to="logo.link" target="_blank">
						<img
							:src="logo.path"
							:alt="logo.name"
							class="h-10 w-28 cursor-pointer px-2 brightness-0 dark:invert"
						/>
					</NuxtLink> -->
					<template v-for="(logo, key) in props.logos" :key="key">
						<NuxtLink v-if="logo.link" class="logo-cloud-item" :to="logo.link" target="_blank">
							<img
								:src="logo.path"
								:alt="logo.name"
								class="h-10 w-28 cursor-pointer px-2 brightness-0 dark:invert"
							/>
						</NuxtLink>
						<img
							v-else
							:key="key"
							:src="logo.path"
							:alt="logo.name"
							class="h-10 w-28 px-2 brightness-0 dark:invert"
						/>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { AnimateLogoCloudProps } from '@/types'
import { cn } from '@/utils'

const props = defineProps<AnimateLogoCloudProps>()
</script>

<style scoped>
.mask-animation {
	mask-image: linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%);
}

.animate-logo-cloud {
	animation: logo-cloud 30s linear infinite;
}

@keyframes logo-cloud {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-100% - 4rem));
	}
}
</style>

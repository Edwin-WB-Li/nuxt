<template>
	<ColorScheme>
		<div class="h-full w-full" :class="effectiveTheme">
			<CardContent
				color="ADD8E6"
				class="h-screen w-full"
				:min-radius="0.2"
				:max-radius="5"
				:speed="0.5"
			>
				<TracingBeam>
					<UCard class="m-auto max-w-[90rem]" :class="effectiveTheme">
						<template #header>
							<Header />
						</template>
						<slot />
						<template #footer>
							<div class="flex w-full items-center justify-center">
								<p class="text-sm text-zinc-500 dark:text-zinc-400">
									&copy; {{ new Date().getFullYear() }} - Nuxt Starter
								</p>
							</div>
						</template>
					</UCard>
				</TracingBeam>
			</CardContent>
		</div>
	</ColorScheme>
</template>
<script lang="ts" setup>
// import bg from '~/assets/images/bg.svg'
const colorMode = useColorMode()
const effectiveTheme = computed(() => colorMode.value) // 实际生效的主题
</script>

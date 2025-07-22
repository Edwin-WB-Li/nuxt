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
							<Footer />
						</template>
					</UCard>
				</TracingBeam>
			</CardContent>
		</div>
	</ColorScheme>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
const effectiveTheme = computed(() => colorMode.value) // 实际生效的主题
</script>

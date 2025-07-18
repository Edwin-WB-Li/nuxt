<template>
	<UTooltip :text="colorMode.preference">
		<UIcon
			v-if="colorMode.preference === 'dark'"
			class="cursor-pointer text-2xl"
			name="i-lucide-moon"
			@click="toggleTheme"
		/>
		<UIcon
			v-else-if="colorMode.preference === 'light'"
			class="cursor-pointer text-2xl"
			name="i-lucide-sun"
			@click="toggleTheme"
		/>
		<!-- <UIcon v-else class="cursor-pointer text-2xl" name="i-lucide-monitor" @click="toggleTheme" /> -->
	</UTooltip>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
// console.log(computed(() => colorMode)) // 输出当前主题模式
// const themes = ['light', 'dark']
// const currentTheme = ref(colorMode.value)
// const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
	// computed(() => localStorage.getItem('nuxt-theme') ?? 'light')
	// const currentIndex = themes.indexOf(colorMode.value)
	// const nextIndex = (currentIndex + 1) % themes.length
	// currentTheme.value = themes[nextIndex]
	// colorMode.preference = themes[nextIndex]
	// if (currentTheme.value === 'dark') {
	// 	colorMode.preference = 'light'
	// 	// localStorage.setItem('nuxt-theme', 'light')
	// } else {
	// 	colorMode.preference = 'dark'
	// 	// localStorage.setItem('nuxt-theme', 'dark')
	// }
	// setLocale(locale.code)
	// colorMode.preference = computed(() => (colorMode.preference === 'dark' ? 'light' : 'dark'))
	colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

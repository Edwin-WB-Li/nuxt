<template>
	<UTooltip :text="locale">
		<UIcon class="cursor-pointer text-2xl" name="lucide:languages" @click="toggleLanguage" />
	</UTooltip>
</template>

<script setup lang="ts">
// import { useToast } from '@nuxt/ui/runtime/composables/useToast.js'
// const toast = useToast()

const { locale, setLocale } = useI18n()
const toggleLanguage = () => {
	setLocale(locale.value === 'zh' ? 'en' : 'zh')
	// toast.add({
	// 	title: 'Language Changed Successfully',
	// 	description: `.`,
	// })
}
</script>

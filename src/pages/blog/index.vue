<template>
	<div>
		<UButton v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
			{{ locale.name }}
		</UButton>
	</div>
</template>
<script setup lang="ts">
const { locales, setLocale } = useI18n()
console.log(locales)
</script>

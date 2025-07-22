<template>
	<div>
		<UButton @click="umTrackEvent('button-1')">Button 1</UButton>
		<UButton @click="onAction">Button 2</UButton>
	</div>
</template>

<script setup lang="ts">
function onAction() {
	umIdentify({ campaign: 'twix-trial' })
	umTrackEvent('signup', { prop: 123, otherProp: 'anything', isBool: true })
}

onMounted(() => {
	umTrackView()
})
</script>

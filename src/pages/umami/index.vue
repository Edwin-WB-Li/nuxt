<template>
	<div>
		<button @click="umTrackEvent('button-1')">Button 1</button>
		<button @click="onAction">Button 2</button>
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

<template>
	<div
		:style="styles"
		:class="
			cn(
				'motion-safe:animate-glow pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]',
				props.class
			)
		"
	/>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

interface Props {
	borderRadius?: number
	color?: string | Array<string>
	borderWidth?: number
	duration?: number
	class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
	borderRadius: 10,
	color: '#FFF',
	borderWidth: 2,
	duration: 10,
})

const styles = computed(() => {
	return {
		'--border-radius': `${props.borderRadius}px`,
		'--border-width': `${props.borderWidth}px`,
		'--duration': `${props.duration}s`,
		backgroundImage: `radial-gradient(transparent,transparent, ${
			Array.isArray(props.color) ? props.color.join(',') : props.color
		},transparent,transparent)`,
		backgroundSize: '300% 300%',
		mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
		WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
		WebkitMaskComposite: 'xor',
		maskComposite: 'exclude',
		padding: 'var(--border-width)',
		borderRadius: 'var(--border-radius)',
	}
})
</script>

import type { HTMLAttributes } from 'vue'
interface NavConfigType {
	name: string
	icon?: string
	path: string
}

interface Logo {
	name: string
	path: string
}
interface AnimateLogoCloudProps {
	class?: string
	title?: string
	logos?: Logo[]
}

interface SphereIcon {
	x: number
	y: number
	z: number
	scale: number
	opacity: number
	id: number
}

interface IconCloudProps {
	class?: HTMLAttributes['class']
	images?: string[]
}

export type { NavConfigType, AnimateLogoCloudProps, SphereIcon, IconCloudProps }

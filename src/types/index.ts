import type { HTMLAttributes } from 'vue'

interface NavConfigType {
	name: string
	icon?: string
	path: string
}

interface Logo {
	name: string
	path: string
	link?: string
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

interface HitokotoResponse {
	type: string
	content: string
	from: string
}

interface WebsitesResponse {
	id: string
	name: string
	domain: string
	shareId: null
	resetAt: null
	userId: string
	teamId: null
	createdBy: string
	createdAt: string
	updatedAt: string
	deletedAt: null
	user?: {
		username: string
		id: string
	}
}

interface UmamiWebsitesResponse {
	data: WebsitesResponse[]
	count: number
	page: number
	pageSize: number
	orderBy: string
}

interface Pageviews {
	value: number
	prev: number
}
interface UmamiStats {
	pageviews: Pageviews
	visitors: Pageviews
	visits: Pageviews
	bounces: Pageviews
	totaltime: Pageviews
}

export type {
	NavConfigType,
	AnimateLogoCloudProps,
	SphereIcon,
	IconCloudProps,
	UmamiStats,
	HitokotoResponse,
	WebsitesResponse,
	UmamiWebsitesResponse,
}

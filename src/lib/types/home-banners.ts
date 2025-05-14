import { PerfumeDetails } from "./perfumes"

export interface HomeBanner {
	id: string
	title: string
	description: string
	image?: string
}

export interface HomeBannerDetails {
	id: string
	title: string
	description: string
	image?: string
	perfumes: PerfumeDetails[]
}

import { PerfumeDetails } from "./perfumes"

export interface HomeBanner {
	id: string
	title: string
	description: string
	images: string[]
	statisticalTips: {
		statistics: string

		info: string
	}[]
	infoTips: string[]
}

export interface HomeBannerDetails {
	id: string
	title: string
	description: string
	images: string[]
	statisticalTips: {
		statistics: string

		info: string
	}[]
	infoTips: string[]
}

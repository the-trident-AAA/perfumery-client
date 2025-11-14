export interface HomeBanner {
	id: string
	title: string
	description: string
	buttonText: string
	image: string
	statisticalTips: {
		statistics: string
		info: string
	}[]
	infoTips: string[]
	filters: { name: string; value: string }[]
}

export interface HomeBannerDetails {
	id: string
	title: string
	description: string
	buttonText: string
	image: string
	statisticalTips: {
		statistics: string
		info: string
	}[]
	infoTips: string[]
	filters: { name: string; value: string }[]
}

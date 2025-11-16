export enum TextColor {
	DARK = "oscuro",
	LIGHT = "claro",
}

export const getTextColorText = (textColor: TextColor) => {
	if (textColor === TextColor.LIGHT) return "Claro"
	if (textColor === TextColor.DARK) return "Oscuro"

	return "Oscuro"
}

export const getTextColorColor = (textColor: TextColor) => {
	if (textColor === TextColor.LIGHT) return "text-black"
	if (textColor === TextColor.DARK) return "text-white"

	return "text-black"
}

export interface HomeBanner {
	id: string
	title: string
	description: string
	buttonText: string
	textColor: TextColor
	image: string
	mobileImage: string
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
	textColor: TextColor
	image: string
	mobileImage: string
	statisticalTips: {
		statistics: string
		info: string
	}[]
	infoTips: string[]
	filters: { name: string; value: string }[]
}

export function groupFilters(filters: { name: string; value: string }[]) {
	const grouped: Record<string, string[] | string> = {}

	filters.forEach(filter => {
		if (!grouped[filter.name]) {
			grouped[filter.name] = []
		}

		// Aseguramos que siempre sea un array durante el push
		;(grouped[filter.name] as string[]).push(filter.value)
	})

	// Convertimos arrays de un solo elemento en strings
	Object.entries(grouped).forEach(([key, values]) => {
		if (Array.isArray(values) && values.length === 1) {
			grouped[key] = values[0]
		}
	})

	return grouped
}

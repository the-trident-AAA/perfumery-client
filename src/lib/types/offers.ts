import { OrderDto } from "@/src/lib/types/order"
import { OffersFilters } from "@/src/sections/offers/filters/hooks/use-offers-filters"

export interface Offer {
	id: string
	name: string
	image?: string
	mobileImage?: string
	description: string
	scope: string
	discount: number
	offerType: string
}

export interface OfferFiltersDTO extends OrderDto {
	name?: string
	description?: string
	scope?: string
	minDiscount?: number
	maxDiscount?: number
	offerType?: string
}

export const convertOfferFiltersDTO = (
	offersFilters: OffersFilters,
): OfferFiltersDTO => {
	const { discount, ...rest } = offersFilters
	return { ...rest, minDiscount: discount[0], maxDiscount: discount[1] }
}

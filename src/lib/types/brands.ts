import { BrandsFilters } from "@/src/sections/brands/filters/hooks/use-brands-filters"

export interface Brand {
	id: string
	name: string
}

export interface BrandFiltersDTO {
	name?: string
}

export const convertBrandFiltersDTO = (
	brandFilters: BrandsFilters,
): BrandFiltersDTO => {
	return { ...brandFilters }
}

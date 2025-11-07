import { ScentsFilters } from "@/src/sections/scents/filters/hooks/use-scents-filters"

export interface Scent {
	id: string
	name: string
}

export interface ScentFiltersDTO {
	name?: string
}

export const convertScentFiltersDTO = (
	scentFilters: ScentsFilters,
): ScentFiltersDTO => {
	return { ...scentFilters }
}

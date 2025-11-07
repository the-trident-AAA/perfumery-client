import { OrderDto } from "@/src/lib/types/order"
import { ScentsFilters } from "@/src/sections/scents/filters/hooks/use-scents-filters"

export interface Scent {
	id: string
	name: string
}

export interface ScentFiltersDTO extends OrderDto {
	name?: string
}

export const convertScentFiltersDTO = (
	scentFilters: ScentsFilters,
): ScentFiltersDTO => {
	return { ...scentFilters }
}

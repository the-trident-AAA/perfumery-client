import { PerfumeTypesFilters } from "@/src/sections/perfume-types/filters/hooks/use-perfume-types-filters"

export interface PerfumeType {
	id: string
	name: string
	image?: string
}

export interface PerfumeTypeFiltersDTO {
	name?: string
}

export const convertPerfumeTypeFiltersDTO = (
	perfumeTypesFilters: PerfumeTypesFilters,
): PerfumeTypeFiltersDTO => {
	return { ...perfumeTypesFilters }
}

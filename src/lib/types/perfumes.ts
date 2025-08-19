import { Brand } from "@/src/lib/types/brands"
import { Offer } from "@/src/lib/types/offers"
import { PerfumeType } from "@/src/lib/types/perfume-types"
import { Scent } from "@/src/lib/types/scents"
import { PerfumesFilters } from "@/src/sections/perfumes/filters/hooks/use-perfumes-filters"

export interface Perfume {
	id: string
	name: string
	description: string
	image: string
	brand: string
	discountOffer?: number
	gender: string
	scents: string[]
	milliliters: number
	perfumeType: string
	available: boolean
	price: number
	cant: number
}

export interface PerfumeDetails {
	id: string
	name: string
	description: string
	image: string
	images: string[]
	brand: Brand
	offer?: Offer
	gender: Gender
	scents: Scent[]
	milliliters: number
	perfumeType: PerfumeType
	available: boolean
	price: number
	cant: number
}

export interface PerfumesFiltersDTO {
	name?: string
	description?: string
	brandId?: string
	gender?: Gender
	scentsIds?: string[]
	milliliters?: number
	millilitersMin?: number
	millilitersMax?: number
	priceMin?: number
	priceMax?: number
	perfumeTypeId?: string
	available?: boolean
	price?: number
	cant?: number
	offerId?: string
}

export enum Gender {
	FEMALE = "femenino",
	MALE = "masculino",
	UNISEX = "unisex",
}

export const genderMap: Map<
	Gender,
	{
		name: string
		color:
			| "default"
			| "primary"
			| "secondary"
			| "error"
			| "info"
			| "success"
			| "warning"
	}
> = new Map([
	[Gender.FEMALE, { name: "Femenino", color: "primary" }],
	[Gender.MALE, { name: "Masculino", color: "primary" }],
	[Gender.UNISEX, { name: "Unisex", color: "primary" }],
])

export const genderMapInverted: Map<string, Gender> = new Map(
	Array.from(genderMap.entries()).map(([key, value]) => [value.name, key]),
)

export const convertPerfumesFiltersDTO = (
	perfumesFilters: PerfumesFilters,
): PerfumesFiltersDTO => {
	const { priceRange, millilitersRange, ...rest } = perfumesFilters
	return {
		...rest,
		priceMin: priceRange[0],
		priceMax: priceRange[1],
		millilitersMin: millilitersRange[0],
		millilitersMax: millilitersRange[1],
	}
}

export const getGenderColor = (gender: string) => {
	switch (gender.toLowerCase()) {
		case "masculino":
		case "hombre":
			return "from-blue-500 to-indigo-600"
		case "femenino":
		case "mujer":
			return "from-pink-500 to-rose-600"
		case "unisex":
			return "from-purple-500 to-violet-600"
		default:
			return "from-gray-500 to-gray-600"
	}
}

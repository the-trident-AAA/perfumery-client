import { Brand } from "@/src/lib/types/brands"
import { Offer } from "@/src/lib/types/offers"
import { PerfumeType } from "@/src/lib/types/perfume-types"
import { Scent } from "@/src/lib/types/scents"

export interface Perfume {
	id: string
	name: string
	description: string
	image?: string
	brand: string
	discountOffer: number
	gender: string
	scents: string[]
	liters: number
	perfumeType: string
	available: boolean
	price: number
	cant: number
}

export interface PerfumeDetails {
	id: string
	name: string
	image?: string
	brand: Brand
	offer?: Offer
	gender: Gender
	scents: Scent[]
	liters: number
	perfumeType: PerfumeType
	available: boolean
	price: number
	cant: number
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

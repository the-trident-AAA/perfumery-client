import { PerfumeDetails } from "./perfumes"

export interface ShopCartPerfume {
	id: string
	perfume: PerfumeDetails
	cant: number
	price: number
}

export interface ShopCartPerfumeCreate {
	perfumeId: string
	cant: number
}

export interface ShopCartPerfumeCreateDTO {
	perfumeId: string
	cant: number
}

export interface ShopCartPerfumeEdit {
	cant: number
}

export interface ShopCartPerfumeEditDTO {
	cant: number
}

export const convertShopCartPerfumeCreateDTO = (
	shopCartCreate: ShopCartPerfumeCreate,
): ShopCartPerfumeCreateDTO => {
	return { ...shopCartCreate }
}

export const convertShopCartPerfumeEditDTO = (
	shopCartEdit: ShopCartPerfumeEdit,
): ShopCartPerfumeEditDTO => {
	return { ...shopCartEdit }
}

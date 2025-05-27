import { PerfumeDetails } from "./perfumes"

export interface ShopCartPerfume {
	id: string
	perfume: PerfumeDetails
	cant: number
	price: number
}

export interface ShopCartPerfumeEdit {
	cant: number
}

export interface ShopCartPerfumeEditDTO {
	cant: number
}

export const convertShopCartPerfumeEditDTO = (
	shopCartEdit: ShopCartPerfumeEdit,
): ShopCartPerfumeEditDTO => {
	return { ...shopCartEdit }
}

import { PerfumeDetails } from "./perfumes"

export interface ShopCartPerfume {
	id: string
	perfume: PerfumeDetails
	cant: number
	price: number
}

export interface ShopCartEdit {
	cant: number
}

export interface ShopCartEditDTO {
	cant: number
}

export const convertShopCartEditDTO = (
	shopCartEdit: ShopCartEdit,
): ShopCartEditDTO => {
	return { ...shopCartEdit }
}

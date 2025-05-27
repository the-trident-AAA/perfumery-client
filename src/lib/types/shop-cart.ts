import { ShopCartPerfume } from "@/src/lib/types/shop-cart-perfumes"

export interface ShopCart {
	id: string
	shopCartPerfumes: ShopCartPerfume[]
	totalItems: number
	totalMount: number
}

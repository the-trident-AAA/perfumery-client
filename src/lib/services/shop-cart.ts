"use server"
import { buildApiResponse } from "@/src/lib/api"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { ShopCart } from "@/src/lib/types/shop-cart"

export async function getShopCartById(id: string) {
	const res = await fetch(apiRoutes.shopCarts.getById.replace(":id", id), {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.shopCarts.singleTag] },
	})

	return await buildApiResponse<ShopCart>(res)
}

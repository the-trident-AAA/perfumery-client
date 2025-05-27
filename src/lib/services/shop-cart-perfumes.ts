"use server"

import { buildApiResponse } from "@/src/lib/api"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import {
	ShopCartEditDTO,
	ShopCartPerfume,
} from "@/src/lib/types/shop-cart-perfumes"

export async function getShopCartPerfumeById(id: string) {
	const res = await fetch(
		apiRoutes.shopCartPerfumes.getById.replace(":id", id),
		{
			method: "GET",
			next: { tags: [tagsCacheByRoutes.shopCartPerfumes.singleTag] },
		},
	)

	return await buildApiResponse<ShopCartPerfume>(res)
}

export async function editShopCartPerfume(
	id: string,
	shopCartEditDTO: ShopCartEditDTO,
) {
	const res = await fetch(
		apiRoutes.shopCartPerfumes.getById.replace(":id", id),
		{
			method: "PATCH",
			headers: {
				Authorization: "Bearer " + "token",
				"content-type": "application/json",
			},
			body: JSON.stringify(shopCartEditDTO),
		},
	)

	return await buildApiResponse<ShopCartPerfume>(res)
}

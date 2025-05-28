"use server"

import { buildApiResponse } from "@/src/lib/api"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import {
	ShopCartPerfume,
	ShopCartPerfumeCreateDTO,
	ShopCartPerfumeEditDTO,
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

export async function createShopCartPerfume(
	shopCartCreateDTO: ShopCartPerfumeCreateDTO,
) {
	const res = await fetch(apiRoutes.shopCartPerfumes.get, {
		method: "POST",
		headers: {
			Authorization: "Bearer " + "token",
			"content-type": "application/json",
		},
		body: JSON.stringify(shopCartCreateDTO),
	})

	return await buildApiResponse<ShopCartPerfume>(res)
}

export async function editShopCartPerfume(
	id: string,
	shopCartEditDTO: ShopCartPerfumeEditDTO,
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

export async function deleteShopCartPerfume(id: string) {
	const res = await fetch(
		apiRoutes.shopCartPerfumes.getById.replace(":id", id),
		{
			method: "DELETE",
			headers: {
				Authorization: "Bearer " + "token",
				"content-type": "application/json",
			},
		},
	)

	return await buildApiResponse<ShopCartPerfume>(res)
}

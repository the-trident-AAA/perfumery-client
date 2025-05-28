"use server"
import { auth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { ApiResponse } from "@/src/lib/types/api"
import { ShopCart, ShopCartTotalItems } from "@/src/lib/types/shop-cart"

export async function getShopCart(): Promise<ApiResponse<ShopCart>> {
	const session = await auth()
	console.log(session)
	if (!session)
		return {
			error: {
				name: "Unauthorized",
				reason: "No está autorizado para usar este recurso",
				code: "401",
			},
			status: 401,
		}

	const res = await fetch(
		apiRoutes.shopCarts.getById.replace(
			":id",
			session.user.shopCartId as string,
		),
		{
			method: "GET",
			next: { tags: [tagsCacheByRoutes.shopCarts.singleTag] },
		},
	)
	console.log(res)
	return await buildApiResponse<ShopCart>(res)
}

export async function getShopCartTotalItems(id: string) {
	const res = await fetch(apiRoutes.shopCarts.getById.replace(":id", id), {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.shopCarts.singleTag] },
	})

	return await buildApiResponse<ShopCartTotalItems>(res)
}

"use server"
import { auth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { ShopCart } from "@/src/lib/types/shop-cart"
import {
	ShopCartPerfume,
	ShopCartPerfumeCreateDTO,
	ShopCartPerfumeEditDTO,
} from "@/src/lib/types/shop-cart-perfumes"
import { cookies } from "next/headers"

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
	const session = await auth()
	const cookieStore = await cookies()
	const sessionId = cookieStore.get("guestSession")?.value

	const res = await fetch(apiRoutes.shopCartPerfumes.get, {
		method: "POST",
		headers: {
			Authorization: "Bearer " + "token",
			"content-type": "application/json",
		},
		body: JSON.stringify({
			...shopCartCreateDTO,
			shopCartId: session?.user.shopCartId,
			sessionId: sessionId || undefined,
		}),
	})
	console.log(res)

	const shopCartPerfumeData = (await res.json()) as {
		data: ShopCartPerfume
		sessionId?: string
	}

	if (shopCartPerfumeData.sessionId)
		cookieStore.set("guestSession", shopCartPerfumeData.sessionId, {
			maxAge: 30 * 24 * 60 * 60,
			httpOnly: true,
			secure: false, // temporary
			sameSite: "lax",
			path: "/",
		})

	return await buildApiResponse<ShopCartPerfume>(
		res,
		shopCartPerfumeData.data,
	)
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

export async function clearShopCart(shopCartId: string) {
	const res = await fetch(
		apiRoutes.shopCartPerfumes.clearShopCart.replace(":id", shopCartId),
		{
			method: "DELETE",
			headers: {
				Authorization: "Bearer " + "token",
				"content-type": "application/json",
			},
		},
	)

	return await buildApiResponse<ShopCart>(res)
}

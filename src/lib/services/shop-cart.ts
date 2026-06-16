"use server"
import { auth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { ApiResponse } from "@/src/lib/types/api"
import { ShopCart, ShopCartTotalItems } from "@/src/lib/types/shop-cart"
import { getOrCreateGuestSession } from "./guest-session"

export async function getShopCart(): Promise<ApiResponse<ShopCart>> {
	const session = await auth()
	const sessionId = session ? undefined : await getOrCreateGuestSession()
	const res = session
		? await fetch(
				apiRoutes.shopCarts.getById.replace(
					":id",
					session.user.shopCartId as string,
				),
				{
					method: "GET",
					next: { tags: [tagsCacheByRoutes.shopCarts.singleTag] },
				},
			)
		: await fetch(apiRoutes.shopCarts.getAnonymousShopCart, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				next: { tags: [tagsCacheByRoutes.shopCarts.singleTag] },
				body: JSON.stringify({
					sessionId: sessionId,
				}),
			})

	// Si el backend devuelve 400 indicando que no existe el carrito, devolver un carrito vacío
	const resText = await res.text()
	let isCartNotFound = false
	try {
		const data = JSON.parse(resText)
		const msg = String(data.message ?? data.reason ?? "").toLowerCase()
		isCartNotFound = msg.includes("carrito")
	} catch {
		// No es JSON válido, ignorar
	}
	const reusableRes = new Response(resText, {
		status: res.status,
		statusText: res.statusText,
		headers: res.headers,
	})

	if (res.status === 400 && isCartNotFound) {
		return {
			response: {
				id: session?.user.shopCartId || sessionId || "anonymous",
				totalMount: 0,
				totalItems: 0,
				shopCartPerfumes: [],
			},
			status: 200,
		}
	}

	return await buildApiResponse<ShopCart>(reusableRes)
}

export async function getShopCartTotalItems() {
	const session = await auth()
	const sessionId = session ? undefined : await getOrCreateGuestSession()

	const res = session
		? await fetch(
				apiRoutes.shopCarts.getTotalItems.replace(
					":id",
					session.user.shopCartId as string,
				),
				{
					method: "GET",
					next: { tags: [tagsCacheByRoutes.shopCarts.singleTag] },
				},
			)
		: await fetch(apiRoutes.shopCarts.getAnonymousShopCartTotalItems, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				next: { tags: [tagsCacheByRoutes.shopCarts.singleTag] },
				body: JSON.stringify({
					sessionId: sessionId,
				}),
			})

	// Si el backend devuelve 400 indicando que no existe el carrito, devolver 0 items
	const resText = await res.text()
	let isCartNotFound = false
	try {
		const data = JSON.parse(resText)
		const msg = String(data.message ?? data.reason ?? "").toLowerCase()
		isCartNotFound = msg.includes("carrito")
	} catch {
		// No es JSON válido, ignorar
	}
	const reusableRes = new Response(resText, {
		status: res.status,
		statusText: res.statusText,
		headers: res.headers,
	})

	if (res.status === 400 && isCartNotFound) {
		return {
			response: {
				totalItems: 0,
			},
			status: 200,
		}
	}

	return await buildApiResponse<ShopCartTotalItems>(reusableRes)
}

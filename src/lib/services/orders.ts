"use server"
import { auth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import { QueryParamsURLFactory } from "@/src/lib/request"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { Order } from "@/src/lib/types/orders"
import { PaginationResponse } from "@/src/lib/types/pagination"
import { IQueryable } from "@/src/lib/types/request"

export async function getOrdersList(params: IQueryable) {
	const url = new QueryParamsURLFactory(params, apiRoutes.orders.get).build()

	const res = await fetch(url, {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.orders.multipleTag] },
	})

	return await buildApiResponse<PaginationResponse<Order>>(res)
}

export async function createOrder() {
	const session = await auth()

	const res = await fetch(apiRoutes.orders.get, {
		method: "POST",
		headers: {
			Authorization: "Bearer " + session?.accessToken,
			"content-type": "application/json",
		},
	})
	console.log(res)
	return await buildApiResponse<Order>(res)
}

export async function getUserTotalOrders() {
	const session = await auth()
	const res = await fetch(apiRoutes.orders.getUserTotalOrders, {
		method: "GET",
		headers: {
			Authorization: "Bearer " + session?.accessToken,
		},
		next: { tags: [tagsCacheByRoutes.orders.singleTag] },
	})

	return await buildApiResponse<{ total: number }>(res)
}

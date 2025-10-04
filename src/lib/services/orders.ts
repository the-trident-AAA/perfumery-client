"use server"
import { auth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import { QueryParamsURLFactory } from "@/src/lib/request"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { Order, OrderEditDto } from "@/src/lib/types/orders"
import { OrderPerfume } from "@/src/lib/types/orders-perfumes"
import { PaginationResponse } from "@/src/lib/types/pagination"
import { IQueryable } from "@/src/lib/types/request"

export async function getOrdersList(params: IQueryable) {
	const session = await auth()
	if (!session)
		return {
			error: {
				name: "Unauthorized",
				reason: "No está autorizado para usar este recurso",
				code: "401",
			},
			status: 401,
		}
	const url = new QueryParamsURLFactory(
		{ ...params, userId: session?.user.id as string },
		apiRoutes.orders.get,
	).build()

	const res = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: "Bearer " + session?.accessToken,
		},
		next: { tags: [tagsCacheByRoutes.orders.multipleTag] },
	})

	return await buildApiResponse<PaginationResponse<Order>>(res)
}

export async function getOrderPerfumes(id: string) {
	const session = await auth()
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
		apiRoutes.orders.getOrderPerfumes.replace(":id", id),
		{
			method: "GET",
			headers: {
				Authorization: "Bearer " + session?.accessToken,
			},
			next: { tags: [tagsCacheByRoutes.orders.orderPerfumes] },
		},
	)

	return await buildApiResponse<OrderPerfume[]>(res)
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
	if (!session)
		return {
			error: {
				name: "Unauthorized",
				reason: "No está autorizado para usar este recurso",
				code: "401",
			},
			status: 401,
		}
	const res = await fetch(apiRoutes.orders.getUserTotalOrders, {
		method: "GET",
		headers: {
			Authorization: "Bearer " + session?.accessToken,
		},
		next: { tags: [tagsCacheByRoutes.orders.singleTag] },
	})

	return await buildApiResponse<{ total: number }>(res)
}

export async function editOrder(id: string, orderEditDTO: OrderEditDto) {
	const res = await fetch(apiRoutes.orders.getById.replace(":id", id), {
		method: "PATCH",
		headers: {
			Authorization: "Bearer " + "token",
			"content-type": "application/json",
		},
		body: JSON.stringify(orderEditDTO),
	})

	return await buildApiResponse<{ success: boolean }>(res)
}

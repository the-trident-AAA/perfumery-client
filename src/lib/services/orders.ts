import { auth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import { apiRoutes } from "@/src/lib/routes/api-routes/api-routes"
import { Order } from "@/src/lib/types/orders"

export async function createOrder() {
	const session = await auth()
	const res = await fetch(apiRoutes.orders.create, {
		method: "POST",
		headers: {
			Authorization: "Bearer " + session?.accessToken,
		},
	})
	console.log(res)
	return await buildApiResponse<Order>(res)
}

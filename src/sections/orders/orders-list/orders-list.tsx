import { getOrdersList } from "@/src/lib/services/orders"
import OrderCard from "@/src/sections/orders/order-card/order-card"
import React from "react"

export default async function OrdersList() {
	const res = await getOrdersList({})

	if (!res.response || res.error) throw new Error("Error fetching orders")

	const orders = res.response.data
	const pagination = res.response.paginationMeta
	console.log("Perfumes")
	console.log(orders)
	return (
		<div className="grid grid-cols-1 gap-4 p-2">
			{orders.map(order => (
				<OrderCard key={order.id} order={order} />
			))}
		</div>
	)
}

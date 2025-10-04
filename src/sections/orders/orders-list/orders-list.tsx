import EmptyContent from "@/src/components/empty-content/empty-content"
import { getOrdersList } from "@/src/lib/services/orders"
import OrderCard from "@/src/sections/orders/order-card/order-card"
import React from "react"

interface Props {
	variant?: "modal" | "default"
}

export default async function OrdersList({ variant = "default" }: Props) {
	const res = await getOrdersList({ limit: 100 })

	if (!res.response || res.error)
		return <div>{res.error?.reason || "Error en la carga de orders"}</div>

	const orders = res.response.data

	return (
		<div className="grid grid-cols-1 gap-4 p-2">
			{orders.length > 0 ? (
				orders.map(order => (
					<OrderCard key={order.id} order={order} variant={variant} />
				))
			) : (
				<EmptyContent
					title="No se han registrado pedidos"
					description="Llene su carrito y cree un pedido !!!"
				/>
			)}
		</div>
	)
}

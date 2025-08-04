import EmptyContent from "@/src/components/empty-content/empty-content"
import { getOrdersList } from "@/src/lib/services/orders"
import OrderEditFormContainer from "@/src/sections/orders/form/edit/order-edit-form-container"
import OrderCard from "@/src/sections/orders/order-card/order-card"
import React from "react"

interface Props {
	variant?: "modal" | "default"
}

export default async function OrdersList({ variant = "default" }: Props) {
	const res = await getOrdersList({})

	if (!res.response || res.error) throw new Error("Error fetching orders")

	const orders = res.response.data

	return (
		<div className="grid grid-cols-1 gap-4 p-2">
			{orders.length > 0 ? (
				orders.map(order => (
					<OrderEditFormContainer key={order.id} order={order}>
						<OrderCard order={order} variant={variant} />
					</OrderEditFormContainer>
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

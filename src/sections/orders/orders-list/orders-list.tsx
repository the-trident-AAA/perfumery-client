import OrderCard from "@/src/sections/orders/order-card/order-card"
import React from "react"

const orders = [
	{
		id: "1",
		code: "ORD-2023-001",
		status: "Entregado",
		price: 125.99,
		perfumeOrder: [{ id: 1 }, { id: 2 }],
	},
	{
		id: "2",
		code: "ORD-2023-002",
		status: "En Proceso",
		price: 89.5,
		perfumeOrder: [{ id: 3 }],
	},
	{
		id: "3",
		code: "ORD-2023-003",
		status: "Pendiente",
		price: 210.75,
		perfumeOrder: [{ id: 4 }, { id: 5 }, { id: 6 }],
	},
	{
		id: "4",
		code: "ORD-2023-004",
		status: "Cancelado",
		price: 45.0,
		perfumeOrder: [],
	},
]

export default function OrdersList() {
	return (
		<div className="grid grid-cols-1 gap-4 p-2">
			{orders.map(order => (
				<OrderCard key={order.id} order={order} />
			))}
		</div>
	)
}

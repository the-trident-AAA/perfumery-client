import OrdersList from "@/src/sections/orders/orders-list/orders-list"
import React from "react"

export default function OrdersContent() {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl font-bold">Pedidos</h1>
				<p className="text-sm sm:text-lg text-gray-500">
					Aquí puedes ver todos tus pedidos.
				</p>
			</div>

			<OrdersList />
		</div>
	)
}

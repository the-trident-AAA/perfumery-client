import OrdersList from "@/src/sections/orders/orders-list/orders-list"
import { ListOrderedIcon } from "lucide-react"
import React from "react"

export default function OrdersContent() {
	return (
		<div className="flex flex-col gap-2 mt-2">
			<div className="flex bg-primary p-2 rounded-2xl justify-center gap-2">
				<ListOrderedIcon className="size-8 text-secondary" />
				<h1 className="text-2xl text-secondary font-bold">
					Pedidos Realizados
				</h1>
			</div>
			<OrdersList />
		</div>
	)
}

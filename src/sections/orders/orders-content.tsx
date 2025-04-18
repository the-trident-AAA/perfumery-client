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

			<div className="grid grid-cols-1">Pedido 1 Pedido1</div>
		</div>
	)
}

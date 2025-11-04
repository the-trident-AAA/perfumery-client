import EmptyContent from "@/src/components/empty-content/empty-content"
import {
	getOrdersList,
	updateUserOrdersAsViews,
} from "@/src/lib/services/orders"
import { SearchParamsPagination } from "@/src/lib/types/pagination"
import OrdersFiltersContainer from "@/src/sections/orders/filters/orders-filters-container"
import OrdersNotSeenByUserContextHandler from "@/src/sections/orders/handlers/orders-not-seen-by-user-context-handler"
import OrderCard from "@/src/sections/orders/order-card/order-card"
import OrdersOrderContainer from "@/src/sections/orders/order/orders-order-container"
import React from "react"

interface Props {
	variant?: "modal" | "default"
	searchParams: SearchParamsPagination
}

export default async function OrdersList({
	variant = "default",
	searchParams,
}: Props) {
	const ordersNotSeenByUserRes = await updateUserOrdersAsViews()

	if (!ordersNotSeenByUserRes.response || ordersNotSeenByUserRes.error)
		return (
			<div>
				{ordersNotSeenByUserRes.error?.reason ||
					"Error en la actualización"}
			</div>
		)

	const res = await getOrdersList(searchParams)

	if (!res.response || res.error)
		return <div>{res.error?.reason || "Error en la carga de orders"}</div>

	const orders = res.response.data

	return (
		<div className="flex flex-col gap-4">
			<OrdersNotSeenByUserContextHandler />
			<OrdersFiltersContainer />
			<OrdersOrderContainer />
			<div className="grid grid-cols-1 gap-4 p-2">
				{orders.length > 0 ? (
					orders.map(order => (
						<OrderCard
							key={order.id}
							order={order}
							variant={variant}
						/>
					))
				) : (
					<EmptyContent
						title="No se han registrado pedidos"
						description="Llene su carrito y cree un pedido !!!"
					/>
				)}
			</div>
		</div>
	)
}

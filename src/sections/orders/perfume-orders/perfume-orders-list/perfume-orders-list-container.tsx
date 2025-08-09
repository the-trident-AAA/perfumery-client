"use client"
import { LoadingSpinner } from "@/src/components/ui/loading-spinner"
import { Order } from "@/src/lib/types/orders"
import OrderEditFormContainer from "@/src/sections/orders/form/edit/order-edit-form-container"
import useOrderPefumes from "@/src/sections/orders/hooks/use-order-perfumes"
import PerfumeOrdersList from "@/src/sections/orders/perfume-orders/perfume-orders-list/perfume-orders-list"
import React from "react"

interface Props {
	order: Order
	variant?: "modal" | "default"
}

export default function PerfumeOrdersListContainer({
	order,
	variant = "default",
}: Props) {
	const { orderPerfumes, loading, fetchOrderPerfumes } = useOrderPefumes({
		id: order.id,
	})
	return loading ? (
		<div className="flex items-center justify-center">
			<LoadingSpinner size={32} />
		</div>
	) : (
		<OrderEditFormContainer
			order={order}
			orderPerfumes={orderPerfumes}
			fetchOrderPerfumes={fetchOrderPerfumes}
		>
			<PerfumeOrdersList
				perfumesOrder={orderPerfumes}
				variant={variant}
			/>
		</OrderEditFormContainer>
	)
}

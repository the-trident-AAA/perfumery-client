"use client"
import { LoadingSpinner } from "@/src/components/ui/loading-spinner"
import OrderEditFormContainer from "@/src/sections/orders/form/edit/order-edit-form-container"
import useOrderPefumes from "@/src/sections/orders/hooks/use-order-perfumes"
import PerfumeOrdersList from "@/src/sections/orders/perfume-orders/perfume-orders-list/perfume-orders-list"
import React from "react"

interface Props {
	orderId: string
	variant?: "modal" | "default"
}

export default function PerfumeOrdersListContainer({
	orderId,
	variant = "default",
}: Props) {
	const { orderPerfumes, loading, fetchOrderPerfumes } = useOrderPefumes({
		id: orderId,
	})
	return loading ? (
		<div className="flex items-center justify-center">
			<LoadingSpinner size={32} />
		</div>
	) : (
		<OrderEditFormContainer
			orderId={orderId}
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

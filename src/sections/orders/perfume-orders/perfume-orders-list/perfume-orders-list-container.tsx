"use client"
import { LoadingSpinner } from "@/src/components/ui/loading-spinner"
import { Order, OrderState } from "@/src/lib/types/orders"
import OrderEditFormContainer from "@/src/sections/orders/form/edit/order-edit-form-container"
import useOrderPefumes from "@/src/sections/orders/hooks/use-order-perfumes"
import PerfumeOrdersList from "@/src/sections/orders/perfume-orders/perfume-orders-list/perfume-orders-list"
import PerfumeOrdersListOnlyRead from "@/src/sections/orders/perfume-orders/perfume-orders-list/perfume-orders-list-only-read"
import { Sparkles } from "lucide-react"
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
	) : order.state !== OrderState.COMPLETED &&
	  order.state !== OrderState.CANCELED ? (
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
	) : (
		<div className="space-y-4">
			<div className="flex items-center gap-3 pb-2">
				<div className="flex gap-2 items-center rounded-2xl bg-secondary p-2">
					<Sparkles className="h-5 w-5 text-primary" />

					<h3 className="font-bold text-lg text-primary">
						Perfumes en este pedido
					</h3>
				</div>
				<div className="flex-1 h-[4px] rounded-2xl bg-secondary" />
			</div>
			<PerfumeOrdersListOnlyRead
				perfumesOrder={orderPerfumes}
				variant={variant}
			/>
		</div>
	)
}

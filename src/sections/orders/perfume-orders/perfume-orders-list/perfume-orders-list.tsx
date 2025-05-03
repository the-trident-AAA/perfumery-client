import PerfumeOrderCard, {
	PerfumeOrder,
} from "@/src/sections/orders/perfume-orders/perfume-order-card/perfume-order-card"
import React from "react"

interface Props {
	perfumesOrder: PerfumeOrder[]
}

export default function PerfumeOrdersList({ perfumesOrder }: Props) {
	return (
		<div className="border-t pt-4 mt-2">
			<h3 className="font-medium text-lg mb-3">
				Perfumes en este pedido
			</h3>
			{perfumesOrder.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{perfumesOrder.map((perfumeOrder, index) => (
						<PerfumeOrderCard
							key={index}
							perfumeOrder={perfumeOrder}
						/>
					))}
				</div>
			) : (
				<p className="text-muted-foreground">
					No hay perfumes en este pedido.
				</p>
			)}
		</div>
	)
}

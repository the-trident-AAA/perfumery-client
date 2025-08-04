"use client"
import { OrderPerfume } from "@/src/lib/types/orders-perfumes"
import { OrderPerfumeEdit } from "@/src/sections/orders/form/edit/schemas/order-perfume-schema"
import PerfumeOrderCard from "@/src/sections/orders/perfume-orders/perfume-order-card/perfume-order-card"
import { Sparkles } from "lucide-react"
import { useFormContext } from "react-hook-form"

interface Props {
	perfumesOrder: OrderPerfume[]
	variant?: "modal" | "default"
}

export default function PerfumeOrdersList({
	perfumesOrder,
	variant = "default",
}: Props) {
	const { watch, setValue, trigger } = useFormContext()
	const perfumes = watch("perfumes") as OrderPerfumeEdit[]

	return perfumes.length > 0 ? (
		<div
			className={`grid ${variant === "default" ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1"} gap-4 pb-6`}
		>
			{perfumes.map((perfume, index) => {
				const orderPerfume = perfumesOrder.find(
					p => p.id === perfume.id,
				)
				return (
					<PerfumeOrderCard
						key={index}
						index={index}
						perfumeOrder={
							{
								...orderPerfume,
								cant: perfume.cant,
							} as OrderPerfume
						}
					/>
				)
			})}
		</div>
	) : (
		<div className="text-center py-8">
			<div className="bg-muted/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
				<Sparkles className="h-8 w-8 text-muted-foreground" />
			</div>
			<p className="text-muted-foreground">
				No hay perfumes en este pedido.
			</p>
		</div>
	)
}

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
	return (
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

			{perfumes.length > 0 ? (
				<div
					className={`grid ${variant === "default" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-4 pb-6`}
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
			)}
		</div>
	)
}

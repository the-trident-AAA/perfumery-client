"use client"
import DeleteMaskCard from "@/src/components/form/components/delete-mask-card/delete-mask-card"
import { Badge } from "@/src/components/ui/badge"
import { OrderPerfume } from "@/src/lib/types/orders-perfumes"
import { fCurrency } from "@/src/lib/utils/format-number"
import { OrderPerfumeEdit } from "@/src/sections/orders/form/edit/schemas/order-perfume-schema"
import PerfumeOrderCard from "@/src/sections/orders/perfume-orders/perfume-order-card/perfume-order-card"
import { Sparkles } from "lucide-react"
import { useFormContext } from "react-hook-form"
import { toast } from "react-toastify"

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

	const handleRemovePerfume = (indexToRemove: number) => {
		if (perfumes.length > 1) {
			const updatedPerfumes = perfumes.filter(
				(_, index) => index !== indexToRemove,
			)
			setValue("perfumes", updatedPerfumes)
			trigger("perfumes")
		} else {
			toast.error("El pedido debe de tener al menos un perfume")
		}
	}

	return (
		<div className="space-y-4">
			<Badge variant={"secondary"} className="text-primary text-base">
				<p className="text-primary">
					Costo del pedido actualizado:{" "}
					{fCurrency(
						perfumes.reduce((total, perfume) => {
							const orderPerfume = perfumesOrder.find(
								o => o.id === perfume.id,
							)
							return (
								total +
								(orderPerfume
									? orderPerfume.perfume.price * perfume.cant
									: 0)
							)
						}, 0),
					)}{" "}
				</p>
			</Badge>

			{perfumes.length > 0 ? (
				<div
					className={`grid ${variant === "default" ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1"} gap-4 pb-6`}
				>
					{perfumes.map((perfume, index) => {
						const orderPerfume = perfumesOrder.find(
							p => p.id === perfume.id,
						)
						return (
							<DeleteMaskCard
								key={index}
								handleRemove={() => handleRemovePerfume(index)}
							>
								<PerfumeOrderCard
									index={index}
									perfumeOrder={
										{
											...orderPerfume,
											cant: perfume.cant,
											price:
												perfume.cant *
												(orderPerfume?.perfume.price ||
													0),
										} as OrderPerfume
									}
								/>
							</DeleteMaskCard>
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

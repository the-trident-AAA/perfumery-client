"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import React, { ReactNode, useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import {
	OrderEdit,
	orderEditSchema,
} from "@/src/sections/orders/form/edit/schemas/order-edit-schema"
import useEditOrder from "@/src/sections/orders/hooks/use-edit-order"
import { Button } from "@/src/components/ui/button"
import { OrderPerfume } from "@/src/lib/types/orders-perfumes"
import { Sparkles } from "lucide-react"
import { revalidateServerTags } from "@/src/lib/cache"
import { tagsCacheByRoutes } from "@/src/lib/routes/api-routes/api-routes"

interface Props {
	orderId: string
	orderPerfumes: OrderPerfume[]
	fetchOrderPerfumes: () => void
	children: ReactNode
}

export default function OrderEditFormContainer({
	orderId,
	children,
	orderPerfumes,
	fetchOrderPerfumes,
}: Props) {
	const { editOrder, loading: submitLoading } = useEditOrder({
		id: orderId,
		onEditAction: () => {
			toast.success("Orden actualizada con éxito")
			revalidateServerTags(tagsCacheByRoutes.orders.multipleTag)
			fetchOrderPerfumes()
		},
	})

	const form = useForm<OrderEdit>({
		resolver: zodResolver(orderEditSchema),
		defaultValues: {
			perfumes: orderPerfumes.map(orderPerfume => ({
				id: orderPerfume.id,
				cant: orderPerfume.cant,
				perfumeId: orderPerfume.perfume.id,
			})),
		},
	})

	function onSubmit(order: OrderEdit) {
		editOrder(order)
	}

	function refreshInfo() {
		revalidateServerTags(tagsCacheByRoutes.orders.multipleTag)
		fetchOrderPerfumes()
	}

	useEffect(() => {
		console.log("Entre")
		form.reset({
			perfumes: orderPerfumes.map(orderPerfume => ({
				id: orderPerfume.id,
				cant: orderPerfume.cant,
				perfumeId: orderPerfume.perfume.id,
			})),
		})
	}, [orderPerfumes, form])

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<div className="flex items-center gap-3 pb-2">
					<div className="flex gap-2 items-center rounded-2xl bg-secondary p-2">
						<Sparkles className="h-5 w-5 text-primary" />

						<h3 className="font-bold text-lg text-primary">
							Perfumes en este pedido
						</h3>
					</div>
					<div className="flex-1 h-[4px] rounded-2xl bg-secondary" />
					<div className="flex flex-col sm:flex-row gap-2">
						<Button
							variant={"secondary"}
							type="submit"
							disabled={submitLoading}
							className="text-primary"
						>
							Actualizar
						</Button>
						<Button
							variant={"secondary"}
							onClick={refreshInfo}
							type="button"
							disabled={submitLoading}
							className="text-primary"
						>
							Descartar Cambios
						</Button>
					</div>
				</div>
				{children}
			</form>
		</FormProvider>
	)
}

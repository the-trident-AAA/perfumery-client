"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import React, { ReactNode } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import {
	OrderEdit,
	orderEditSchema,
} from "@/src/sections/orders/form/edit/schemas/order-edit-schema"
import { Order } from "@/src/lib/types/orders"
import useEditOrder from "@/src/sections/orders/hooks/use-edit-order"
import { tagsCacheByRoutes } from "@/src/lib/routes/api-routes/api-routes"
import { Button } from "@/src/components/ui/button"
import { revalidateServerTags } from "@/src/lib/cache"

interface Props {
	order: Order
	children: ReactNode
}

export default function EditPerfumeFormContainer({ order, children }: Props) {
	const { editOrder, loading: submitLoading } = useEditOrder({
		id: order.id,
		onEditAction: () => {
			toast.success("Orden actualizada con éxito")
			revalidateServerTags(tagsCacheByRoutes.orders.multipleTag)
		},
	})

	const form = useForm<OrderEdit>({
		resolver: zodResolver(orderEditSchema),
		defaultValues: {
			perfumes: order.orderPerfumes,
		},
	})

	function onSubmit(order: OrderEdit) {
		editOrder(order)
	}
	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full flex flex-1 flex-col justify-between gap-8 h-full"
			>
				{children}
				<Button
					variant={"default"}
					type="submit"
					disabled={submitLoading}
				>
					{"Actualizar"}
				</Button>
			</form>
		</FormProvider>
	)
}

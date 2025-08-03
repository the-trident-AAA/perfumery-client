"use client"
import { useCallback, useState } from "react"
import { OrderEdit } from "@/src/sections/orders/form/edit/schemas/order-edit-schema"
import { editOrder as editOrderService } from "@/src/lib/services/orders"
import { convertOrderEditDto } from "@/src/lib/types/orders"

interface Props {
	id: string
	onEditAction: () => void
}

export default function useEditOrder({ id, onEditAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const editOrder = useCallback(
		async (order: OrderEdit) => {
			try {
				setLoading(true)
				setError(null)
				const res = await editOrderService(
					id,
					convertOrderEditDto(order),
				)
				if (!res.response || res.error)
					setError("Error en la edición de la orden")
				else {
					onEditAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onEditAction, id],
	)
	return {
		loading,
		error,
		editOrder,
	}
}

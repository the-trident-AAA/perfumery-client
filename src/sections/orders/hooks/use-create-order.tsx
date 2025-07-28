"use client"
import { useCallback, useState } from "react"
import { createOrder as createOrderService } from "@/src/lib/services/orders"

interface Props {
	onCreateAction: () => void
}

export default function useCreateOrder({ onCreateAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const createOrder = useCallback(async () => {
		try {
			setLoading(true)
			setError(null)
			const res = await createOrderService()
			if (!res.response || res.error)
				setError("Error en la creación del pedido")
			else {
				onCreateAction()
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}, [onCreateAction])
	return {
		loading,
		error,
		createOrder,
	}
}

"use client"

import { getOrderPerfumes } from "@/src/lib/services/orders"
import { OrderPerfume } from "@/src/lib/types/orders-perfumes"
import { useCallback, useEffect, useState } from "react"

interface Props {
	id: string | null
}

export default function useOrderPefumes({ id }: Props) {
	const [orderPerfumes, setOrderPerfumes] = useState<OrderPerfume[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const fetchOrderPerfumes = useCallback(async () => {
		if (id) {
			setLoading(true)
			setError(null)
			try {
				const res = await getOrderPerfumes(id)

				if (!res.response || res.error)
					setError(
						res.error?.reason ||
							"Error en la carga de los perfumes de la orden",
					)
				else setOrderPerfumes(res.response)
			} catch (error) {
				if (error instanceof Error) setError(error.message)
			} finally {
				setLoading(false)
			}
		}
	}, [id])

	useEffect(() => {
		fetchOrderPerfumes()
	}, [fetchOrderPerfumes])
	return {
		orderPerfumes,
		error,
		loading,
		fetchOrderPerfumes,
	}
}

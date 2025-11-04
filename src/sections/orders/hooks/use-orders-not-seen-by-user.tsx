"use client"
import { getOrdersNotSeenByUser } from "@/src/lib/services/orders"
import { useCallback, useEffect, useState } from "react"

export default function useOrdersNotSeenByUser() {
	const [totalOrders, setTotalOrders] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const fetchOrdersNotSeenByUser = useCallback(async () => {
		setLoading(true)
		setError(null)
		const res = await getOrdersNotSeenByUser()
		if (!res.response || res.error)
			setError(
				res.error?.reason ||
					"Error en la obtención del total de pedidos no vistos del usuario",
			)
		else {
			setTotalOrders(res.response.total)
		}
		setLoading(false)
	}, [])

	useEffect(() => {
		fetchOrdersNotSeenByUser()
	}, [fetchOrdersNotSeenByUser])

	return { totalOrders, loading, error, fetchOrdersNotSeenByUser }
}

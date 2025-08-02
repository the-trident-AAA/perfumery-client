"use client"
import { getUserTotalOrders } from "@/src/lib/services/orders"
import { useCallback, useEffect, useState } from "react"

export default function useUserTotalOrders() {
	const [totalOrders, setTotalOrders] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const fetchUserTotalOrders = useCallback(async () => {
		setLoading(true)
		setError(null)
		const res = await getUserTotalOrders()
		if (!res.response || res.error)
			setError("Error en la obtención del total de pedidos del usuario")
		else {
			setTotalOrders(res.response.total)
		}
		setLoading(false)
	}, [])

	useEffect(() => {
		fetchUserTotalOrders()
	}, [fetchUserTotalOrders])

	return { totalOrders, loading, error, fetchUserTotalOrders }
}

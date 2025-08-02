"use client"
import { getUserTotalOrders } from "@/src/lib/services/orders"
import { useCallback, useEffect, useState } from "react"

interface Props {
	userId: string
}

export default function useUserTotalOrders({ userId }: Props) {
	const [totalOrders, setTotalOrders] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const fetchUserTotalOrders = useCallback(async () => {
		setLoading(true)
		setError(null)
		const res = await getUserTotalOrders(userId)
		if (!res.response || res.error)
			setError("Error en la obtención del total de pedidos del usuario")
		else {
			setTotalOrders(res.response.total)
		}
		setLoading(false)
	}, [userId])

	useEffect(() => {
		fetchUserTotalOrders()
	}, [fetchUserTotalOrders])

	return { totalOrders, loading, error, fetchUserTotalOrders }
}

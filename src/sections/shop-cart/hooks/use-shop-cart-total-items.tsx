"use client"
import { getShopCartTotalItems } from "@/src/lib/services/shop-cart"
import { useCallback, useEffect, useState } from "react"

export default function useShopCartTotalItems() {
	const [totalItems, setTotalItems] = useState<number>(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const fetchShopCartTotalItems = useCallback(async () => {
		setLoading(true)
		setError(null)
		try {
			const res = await getShopCartTotalItems()

			if (!res.response || res.error)
				throw new Error(
					"Error al cargar la cantidad de items del carrito de compras",
				)

			setTotalItems(res.response.totalItems)
		} catch (error) {
			if (error instanceof Error) setError(error.message)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchShopCartTotalItems()
	}, [fetchShopCartTotalItems])
	return { totalItems, error, loading, fetchShopCartTotalItems }
}

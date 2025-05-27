"use client"
import { getShopCart } from "@/src/lib/services/shop-cart"
import { ShopCart } from "@/src/lib/types/shop-cart"
import { useCallback, useEffect, useState } from "react"

export default function useShopCart() {
	const [shopCart, setShopCart] = useState<ShopCart | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const fetchShopCart = useCallback(async () => {
		setLoading(true)
		setError(null)
		try {
			const res = await getShopCart()

			if (!res.response || res.error)
				throw new Error(
					"Error al cargar la información del carrito de compras",
				)

			setShopCart(res.response)
		} catch (error) {
			if (error instanceof Error) setError(error.message)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchShopCart()
	}, [fetchShopCart])
	return { shopCart, error, loading, fetchShopCart }
}

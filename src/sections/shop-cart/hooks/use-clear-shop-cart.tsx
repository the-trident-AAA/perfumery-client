"use client"

import { clearShopCart as clearShopCartService } from "@/src/lib/services/shop-cart-perfumes"
import { useCallback, useState } from "react"

interface Props {
	shopCartId: string | null
	onClearAction: () => void
}

export default function useClearShopCart({ shopCartId, onClearAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const clearShopCart = useCallback(async () => {
		if (shopCartId) {
			setLoading(true)
			setError(null)
			try {
				const res = await clearShopCartService(shopCartId)

				if (!res.response || res.error)
					throw new Error(
						"Error durante la limpieza del carrito de compras",
					)
				else onClearAction()
			} catch (error) {
				if (error instanceof Error) setError(error.message)
			} finally {
				setLoading(false)
			}
		}
	}, [shopCartId, onClearAction])

	return { error, loading, clearShopCart }
}

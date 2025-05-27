"use client"

import { getShopCartPerfumeById } from "@/src/lib/services/shop-cart-perfumes"
import { ShopCartPerfume } from "@/src/lib/types/shop-cart-perfumes"
import { useCallback, useEffect, useState } from "react"

interface Props {
	id: string | null
	shopCartPerfumeDefault: ShopCartPerfume | null
}

export default function useShopCartPerfume({
	id,
	shopCartPerfumeDefault,
}: Props) {
	const [shopCartPerfume, setShopCartPerfume] =
		useState<ShopCartPerfume | null>(shopCartPerfumeDefault)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const fetchShopCartPerfume = useCallback(async () => {
		if (id) {
			setLoading(true)
			setError(null)
			try {
				const res = await getShopCartPerfumeById(id)

				if (!res.response || res.error)
					throw new Error(
						"Error al cargar la información del perfume del carrito",
					)

				setShopCartPerfume(res.response)
			} catch (error) {
				if (error instanceof Error) setError(error.message)
			} finally {
				setLoading(false)
			}
		}
	}, [id])

	useEffect(() => {
		if (!shopCartPerfumeDefault) fetchShopCartPerfume()
	}, [fetchShopCartPerfume])
	return { shopCartPerfume, error, loading, fetchShopCartPerfume }
}

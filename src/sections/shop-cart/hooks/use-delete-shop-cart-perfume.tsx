"use client"

import { deleteShopCartPerfume as deleteShopCartPerfumeService } from "@/src/lib/services/shop-cart-perfumes"
import { useCallback, useState } from "react"

interface Props {
	id: string | null
	onDeleteAction: () => void
}

export default function useDeleteShopCartPerfume({
	id,
	onDeleteAction,
}: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const deleteShopCartPerfume = useCallback(async () => {
		if (id) {
			setLoading(true)
			setError(null)
			try {
				const res = await deleteShopCartPerfumeService(id)

				if (!res.response || res.error)
					throw new Error(
						"Error durante la eliminación del perfume del carrito de compras",
					)
				else onDeleteAction()
			} catch (error) {
				if (error instanceof Error) setError(error.message)
			} finally {
				setLoading(false)
			}
		}
	}, [id, onDeleteAction])

	return { error, loading, deleteShopCartPerfume }
}

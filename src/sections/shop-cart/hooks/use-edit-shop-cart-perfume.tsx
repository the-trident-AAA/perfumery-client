"use client"
import { editShopCartPerfume as editShopCartPerfumeService } from "@/src/lib/services/shop-cart-perfumes"
import {
	convertShopCartPerfumeEditDTO,
	ShopCartPerfumeEdit,
} from "@/src/lib/types/shop-cart-perfumes"
import { useCallback, useState } from "react"

interface Props {
	id: string
	onEditAction: () => void
}

export default function useEditShopCartPerfume({ id, onEditAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const editShopCartPerfume = useCallback(
		async (shopCartPerfume: ShopCartPerfumeEdit) => {
			try {
				setLoading(true)
				setError(null)
				const res = await editShopCartPerfumeService(
					id,
					convertShopCartPerfumeEditDTO(shopCartPerfume),
				)
				if (!res.response || res.error)
					setError("Error en la edición del perfume del carrito")
				else {
					onEditAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onEditAction, id],
	)
	return {
		loading,
		error,
		editShopCartPerfume,
	}
}

"use client"
import { createShopCartPerfume as createShopCartPerfumeService } from "@/src/lib/services/shop-cart-perfumes"
import {
	convertShopCartPerfumeCreateDTO,
	ShopCartPerfumeCreate,
} from "@/src/lib/types/shop-cart-perfumes"
import { useCallback, useState } from "react"

interface Props {
	onCreateAction: () => void
}

export default function useCreateShopCartPerfume({ onCreateAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const createShopCartPerfume = useCallback(
		async (shopCartPerfume: ShopCartPerfumeCreate) => {
			try {
				setLoading(true)
				setError(null)
				const res = await createShopCartPerfumeService(
					convertShopCartPerfumeCreateDTO(shopCartPerfume),
				)
				if (!res.response || res.error)
					setError("Error en la creación del perfume del carrito")
				else {
					onCreateAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onCreateAction],
	)
	return {
		loading,
		error,
		createShopCartPerfume,
	}
}

"use client"
import {
	ShopCartPerfume,
	ShopCartPerfumeEdit,
} from "@/src/lib/types/shop-cart-perfumes"
import useEditShopCartPerfume from "@/src/sections/shop-cart/hooks/use-edit-shop-cart-perfume"
import { useCallback } from "react"

interface Props {
	shopCartPerfume: ShopCartPerfume
	shopCartRefresh: () => Promise<void>
}

export default function usePerfumeShopCartCard({
	shopCartPerfume,
	shopCartRefresh,
}: Props) {
	const { loading: loadingEdit, editShopCartPerfume } =
		useEditShopCartPerfume({
			id: shopCartPerfume.id,
			onEditAction: () => {
				shopCartRefresh()
			},
		})

	const handleShopCartPerfumeEdit = useCallback(
		(shopCartPerfumeEdit: ShopCartPerfumeEdit) => {
			editShopCartPerfume(shopCartPerfumeEdit)
		},
		[editShopCartPerfume],
	)

	const increaseQuantity = useCallback(() => {
		handleShopCartPerfumeEdit({ cant: shopCartPerfume.cant + 1 })
	}, [handleShopCartPerfumeEdit, shopCartPerfume])

	const decreaseQuantity = useCallback(() => {
		handleShopCartPerfumeEdit({ cant: shopCartPerfume.cant - 1 })
	}, [])

	return { shopCartPerfume, loadingEdit, increaseQuantity, decreaseQuantity }
}

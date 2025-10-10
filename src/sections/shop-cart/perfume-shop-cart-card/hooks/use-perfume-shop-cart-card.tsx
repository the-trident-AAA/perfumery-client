"use client"
import {
	ShopCartPerfume,
	ShopCartPerfumeEdit,
} from "@/src/lib/types/shop-cart-perfumes"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
import useDeleteShopCartPerfume from "@/src/sections/shop-cart/hooks/use-delete-shop-cart-perfume"
import useEditShopCartPerfume from "@/src/sections/shop-cart/hooks/use-edit-shop-cart-perfume"
import { useCallback, useContext, useEffect } from "react"
import { toast } from "react-toastify"

interface Props {
	shopCartPerfume: ShopCartPerfume
	shopCartRefresh: () => Promise<void>
}

export default function usePerfumeShopCartCard({
	shopCartPerfume,
	shopCartRefresh,
}: Props) {
	const { fetchShopCartTotalItems } = useContext(ShopCartTotalItemsContext)
	const {
		loading: loadingEdit,
		editShopCartPerfume,
		error,
	} = useEditShopCartPerfume({
		id: shopCartPerfume.id,
		onEditAction: () => {
			fetchShopCartTotalItems()
			shopCartRefresh()
		},
	})

	useEffect(() => {
		if (error) toast.error(error)
	}, [error])

	const { loading: loadingDelete, deleteShopCartPerfume } =
		useDeleteShopCartPerfume({
			id: shopCartPerfume.id,
			onDeleteAction: () => {
				toast.success("Perfume eliminado con éxito del carrito", {
					position: "bottom-center",
				})
				shopCartRefresh()
				fetchShopCartTotalItems()
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
		if (shopCartPerfume.cant - 1 > 0)
			handleShopCartPerfumeEdit({ cant: shopCartPerfume.cant - 1 })
	}, [handleShopCartPerfumeEdit, shopCartPerfume])

	const onDeleteShopCartPerfume = useCallback(() => {
		deleteShopCartPerfume()
	}, [shopCartPerfume, shopCartRefresh, deleteShopCartPerfume])

	return {
		shopCartPerfume,
		loadingEdit,
		loadingDelete,
		increaseQuantity,
		decreaseQuantity,
		onDeleteShopCartPerfume,
	}
}

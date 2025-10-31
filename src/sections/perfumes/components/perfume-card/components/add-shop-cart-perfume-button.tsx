"use client"
import { Button } from "@/src/components/ui/button"
import { Perfume, PerfumeDetails } from "@/src/lib/types/perfumes"
import { ShopCartContext } from "@/src/sections/shop-cart/context/shop-cart-context/shop-cart-context"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
import useCreateShopCartPerfume from "@/src/sections/shop-cart/hooks/use-create-shop-cart-perfume"
import { Ban, ShoppingCart } from "lucide-react"
import React, { useCallback, useContext, useEffect } from "react"
import { toast } from "react-toastify"

interface Props {
	perfume: Perfume | PerfumeDetails
	variant?: "default" | "large"
}

export default function AddShopCartPerfumeButton({
	perfume,
	variant = "default",
}: Props) {
	const { fetchShopCartTotalItems } = useContext(ShopCartTotalItemsContext)
	const { fetchShopCart } = useContext(ShopCartContext)
	const { createShopCartPerfume, loading, error } = useCreateShopCartPerfume({
		onCreateAction: () => {
			fetchShopCartTotalItems()
			fetchShopCart()
			toast.success("Se añadido el perfume seleccionado al carrito", {
				position: "bottom-center",
			})
		},
	})

	useEffect(() => {
		if (error)
			toast.error(error, {
				position: "bottom-center",
			})
	}, [error])

	const handleAddShopCartPerfume = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.stopPropagation()

			createShopCartPerfume({
				perfumeId: perfume.id,
				cant: 1,
			})
		},
		[],
	)

	return (
		<Button
			variant={variant === "large" ? "secondary" : "default"}
			className={`${
				variant === "large" ? "text-primary flex-1" : "text-secondary"
			} transition-all duration-300 size-4 2xs:size-9  p-4`}
			disabled={loading || !perfume.available || perfume.cant === 0}
			onClick={handleAddShopCartPerfume}
		>
			{perfume.available && perfume.cant > 0 ? (
				<div className="flex justify-center items-center gap-2">
					<ShoppingCart className="size-4 2xs:size-6 sm:size-6" />
					<p className="hidden sm:flex">Añadir</p>
				</div>
			) : !perfume.available ? (
				<Ban className="size-4 2xs:size-6 sm:size-6" />
			) : (
				<Ban className="size-4 2xs:size-6 sm:size-6" />
			)}
		</Button>
	)
}

"use client"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import { Perfume, PerfumeDetails } from "@/src/lib/types/perfumes"
import { ShopCartContext } from "@/src/sections/shop-cart/context/shop-cart-context/shop-cart-context"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
import useCreateShopCartPerfume from "@/src/sections/shop-cart/hooks/use-create-shop-cart-perfume"
import { ShoppingCart } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
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
	const router = useRouter()
	const { data: session, status } = useSession()

	const handleAddShopCartPerfume = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.stopPropagation()
			if (session) {
				const shopCartId = session.user.shopCartId as string
				createShopCartPerfume({
					shopCartId,
					perfumeId: perfume.id,
					cant: 1,
				})
			} else {
				router.push(paths.sign_in.root)
			}
		},
		[session, router],
	)

	return (
		<Button
			size={variant === "large" ? "lg" : "default"}
			variant={variant === "large" ? "secondary" : "default"}
			className={`${
				variant === "large" ? "text-primary flex-1" : "text-secondary"
			} transition-all duration-300 px-6`}
			disabled={loading || !perfume.available}
			onClick={handleAddShopCartPerfume}
		>
			{perfume.available ? (
				<>
					<ShoppingCart className="size-6 mr-2" />
					Añadir
				</>
			) : (
				"Agotado"
			)}
		</Button>
	)
}

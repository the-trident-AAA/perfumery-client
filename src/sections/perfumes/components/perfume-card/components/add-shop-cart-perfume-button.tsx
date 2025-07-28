"use client"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import { Perfume } from "@/src/lib/types/perfumes"
import { ShopCartContext } from "@/src/sections/shop-cart/context/shop-cart-context/shop-cart-context"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
import useCreateShopCartPerfume from "@/src/sections/shop-cart/hooks/use-create-shop-cart-perfume"
import { ShoppingCart } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useCallback, useContext } from "react"
import { toast } from "react-toastify"

interface Props {
	perfume: Perfume
}

export default function AddShopCartPerfumeButton({ perfume }: Props) {
	const { fetchShopCartTotalItems } = useContext(ShopCartTotalItemsContext)
	const { fetchShopCart } = useContext(ShopCartContext)
	const { createShopCartPerfume, loading } = useCreateShopCartPerfume({
		onCreateAction: () => {
			fetchShopCartTotalItems()
			fetchShopCart()
			toast.success("Se añadido el perfume seleccionado al carrito", {
				position: "bottom-center",
			})
		},
	})
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
			className={`${
				perfume.available
					? `bg-primary hover:shadow-lg transform hover:scale-105`
					: "bg-primary"
			} transition-all duration-300 text-white font-medium px-6`}
			disabled={loading || !perfume.available}
			onClick={handleAddShopCartPerfume}
		>
			{perfume.available ? (
				<>
					<ShoppingCart className="h-4 w-4 mr-2" />
					Añadir
				</>
			) : (
				"Agotado"
			)}
		</Button>
	)
}

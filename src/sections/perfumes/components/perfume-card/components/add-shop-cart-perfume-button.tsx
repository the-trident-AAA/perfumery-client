"use client"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context"
import useCreateShopCartPerfume from "@/src/sections/shop-cart/hooks/use-create-shop-cart-perfume"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useCallback, useContext } from "react"
import { toast } from "react-toastify"

interface Props {
	perfumeId: string
}

export default function AddShopCartPerfumeButton({ perfumeId }: Props) {
	const { fetchShopCartTotalItems } = useContext(ShopCartTotalItemsContext)
	const { createShopCartPerfume, loading } = useCreateShopCartPerfume({
		onCreateAction: () => {
			fetchShopCartTotalItems()
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
				createShopCartPerfume({ shopCartId, perfumeId, cant: 1 })
			} else {
				router.push(paths.sign_in.root)
			}
		},
		[session, router],
	)

	return (
		<Button
			variant={"outline"}
			className="w-full py-3 text-sm sm:text-xl text-center text-pink-600 font-medium hover:bg-pink-50 transition-colors"
			disabled={loading || status === "loading"}
			onClick={handleAddShopCartPerfume}
		>
			Añadir al carrito
		</Button>
	)
}

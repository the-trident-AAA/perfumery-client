"use client"
import { Button } from "@/src/components/ui/button"
import { revalidateServerTags } from "@/src/lib/cache"
import { tagsCacheByRoutes } from "@/src/lib/routes/api-routes/api-routes"
import { paths } from "@/src/lib/routes/paths"
import { UserTotalOrdersContext } from "@/src/sections/orders/context/user-total-orders-context"
import useCreateOrder from "@/src/sections/orders/hooks/use-create-order"
import { ShopCartContext } from "@/src/sections/shop-cart/context/shop-cart-context/shop-cart-context"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useContext } from "react"
import { toast } from "react-toastify"

interface Props {
	isDisabled: boolean
}

export default function CreateOrderButton({ isDisabled = false }: Props) {
	const { data: session } = useSession()
	const router = useRouter()
	const { fetchShopCartTotalItems } = useContext(ShopCartTotalItemsContext)
	const { fetchShopCart } = useContext(ShopCartContext)
	const { fetchUserTotalOrders } = useContext(UserTotalOrdersContext)
	const { createOrder, loading } = useCreateOrder({
		onCreateAction: () => {
			toast.success("Pedido creado exitosamente")
			revalidateServerTags(tagsCacheByRoutes.orders.multipleTag)
			// update the user total orders
			fetchUserTotalOrders()
			// update the shop cart state
			fetchShopCartTotalItems()
			fetchShopCart()
		},
	})
	return (
		<Button
			onClick={() => {
				if (session) createOrder()
				else router.push(paths.sign_in.root)
			}}
			variant={"secondary"}
			className="text-primary lg:text-lg"
			disabled={loading || isDisabled}
		>
			Crear Pedido
		</Button>
	)
}

"use client"
import { Button } from "@/src/components/ui/button"
import useCreateOrder from "@/src/sections/orders/hooks/use-create-order"
import { ShopCartContext } from "@/src/sections/shop-cart/context/shop-cart-context/shop-cart-context"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
import React, { useContext } from "react"
import { toast } from "react-toastify"

interface Props {
	isDisabled: boolean
}

export default function CreateOrderButton({ isDisabled = false }: Props) {
	const { fetchShopCartTotalItems } = useContext(ShopCartTotalItemsContext)
	const { fetchShopCart } = useContext(ShopCartContext)
	const { createOrder, loading } = useCreateOrder({
		onCreateAction: () => {
			toast.success("Pedido creado exitosamente")
			// update the shop cart state
			fetchShopCartTotalItems()
			fetchShopCart()
		},
	})
	return (
		<Button
			onClick={() => {
				console.log("Se toco el click")
				createOrder()
			}}
			className="bg-primary lg:text-lg"
			disabled={loading || isDisabled}
		>
			Crear Pedido
		</Button>
	)
}

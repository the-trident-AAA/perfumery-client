import { TabsContainer } from "@/src/components/ui/tabs-panel"
import OrdersContent from "@/src/sections/orders/orders-content"
import ShopCartContent from "@/src/sections/shop-cart/shop-cart-content"
import React, { useMemo } from "react"

export default function ProfileAdditionalInformation() {
	const tabs = useMemo(
		() => [
			{
				label: "Pedidos",
				value: "orders",
				component: <OrdersContent />,
			},
			{
				label: "Carrito de Compras",
				value: "shop-cart",
				component: <ShopCartContent />,
			},
		],
		[],
	)

	return <TabsContainer tabs={tabs} />
}

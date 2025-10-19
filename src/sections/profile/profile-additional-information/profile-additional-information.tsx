import { TabsContainer } from "@/src/components/ui/tabs-panel"
import { SearchParamsPagination } from "@/src/lib/types/pagination"
import OrdersContent from "@/src/sections/orders/orders-content"
import ShopCartContent from "@/src/sections/shop-cart/shop-cart-content"
import React, { useMemo } from "react"

interface Props {
	searchParams: SearchParamsPagination
}

export default function ProfileAdditionalInformation({ searchParams }: Props) {
	const tabs = useMemo(
		() => [
			{
				label: "Pedidos",
				value: "orders",
				component: <OrdersContent searchParams={searchParams} />,
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

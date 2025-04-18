import { TabsContainer } from "@/src/components/ui/tabs-panel"
import React, { useMemo } from "react"

export default function ProfileAdditionalInformation() {
	const tabs = useMemo(
		() => [
			{
				label: "Pedidos",
				value: "orders",
				component: <div className="p-4">Pedidos</div>,
			},
			{
				label: "Carrito de Compras",
				value: "shop-cart",
				component: <div>Carrito de Compras</div>,
			},
		],
		[],
	)

	return <TabsContainer tabs={tabs} />
}

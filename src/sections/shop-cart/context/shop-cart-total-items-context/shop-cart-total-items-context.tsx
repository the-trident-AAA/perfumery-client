"use client"
import useShopCartTotalItems from "@/src/sections/shop-cart/hooks/use-shop-cart-total-items"
import React, { createContext } from "react"

interface Props {
	totalItems: number
	loading: boolean
	fetchShopCartTotalItems: () => Promise<void>
}

const defaultProps: Props = {
	totalItems: 0,
	loading: false,
	fetchShopCartTotalItems: () => {
		throw new Error("fetchShopCartTotalItems no está definido.")
	},
}

export const ShopCartTotalItemsContext = createContext<Props>(defaultProps)

export function ShopCartTotalItemsProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const { totalItems, loading, fetchShopCartTotalItems } =
		useShopCartTotalItems()

	return (
		<ShopCartTotalItemsContext.Provider
			value={{
				totalItems,
				loading,
				fetchShopCartTotalItems,
			}}
		>
			{children}
		</ShopCartTotalItemsContext.Provider>
	)
}

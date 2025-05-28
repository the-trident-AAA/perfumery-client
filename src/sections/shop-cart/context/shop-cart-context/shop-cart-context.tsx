"use client"
import { ShopCart } from "@/src/lib/types/shop-cart"
import useShopCart from "@/src/sections/shop-cart/hooks/use-shop-cart"
import React, { createContext } from "react"

interface Props {
	shopCart: ShopCart | null
	error: string | null
	loading: boolean
	fetchShopCart: () => Promise<void>
}

const defaultProps: Props = {
	shopCart: null,
	loading: false,
	error: null,
	fetchShopCart: () => {
		throw new Error("fetchShopCart no está definido.")
	},
}

export const ShopCartContext = createContext<Props>(defaultProps)

export function ShopCartProvider({
	children,
}: {
	children: React.ReactNode
	shopCartId: string | null
}) {
	const { shopCart, loading, error, fetchShopCart } = useShopCart()

	return (
		<ShopCartContext.Provider
			value={{
				shopCart,
				loading,
				error,
				fetchShopCart,
			}}
		>
			{children}
		</ShopCartContext.Provider>
	)
}

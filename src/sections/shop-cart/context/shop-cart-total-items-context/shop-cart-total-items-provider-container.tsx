"use client"
import { ShopCartTotalItemsProvider } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
import React, { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function ShopCartTotalItemsProviderContainer({
	children,
}: Props) {
	return <ShopCartTotalItemsProvider>{children}</ShopCartTotalItemsProvider>
}

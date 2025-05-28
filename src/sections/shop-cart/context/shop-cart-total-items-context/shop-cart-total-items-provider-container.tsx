"use client"
import { ShopCartTotalItemsProvider } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
import { useSession } from "next-auth/react"
import React, { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function ShopCartTotalItemsProviderContainer({
	children,
}: Props) {
	const { data: session } = useSession()
	return (
		<ShopCartTotalItemsProvider
			shopCartId={session?.user.shopCartId as string}
		>
			{children}
		</ShopCartTotalItemsProvider>
	)
}

"use client"
import { Button } from "@/src/components/ui/button"
import { isProtectedRoute, paths } from "@/src/lib/routes/paths"
import { ShopCartContext } from "@/src/sections/shop-cart/context/shop-cart-context/shop-cart-context"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
import useSignOut from "@/src/sections/sign-in/form/hooks/use-sign-out"
import { usePathname, useRouter } from "next/navigation"
import React, { useCallback, useContext } from "react"

export default function SignOutButton() {
	const router = useRouter()
	const currentPath = usePathname()
	const { fetchShopCartTotalItems } = useContext(ShopCartTotalItemsContext)
	const { fetchShopCart } = useContext(ShopCartContext)
	const { signOut, loading } = useSignOut({
		onSignOutAction: () => {
			fetchShopCartTotalItems()
			fetchShopCart()
			if (isProtectedRoute(currentPath)) router.push(paths.home.root)
		},
	})

	const handleSignOut = useCallback(() => {
		signOut()
	}, [signOut])

	return (
		<Button
			variant={"secondary"}
			className="w-full text-primary"
			disabled={loading}
			onClick={handleSignOut}
		>
			Cerrar Sesión
		</Button>
	)
}

"use client"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context"
import { ShoppingCartIcon } from "lucide-react"
import React, { useContext } from "react"

const LittleCarButton = React.forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
	const { totalItems } = useContext(ShopCartTotalItemsContext)
	return (
		<Button
			variant="default"
			size="icon"
			className="h-12 w-12 relative hover:bg-gray-700"
			ref={ref}
			{...props}
		>
			<ShoppingCartIcon className="size-10 " />
			{totalItems > 0 && (
				<Badge
					className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs"
					variant="destructive"
				>
					{totalItems}
				</Badge>
			)}
		</Button>
	)
})

LittleCarButton.displayName = "LittleCarButton"

export default LittleCarButton

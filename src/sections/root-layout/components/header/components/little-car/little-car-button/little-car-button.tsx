"use client"
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
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
			className="relative h-10 w-10 rounded-full hover:bg-accent/50 transition-colors duration-200"
			ref={ref}
			{...props}
		>
			<Avatar className="h-10 w-10 shadow-sm">
				<AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold text-sm">
					<ShoppingCartIcon className="size-5" />
				</AvatarFallback>
			</Avatar>

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

"use client"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import { OrdersNotSeenByUserContext } from "@/src/sections/orders/context/orders-not-seen-by-user-context"
import { ShoppingBag } from "lucide-react"
import React, { useContext } from "react"

export default function OrdersModalButton() {
	const { totalOrders } = useContext(OrdersNotSeenByUserContext)

	return (
		<NavigationComponent href={paths.orders.root}>
			<Button
				variant="default"
				size="icon"
				className="relative h-10 w-10 rounded-full hover:bg-accent/50 transition-colors duration-200"
			>
				<Avatar className="h-10 w-10 shadow-sm">
					<AvatarFallback className="bg-secondary text-primary font-semibold text-sm">
						<ShoppingBag className="size-5" />
					</AvatarFallback>
				</Avatar>
				{totalOrders > 0 && (
					<Badge
						className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs"
						variant="destructive"
					>
						{totalOrders}
					</Badge>
				)}
			</Button>
		</NavigationComponent>
	)
}

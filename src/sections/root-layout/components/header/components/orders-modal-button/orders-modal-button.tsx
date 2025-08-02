"use client"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { UserTotalOrdersContext } from "@/src/sections/orders/context/user-total-orders-context"
import { ShoppingBag } from "lucide-react"
import React, { useContext } from "react"

export default function OrdersModalButton() {
	const { handleOpenModal } = useContext(ModalContext)
	const { totalOrders } = useContext(UserTotalOrdersContext)

	return (
		<Button
			variant="default"
			size="icon"
			className="relative h-10 w-10 rounded-full hover:bg-accent/50 transition-colors duration-200"
			onClick={() => {
				handleOpenModal({ name: modalTypes.ordersModal.name })
			}}
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
	)
}

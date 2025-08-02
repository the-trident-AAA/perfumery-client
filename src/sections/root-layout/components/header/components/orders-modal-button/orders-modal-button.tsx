"use client"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar"
import { Button } from "@/src/components/ui/button"
import { ShoppingBag } from "lucide-react"
import React, { useContext } from "react"

export default function OrdersModalButton() {
	const { handleOpenModal } = useContext(ModalContext)
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
		</Button>
	)
}

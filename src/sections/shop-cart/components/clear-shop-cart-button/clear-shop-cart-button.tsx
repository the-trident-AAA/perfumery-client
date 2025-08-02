"use client"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { Button } from "@/src/components/ui/button"
import { Trash2Icon } from "lucide-react"
import React, { useCallback, useContext } from "react"

interface Props {
	shopCartId: string
	isDisabled?: boolean
	shopCartRefresh: () => Promise<void>
}

export default function ClearShopCartButton({
	shopCartId,
	isDisabled = false,
	shopCartRefresh,
}: Props) {
	const { handleOpenModal } = useContext(ModalContext)
	const onClearShopCart = useCallback(() => {
		handleOpenModal({
			name: modalTypes.clearShopCartModal.name,
			entity: shopCartId,
			actionExecute: shopCartRefresh,
		})
	}, [shopCartId])
	return (
		<Button
			className="flex gap-2 bg-red-600 hover:bg-red-600/80"
			onClick={onClearShopCart}
			disabled={isDisabled}
		>
			<Trash2Icon className="size-5 lg:size-6" />
		</Button>
	)
}

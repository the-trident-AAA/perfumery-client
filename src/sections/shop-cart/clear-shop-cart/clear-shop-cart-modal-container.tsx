"use client"

import ConfirmationPanel from "@/src/components/confirmation-panel/confirmation-panel"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { ShopCartTotalItemsContext } from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-context"
import useClearShopCart from "@/src/sections/shop-cart/hooks/use-clear-shop-cart"
import { useCallback, useContext } from "react"
import { toast } from "react-toastify"

export default function ClearShopCartModalContainer() {
	const { getInfoModal, handleCloseModal } = useContext(ModalContext)
	const { fetchShopCartTotalItems } = useContext(ShopCartTotalItemsContext)
	const infoModal = getInfoModal(modalTypes.clearShopCartModal.name)
	const id = infoModal && infoModal.entity ? infoModal.entity : null
	const actionExecute = infoModal && infoModal.actionExecute
	const { clearShopCart, loading } = useClearShopCart({
		shopCartId: id,
		onClearAction: () => {
			toast.success("Carrito de Compras limpiado con éxito", {
				position: "bottom-center",
			})
			if (actionExecute) actionExecute()
			fetchShopCartTotalItems()
			onCloseModal()
		},
	})
	const onCloseModal = useCallback(() => {
		handleCloseModal(modalTypes.clearShopCartModal.name)
	}, [handleCloseModal])
	return (
		<ConfirmationPanel
			title={
				modalTypes.clearShopCartModal.title || "Elminación de la Marca"
			}
			message={modalTypes.clearShopCartModal.message}
			warningMessage={modalTypes.clearShopCartModal.warningMessage}
			onConfirm={clearShopCart}
			onCancel={onCloseModal}
			isLoading={loading}
			isDestructive
		/>
	)
}

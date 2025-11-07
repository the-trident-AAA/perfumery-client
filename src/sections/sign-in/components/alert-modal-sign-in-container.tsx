"use client"

import { AlertContent } from "@/src/components/alert-content/alert-content"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import React, { useContext } from "react"

export default function AlertModalSignInContainer() {
	const { handleCloseModal } = useContext(ModalContext)
	return (
		<AlertContent
			title="Es necesaria autenticación para crear un Pedido"
			description="Es necesario haber iniciado sesión para poder crear un pedido y hacer uso de ese beneficio."
			onClose={() => {
				handleCloseModal(modalTypes.alertCreateOrderModal.name)
			}}
			type="error"
		/>
	)
}

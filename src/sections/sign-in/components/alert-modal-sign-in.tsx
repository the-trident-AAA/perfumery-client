"use client"
import { AlertModal } from "@/src/components/alert-modal/alert-modal"
import React, { useState } from "react"

export default function AlertModalSignIn() {
	const [openModal, setOpenModal] = useState(true)
	return (
		<AlertModal
			title="Es necesara autenticación para crear un Pedido"
			description="Es necesario haber iniciado sesión para poder crear un pedido y hacer uso de ese beneficio."
			isOpen={openModal}
			onClose={() => {
				setOpenModal(false)
			}}
			type="error"
		/>
	)
}

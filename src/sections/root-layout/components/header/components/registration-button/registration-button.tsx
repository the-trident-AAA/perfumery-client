"use client"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { Button } from "@/src/components/ui/button"
import React, { useContext } from "react"

export default function RegistrationButton() {
	const { handleOpenModal } = useContext(ModalContext)
	return (
		<Button
			onClick={() => {
				handleOpenModal({ name: modalTypes.registrationModal.name })
			}}
		>
			Registrarse
		</Button>
	)
}

"use client"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { Button } from "@/src/components/ui/button"
import React, { useContext } from "react"

export default function LoginButton() {
	const { handleOpenModal } = useContext(ModalContext)
	return (
		<Button
			className="text-xs sm:text-base"
			onClick={() => {
				handleOpenModal({ name: modalTypes.loginModal.name })
			}}
		>
			Iniciar Sesión
		</Button>
	)
}

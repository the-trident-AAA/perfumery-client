"use client"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { Button } from "@/src/components/ui/button"
import React, { useContext } from "react"

export default function EditProfileButton() {
	const { handleOpenModal } = useContext(ModalContext)
	return (
		<Button
			className="w-full py-3 px-4
transition-colors rounded-md text-lg font-medium"
			onClick={() => {
				handleOpenModal({ name: modalTypes.editProfileModal.name })
			}}
		>
			Editar Perfil
		</Button>
	)
}

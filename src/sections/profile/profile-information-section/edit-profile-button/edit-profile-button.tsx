"use client"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { Button } from "@/src/components/ui/button"
import React, { useContext } from "react"

export default function EditProfileButton() {
	const { handleOpenModal } = useContext(ModalContext)
	return (
		<Button
			variant={"secondary"}
			className="w-full py-3 px-4 text-primary"
			onClick={() => {
				handleOpenModal({ name: modalTypes.editProfileModal.name })
			}}
		>
			Editar Perfil
		</Button>
	)
}

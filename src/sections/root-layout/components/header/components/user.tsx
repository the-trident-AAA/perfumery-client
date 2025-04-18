"use client"

import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { Button } from "@/src/components/ui/button"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/components/ui/popover"
import LoginButton from "@/src/sections/root-layout/components/header/components/login-button/login-button"
import RegistrationButton from "@/src/sections/root-layout/components/header/components/registration-button/registration-button"
import { UserCircleIcon } from "lucide-react"
import React, { useContext } from "react"

const User = () => {
	const { handleOpenModal } = useContext(ModalContext)
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					className="flex items-center justify-center rounded-full bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					onClick={() => console.log("User button clicked")}
					aria-label="User menu"
				>
					<UserCircleIcon className="size-8 sm:size-12 text-white" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-full">
				<div className="flex flex-col gap-1">
					<LoginButton />
					<RegistrationButton />
					<Button
						onClick={() => {
							handleOpenModal({
								name: modalTypes.editProfileModal.name,
							})
						}}
					>
						Editar Perfil del Usuario
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	)
}

export default User

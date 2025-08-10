"use client"

import { SetStateAction, Dispatch } from "react"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/src/components/ui/form"
import {
	ChangePassword,
	changePasswordSchema,
} from "./schemas/change-password-schema"
import ChangePasswordModeForm from "./change-password-mode-form"

import { Button } from "@/src/components/ui/button"
import useChangePasswordUser from "@/src/sections/users/hooks/use-change-password-user"

interface Porps {
	userId: string
	setChangePasswordMode: Dispatch<SetStateAction<"form" | "reset" | null>>
}

export default function ChangePasswordModeFormContainer({
	userId,
	setChangePasswordMode,
}: Porps) {
	const {
		loading: submitLoading,
		changePasswordUser,
		error,
	} = useChangePasswordUser({
		onChangePassowrdAction: () => {
			toast.success("Contraseña actualizada con éxito")
			setChangePasswordMode(null)
		},
	})
	const form = useForm<ChangePassword>({
		resolver: zodResolver(changePasswordSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
	})

	function onSubmit(changePassword: ChangePassword) {
		changePasswordUser(changePassword)
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full flex flex-1 flex-col justify-between gap-4 h-full"
			>
				<ChangePasswordModeForm
					setChangePasswordMode={setChangePasswordMode}
					error={error}
				/>
				<Button
					type="submit"
					disabled={submitLoading}
					className="w-full"
				>
					Actualizar Contraseña
				</Button>
			</form>
		</Form>
	)
}

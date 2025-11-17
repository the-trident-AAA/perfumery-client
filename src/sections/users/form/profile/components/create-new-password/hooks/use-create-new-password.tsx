"use client"
import { useCallback, useState } from "react"
import { createNewPassword as createNewPasswordService } from "@/src/lib/services/auth"
import { convertCreateNewPasswordDTO } from "@/src/lib/types/auth"
import { CreateNewPassword } from "@/src/sections/users/form/profile/components/create-new-password/form/schemas/create-new-password-schema"

interface Props {
	onNewPasswordAction: () => void
}

export default function useCreateNewPassword({ onNewPasswordAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const createNewPassword = useCallback(
		async (createNewPassword: CreateNewPassword) => {
			try {
				setLoading(true)
				setError(null)

				const res = await createNewPasswordService(
					convertCreateNewPasswordDTO(createNewPassword),
				)
				if (!res.response || res.error)
					setError(
						res.error?.reason ||
							"Error en la creación de la contraseña del usuario",
					)
				else {
					onNewPasswordAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onNewPasswordAction],
	)
	return {
		loading,
		error,
		createNewPassword,
	}
}

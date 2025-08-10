"use client"
import { useCallback, useState } from "react"
import { ChangePassword } from "../form/profile/components/change-password-mode-form/schemas/change-password-schema"
import { changePasswordUser as changePasswordUserService } from "@/src/lib/services/auth"
import { convertChangePasswordDTO } from "@/src/lib/types/auth"

interface Props {
	onChangePassowrdAction: () => void
}

export default function useChangePasswordUser({
	onChangePassowrdAction,
}: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const changePasswordUser = useCallback(
		async (changePassowrd: ChangePassword) => {
			try {
				setLoading(true)
				setError(null)

				const res = await changePasswordUserService(
					convertChangePasswordDTO(changePassowrd),
				)
				if (!res.response || res.error)
					setError(
						res.error?.reason ||
							"Error en el cambio de contraseña del usuario",
					)
				else {
					onChangePassowrdAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onChangePassowrdAction],
	)
	return {
		loading,
		error,
		changePasswordUser,
	}
}

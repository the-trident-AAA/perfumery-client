"use client"
import { resetPassword as resetPasswordService } from "@/src/lib/services/auth"
import { convertForgotPasswordDTO } from "@/src/lib/types/auth"
import { ForgotPassword } from "@/src/sections/forgot-password/form/schemas/forgot-password-schema"
import { useCallback, useState } from "react"

interface Props {
	onResetPasswordAction: () => void
}

export default function useResetPassword({ onResetPasswordAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const resetPassword = useCallback(
		async (id: string, otp: string, forgotPassword: ForgotPassword) => {
			try {
				setLoading(true)
				setError(null)

				const res = await resetPasswordService(
					convertForgotPasswordDTO(forgotPassword, id, otp),
				)
				if (!res.response || res.error)
					setError(
						res.error?.reason ||
							"Error en el cambio de contraseña del usuario",
					)
				else {
					onResetPasswordAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onResetPasswordAction],
	)
	return {
		loading,
		error,
		resetPassword,
	}
}

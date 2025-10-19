"use client"
import { verifyEmail as verifyEmailService } from "@/src/lib/services/auth"
import { convertVerifyEmailDTO } from "@/src/lib/types/auth"
import { ConfirmEmailSchema } from "@/src/sections/confirm-email/form/schemas/confirm-email-schema"
import { useCallback, useState } from "react"

interface Props {
	onVerifyEmailAction: (userId: string) => void
}

export default function useVerifyEmail({ onVerifyEmailAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const verifyEmail = useCallback(
		async (confirmEmail: ConfirmEmailSchema) => {
			try {
				setLoading(true)
				setError(null)

				const res = await verifyEmailService(
					convertVerifyEmailDTO(confirmEmail),
				)
				if (!res.response || res.error)
					setError(
						res.error?.reason ||
							"Error en la verificación del email",
					)
				else {
					onVerifyEmailAction(res.response.userId)
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onVerifyEmailAction],
	)
	return {
		loading,
		error,
		verifyEmail,
	}
}

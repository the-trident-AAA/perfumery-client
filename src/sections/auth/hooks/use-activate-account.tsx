"use client"
import { activateAccount as activateAccountService } from "@/src/lib/services/auth"
import { Otp } from "@/src/sections/verification-code/form/schemas/verification-code-schema"
import { useCallback, useState } from "react"

interface Props {
	onActivateAccountAction: () => Promise<void>
}

export default function useActivateAccount({ onActivateAccountAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const activateAccount = useCallback(
		async (id: string, otp: Otp) => {
			try {
				setLoading(true)
				setError(null)

				const res = await activateAccountService(id, otp.otp)
				if (!res.response || res.error)
					setError(
						res.error?.reason ||
							"Error en la activación de la cuenta del usuario",
					)
				else {
					onActivateAccountAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onActivateAccountAction],
	)
	return {
		loading,
		error,
		activateAccount,
	}
}

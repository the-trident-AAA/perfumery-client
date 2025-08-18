"use client"
import { register as registerService } from "@/src/lib/services/auth"
import { convertRegisterDTO } from "@/src/lib/types/auth"
import { Register } from "@/src/sections/registration/form/schemas/register-schema"
import { useCallback, useState } from "react"

interface Props {
	onRegisterAction: () => void
}

export default function useRegister({ onRegisterAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const register = useCallback(
		async (registerSchema: Register) => {
			try {
				setLoading(true)
				setError(null)

				const res = await registerService(
					convertRegisterDTO(registerSchema),
				)
				if (!res.response || res.error)
					setError(
						res.error?.reason || "Error en el registro de usuario",
					)
				else {
					onRegisterAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onRegisterAction],
	)
	return {
		loading,
		error,
		register,
	}
}

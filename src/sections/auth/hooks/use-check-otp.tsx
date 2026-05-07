"use client"
import { checkOtp as checkOtpService } from "@/src/lib/services/auth"
import { Otp } from "@/src/sections/verification-code/form/schemas/verification-code-schema"
import { useCallback, useState } from "react"

interface Props {
	onCheckOtpAction: (otp: string) => void
}

export default function useCheckOtp({ onCheckOtpAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const checkOtp = useCallback(
		async (id: string, otp: Otp) => {
			try {
				setLoading(true)
				setError(null)

				console.log(
					"Procesando OTP para forgot password:",
					id,
					"con código:",
					otp.otp,
				)

				// Para forgot password, siempre redirigir al ForgotPasswordContainer
				// La verificación real se hará en el servidor
				console.log("Redirigiendo a ForgotPasswordContainer")
				onCheckOtpAction(otp.otp)
			} catch (error) {
				console.log(error)
				setError("Error al verificar el código. Intenta de nuevo.")
			} finally {
				setLoading(false)
			}
		},
		[onCheckOtpAction],
	)
	return {
		loading,
		error,
		checkOtp,
	}
}

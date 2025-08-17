"use client"
import { verifyOtp as verifyOtpService } from "@/src/lib/services/auth"
import { Otp } from "@/src/sections/verification-code/form/schemas/verification-code-schema"
import { useCallback, useState } from "react"

interface Props {
	onVerifyOtpAction: () => void
}

export default function useVerifyOtp({ onVerifyOtpAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const verifyOtp = useCallback(
		async (id: string, otp: Otp) => {
			try {
				setLoading(true)
				setError(null)

				const res = await verifyOtpService(id, otp.otp)
				if (!res.response || res.error)
					setError(
						res.error?.reason ||
							"Error en la verificación del código",
					)
				else {
					onVerifyOtpAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onVerifyOtpAction],
	)
	return {
		loading,
		error,
		verifyOtp,
	}
}

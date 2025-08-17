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

				const res = await checkOtpService(id, otp.otp)
				if (!res.response || res.error)
					setError(
						res.error?.reason || "Error en el chequeo del código",
					)
				else {
					onCheckOtpAction(otp.otp)
				}
			} catch (error) {
				console.log(error)
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

"use client"
import { sendOtp as sendOtpService } from "@/src/lib/services/auth"
import { useCallback, useState } from "react"

interface Props {
	onSendAction?: (userId: string) => void
}

export default function useSendOtp({ onSendAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const sendOtp = useCallback(
		async (id: string) => {
			try {
				setLoading(true)
				setError(null)

				const res = await sendOtpService(id)
				if (!res.response || res.error)
					setError(
						res.error?.reason ||
							"Error en el envío del código de verificación",
					)
				else {
					if (onSendAction) onSendAction(id)
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onSendAction],
	)
	return {
		loading,
		error,
		sendOtp,
	}
}

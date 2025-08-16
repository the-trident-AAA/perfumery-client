"use client"
import { sendOtp as sendOtpService } from "@/src/lib/services/auth"
import { useCallback, useState } from "react"

interface Props {
	id: string
	onSendAction: () => void
}

export default function useSendOtp({ id, onSendAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const sendOtp = useCallback(async () => {
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
				onSendAction()
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}, [onSendAction, id])
	return {
		loading,
		error,
		sendOtp,
	}
}

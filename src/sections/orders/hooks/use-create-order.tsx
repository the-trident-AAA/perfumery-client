"use client"
import { useCallback, useState } from "react"
import { createOrder as createOrderService } from "@/src/lib/services/orders"
import { useWhatsappMessage } from "@/src/lib/hooks/messages/use-whatsapp-message"
import { formatOrderMessage } from "@/src/sections/orders/lib/orders-messages"

interface Props {
	onCreateAction: () => void
}

export default function useCreateOrder({ onCreateAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const sendWhatsappMessage = useWhatsappMessage(
		String(process.env.NEXT_PUBLIC_WHATS_APP_PHONE_NUMBER),
	)
	const createOrder = useCallback(async () => {
		try {
			setLoading(true)
			setError(null)
			const res = await createOrderService()
			if (!res.response || res.error)
				setError(res.error?.reason || "Error en la creación del pedido")
			else {
				sendWhatsappMessage(formatOrderMessage(res.response))
				onCreateAction()
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}, [onCreateAction])
	return {
		loading,
		error,
		createOrder,
	}
}

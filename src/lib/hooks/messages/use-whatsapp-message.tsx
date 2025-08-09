"use client"

import { useCallback } from "react"

export function useWhatsappMessage(phoneNumber: string) {
	return useCallback(
		(message: string) => {
			const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
			window.open(url, "_blank") // Abre en una nueva pestaña
		},
		[phoneNumber],
	)
}

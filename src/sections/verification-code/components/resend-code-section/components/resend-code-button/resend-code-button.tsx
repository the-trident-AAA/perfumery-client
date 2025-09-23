"use client"
import { Button } from "@/src/components/ui/button"
import useSendOtp from "@/src/sections/auth/hooks/use-send-otp"
import React from "react"
import { toast } from "react-toastify"

interface Props {
	userId: string
}

export default function ResendCodeButton({ userId }: Props) {
	const { sendOtp, loading } = useSendOtp({
		onSendAction: () => {
			toast.success("Código enviado con éxito")
		},
	})
	return (
		<Button
			variant="secondary"
			className="text-primary"
			disabled={loading}
			onClick={() => {
				sendOtp(userId)
			}}
		>
			Reenviar Código
		</Button>
	)
}

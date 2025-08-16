import { sendOtp } from "@/src/lib/services/auth"
import VerificationCodeContainer from "@/src/sections/verification-code/verification-code-container"
import React from "react"

type Props = {
	params: Promise<{ id: string; objective: "activate" | "change-password" }>
}

export default async function VerificationCodePage({ params }: Props) {
	const { id: userId, objective } = await params
	// send the code
	const res = await sendOtp(userId)

	if (!res.response || res.error)
		throw new Error("Error en el envío del código de verificación")

	return (
		<>
			<VerificationCodeContainer userId={userId} objective={objective} />
		</>
	)
}

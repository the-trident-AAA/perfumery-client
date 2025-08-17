import { checkOtp } from "@/src/lib/services/auth"
import ForgotPasswordContainer from "@/src/sections/forgot-password/forgot-password-container"
import React from "react"

type Props = {
	params: Promise<{ id: string; otp: string }>
}

export default async function ForgotPasswordPage({ params }: Props) {
	const { id, otp } = await params

	// check the otp
	const res = await checkOtp(id, otp)

	if (!res.response || res.error)
		return <div>No dispone del permiso para accerder a esta página</div>

	return (
		<div>
			<ForgotPasswordContainer userId={id} otp={otp} />
		</div>
	)
}

import ForgotPasswordContainer from "@/src/sections/forgot-password/forgot-password-container"
import React from "react"

type Props = {
	params: Promise<{ id: string; otp: string }>
}

export default async function ForgotPasswordPage({ params }: Props) {
	const { id, otp } = await params
	return (
		<div>
			<ForgotPasswordContainer userId={id} otp={otp} />
		</div>
	)
}

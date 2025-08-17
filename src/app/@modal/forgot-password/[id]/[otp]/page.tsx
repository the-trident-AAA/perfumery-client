import React from "react"

type Props = {
	params: Promise<{ id: string; otp: string }>
}

export default async function ForgotPasswordPage({ params }: Props) {
	const { id, otp } = await params
	return (
		<div>
			ChangePasswordPage {id} con otp: {otp}
		</div>
	)
}

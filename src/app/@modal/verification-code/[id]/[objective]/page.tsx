import VerificationCodeContainer from "@/src/sections/verification-code/verification-code-container"
import React from "react"

type Props = {
	params: Promise<{ id: string; objective: "activate" | "change-password" }>
}

export default async function VerificationCodePage({ params }: Props) {
	const { id: userId, objective } = await params

	return (
		<>
			<VerificationCodeContainer userId={userId} objective={objective} />
		</>
	)
}

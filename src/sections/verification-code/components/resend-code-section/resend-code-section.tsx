import ResendCodeButton from "@/src/sections/verification-code/components/resend-code-section/components/resend-code-button/resend-code-button"
import React from "react"

interface Props {
	userId: string
}

export default function ResendCodeSection({ userId }: Props) {
	return (
		<div className="text-center space-y-3">
			<p className="text-sm text-secondary font-semibold">
				¿No recibiste el código?
			</p>
			<ResendCodeButton userId={userId} />
		</div>
	)
}

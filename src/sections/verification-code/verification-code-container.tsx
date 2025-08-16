import { Button } from "@/src/components/ui/button"
import ResendCodeSection from "@/src/sections/verification-code/components/resend-code-section/resend-code-section"
import VerfificationCodeFormContainer from "@/src/sections/verification-code/form/verification-code-form-container"
import { Mail } from "lucide-react"
import React from "react"

interface Props {
	userId: string
	objective: string
}

export default function VerificationCodeContainer({
	userId,
	objective,
}: Props) {
	return (
		<div className="flex flex-col max-w-sm gap-6 justify-center items-center">
			<div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
				<Mail className="w-8 h-8 text-primary" />
			</div>
			<div className="space-y-2">
				<p className="text-2xl font-bold">Verifica tu email</p>
				<p className="text-secondary font-semibold">
					Hemos enviado un código de 6 dígitos a tu dirección de
					correo electrónico
				</p>
			</div>
			<VerfificationCodeFormContainer
				userId={userId}
				objective={objective}
			/>
			{/* Resend Section */}
			<ResendCodeSection userId={userId} />
		</div>
	)
}

import ForgotPasswordFormContainer from "@/src/sections/forgot-password/form/forgot-password-form-container"
import { Lock } from "lucide-react"
import React from "react"

interface Props {
	userId: string
	otp: string
}

export default function ForgotPasswordContainer({ userId, otp }: Props) {
	return (
		<div className="flex flex-col max-w-sm gap-6 justify-center items-center">
			<div className="mx-auto w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center">
				<Lock className="w-8 h-8 text-primary" />
			</div>
			<div className="space-y-2">
				<p className="text-2xl text-secondary font-bold">
					Nueva contraseña
				</p>
				<p className="text-secondary font-semibold">
					Ingresa tu nueva contraseña
				</p>
			</div>
			<ForgotPasswordFormContainer userId={userId} otp={otp} />

			{/* Password Requirements */}
			<div className="text-xs space-y-1">
				<p className="text-secondary font-semibold">
					La contraseña debe contener:
				</p>
				<ul className="list-disc list-inside space-y-1 ml-2">
					<li className={"text-secondary font-semibold"}>
						Al menos 8 caracteres
					</li>
					<li className={"text-secondary font-semibold"}>
						Una mayúscula, una minúscula y un número
					</li>
				</ul>
			</div>
		</div>
	)
}

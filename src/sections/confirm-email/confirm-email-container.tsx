import ConfirmEmailFormContainer from "@/src/sections/confirm-email/form/confirm-email-form-container"
import { Mail } from "lucide-react"
import React from "react"

export default function ConfirmEmailContainer() {
	return (
		<div className="sm:max-w-md">
			<div className="text-center space-y-4">
				<div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
					<Mail className="w-8 h-8 text-primary" />
				</div>

				<div className="space-y-2">
					<p className="text-2xl font-semibold">
						Confirmar identidad
					</p>
					<p className="text-muted-foreground">
						Ingresa el correo electrónico asociado a tu cuenta para
						verificar tu identidad
					</p>
				</div>
			</div>

			<ConfirmEmailFormContainer />
		</div>
	)
}

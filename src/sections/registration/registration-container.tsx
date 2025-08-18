import RegistrationFormContainer from "@/src/sections/registration/form/registration-form-container"
import { UserPlus } from "lucide-react"
import React from "react"

export default function RegistrationContainer() {
	return (
		<div className="flex flex-col max-w-lg gap-6 justify-center items-center">
			<div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
				<UserPlus className="w-8 h-8 text-primary" />
			</div>
			<div className="space-y-2">
				<p className="text-2xl text-secondary font-bold">
					Crear cuenta
				</p>
				<p className="font-semibold text-secondary">
					Completa los siguientes campos para crear tu cuenta
				</p>
			</div>

			<RegistrationFormContainer />
		</div>
	)
}

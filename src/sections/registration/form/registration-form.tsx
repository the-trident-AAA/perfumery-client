import { RHFPasswordField } from "@/src/components/form/rhf-components/rhf-password-field/rhf-password-field"
import { RHFTextField } from "@/src/components/form/rhf-components/rhf-text-field/rhf-text-field"
import React from "react"

export default function RegistrationForm() {
	return (
		<div className="flex flex-col gap-4 p-4 bg-primary rounded-2xl">
			<RHFTextField name="username" label="Nombre de usuario" />
			<RHFTextField
				name="email"
				label="Dirección de correo electrónico"
				placeholder="ej: example@example.com"
			/>
			<RHFPasswordField
				name="password"
				label="Nueva Contraseña"
				fullWidth
			/>
			<RHFPasswordField
				name="confirmPassword"
				label="Confirmar Contraseña"
				fullWidth
			/>
		</div>
	)
}

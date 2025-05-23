import { RHFPasswordField } from "@/src/components/form/rhf-components/rhf-password-field/rhf-password-field"
import { RHFTextField } from "@/src/components/form/rhf-components/rhf-text-field/rhf-text-field"
import React from "react"

export default function SignInForm() {
	return (
		<div className="flex flex-col gap-4">
			<RHFTextField
				label="Email"
				name="firstCredential"
				placeholder="ej: ejemplo@gmail.com"
				fullWidth
			/>
			<RHFPasswordField
				label="Contraseña"
				name="password"
				placeholder="Introduzca la contraseña"
				fullWidth
			/>
		</div>
	)
}

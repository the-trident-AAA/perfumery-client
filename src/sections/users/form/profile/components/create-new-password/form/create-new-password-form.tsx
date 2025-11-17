import { RHFPasswordField } from "@/src/components/form/rhf-components/rhf-password-field/rhf-password-field"
import React from "react"

export default function CreateNewPasswordForm() {
	return (
		<div>
			<RHFPasswordField
				name="newPassword"
				label="Nueva Contraseña"
				placeholder="Ingrese la nueva contraseña"
				fullWidth
			/>
		</div>
	)
}

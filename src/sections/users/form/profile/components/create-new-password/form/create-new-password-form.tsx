import { RHFPasswordField } from "@/src/components/form/rhf-components/rhf-password-field/rhf-password-field"
import React from "react"

export default function CreateNewPasswordForm() {
	return (
		<div className="flex flex-col gap-3">
			<RHFPasswordField
				name="newPassword"
				label="Nueva Contraseña"
				placeholder="Ingrese la nueva contraseña"
				fullWidth
			/>
			<RHFPasswordField
				name="confirmPassword"
				label="Confirmar Contraseña"
				placeholder="Confirme la contraseña"
				fullWidth
			/>
		</div>
	)
}

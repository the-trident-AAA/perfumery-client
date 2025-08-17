"use client"
import { RHFPasswordField } from "@/src/components/form/rhf-components/rhf-password-field/rhf-password-field"
import React from "react"

export default function ForgotPasswordForm() {
	return (
		<div className="flex flex-col gap-4 p-4 bg-primary rounded-2xl">
			<RHFPasswordField
				name="newPassword"
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

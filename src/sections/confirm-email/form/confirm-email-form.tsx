import { RHFTextField } from "@/src/components/form/rhf-components/rhf-text-field/rhf-text-field"
import React from "react"

export default function ConfirmEmailForm() {
	return (
		<div className="w-full rounded-2xl bg-primary p-4">
			<RHFTextField
				name="email"
				label="Email"
				placeholder="Introduzca el email a verificar..."
			/>
		</div>
	)
}

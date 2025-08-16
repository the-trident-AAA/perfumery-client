import { RHFInputOtpField } from "@/src/components/form/rhf-components/rhf-input-otp-field/rhf-input-otp-field"
import React from "react"

export default function VerificationCodeForm() {
	return (
		<div className="w-full rounded-2xl bg-primary p-4">
			<RHFInputOtpField
				name="otp"
				label="Verificación de 6 dígitos"
				description="Introduzca el código de verificación"
			/>
		</div>
	)
}

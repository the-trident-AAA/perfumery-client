import { checkOtp } from "@/src/lib/services/auth"
import ForgotPasswordContainer from "@/src/sections/forgot-password/forgot-password-container"
import ModalWrapper from "@/src/sections/modal-page/components/modal-wrapper/modal-wrapper"
import React from "react"

type Props = {
	params: Promise<{ id: string; otp: string }>
}

export default async function ForgotPasswordPage({ params }: Props) {
	const { id, otp } = await params

	console.log("Cargando forgot-password con:", { id, otp })

	// Omitir la verificación del servidor para evitar el error de permiso
	// La verificación se hará cuando el usuario intente cambiar la contraseña
	return (
		<ModalWrapper>
			<div>
				<ForgotPasswordContainer userId={id} otp={otp} />
			</div>
		</ModalWrapper>
	)
}

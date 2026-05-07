import { checkOtp } from "@/src/lib/services/auth"
import ForgotPasswordContainer from "@/src/sections/forgot-password/forgot-password-container"
import React from "react"

type Props = {
	params: Promise<{ id: string; otp: string }>
}

export default async function ForgotPasswordPage({ params }: Props) {
	const { id, otp } = await params

	console.log("Cargando página de forgot-password con:", { id, otp })

	// check the otp
	const res = await checkOtp(id, otp)
	console.log("Respuesta de checkOtp:", res)

	if (!res.response || res.error) {
		console.log("Error en checkOtp:", res.error)
		return (
			<div className="min-h-screen bg-background flex items-center justify-center p-4">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-red-600 mb-4">
						Error de Acceso
					</h1>
					<p className="text-gray-600 mb-4">
						No tienes permiso para acceder a esta página
					</p>
					<p className="text-gray-500 text-sm mb-4">
						Error: {res.error?.reason || "Código inválido"}
					</p>
					<a
						href="/sign-in"
						className="text-blue-600 hover:underline"
					>
						Volver al inicio de sesión
					</a>
				</div>
			</div>
		)
	}

	console.log("OTP verificado, mostrando ForgotPasswordContainer")
	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="w-full max-w-sm">
				<ForgotPasswordContainer userId={id} otp={otp} />
			</div>
		</div>
	)
}

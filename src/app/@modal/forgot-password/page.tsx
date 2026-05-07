import React from "react"

export default function ForgotPasswordPage() {
	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="text-center">
				<h1 className="text-2xl font-bold text-red-600 mb-4">
					Página no encontrada
				</h1>
				<p className="text-gray-600 mb-4">Esta página no existe</p>
				<a href="/sign-in" className="text-blue-600 hover:underline">
					Volver al inicio de sesión
				</a>
			</div>
		</div>
	)
}

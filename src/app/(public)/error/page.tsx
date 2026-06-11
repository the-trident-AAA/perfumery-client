"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

const errorMessages: Record<string, string> = {
	Configuration: "Hay un problema con la configuración del servidor.",
	AccessDenied: "No tienes permiso para acceder a esta página.",
	Verification: "El enlace de verificación ha expirado o ya fue usado.",
	OAuthSignin: "Error al iniciar sesión con el proveedor.",
	OAuthCallback: "Error al procesar la respuesta del proveedor.",
	OAuthCreateAccount: "No se pudo crear la cuenta con el proveedor.",
	EmailCreateAccount: "No se pudo crear la cuenta con el email.",
	Callback: "Error durante la autenticación.",
	OAuthAccountNotLinked:
		"Tu cuenta ya está vinculada con otro método de inicio de sesión.",
	EmailSignin: "El enlace de verificación no pudo ser enviado.",
	CredentialsSignin: "Las credenciales no son válidas.",
	SessionRequired: "Debes iniciar sesión para acceder a esta página.",
	Default: "Ocurrió un error durante la autenticación.",
}

function ErrorContent() {
	const searchParams = useSearchParams()
	const error = searchParams.get("error") ?? "Default"

	return (
		<div className="max-w-md rounded-lg border border-red-200 bg-red-50 p-8 text-center">
			<h1 className="mb-4 text-2xl font-bold text-red-700">
				Error de autenticación
			</h1>
			<p className="text-red-600">
				{errorMessages[error] ?? errorMessages.Default}
			</p>
		</div>
	)
}

export default function ErrorPage() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<Suspense
				fallback={<div className="text-gray-500">Cargando...</div>}
			>
				<ErrorContent />
			</Suspense>
		</div>
	)
}

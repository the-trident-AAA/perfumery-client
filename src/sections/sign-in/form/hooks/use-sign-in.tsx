"use client"
import { useCallback, useState } from "react"
import { Credentials } from "../schemas/credentials-schema"
import { signIn as nextAuthSignIn } from "next-auth/react"

interface Props {
	onSignInAction: () => void
}

interface SignInResult {
	success: boolean
	error?: string
}

export default function useSignIn({ onSignInAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const signIn = useCallback(
		async (credentials: Credentials): Promise<SignInResult> => {
			try {
				setLoading(true)
				setError(null)
				console.log(
					"Intentando login con:",
					credentials.firstCredential,
				)

				const res = await nextAuthSignIn("credentials", {
					username: credentials.firstCredential,
					password: credentials.password,
					redirect: false,
				})

				console.log("Respuesta de NextAuth signIn:", res)

				if (res?.error) {
					// Solo mostrar log si no es un login automático (para no contaminar la consola)
					if (!credentials.isAutoLogin) {
						console.error("Error de autenticación:", res.error)
					}
					setError("Las credenciales proporcionadas no son correctas")
					// No lanzar error, solo devolver el estado de error
					return { error: res.error, success: false }
				} else if (res?.ok) {
					console.log("Login exitoso, redirigiendo...")
					onSignInAction()
					return { success: true }
				} else {
					console.error("Respuesta inesperada de NextAuth:", res)
					setError("Error inesperado durante la autenticación")
					return {
						error: "Respuesta inesperada de NextAuth",
						success: false,
					}
				}
			} catch (error) {
				console.error("Error en signIn:", error)
				setError("Error durante la autenticación")
				return {
					error: "Error durante la autenticación",
					success: false,
				}
			} finally {
				setLoading(false)
			}
		},
		[],
	)
	return {
		loading,
		error,
		signIn,
	}
}

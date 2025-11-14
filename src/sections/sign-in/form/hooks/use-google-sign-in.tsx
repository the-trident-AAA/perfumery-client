"use client"
import { useCallback, useState } from "react"
import { signIn as nextAuthSignIn } from "next-auth/react"
import { paths } from "@/src/lib/routes/paths"

interface Props {
	onSignInAction: () => void
}

export default function useGoogleSignIn({ onSignInAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const signInWithGoogle = useCallback(async () => {
		try {
			setLoading(true)
			setError(null)

			const res = await nextAuthSignIn("google", {
				redirect: true,
				callbackUrl: paths.home.root,
			})

			if (res?.error) {
				setError("No se pudo iniciar sesión con Google")
			} else {
				onSignInAction()
			}
		} catch (error) {
			console.error(error)
			setError("Ocurrió un error inesperado")
		} finally {
			setLoading(false)
		}
	}, [onSignInAction])

	return {
		loading,
		error,
		signInWithGoogle,
	}
}

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

			// NextAuth v5: signIn NO devuelve res, solo redirige
			await nextAuthSignIn("google", {
				redirect: true,
				callbackUrl: paths.home.root,
			})

			// Si por alguna razón no redirige (caso raro en dev)
			onSignInAction()
		} catch (err) {
			console.error(err)
			setError("No se pudo iniciar sesión con Google")
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

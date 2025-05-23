"use client"
import { useCallback, useState } from "react"
import { Credentials } from "../schemas/credentials-schema"
import { signIn as signInService } from "@/src/lib/services/auth"

interface Props {
	onSignInAction: () => void
}

export default function useSignIn({ onSignInAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const signIn = useCallback(
		async (credentials: Credentials) => {
			try {
				setLoading(true)
				setError(null)
				const res = await signInService(credentials)
				console.log(res)
				if (!res)
					setError("Las credenciales proporcionadas no son correctas")
				else {
					onSignInAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onSignInAction],
	)
	return {
		loading,
		error,
		signIn,
	}
}

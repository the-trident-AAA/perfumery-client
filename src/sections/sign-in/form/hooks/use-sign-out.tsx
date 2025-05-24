"use client"
import { signOut as signOutService } from "@/src/lib/services/auth"
import { useCallback, useState } from "react"

interface Props {
	onSignOutAction?: () => void
}

export default function useSignOut({ onSignOutAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const signOut = useCallback(async () => {
		try {
			setLoading(true)
			setError(null)
			await signOutService()
			if (onSignOutAction) onSignOutAction()
		} catch (error) {
			console.log(error)
			setError("Las credenciales proporcionadas no son correctas")
		} finally {
			setLoading(false)
		}
	}, [onSignOutAction])
	return {
		loading,
		error,
		signOut,
	}
}

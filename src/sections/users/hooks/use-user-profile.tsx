"use client"

import { getUserProfile } from "@/src/lib/services/users"
import { User } from "@/src/lib/types/users"
import { useCallback, useEffect, useState } from "react"

export default function useUserProfile() {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const fetchUserProfile = useCallback(async () => {
		setLoading(true)
		setError(null)
		try {
			const res = await getUserProfile()

			if (!res.response || res.error)
				throw new Error(
					"Error al cargar la información del perfil usuario",
				)

			setUser(res.response)
		} catch (error) {
			if (error instanceof Error) setError(error.message)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchUserProfile()
	}, [fetchUserProfile])
	return { user, error, loading, fetchUserProfile }
}

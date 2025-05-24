"use client"
import { Button } from "@/src/components/ui/button"
import useSignOut from "@/src/sections/sign-in/form/hooks/use-sign-out"
import React, { useCallback } from "react"

export default function SignOutButton() {
	const { signOut, loading } = useSignOut({})

	const handleSignOut = useCallback(() => {
		signOut()
	}, [signOut])

	return (
		<Button className="w-full" disabled={loading} onClick={handleSignOut}>
			Cerrar Sesión
		</Button>
	)
}

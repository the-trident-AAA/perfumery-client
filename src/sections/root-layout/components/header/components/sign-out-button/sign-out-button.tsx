"use client"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import useSignOut from "@/src/sections/sign-in/form/hooks/use-sign-out"
import { useRouter } from "next/navigation"
import React, { useCallback } from "react"

export default function SignOutButton() {
	const router = useRouter()
	const { signOut, loading } = useSignOut({
		onSignOutAction: () => {
			router.push(paths.sign_in.root)
		},
	})

	const handleSignOut = useCallback(() => {
		signOut()
	}, [signOut])

	return (
		<Button className="w-full" disabled={loading} onClick={handleSignOut}>
			Cerrar Sesión
		</Button>
	)
}

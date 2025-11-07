"use client"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import RegistrationButton from "@/src/sections/root-layout/components/header/components/registration-button/registration-button"
import SignOutButton from "@/src/sections/root-layout/components/header/components/sign-out-button/sign-out-button"
import React from "react"
import { useSession } from "next-auth/react"
import { LoadingSpinner } from "@/src/components/ui/loading-spinner"

export default function UserNavigationOptions() {
	const { data: session, status } = useSession()

	return status === "loading" ? (
		<LoadingSpinner />
	) : (
		<div className="flex flex-col gap-1">
			{!session && (
				<NavigationComponent href={paths.sign_in().root}>
					<Button className="w-full">Iniciar Sesión</Button>
				</NavigationComponent>
			)}
			{!session && <RegistrationButton />}
			{session && (
				<NavigationComponent href={paths.profile.root}>
					<Button className="w-full">Ver Pérfil</Button>
				</NavigationComponent>
			)}
			{session && <SignOutButton />}
		</div>
	)
}

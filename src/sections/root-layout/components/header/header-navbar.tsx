"use client"

import { usePathname } from "next/navigation"
import React from "react"

import { useSession } from "next-auth/react"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"
import { Button } from "@/src/components/ui/button"
import UserMenu from "@/src/sections/root-layout/components/header/components/user-menu/user-menu"
import LittleCar from "@/src/sections/root-layout/components/header/components/little-car/little-car"
import HeaderNavigationMenu from "@/src/sections/root-layout/components/header/components/header-navigation-menu/header-navigation-menu"

export default function HeaderNavbar() {
	const { data: session, status } = useSession()
	const pathname = usePathname()

	if (status === "loading") {
		return (
			<nav className="flex items-center gap-2 sm:gap-4">
				<div className="flex items-center gap-2 sm:gap-4">
					<div className="h-9 w-24 sm:w-32 rounded bg-muted animate-pulse" />
					<div className="h-9 w-28 sm:w-36 rounded bg-muted animate-pulse" />
				</div>
			</nav>
		)
	}
	return (
		<nav className="flex items-center gap-2 sm:gap-4">
			<div className="flex items-center gap-2 sm:gap-4">
				<HeaderNavigationMenu />
				{!session && (
					<NavigationComponent href={paths.sign_in.root}>
						<Button
							className="text-xs text-primary sm:text-base"
							variant="secondary"
							size="sm"
						>
							Iniciar Sesión
						</Button>
					</NavigationComponent>
				)}
			</div>
			{session && <LittleCar />}
			{session && <UserMenu />}
		</nav>
	)
}

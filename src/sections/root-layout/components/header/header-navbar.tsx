"use client"

import { usePathname } from "next/navigation"
import React from "react"
import { useSession } from "next-auth/react"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"
import { Button } from "@/src/components/ui/button"
import UserMenu from "@/src/sections/root-layout/components/header/components/user-menu/user-menu"
import LittleCar from "@/src/sections/root-layout/components/header/components/little-car/little-car"
import OrdersModalButton from "@/src/sections/root-layout/components/header/components/orders-modal-button/orders-modal-button"
import { useBreakpoint } from "@/src/lib/hooks/screen/use-breakpoint"
import PopoverContainer from "@/src/components/ui/popover-container"
import { Menu } from "lucide-react"

export default function HeaderNavbar() {
	const { data: session, status } = useSession()
	const breakpoint = useBreakpoint()

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
				{!session && (
					<NavigationComponent href={paths.sign_in().root}>
						<Button
							className="text-[10px] xs:text-[12px] px-2 2xs:px-3 h-5 xs:h-6 2xs:h-8 text-primary sm:text-base"
							variant="secondary"
							size="sm"
						>
							Iniciar Sesión
						</Button>
					</NavigationComponent>
				)}
				{!session && (
					<NavigationComponent href={paths.registration.root}>
						<Button
							className="text-[10px] xs:text-[12px] px-2 2xs:px-3 h-5 xs:h-6 2xs:h-8 sm:text-base"
							variant="outline"
							size="sm"
						>
							Registrarse
						</Button>
					</NavigationComponent>
				)}
			</div>
			<div className="flex items-center gap-2 sm:gap-4">
				<LittleCar />
				{session && <OrdersModalButton />}
				{session && <UserMenu />}
			</div>
		</nav>
	)
}

import React from "react"
import NavigationComponent from "../navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"

export default function AppLogo() {
	return (
		<NavigationComponent className="z-30" href={paths.home.root}>
			<div className="flex items-center space-x-2">
				<Avatar className="h-12 w-12">
					<AvatarImage src="/icons/logo-icon.png" />
					<AvatarFallback className="bg-secondary text-primary font-semibold text-sm">
						{"PP"}
					</AvatarFallback>
				</Avatar>
				<span className="text-xl hidden sm:flex font-bold text-secondary">
					Perfumes del Puro
				</span>
			</div>
		</NavigationComponent>
	)
}

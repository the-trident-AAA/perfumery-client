import React from "react"
import NavigationComponent from "../navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"

export default function AppLogo() {
	return (
		<NavigationComponent className="z-30" href={paths.home.root}>
			<div className="flex items-center space-x-2">
				<div className="w-8 h-8 bg-yellow-300 rounded-lg flex items-center justify-center">
					<span className="text-primary font-bold text-sm">PM</span>
				</div>
				<span className="text-xl hidden sm:flex font-bold text-yellow-300">
					Perfumes del Puro
				</span>
			</div>
		</NavigationComponent>
	)
}

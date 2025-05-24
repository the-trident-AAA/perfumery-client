"use client"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/components/ui/popover"
import { paths } from "@/src/lib/routes/paths"
import RegistrationButton from "@/src/sections/root-layout/components/header/components/registration-button/registration-button"
import SignOutButton from "@/src/sections/root-layout/components/header/components/sign-out-button/sign-out-button"
import { UserCircleIcon } from "lucide-react"
import React from "react"

const User = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					className="flex items-center justify-center rounded-full bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-label="User menu"
				>
					<UserCircleIcon className="size-8 sm:size-12 text-white" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-full">
				<div className="flex flex-col gap-1">
					<NavigationComponent href={paths.sign_in.root}>
						<Button className="w-full">Iniciar Sesión</Button>
					</NavigationComponent>
					<RegistrationButton />
					<NavigationComponent href={paths.profile.root}>
						<Button className="w-full">Ver Pérfil</Button>
					</NavigationComponent>
					<SignOutButton />
				</div>
			</PopoverContent>
		</Popover>
	)
}

export default User

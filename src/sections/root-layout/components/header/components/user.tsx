"use client"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/components/ui/popover"
import { paths } from "@/src/lib/routes/paths"
import LoginButton from "@/src/sections/root-layout/components/header/components/login-button/login-button"
import RegistrationButton from "@/src/sections/root-layout/components/header/components/registration-button/registration-button"
import { UserCircleIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

const User = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					className="flex items-center justify-center rounded-full bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					onClick={() => console.log("User button clicked")}
					aria-label="User menu"
				>
					<UserCircleIcon className="size-8 sm:size-12 text-white" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-full">
				<div className="flex flex-col gap-1">
					<LoginButton />
					<RegistrationButton />
					<Link href={paths.profile.root}>Ver Pérfil</Link>
				</div>
			</PopoverContent>
		</Popover>
	)
}

export default User

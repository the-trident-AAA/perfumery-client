import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/components/ui/popover"
import UserNavigationOptions from "@/src/sections/root-layout/components/header/components/user-navigation-options/user-navigation-options"
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
				<UserNavigationOptions />
			</PopoverContent>
		</Popover>
	)
}

export default User

"use client"

import { UserCircleIcon } from "lucide-react"
import React from "react"

const User = () => {
	return (
		<button
			className="flex items-center justify-center rounded-full bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
			onClick={() => console.log("User button clicked")}
			aria-label="User menu"
		>
			<UserCircleIcon className="size-8 sm:size-12 text-white" />
		</button>
	)
}

export default User

"use client"
import LittleCar from "@/src/sections/root-layout/components/header/components/little-car/little-car"
import User from "@/src/sections/root-layout/components/header/components/user"
import { useSession } from "next-auth/react"
import React from "react"

export default function HeaderNavigationOptions() {
	const { data: session, status } = useSession()

	return status === "loading" ? (
		<></>
	) : (
		<div className="flex items-center space-x-4">
			{session && <LittleCar />}
			<User />
		</div>
	)
}

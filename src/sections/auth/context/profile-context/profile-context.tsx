"use client"
import React, { createContext } from "react"
import { User } from "@/src/lib/types/users"
import useUserProfile from "@/src/sections/users/hooks/use-user-profile"

interface Props {
	user: User | null
	loading: boolean
	error: string | null
	fetchUserProfile: () => Promise<void>
}

const defaultProps: Props = {
	user: null,
	loading: false,
	error: null,
	fetchUserProfile: () => {
		throw new Error("fetchUserProfile no está definido.")
	},
}

export const ProfileContext = createContext<Props>(defaultProps)

export function ProfileProvider({ children }: { children: React.ReactNode }) {
	const { user, loading, error, fetchUserProfile } = useUserProfile()

	return (
		<ProfileContext.Provider
			value={{
				user,
				loading,
				error,
				fetchUserProfile,
			}}
		>
			{children}
		</ProfileContext.Provider>
	)
}

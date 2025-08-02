"use client"

import useUserTotalOrders from "@/src/sections/orders/hooks/use-user-total-orders"
import React, { createContext } from "react"

interface Props {
	totalOrders: number
	loading: boolean
	error: string | null
	fetchUserTotalOrders: () => Promise<void>
}

const defaultProps: Props = {
	totalOrders: 0,
	loading: false,
	error: null,
	fetchUserTotalOrders: () => {
		throw new Error("fetchUserTotalOrders no está definido.")
	},
}

export const UserTotalOrdersContext = createContext<Props>(defaultProps)

export function UserTotalOrdersProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const { totalOrders, loading, error, fetchUserTotalOrders } =
		useUserTotalOrders()

	return (
		<UserTotalOrdersContext.Provider
			value={{
				totalOrders,
				loading,
				error,
				fetchUserTotalOrders,
			}}
		>
			{children}
		</UserTotalOrdersContext.Provider>
	)
}

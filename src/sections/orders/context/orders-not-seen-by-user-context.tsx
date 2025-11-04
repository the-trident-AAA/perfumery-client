"use client"

import useOrdersNotSeenByUser from "@/src/sections/orders/hooks/use-orders-not-seen-by-user"
import React, { createContext } from "react"

interface Props {
	totalOrders: number
	loading: boolean
	error: string | null
	fetchOrdersNotSeenByUser: () => Promise<void>
}

const defaultProps: Props = {
	totalOrders: 0,
	loading: false,
	error: null,
	fetchOrdersNotSeenByUser: () => {
		throw new Error("fetchOrdersNotSeenByUser no está definido.")
	},
}

export const OrdersNotSeenByUserContext = createContext<Props>(defaultProps)

export function OrdersNotSeenByUserProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const { totalOrders, loading, error, fetchOrdersNotSeenByUser } =
		useOrdersNotSeenByUser()

	return (
		<OrdersNotSeenByUserContext.Provider
			value={{
				totalOrders,
				loading,
				error,
				fetchOrdersNotSeenByUser,
			}}
		>
			{children}
		</OrdersNotSeenByUserContext.Provider>
	)
}

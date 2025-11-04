"use client"

import { useEffect, useContext } from "react"
import { OrdersNotSeenByUserContext } from "@/src/sections/orders/context/orders-not-seen-by-user-context"

export default function OrdersNotSeenByUserContextHandler() {
	const { fetchOrdersNotSeenByUser } = useContext(OrdersNotSeenByUserContext)

	useEffect(() => {
		fetchOrdersNotSeenByUser()
	}, [fetchOrdersNotSeenByUser])

	return null
}

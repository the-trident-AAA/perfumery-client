"use client"
import React from "react"
import useOrdersFilters from "@/src/sections/orders/filters/hooks/use-orders-filters"
import OrdersFilters from "@/src/sections/orders/filters/orders-filters"

export default function OrdersFiltersContainer() {
	const { filters, handleChangeFilters } = useOrdersFilters({
		urlFilters: true,
	})

	return (
		<OrdersFilters
			filters={filters}
			handleChangeFilters={handleChangeFilters}
		/>
	)
}

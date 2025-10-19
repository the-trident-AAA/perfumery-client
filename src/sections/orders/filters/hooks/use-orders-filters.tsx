"use client"

import useUrlFilters from "@/src/lib/hooks/use-url-filters"
import { OrderState } from "@/src/lib/types/orders"
import { Pagination } from "@/src/lib/types/pagination"
import { Dispatch, SetStateAction, useState } from "react"

export interface OrdersFilters {
	state?: OrderState
}

interface Props {
	setPagination?: Dispatch<SetStateAction<Pagination>>
	defaultsFilters?: OrdersFilters
	urlFilters?: boolean
}

export default function useOrdersFilters({
	setPagination,
	defaultsFilters = {},
	urlFilters = false,
}: Props) {
	const { updateFiltersInUrl } = useUrlFilters()
	const [filters, setFilters] = useState<OrdersFilters>(defaultsFilters)

	async function handleChangeFilters(updatedFilters: Partial<OrdersFilters>) {
		const newFilters = {
			...filters,
			...updatedFilters,
		}
		await setFilters(prev => ({
			...prev,
			...updatedFilters,
		}))
		if (urlFilters) updateFiltersInUrl(newFilters)
		if (setPagination)
			setPagination(oldPagination => ({ ...oldPagination, page: 1 }))
	}

	function handleResetFilters() {
		setFilters({})
		if (urlFilters) updateFiltersInUrl({})
		if (setPagination)
			setPagination(oldPagination => ({ ...oldPagination, page: 1 }))
	}

	const getActiveFiltersCount = () => {
		let count = 0
		if (filters.state) count++

		return count
	}

	return {
		filters,
		handleChangeFilters,
		handleResetFilters,
		getActiveFiltersCount,
	}
}

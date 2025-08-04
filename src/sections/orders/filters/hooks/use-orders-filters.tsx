"use client"

import useUrlFilters from "@/src/lib/hooks/use-url-filters"
import { Pagination } from "@/src/lib/types/pagination"
import { Dispatch, SetStateAction, useState } from "react"

export interface OrdersFilters {
	id?: string
}

interface Props {
	setPagination?: Dispatch<SetStateAction<Pagination>>
	defaultsFilters?: OrdersFilters
	urlPagination?: boolean
}

export default function useOrdersFilters({
	setPagination,
	defaultsFilters = {},
	urlPagination = false,
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
		if (urlPagination) updateFiltersInUrl(newFilters)
		if (setPagination)
			setPagination(oldPagination => ({ ...oldPagination, page: 1 }))
	}

	function handleResetFilters() {
		setFilters({})
		if (urlPagination) updateFiltersInUrl({})
		if (setPagination)
			setPagination(oldPagination => ({ ...oldPagination, page: 1 }))
	}

	const getActiveFiltersCount = () => {
		let count = 0
		if (filters.id) count++

		return count
	}

	return {
		filters,
		handleChangeFilters,
		handleResetFilters,
		getActiveFiltersCount,
	}
}

"use client"

import useUrlFilters from "@/src/lib/hooks/use-url-filters"
import { convertBrandFiltersDTO } from "@/src/lib/types/brands"
import { OrderDto } from "@/src/lib/types/order"
import { Pagination } from "@/src/lib/types/pagination"
import { Dispatch, SetStateAction, useState } from "react"
export interface BrandsFilters extends OrderDto {
	name?: string
}

interface Props {
	setPagination?: Dispatch<SetStateAction<Pagination>>
	urlFilters?: boolean
}

export default function useBrandsFilters({
	setPagination,
	urlFilters = true,
}: Props) {
	const { updateFiltersInUrl } = useUrlFilters({})
	const [filters, setFilters] = useState<BrandsFilters>({})

	async function handleChangeFilters(updatedFilters: BrandsFilters) {
		const newFilters = {
			...filters,
			...updatedFilters,
		}
		await setFilters(prev => ({
			...prev,
			...updatedFilters,
		}))
		if (urlFilters) updateFiltersInUrl(convertBrandFiltersDTO(newFilters))
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
		if (filters.name) count++

		return count
	}

	return {
		filters,
		handleChangeFilters,
		handleResetFilters,
		getActiveFiltersCount,
	}
}

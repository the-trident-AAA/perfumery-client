"use client"

import useUrlFilters from "@/src/lib/hooks/use-url-filters"
import { Pagination } from "@/src/lib/types/pagination"
import { convertPerfumeTypeFiltersDTO } from "@/src/lib/types/perfume-types"
import { Dispatch, SetStateAction, useState } from "react"

export interface PerfumeTypesFilters {
	name?: string
}

interface Props {
	setPagination?: Dispatch<SetStateAction<Pagination>>
	urlFilters?: boolean
}

export default function usePerfumeTypesFilters({
	setPagination,
	urlFilters = true,
}: Props) {
	const { updateFiltersInUrl } = useUrlFilters()
	const [filters, setFilters] = useState<PerfumeTypesFilters>({})

	async function handleChangeFilters(updatedFilters: PerfumeTypesFilters) {
		const newFilters = {
			...filters,
			...updatedFilters,
		}
		await setFilters(prev => ({
			...prev,
			...updatedFilters,
		}))
		if (urlFilters)
			updateFiltersInUrl(convertPerfumeTypeFiltersDTO(newFilters))
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

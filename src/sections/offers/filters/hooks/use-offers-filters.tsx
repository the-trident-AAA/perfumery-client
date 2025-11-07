"use client"

import useUrlFilters from "@/src/lib/hooks/use-url-filters"
import { convertOfferFiltersDTO } from "@/src/lib/types/offers"
import { OrderDto } from "@/src/lib/types/order"
import { Pagination } from "@/src/lib/types/pagination"
import { Dispatch, SetStateAction, useState } from "react"

export interface OffersFilters extends OrderDto {
	name?: string
	description?: string
	scope?: string
	discount: [number, number]
	offerType?: string
}

interface Props {
	setPagination?: Dispatch<SetStateAction<Pagination>>
	urlFilters?: boolean
}

export default function useOffersFilters({
	setPagination,
	urlFilters = true,
}: Props) {
	const { updateFiltersInUrl } = useUrlFilters()
	const [filters, setFilters] = useState<OffersFilters>({
		discount: [0, 100],
	})

	async function handleChangeFilters(updatedFilters: Partial<OffersFilters>) {
		const newFilters = {
			...filters,
			...updatedFilters,
		}
		await setFilters(prev => ({
			...prev,
			...updatedFilters,
		}))
		if (urlFilters) updateFiltersInUrl(convertOfferFiltersDTO(newFilters))
		if (setPagination)
			setPagination(oldPagination => ({ ...oldPagination, page: 1 }))
	}

	function handleResetFilters() {
		setFilters({ discount: [0, 100] })
		if (urlFilters) updateFiltersInUrl({})
		if (setPagination)
			setPagination(oldPagination => ({ ...oldPagination, page: 1 }))
	}

	const getActiveFiltersCount = () => {
		let count = 0
		if (filters.name) count++
		if (filters.description) count++
		if (filters.scope) count++
		if (filters.offerType) count++

		return count
	}

	return {
		filters,
		handleChangeFilters,
		handleResetFilters,
		getActiveFiltersCount,
	}
}

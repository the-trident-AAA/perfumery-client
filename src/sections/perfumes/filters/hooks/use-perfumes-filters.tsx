"use client"

import useUrlFilters from "@/src/lib/hooks/use-url-filters"
import { Pagination } from "@/src/lib/types/pagination"
import { convertPerfumesFiltersDTO, Gender } from "@/src/lib/types/perfumes"
import { useSearchParams } from "next/navigation"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export interface PerfumesFilters {
	name?: string
	description?: string
	brandId?: string
	gender?: Gender
	scentsIds: string[]
	perfumeTypeId?: string
	available?: boolean
	priceRange: [number, number]
	cant?: number
	offerId?: string
}

interface Props {
	setPagination?: Dispatch<SetStateAction<Pagination>>
}

export default function usePerfumesFilters({ setPagination }: Props) {
	const { updateFiltersInUrl } = useUrlFilters()
	const searchParams = useSearchParams()
	const [filters, setFilters] = useState<PerfumesFilters>({
		priceRange: [0, 300],
		scentsIds: [],
	})

	useEffect(() => {
		const nameParam = searchParams.get("name")
		const perfumTypeParam = searchParams.get("perfumeTypeId")
		const brandParam = searchParams.get("brandId")
		const genderParam = searchParams.get("gender") as Gender | null
		const offerParam = searchParams.get("offerId")
		const availableParam = searchParams.get("available")
		setFilters(oldFilters => ({
			...oldFilters,
			name: nameParam || undefined,
			perfumeTypeId: perfumTypeParam || undefined,
			brandId: brandParam || undefined,
			gender: genderParam || undefined,
			offerId: offerParam || undefined,
			available: availableParam
				? availableParam === "true"
					? true
					: undefined
				: undefined,
		}))
	}, [searchParams])

	async function handleChangeFilters(
		updatedFilters: Partial<PerfumesFilters>,
	) {
		const newFilters = {
			...filters,
			...updatedFilters,
		}
		await setFilters(prev => ({
			...prev,
			...updatedFilters,
		}))
		updateFiltersInUrl({
			...convertPerfumesFiltersDTO(newFilters),
			page: 1,
		})
		if (setPagination)
			setPagination(oldPagination => ({ ...oldPagination, page: 1 }))
	}

	function handleResetFilters() {
		setFilters({
			priceRange: [0, 300],
			scentsIds: [],
		})
		updateFiltersInUrl({ page: 1 })
		if (setPagination)
			setPagination(oldPagination => ({ ...oldPagination, page: 1 }))
	}

	const getActiveFiltersCount = () => {
		let count = 0
		if (filters.name) count++
		if (filters.brandId) count++
		if (filters.gender) count++
		if (filters.scentsIds?.length) count++
		if (filters.perfumeTypeId) count++
		if (filters.available !== undefined) count++
		if (filters.offerId) count++
		if (filters.priceRange[0] > 0) count++

		return count
	}

	return {
		filters,
		handleChangeFilters,
		handleResetFilters,
		getActiveFiltersCount,
	}
}

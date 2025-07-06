"use client"

import { Pagination } from "@/src/lib/types/pagination"
import { Dispatch, SetStateAction, useState } from "react"

interface PerfumeTypesFilters {
	search: string
}

interface Props {
	setPagination?: Dispatch<SetStateAction<Pagination>>
}

export default function usePerfumeTTypesFilters({ setPagination }: Props) {
	const [filters, setFilters] = useState<PerfumeTypesFilters>({
		search: "",
	})

	async function handleChangeFilters(updatedFilters: PerfumeTypesFilters) {
		await setFilters(prev => ({
			...prev,
			...updatedFilters,
		}))
		if (setPagination)
			setPagination(oldPagination => ({ ...oldPagination, page: 1 }))
	}

	function handleResetFilters() {
		setFilters({
			search: "",
		})
		if (setPagination)
			setPagination(oldPagination => ({ ...oldPagination, page: 1 }))
	}

	return { filters, handleChangeFilters, handleResetFilters }
}

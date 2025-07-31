"use client"

import useUrlFilters from "@/src/lib/hooks/use-url-filters"
import { Pagination } from "@/src/lib/types/pagination"
import { useState } from "react"

export default function useServerPagination() {
	const [pagination, setPagination] = useState<Pagination>({
		page: 1,
		pageSize: 10,
		total: 10,
	})
	const { updateFiltersInUrl } = useUrlFilters()

	function serverHandleChangePage(page: number) {
		const newPagination = {
			...pagination,
			page,
		}
		setPagination(pagination => ({
			...pagination,
			page,
		}))

		updateFiltersInUrl(newPagination)
	}

	function serverHandlePageSizeChange(pageSize: number) {
		const newPagination = {
			...pagination,
			pageSize,
		}
		setPagination(pagination => ({
			...pagination,
			page: 1,
			pageSize,
		}))

		updateFiltersInUrl(newPagination)
	}
	return {
		pagination,
		setPagination,
		serverHandleChangePage,
		serverHandlePageSizeChange,
	}
}

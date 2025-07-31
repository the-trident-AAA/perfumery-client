"use client"

import useUrlFilters from "@/src/lib/hooks/use-url-filters"
import { Pagination } from "@/src/lib/types/pagination"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function useServerPagination() {
	const [pagination, setPagination] = useState<Pagination>({
		page: 1,
		limit: 10,
	})
	const searchParams = useSearchParams()
	const { updateFiltersInUrl } = useUrlFilters()

	useEffect(() => {
		const page = searchParams.get("page")
		const limit = searchParams.get("limit")

		setPagination(oldPagination => ({
			...oldPagination,
			page: Number(page) || undefined,
			limit: Number(limit) || undefined,
		}))
	}, [searchParams])

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

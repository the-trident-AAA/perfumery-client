"use client"

import useUrlFilters from "@/src/lib/hooks/use-url-filters"
import { Pagination } from "@/src/lib/types/pagination"
import { useEffect, useState } from "react"

interface Props {
	defaultPagination?: Pagination
}

export default function useServerPagination({ defaultPagination }: Props) {
	const [pagination, setPagination] = useState<Pagination>(
		defaultPagination || {
			page: 1,
			limit: 10,
		},
	)

	useEffect(() => {
		if (!defaultPagination) return

		setPagination(prev => {
			if (
				prev.page !== defaultPagination.page ||
				prev.limit !== defaultPagination.limit
			) {
				return defaultPagination
			}
			return prev
		})
	}, [defaultPagination?.page, defaultPagination?.limit])
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
			limit: pageSize,
		}
		setPagination(pagination => ({
			...pagination,
			page: 1,
			limit: pageSize,
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

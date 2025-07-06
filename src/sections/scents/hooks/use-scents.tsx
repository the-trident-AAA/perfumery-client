"use client"
import { useCallback, useEffect, useState, useRef } from "react"
import { debounce } from "lodash"
import { Scent } from "@/src/lib/types/scents"
import useClientPagination from "@/src/lib/hooks/use-client-pagination"
import { Pagination } from "@/src/lib/types/pagination"
import useScentsFilters from "@/src/sections/scents/filters/hooks/use-scents-filters"
import { getScentsList } from "@/src/lib/services/scents"

export default function useScents() {
	const [scents, setScents] = useState<Scent[]>([])
	const [error, setError] = useState<string | null>(null)
	const [loadingData, setLoadingData] = useState(true)
	const {
		pagination: clientPagination,
		setPagination: setClientPagination,
		clientHandleChangePage,
		clientHandlePageSizeChange,
	} = useClientPagination()
	const [pagination, setPagination] = useState<Pagination>(clientPagination)
	const { filters, handleChangeFilters, handleResetFilters } =
		useScentsFilters({ setPagination: setClientPagination })

	const debouncedFetchRef = useRef(
		debounce(async (filters, clientPagination) => {
			setLoadingData(true)
			setError(null)
			try {
				const res = await getScentsList({
					pagination: {
						page: clientPagination.page,
						perPage: clientPagination.pageSize,
					},
					search: filters.search,
				})

				if (!res.response || res.error)
					throw new Error("Error al cargar las scents")

				const scents = res.response
				setScents(scents)

				setPagination({ ...clientPagination, total: scents.length })
			} catch (error) {
				if (error instanceof Error) setError(error.message)
			} finally {
				setLoadingData(false)
			}
		}, 500),
	)

	const fetchScents = useCallback(() => {
		debouncedFetchRef.current(filters, clientPagination)
	}, [clientPagination, filters])

	useEffect(() => {
		fetchScents()
	}, [fetchScents])

	useEffect(() => {
		const debouncedFetch = debouncedFetchRef.current
		return () => {
			debouncedFetch.cancel()
		}
	}, [])

	return {
		scents,
		loadingData,
		error,
		pagination,
		filters,
		fetchScents,
		clientHandleChangePage,
		clientHandlePageSizeChange,
		handleChangeFilters,
		handleResetFilters,
	}
}

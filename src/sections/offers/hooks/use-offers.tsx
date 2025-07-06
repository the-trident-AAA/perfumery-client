"use client"
import { useCallback, useEffect, useState, useRef } from "react"
import { debounce } from "lodash"
import useClientPagination from "@/src/lib/hooks/use-client-pagination"
import { Offer } from "@/src/lib/types/offers"
import useOffersFilters from "@/src/sections/offers/filters/hooks/use-offers-filters"
import { getOffersList } from "@/src/lib/services/offers"
import { Pagination } from "@/src/lib/types/pagination"

export default function useOffers() {
	const [offers, setOffers] = useState<Offer[]>([])
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
		useOffersFilters({ setPagination: setClientPagination })

	const debouncedFetchRef = useRef(
		debounce(async (filters, clientPagination) => {
			setLoadingData(true)
			setError(null)
			try {
				const res = await getOffersList({
					pagination: {
						page: clientPagination.page,
						perPage: clientPagination.pageSize,
					},
					search: filters.search,
				})

				if (!res.response || res.error)
					throw new Error("Error al cargar las offers")

				const offers = res.response
				setOffers(offers)

				setPagination({ ...clientPagination, total: offers.length })
			} catch (error) {
				if (error instanceof Error) setError(error.message)
			} finally {
				setLoadingData(false)
			}
		}, 500),
	)

	const fetchOffers = useCallback(() => {
		debouncedFetchRef.current(filters, clientPagination)
	}, [clientPagination, filters])

	useEffect(() => {
		fetchOffers()
	}, [fetchOffers])

	useEffect(() => {
		const debouncedFetch = debouncedFetchRef.current
		return () => {
			debouncedFetch.cancel()
		}
	}, [])

	return {
		offers,
		loadingData,
		error,
		pagination,
		filters,
		fetchOffers,
		clientHandleChangePage,
		clientHandlePageSizeChange,
		handleChangeFilters,
		handleResetFilters,
	}
}

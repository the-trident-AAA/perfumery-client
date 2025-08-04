"use client"

import { useCallback, useEffect, useState, useRef } from "react"
import { debounce } from "lodash"
import { Order } from "@/src/lib/types/orders"
import { getOrdersList } from "@/src/lib/services/orders"
import useOrdersFilters, {
	OrdersFilters,
} from "@/src/sections/orders/filters/hooks/use-orders-filters"
import useClientPagination from "@/src/lib/hooks/use-client-pagination"
import { Pagination } from "@/src/lib/types/pagination"

interface Props {
	defaultsFilters?: OrdersFilters
}

export default function useOrders({ defaultsFilters }: Props) {
	const [orders, setOrders] = useState<Order[]>([])
	const [error, setError] = useState<string | null>(null)
	const [loadingData, setLoadingData] = useState(true)
	const {
		pagination: clientPagination,
		setPagination: setClientPagination,
		clientHandleChangePage,
		clientHandlePageSizeChange,
	} = useClientPagination()
	const [pagination, setPagination] = useState<Pagination>(clientPagination)
	const {
		filters,
		handleChangeFilters,
		handleResetFilters,
		getActiveFiltersCount,
	} = useOrdersFilters({
		setPagination: setClientPagination,
		defaultsFilters,
	})

	const debouncedFetchRef = useRef(
		debounce(async (filters, clientPagination) => {
			setLoadingData(true)
			setError(null)
			try {
				const res = await getOrdersList({
					pagination: {
						page: clientPagination.page,
						perPage: clientPagination.pageSize,
					},
					id: filters.id,
				})

				if (!res.response || res.error)
					throw new Error("Error al cargar las órdenes")

				const orders = res.response.data
				setOrders(orders)

				setPagination({
					...clientPagination,
					total: orders.length,
				})
			} catch (error) {
				if (error instanceof Error) setError(error.message)
			} finally {
				setLoadingData(false)
			}
		}, 500),
	)

	const fetchOrders = useCallback(() => {
		debouncedFetchRef.current(filters, clientPagination)
	}, [clientPagination, filters])

	useEffect(() => {
		fetchOrders()
	}, [fetchOrders])

	useEffect(() => {
		const debouncedFetch = debouncedFetchRef.current
		return () => {
			debouncedFetch.cancel()
		}
	}, [])

	return {
		orders,
		loadingData,
		error,
		pagination,
		filters: {
			filters: filters,
			handleChangeFilters,
			handleResetFilters,
			getActiveFiltersCount,
		},
		fetchOrders,
		clientHandleChangePage,
		clientHandlePageSizeChange,
	}
}

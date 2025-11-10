"use client"
import CustomPagination from "@/src/components/custom-pagination/custom-pagination"
import EmptyContent from "@/src/components/empty-content/empty-content"
import useServerPagination from "@/src/lib/hooks/use-server-pagination"
import { PaginationMeta } from "@/src/lib/types/pagination"
import { Perfume } from "@/src/lib/types/perfumes"
import PerfumeCard from "@/src/sections/perfumes/components/perfume-card/perfume-card"
import PerfumesOrderContainer from "@/src/sections/perfumes/order/perfumes-order-container"
import React from "react"

interface Props {
	perfumes: Perfume[]
	apiPagination: PaginationMeta
}

export default function PerfumesList({ perfumes, apiPagination }: Props) {
	const { pagination, serverHandleChangePage, serverHandlePageSizeChange } =
		useServerPagination({
			defaultPagination: {
				limit: apiPagination.limit,
				page: apiPagination.page,
			},
		})

	return perfumes.length > 0 ? (
		<div className="flex flex-col gap-4 justify-between">
			<PerfumesOrderContainer />
			<div className="grid grid-cols-2 md:grid-cols-3 2md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4">
				{perfumes.map(perfume => (
					<PerfumeCard key={perfume.id} perfume={perfume} />
				))}
			</div>
			<CustomPagination
				currentPage={pagination.page as number}
				itemsPerPage={pagination.limit as number}
				onPageChange={serverHandleChangePage}
				onItemsPerPageChange={(pageSize: string) => {
					serverHandlePageSizeChange(Number(pageSize))
				}}
				totalItems={apiPagination.total}
				totalPages={Math.ceil(
					apiPagination.total / apiPagination.limit,
				)}
			/>
		</div>
	) : (
		<EmptyContent
			title="No se encontraron perfumes"
			description="No existe coincidencia de perfumes con los filtros seleccionados"
		/>
	)
}

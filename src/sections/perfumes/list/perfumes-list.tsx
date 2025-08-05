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
			<PerfumesOrderContainer />
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
				{perfumes.map(perfume => (
					<PerfumeCard key={perfume.id} perfume={perfume} />
				))}
			</div>
		</div>
	) : (
		<EmptyContent
			title="No hay perfumes disponibles"
			description="De momento la tienda no cuenta con perfumes para ofrecer"
		/>
	)
}

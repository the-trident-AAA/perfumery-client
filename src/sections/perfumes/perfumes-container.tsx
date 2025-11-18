import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import DetailsSectionHeader from "@/src/components/details-section-header/details-section-header"
import { SearchParamsPagination } from "@/src/lib/types/pagination"
import PerfumesFiltersContainer from "@/src/sections/perfumes/filters/perfumes-filters-container/perfumes-filters-container"
import PerfumesListContainer from "@/src/sections/perfumes/list/perfumes-list-container"

import React, { Suspense } from "react"

interface Props {
	searchParams: { [key: string]: string | string[] | undefined }
}

export default function PerfumesContainer({ searchParams }: Props) {
	return (
		<main className="flex flex-col lg:flex-row justify-center p-3 py-8 sm:p-12 sm:py-8 gap-6">
			<PerfumesFiltersContainer />
			<div className="flex flex-col w-full gap-8">
				<DetailsSectionHeader
					title="Perfumes de la Tienda"
					description="Explore la enorme colección de perfumes de la tienda disponibles."
				/>
				<Suspense
					fallback={
						<CardSkeletonGroup
							containerClassName="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
							count={15}
						/>
					}
				>
					<PerfumesListContainer searchParams={searchParams} />
				</Suspense>
			</div>
		</main>
	)
}

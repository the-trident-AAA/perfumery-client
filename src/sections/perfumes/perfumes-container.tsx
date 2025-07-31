import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import DetailsSectionHeader from "@/src/components/details-section-header/details-section-header"
import { SearchParamsPagination } from "@/src/lib/types/pagination"
import PerfumesFiltersContainer from "@/src/sections/perfumes/filters/perfumes-filters-container/perfumes-filters-container"
import PerfumesList from "@/src/sections/perfumes/list/perfumes-list"
import React, { Suspense } from "react"

interface Props {
	searchParams: SearchParamsPagination
}

export default function PerfumesContainer({ searchParams }: Props) {
	return (
		<div className="flex flex-col lg:flex-row justify-center p-12 gap-6">
			<PerfumesFiltersContainer />
			<div className="flex flex-col w-full gap-8">
				<DetailsSectionHeader
					title="Perfumes de la Tienda"
					description="Explore la enorme colección de perfumes de la tienda disponibles."
				/>
				<Suspense
					fallback={
						<CardSkeletonGroup
							containerClassName="grid grid-cols-2 2xs:grid-cols-3 xl:grid-cols-4 gap-6"
							count={15}
						/>
					}
				>
					<PerfumesList searchParams={searchParams} />
				</Suspense>
			</div>
		</div>
	)
}

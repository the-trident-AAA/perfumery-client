import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import PerfumesFiltersContainer from "@/src/sections/perfumes/filters/perfumes-filters-container/perfumes-filters-container"
import PerfumesList from "@/src/sections/perfumes/list/perfumes-list"
import React, { Suspense } from "react"

export default function PerfumesContainer() {
	return (
		<div className="flex flex-col lg:flex-row justify-center gap-6">
			<PerfumesFiltersContainer />
			<div className="flex flex-col w-full gap-2">
				<p className="text-lg sm:text-3xl font-semibold mb-6 text-gray-800">
					Perfumes de la Tienda
				</p>
				<Suspense
					fallback={
						<CardSkeletonGroup
							containerClassName="grid grid-cols-2 2xs:grid-cols-3 xl:grid-cols-4 gap-6"
							count={15}
						/>
					}
				>
					<PerfumesList />
				</Suspense>
			</div>
		</div>
	)
}

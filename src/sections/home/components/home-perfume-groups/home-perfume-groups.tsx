import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import PerfumeGroupsList from "@/src/sections/home/components/home-perfume-groups/list/perfume-groups-list"
import React, { Suspense } from "react"

export default function HomePerfumeGroups() {
	return (
		<div className="flex flex-col gap-4">
			<p className="text-2xl">Grupos de Perfume</p>
			<Suspense
				fallback={
					<CardSkeletonGroup
						containerClassName="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full"
						count={4}
					/>
				}
			>
				<PerfumeGroupsList />
			</Suspense>
		</div>
	)
}

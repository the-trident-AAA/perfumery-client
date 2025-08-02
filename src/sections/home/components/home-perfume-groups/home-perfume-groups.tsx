import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import PerfumeGroupsList from "@/src/sections/home/components/home-perfume-groups/list/perfume-groups-list"
import React, { Suspense } from "react"

export default function HomePerfumeGroups() {
	return (
		<section className="bg-muted pt-12 pb-20">
			<div className="container mx-auto flex flex-col gap-12 pt-4">
				<div className="text-center space-y-4 ">
					<h2 className="text-3xl lg:text-4xl font-bold text-secondary">
						Descubre nuestras colecciones de perfumes
					</h2>
					<p className="text-xl text-secondary font-semibold max-w-2xl mx-auto">
						Explora los grupos de fragancias disponibles y encuentra
						el aroma perfecto para cada ocasión
					</p>
				</div>
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
		</section>
	)
}

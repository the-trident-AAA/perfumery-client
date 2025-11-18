import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import PerfumeGroupsList from "@/src/sections/home/components/home-perfume-groups/list/perfume-groups-list"
import React, { Suspense } from "react"

export default function HomePerfumeGroups() {
	return (
		<section id="home-perfume-groups" className="bg-primary pt-4 pb-8">
			<div className="flex flex-col px-4 gap-6 pt-4">
				<div className="text-center space-y-1">
					<h2 className="text-xl lg:text-3xl font-bold text-secondary">
						Descubre nuestras colecciones de perfumes
					</h2>
					<p className="max-w-2xl font-serif mx-auto text-sm md:text-lg text-foreground leading-relaxed text-pretty">
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

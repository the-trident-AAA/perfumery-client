import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import HomeOffersList from "@/src/sections/home/components/home-offers/list/home-offers-list"
import React, { Suspense } from "react"

export default function HomeOffers() {
	return (
		<section id="home-offers" className="bg-muted pt-1 pb-20 sm:pb-12">
			<div className="pt-4">
				<Suspense
					fallback={
						<CardSkeletonGroup
							containerClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
							count={3}
						/>
					}
				>
					<HomeOffersList />
				</Suspense>
			</div>
		</section>
	)
}

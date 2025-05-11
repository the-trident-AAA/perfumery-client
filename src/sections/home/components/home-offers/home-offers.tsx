import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import HomeOffersList from "@/src/sections/home/components/home-offers/list/home-offers-list"
import React, { Suspense } from "react"

export default function HomeOffers() {
	return (
		<div className="flex flex-col gap-1">
			<p className="text-2xl">Ofertas</p>
			<Suspense
				fallback={
					<CardSkeletonGroup
						containerClassName="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full"
						count={3}
					/>
				}
			>
				<HomeOffersList />
			</Suspense>
		</div>
	)
}

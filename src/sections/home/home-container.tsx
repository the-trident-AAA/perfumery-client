import React, { Suspense } from "react"
import HomePerfumeGroups from "@/src/sections/home/components/home-perfume-groups/home-perfume-groups"
import HomeOffers from "@/src/sections/home/components/home-offers/home-offers"
import BestSellingProducts from "@/src/sections/home/components/best-selling-products/best-selling-products"
import HomeBannerSectionContainer from "@/src/sections/home/components/home-banner-section/home-banner-section-container"
import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"

export default function HomeContainer() {
	return (
		<div className="w-full flex flex-col">
			<Suspense
				fallback={
					<CardSkeletonGroup
						containerClassName="grid grid-cols-1 w-full"
						count={1}
					/>
				}
			>
				<HomeBannerSectionContainer />
			</Suspense>
			<HomeOffers />
			<BestSellingProducts />
			<HomePerfumeGroups />
		</div>
	)
}

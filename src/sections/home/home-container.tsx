import React from "react"
import HomeBanner from "@/src/sections/home/components/home-banner/home-banner"
import HomePerfumeGroups from "@/src/sections/home/components/home-perfume-groups/home-perfume-groups"
import HomeOffers from "@/src/sections/home/components/home-offers/home-offers"
import BestSellingProductsCarouselContainer from "@/src/sections/home/components/best-selling-products-carousel/best-selling-products-carousel-container"

export default function HomeContainer() {
	return (
		<div className="w-full flex flex-col gap-4">
			<HomeBanner />
			<HomeOffers />
			<BestSellingProductsCarouselContainer />
			<HomePerfumeGroups />
		</div>
	)
}

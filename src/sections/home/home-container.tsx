import React from "react"
import HomePerfumeGroups from "@/src/sections/home/components/home-perfume-groups/home-perfume-groups"
import HomeOffers from "@/src/sections/home/components/home-offers/home-offers"
import BestSellingProducts from "@/src/sections/home/components/best-selling-products/best-selling-products"
import HomeBannersContainer from "@/src/sections/home/components/home-banners/home-banner-container"
import HomeHeroSection from "@/src/sections/home/components/home-hero-section/home-hero-section"

export default function HomeContainer() {
	return (
		<div className="w-full flex flex-col">
			<HomeBannersContainer />
			<HomeOffers />
			<BestSellingProducts />
			<HomePerfumeGroups />
		</div>
	)
}

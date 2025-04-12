import React from "react"
import HomeOffers from "./components/home-offers/home-offers"
import HomeSellers from "@/src/sections/home/components/home-sellers/components/seller-card"
import HomeBanner from "@/src/sections/home/components/home-banner/home-banner"

export default function HomeContainer() {
	return (
		<div className="w-full flex flex-col gap-4">
			<HomeBanner />
			<HomeOffers />
			<HomeSellers />
		</div>
	)
}

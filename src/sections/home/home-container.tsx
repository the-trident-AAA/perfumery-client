import React from "react"
import HomeOffers from "./components/home-offers/home-offers"
import HomeSellers from "@/src/sections/home/components/home-sellers/components/seller-card"

export default function HomeContainer() {
	return (
		<div>
			<HomeOffers />
			<HomeSellers />
		</div>
	)
}

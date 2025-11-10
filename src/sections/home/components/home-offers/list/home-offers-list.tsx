import EmptyContent from "@/src/components/empty-content/empty-content"
import { getOffersList } from "@/src/lib/services/offers"
import HomeOffersListCarousel from "@/src/sections/home/components/home-offers/list/home-offers-list-carousel"
import React from "react"

export default async function HomeOffersList() {
	const res = await getOffersList({})
	if (!res.response || res.error) throw new Error("Error in fetching offers")
	const offers = res.response
	return offers.length > 0 ? (
		<HomeOffersListCarousel data={offers} />
	) : (
		<EmptyContent
			title="No hay ofertas nuevas"
			description="De momento no se han ralizado ofertas nuevas. Permanezca atento!."
		/>
	)
}

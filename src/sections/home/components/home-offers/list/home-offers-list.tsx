import EmptyContent from "@/src/components/empty-content/empty-content"
import { getOffersList } from "@/src/lib/services/offers"
import OfferCard from "@/src/sections/home/components/home-offers/components/offer-card/offer-card"
import React from "react"

export default async function HomeOffersList() {
	const res = await getOffersList({})
	if (!res.response || res.error) throw new Error("Error in fetching offers")
	const offers = res.response
	return offers.length > 0 ? (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{offers.map((offer, index) => (
				<OfferCard key={index} offer={offer} />
			))}
		</div>
	) : (
		<EmptyContent
			title="No hay ofertas nuevas"
			description="De momento no se han ralizado ofertas nuevas. Permanezca atento!."
		/>
	)
}

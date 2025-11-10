"use client"

import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import { Offer } from "@/src/lib/types/offers"
import OfferBanner from "@/src/sections/home/components/home-offers/components/offer-banner/offer-banner"
import React from "react"

interface Props {
	data: Offer[]
}

export default function HomeOffersListCarousel({ data }: Props) {
	return (
		<div className="w-full sm:px-12">
			<StandardCarousel
				items={data}
				itemClassName="basis-full "
				className="shadow-2xl rounded-3xl"
				contentClassName="py-0 px-0 "
				loop={false}
				autoPlay
				autoPlayDelay={10000}
				showDots
				renderCard={item => <OfferBanner offer={item} />}
			/>
		</div>
	)
}

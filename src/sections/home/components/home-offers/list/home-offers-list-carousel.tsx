"use client"

import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import { Offer } from "@/src/lib/types/offers"

import OfferCard from "@/src/sections/home/components/home-offers/components/offer-card/offer-card"

import React from "react"

interface Props {
	data: Offer[]
}

export default function HomeOffersListCarousel({ data }: Props) {
	return (
		<div className="pl-2 sm:pl-4 sm:px-4 ">
			<StandardCarousel
				items={data}
				itemClassName=" 2xs:basis-[70%] sm:basis-1/2 md:basis-1/2 xl:basis-1/3 "
				loop={false}
				autoPlay
				renderCard={item => <OfferCard offer={item} />}
			/>
		</div>
	)
}

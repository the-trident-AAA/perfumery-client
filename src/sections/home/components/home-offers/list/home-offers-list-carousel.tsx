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
		<StandardCarousel
			items={data}
			itemClassName=" sm:basis-[70%] md:basis-1/2 xl:basis-1/3 "
			loop={false}
			renderCard={item => <OfferCard offer={item} />}
		/>
	)
}

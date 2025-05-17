"use client"
import { StandardCarouselProvider } from "@/src/components/ui/standard-carousel/context/standard-carousel-context"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import { Offer } from "@/src/lib/types/offers"
import OfferCard from "@/src/sections/home/components/home-offers/components/offer-card/offer-card"
import React from "react"

interface Props {
	offers: Offer[]
}

export default function HomeOffersCarousel({ offers }: Props) {
	return (
		<StandardCarouselProvider>
			<StandardCarousel
				items={offers}
				dimension="100vw"
				itemsStyles="2xs:basis-1/2 lg:basis-1/3"
				withArrows
				arrowsPosition="outside"
				arrowsLocation="bottom"
				renderCard={item => <OfferCard offer={item} />}
				shouldCenter={(breakpoint: string, cantElements: number) => {
					switch (breakpoint) {
						case "3xl":
							return cantElements < 3
						case "2xl":
							return cantElements < 3
						case "xl":
							return cantElements < 3
						case "lg":
							return cantElements < 3
						case "md":
							return cantElements < 3
						default:
							return cantElements < 2
					}
				}}
			/>
		</StandardCarouselProvider>
	)
}

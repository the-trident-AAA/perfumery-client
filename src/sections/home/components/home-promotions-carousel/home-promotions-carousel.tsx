"use client"
import PerfurmCard from "@/src/components/perfum-card/perfum-card"
import { StandardCarouselProvider } from "@/src/components/ui/standard-carousel/context/standard-carousel-context"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import { Perfume } from "@/src/lib/types/perfumes"
import React from "react"

interface Props {
	data: Perfume[]
}

export default function HomePromotionsCarousel({ data }: Props) {
	return (
		<StandardCarouselProvider>
			<StandardCarousel
				items={data}
				dimension="100vw"
				itemsStyles="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
				withArrows
				arrowsPosition="outside"
				arrowsLocation="bottom"
				renderCard={item => <PerfurmCard perfume={item} />}
			/>
		</StandardCarouselProvider>
	)
}

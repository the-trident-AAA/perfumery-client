"use client"

import { StandardCarouselProvider } from "@/src/components/ui/standard-carousel/context/standard-carousel-context"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import { Perfume } from "@/src/lib/types/perfumes"
import { PerfumeCard } from "@/src/sections/perfumes/components/perfume-card/perfume-card"

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
				renderCard={item => <PerfumeCard perfume={item} />}
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

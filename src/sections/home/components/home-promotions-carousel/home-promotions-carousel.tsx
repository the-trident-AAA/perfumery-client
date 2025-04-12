"use client"
import PerfurmCard, { Perfum } from "@/src/components/perfum-card/perfum-card"
import { StandardCarouselProvider } from "@/src/components/ui/standard-carousel/context/standard-carousel-context"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import React from "react"

interface Props {
	title: string
	data: Perfum[]
}

export default function HomePromotionsCarousel({ title, data }: Props) {
	return (
		<div className="flex flex-col gap-1">
			<p className="text-2xl">{title}</p>
			<StandardCarouselProvider>
				<StandardCarousel
					items={data}
					dimension="100vw"
					className="pl-4"
					itemsStyles="basis-1/2 xs:basis-1/3 md:basis-1/3 lg:basis-1/4"
					renderCard={item => <PerfurmCard perfum={item} />}
				/>
			</StandardCarouselProvider>
		</div>
	)
}

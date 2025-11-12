import { CarouselItem } from "@/src/components/ui/carousel"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import { Perfume } from "@/src/lib/types/perfumes"
import { cn } from "@/src/lib/utils/utils"
import PerfumeCard from "@/src/sections/perfumes/components/perfume-card/perfume-card"
import React from "react"

interface Props {
	data: Perfume[]
}

export default function HomePromotionsCarousel({ data }: Props) {
	return (
		<StandardCarousel
			loop={false}
			autoPlay
			autoPlayDelay={10000}
			navVariant="spaced"
			showDots
		>
			{data.map((perfume, index) => (
				<CarouselItem
					key={index}
					className={cn(
						"pl-2 md:pl-4",
						"basis-[50%] 2xs:basis-[50%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/5 2xl:basis-1/5",
					)}
				>
					<PerfumeCard perfume={perfume} />
				</CarouselItem>
			))}
		</StandardCarousel>
	)
}

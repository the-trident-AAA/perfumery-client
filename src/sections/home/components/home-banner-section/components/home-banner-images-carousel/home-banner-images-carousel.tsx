"use client"
import { StandardCarouselProvider } from "@/src/components/ui/standard-carousel/context/standard-carousel-context"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import HomeBannerImage from "@/src/sections/home/components/home-banner-section/components/home-banner-image/home-banner-image"
import React from "react"

interface Props {
	images: string[]
}

export default function HomeBannerImagesCarousel({ images }: Props) {
	return (
		<StandardCarouselProvider>
			<StandardCarousel
				items={images.map((image, index) => ({
					id: String(index),
					image,
				}))}
				dimension="100vw"
				itemsStyles="basis-full"
				withStylesContent={false}
				withProgressBar
				autoPlay
				loop
				renderCard={item => <HomeBannerImage image={item} />}
			/>
		</StandardCarouselProvider>
	)
}

"use client"

import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import HomeBannerImage from "@/src/sections/home/components/home-banner-section/components/home-banner-image/home-banner-image"
import React from "react"

interface Props {
	images: string[]
}

export default function HomeBannerImagesCarousel({ images }: Props) {
	return (
		<StandardCarousel
			items={images.map((image, index) => ({
				id: String(index),
				image,
			}))}
			itemClassName="basis-full"
			contentClassName="pr-0"
			autoPlay
			loop
			renderCard={item => <HomeBannerImage image={item} />}
		/>
	)
}

"use client"
import React from "react"
import { StandardCarouselProvider } from "@/src/components/ui/standard-carousel/context/standard-carousel-context"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import HomeBannerSection from "@/src/sections/home/components/home-banners/components/home-banner-section/home-banner-section"
import { HomeBanner } from "@/src/lib/types/home-banners"

interface Props {
	homeBanners: HomeBanner[]
}

export default function HomeBannersCarousel({ homeBanners }: Props) {
	return (
		<StandardCarouselProvider>
			<StandardCarousel
				items={homeBanners}
				dimension="100vw"
				itemsStyles="basis-full"
				withStylesContent={false}
				withProgressBar
				autoPlay
				loop
				renderCard={item => (
					<HomeBannerSection
						title={item.title}
						image={item.image || "/images/place-holder.jpg"}
						url={"/"}
					/>
				)}
			/>
		</StandardCarouselProvider>
	)
}

import { CarouselItem } from "@/src/components/ui/carousel"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import { getHomeBannersList } from "@/src/lib/services/home-banners"
import { cn } from "@/src/lib/utils/utils"
import { HomeBannerSectionDekstop } from "@/src/sections/home/components/home-banner-section/components/home-banner-section-dekstop"
import React from "react"

export default async function HomeBannerSectionContainer() {
	const res = await getHomeBannersList({})

	if (!res.response || res.error)
		throw new Error("Problemas en la carga de los home banners")

	const homeBanners = res.response

	return (
		<section id="home-hero">
			<StandardCarousel
				contentClassName="py-0 px-0"
				navVariant="banner"
				dotsVariant="banner"
				contentVariant="banner"
				loop={false}
				autoPlay
				autoPlayDelay={20000}
				showDots
			>
				{homeBanners.map((homeBanner, index) => (
					<CarouselItem key={index} className={cn("basis-full")}>
						<HomeBannerSectionDekstop homeBanner={homeBanner} />
					</CarouselItem>
				))}
			</StandardCarousel>
		</section>
	)
}

"use client"
import { StandardCarouselProvider } from "@/src/components/ui/standard-carousel/context/standard-carousel-context"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import HomeBannerSection from "@/src/sections/home/components/home-banner/components/home-banner-section/home-banner-section"
import React from "react"

const banners = [
	{
		id: 1,
		title: "Welcome to our store. And we are happy to see you here.",
		image: "/images/place-holder.jpg",
		url: "/products",
	},
	{
		id: 2,
		title: "Welcome to our store",
		image: "/images/place-holder.jpg",
		url: "/products",
	},
	{
		id: 3,
		title: "Welcome to our store",
		image: "/images/place-holder.jpg",
		url: "/products",
	},
]

export default function HomeBanner() {
	return (
		<div className="h-full w-full">
			<StandardCarouselProvider>
				<StandardCarousel
					items={banners}
					dimension="100vw"
					itemsStyles="basis-full"
					withStylesContent={false}
					withProgressBar
					autoPlay
					loop
					renderCard={item => (
						<HomeBannerSection
							title={item.title}
							image={item.image}
							url={item.url}
						/>
					)}
				/>
			</StandardCarouselProvider>
		</div>
	)
}

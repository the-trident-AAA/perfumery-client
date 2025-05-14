import EmptyContent from "@/src/components/empty-content/empty-content"
import { getHomeBannersList } from "@/src/lib/services/home-banners"
import HomeBannersCarousel from "@/src/sections/home/components/home-banners/components/home-banners-carousel/home-banners-carousel"
import React from "react"

export default async function HomeBannersList() {
	const res = await getHomeBannersList({})
	if (!res.response || res.error)
		throw new Error("Error in fetching home-banners")
	const homeBanners = res.response
	return homeBanners.length > 0 ? (
		<HomeBannersCarousel homeBanners={homeBanners} />
	) : (
		<EmptyContent
			title="No hay banners de la página home disponibles"
			description="De momento no se han generado banners del home!."
		/>
	)
}

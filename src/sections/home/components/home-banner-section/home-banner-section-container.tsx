import { getMainHomeBanner } from "@/src/lib/services/home-banners"
import { HomeBannerSectionDekstop } from "@/src/sections/home/components/home-banner-section/components/home-banner-section-dekstop"
import React from "react"

export default async function HomeBannerSectionContainer() {
	const res = await getMainHomeBanner()

	if (!res.response || res.error)
		throw new Error("Problemas en la carga del main home banner")

	return (
		<section id="home-hero">
			<HomeBannerSectionDekstop homeBanner={res.response} />
		</section>
	)
}

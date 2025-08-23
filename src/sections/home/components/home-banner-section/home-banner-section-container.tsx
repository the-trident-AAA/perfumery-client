import { getMainHomeBanner } from "@/src/lib/services/home-banners"
import HomeBannerSection from "@/src/sections/home/components/home-banner-section/home-banner-section"
import React from "react"

export default async function HomeBannerSectionContainer() {
	const res = await getMainHomeBanner()

	if (!res.response || res.error)
		throw new Error("Problemas en la carga del main home banner")

	return <HomeBannerSection homeBanner={res.response} />
}

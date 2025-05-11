import EmptyContent from "@/src/components/empty-content/empty-content"
import { getPerfumesList } from "@/src/lib/services/perfumes"
import HomePromotionsCarousel from "@/src/sections/home/components/home-promotions-carousel/home-promotions-carousel"
import React from "react"

export default async function BestSellingProductsList() {
	const res = await getPerfumesList({})
	if (!res.response || res.error) throw new Error("Error fetching perfumes")
	const perfumes = res.response
	return perfumes.length > 0 ? (
		<HomePromotionsCarousel data={perfumes} />
	) : (
		<EmptyContent
			title="No hay productos más vendidos"
			description="De momento no contamos la información de los productos más vendidos"
		/>
	)
}

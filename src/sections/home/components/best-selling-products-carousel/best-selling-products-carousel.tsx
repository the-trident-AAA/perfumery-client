import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import { getPerfumesList } from "@/src/lib/services/perfumes"
import HomePromotionsCarousel from "@/src/sections/home/components/home-promotions-carousel/home-promotions-carousel"
import React, { Suspense } from "react"

export default async function BestSellingProductsCarousel() {
	const res = await getPerfumesList({})
	if (!res.response || res.error) throw new Error("Error fetching perfumes")
	const perfumes = res.response
	return (
		<div className="flex flex-col gap-1">
			<p className="text-2xl">Productos más Vendidos</p>
			<Suspense
				fallback={
					<CardSkeletonGroup
						containerClassName="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full"
						count={3}
					/>
				}
			>
				<HomePromotionsCarousel data={perfumes} />
			</Suspense>
		</div>
	)
}

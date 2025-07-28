import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import HomeOffersList from "@/src/sections/home/components/home-offers/list/home-offers-list"
import React, { Suspense } from "react"

export default function HomeOffers() {
	return (
		<div className="bg-muted pt-12 pb-20">
			<div className="container mx-auto flex flex-col gap-12 pt-4">
				<div className="text-center space-y-4 ">
					<h2 className="text-3xl lg:text-4xl font-bold text-primary">
						Aromas irresistibles a precios especiales
					</h2>
					<p className="text-xl text-black font-semibold max-w-2xl mx-auto">
						Aprovecha nuestras ofertas exclusivas en perfumes
						seleccionados y encuentra tu fragancia ideal al mejor
						precio
					</p>
				</div>
				<Suspense
					fallback={
						<CardSkeletonGroup
							containerClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
							count={3}
						/>
					}
				>
					<HomeOffersList />
				</Suspense>
			</div>
		</div>
	)
}

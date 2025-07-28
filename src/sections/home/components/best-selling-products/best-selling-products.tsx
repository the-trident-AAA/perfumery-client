import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import BestSellingProductsList from "@/src/sections/home/components/best-selling-products/list/best-selling-products-list"
import React, { Suspense } from "react"

export default async function BestSellingProducts() {
	return (
		<section className="bg-muted pt-12 pb-20 ">
			<div className="container mx-auto flex flex-col gap-12 pt-4">
				<div className="text-center space-y-4 ">
					<h2 className="text-3xl lg:text-4xl font-bold text-primary">
						Los favoritos de nuestros clientes
					</h2>
					<p className="text-xl text-black font-semibold max-w-2xl mx-auto">
						Descubre los perfumes más vendidos y déjate cautivar por
						las fragancias que todos aman
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
					<BestSellingProductsList />
				</Suspense>
			</div>
		</section>
	)
}

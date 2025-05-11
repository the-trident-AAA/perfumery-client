import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import BestSellingProductsList from "@/src/sections/home/components/best-selling-products/list/best-selling-products-list"
import React, { Suspense } from "react"

export default async function BestSellingProducts() {
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
				<BestSellingProductsList />
			</Suspense>
		</div>
	)
}

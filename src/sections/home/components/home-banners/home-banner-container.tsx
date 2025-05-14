import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import HomeBannersList from "@/src/sections/home/components/home-banners/components/home-banners-list/home-banners-list"
import React, { Suspense } from "react"

export default function HomeBannersContainer() {
	return (
		<div className="h-full w-full">
			<Suspense
				fallback={
					<CardSkeletonGroup
						containerClassName="grid grid-cols-1 w-full"
						count={1}
					/>
				}
			>
				<HomeBannersList />
			</Suspense>
		</div>
	)
}

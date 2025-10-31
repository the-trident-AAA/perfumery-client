"use client"

import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import { Perfume } from "@/src/lib/types/perfumes"
import PerfumeCard from "@/src/sections/perfumes/components/perfume-card/perfume-card"

import React from "react"

interface Props {
	data: Perfume[]
}

export default function HomePromotionsCarousel({ data }: Props) {
	return (
		<StandardCarousel
			items={data}
			itemClassName=" basis-[78%]  2xs:basis-[50%]  sm:basis-[40%] md:basis-1/3 lg:basis-1/4 xl:basis-1/5 "
			className="pl-4 mr-4"
			loop={false}
			renderCard={item => <PerfumeCard perfume={item} />}
		/>
	)
}

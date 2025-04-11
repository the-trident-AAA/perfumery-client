"use client"
import PerfurmCard, { Perfum } from "@/src/components/perfum-card/perfum-card"
import { StandardCarouselProvider } from "@/src/components/ui/standard-carousel/context/standard-carousel-context"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import React from "react"

export interface Props {
	perfum: Perfum
}

const sales = [
	{
		id: "1",
		brand: "Christian Dior",
		name: "Sauvage",
		description:
			"Una de las mejores fragancias que podrás encontrar sin duda alguna",
		price: 90,
		image: "/images/place-holder.jpg",
	},
	{
		id: "2",
		brand: "Dior",
		name: "Sauvage",
		description:
			"Una de las mejores fragancias que podrás encontrar sin duda alguna",
		price: 90,
		image: "/images/place-holder.jpg",
	},
	{
		id: "3",
		brand: "Christian Dior",
		name: "Sauvage",
		description:
			"Una de las mejores fragancias que podrás encontrar sin duda alguna",
		price: 90,
		image: "/images/place-holder.jpg",
	},
	{
		id: "4",
		brand: "Christian Dior",
		name: "Sauvage",
		description:
			"Una de las mejores fragancias que podrás encontrar sin duda alguna",
		price: 90,
		image: "/images/place-holder.jpg",
	},
	{
		id: "5",
		brand: "Christian Dior",
		name: "Sauvage",
		description:
			"Una de las mejores fragancias que podrás encontrar sin duda alguna",
		price: 90,
		image: "/images/place-holder.jpg",
	},
	{
		id: "6",
		brand: "Christian Dior",
		name: "Sauvage",
		description:
			"Una de las mejores fragancias que podrás encontrar sin duda alguna",
		price: 90,
		image: "/images/place-holder.jpg",
	},
	{
		id: "7",
		brand: "Christian Dior",
		name: "Sauvage",
		description:
			"Una de las mejores fragancias que podrás encontrar sin duda alguna",
		price: 90,
		image: "/images/place-holder.jpg",
	},
	{
		id: "8",
		brand: "Christian Dior",
		name: "Sauvage",
		description:
			"Una de las mejores fragancias que podrás encontrar sin duda alguna",
		price: 90,
		image: "/images/place-holder.jpg",
	},
]

export default function HomeSellers() {
	return (
		<div className="flex flex-col gap-1">
			<p className="text-2xl">Fragancias Más Vendidas</p>
			<StandardCarouselProvider>
				<StandardCarousel
					items={sales}
					dimension="100vw"
					className="pl-4"
					itemsStyles="basis-1/2 xs:basis-1/3 md:basis-1/4 lg:basis-1/4"
					renderCard={item => <PerfurmCard perfum={item} />}
				/>
			</StandardCarouselProvider>
		</div>
	)
}

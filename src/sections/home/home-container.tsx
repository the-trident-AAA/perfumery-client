import React from "react"
import HomeBanner from "@/src/sections/home/components/home-banner/home-banner"
import HomePromotionsCarousel from "@/src/sections/home/components/home-promotions-carousel/home-promotions-carousel"
import HomePerfumeGroups from "@/src/sections/home/components/home-perfume-groups/home-perfume-groups"
import HomeOffers from "@/src/sections/home/components/home-offers/home-offers"

const data = [
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

export default function HomeContainer() {
	return (
		<div className="w-full flex flex-col gap-4">
			<HomeBanner />
			<HomeOffers />
			<HomePromotionsCarousel title="Perfumes más Vendidos" data={data} />
			<HomePerfumeGroups />
		</div>
	)
}

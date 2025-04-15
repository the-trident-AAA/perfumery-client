import PerfurmCard from "@/src/components/perfum-card/perfum-card"
import PerfumesFilters from "@/src/sections/perfums/filters/perfumes-filters"
import React from "react"

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

export default function PerfumesContainer() {
	return (
		<div className="flex justify-center gap-6">
			<div className="hidden lg:flex max-w-[300px]">
				<PerfumesFilters />
			</div>
			<div className="flex flex-col gap-2">
				<p className="text-lg sm:text-3xl font-semibold mb-6 text-gray-800">
					Perfumes de la Tienda
				</p>
				{data.length > 0 ? (
					<div className="grid grid-cols-2 2xs:grid-cols-3 xl:grid-cols-4 gap-6">
						{data.map(data => (
							<PerfurmCard key={data.id} perfum={data} />
						))}
					</div>
				) : (
					"no data"
				)}
			</div>
		</div>
	)
}

import PerfumeGroupCard from "@/src/sections/home/components/home-perfume-groups/components/perfume-group-card/perfume-group-card"
import React from "react"

const groups = [
	{
		id: 1,
		name: "Diseñador",
		image: "/images/place-holder.jpg",
	},
	{
		id: 2,
		name: "Árabe",
		image: "/images/place-holder.jpg",
	},
	{
		id: 3,
		name: "Nicho",
		image: "/images/place-holder.jpg",
	},
	{
		id: 4,
		name: "Nacional",
		image: "/images/place-holder.jpg",
	},
]

export default function HomePerfumeGroups() {
	return (
		<div className="flex flex-col gap-4">
			<p className="text-2xl">Grupos de Perfume</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
				{groups.map((group, index) => (
					<PerfumeGroupCard key={index} perfumeGroup={group} />
				))}
			</div>
		</div>
	)
}

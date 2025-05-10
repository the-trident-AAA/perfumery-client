import { getPerfumeTypesList } from "@/src/lib/services/perfume-types"
import PerfumeGroupCard from "@/src/sections/home/components/home-perfume-groups/components/perfume-group-card/perfume-group-card"
import React from "react"

export default async function PerfumeGroupsList() {
	const res = await getPerfumeTypesList({})
	if (!res.response || res.error)
		throw new Error("Error fetching perfume types")

	const groups = res.response
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
			{groups.map((group, index) => (
				<PerfumeGroupCard key={index} perfumeGroup={group} />
			))}
		</div>
	)
}

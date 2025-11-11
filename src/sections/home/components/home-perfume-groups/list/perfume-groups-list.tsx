import EmptyContent from "@/src/components/empty-content/empty-content"
import { getPerfumeTypesList } from "@/src/lib/services/perfume-types"
import PerfumeGroupCard from "@/src/sections/home/components/home-perfume-groups/components/perfume-group-card/perfume-group-card"
import React from "react"

export default async function PerfumeGroupsList() {
	const res = await getPerfumeTypesList({})
	if (!res.response || res.error)
		throw new Error("Error fetching perfume types")

	const groups = res.response
	return groups.length > 0 ? (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4 sm:px-12 xl:mx-auto lg:max-w-6xl 2xl:max-w-7xl">
			{groups.map((group, index) => (
				<PerfumeGroupCard key={index} perfumeGroup={group} />
			))}
		</div>
	) : (
		<EmptyContent
			title="No hay información de grupos disponibles"
			description="No se han definido de momento grupos"
		/>
	)
}

import EmptyContent from "@/src/components/empty-content/empty-content"
import { getPerfumesList } from "@/src/lib/services/perfumes"
import PerfurmeCard from "@/src/sections/perfumes/components/perfume-card/perfume-card"
import React from "react"

export default async function PerfumesList() {
	const res = await getPerfumesList({})

	if (!res.response || res.error) throw new Error("Error fetching perfumes")

	const perfumes = res.response
	return perfumes.length > 0 ? (
		<div className="grid grid-cols-2 2xs:grid-cols-3 xl:grid-cols-4 gap-6">
			{perfumes.map(perfume => (
				<PerfurmeCard key={perfume.id} perfume={perfume} />
			))}
		</div>
	) : (
		<EmptyContent
			title="No hay perfumes disponibles"
			description="De momento la tienda no cuenta con perfumes para ofrecer"
		/>
	)
}

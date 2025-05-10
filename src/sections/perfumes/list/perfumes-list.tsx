import PerfurmCard from "@/src/components/perfum-card/perfum-card"
import { getPerfumesList } from "@/src/lib/services/perfumes"
import React from "react"

export default async function PerfumesList() {
	const res = await getPerfumesList({})

	if (!res.response || res.error) throw new Error("Error fetching perfumes")

	const perfumes = res.response
	return (
		<div className="grid grid-cols-2 2xs:grid-cols-3 xl:grid-cols-4 gap-6">
			{perfumes.map(perfume => (
				<PerfurmCard key={perfume.id} perfume={perfume} />
			))}
		</div>
	)
}

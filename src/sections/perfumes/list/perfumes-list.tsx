import EmptyContent from "@/src/components/empty-content/empty-content"
import { getPerfumesList } from "@/src/lib/services/perfumes"
import { SearchParamsPagination } from "@/src/lib/types/pagination"
import PerfumeCard from "@/src/sections/perfumes/components/perfume-card/perfume-card"

import React from "react"

interface Props {
	searchParams: SearchParamsPagination
}

export default async function PerfumesList({ searchParams }: Props) {
	const res = await getPerfumesList(searchParams)

	if (!res.response || res.error) throw new Error("Error fetching perfumes")

	const perfumes = res.response.data
	return perfumes.length > 0 ? (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
			{perfumes.map(perfume => (
				<PerfumeCard key={perfume.id} perfume={perfume} />
			))}
		</div>
	) : (
		<EmptyContent
			title="No hay perfumes disponibles"
			description="De momento la tienda no cuenta con perfumes para ofrecer"
		/>
	)
}

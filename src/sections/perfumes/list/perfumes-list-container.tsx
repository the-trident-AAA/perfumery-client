import { getPerfumesList } from "@/src/lib/services/perfumes"
import { SearchParamsPagination } from "@/src/lib/types/pagination"
import PerfumesList from "@/src/sections/perfumes/list/perfumes-list"

import React from "react"

interface Props {
	searchParams: SearchParamsPagination
}

export default async function PerfumesListContainer({ searchParams }: Props) {
	const res = await getPerfumesList(searchParams)

	if (!res.response || res.error) throw new Error("Error fetching perfumes")

	const perfumes = res.response.data
	const pagination = res.response.paginationMeta
	return <PerfumesList perfumes={perfumes} apiPagination={pagination} />
}

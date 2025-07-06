import { SearchParamsPagination } from "@/src/lib/types/pagination"
import PerfumesContainer from "@/src/sections/perfumes/perfumes-container"
import React from "react"

export const revalidate = 60

type Props = {
	searchParams: Promise<SearchParamsPagination>
}

export default async function PerfumesPage({ searchParams }: Props) {
	return <PerfumesContainer searchParams={await searchParams} />
}

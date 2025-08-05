"use client"
import SorterComponent from "@/src/components/sorter-component/sorter-component"
import useUrlFilters from "@/src/lib/hooks/use-url-filters"
import React from "react"

export default function PerfumesOrderContainer() {
	const { updateFiltersInUrl } = useUrlFilters()
	return (
		<SorterComponent
			sortOptions={[
				{
					key: "name",
					label: "Nombre",
					type: "string",
				},
				{
					key: "price",
					label: "Precio",
					type: "number",
				},
				{
					key: "milliliters",
					label: "Mililitros",
					type: "number",
				},
			]}
			defaultSort="name"
			onSortChange={(sortKey: string, direction: "asc" | "desc") => {
				updateFiltersInUrl({
					orderBy: sortKey,
					order: direction.toLocaleUpperCase(),
				})
			}}
		/>
	)
}

"use client"
import SheetFilters from "@/src/components/filters/sheet-filters"
import SidePanelFilters from "@/src/components/filters/side-panel-filters"
import { useBreakpoint } from "@/src/lib/hooks/screen/use-breakpoint"
import PerfumesFilters from "@/src/sections/perfums/filters/perfumes-filters/perfumes-filters"
import React from "react"

export default function PerfumesFiltersContainer() {
	const breakpoint = useBreakpoint()
	return (
		<div className="">
			{breakpoint === "lg" ||
			breakpoint === "md" ||
			breakpoint === "sm" ||
			breakpoint === "xs" ? (
				<SheetFilters title="Filtros de Perfumes">
					<PerfumesFilters />
				</SheetFilters>
			) : (
				<SidePanelFilters title="Filtros de Perfumes">
					<PerfumesFilters />
				</SidePanelFilters>
			)}
		</div>
	)
}

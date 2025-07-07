"use client"
import SheetFilters from "@/src/components/filters/sheet-filters"
import SidePanelFilters from "@/src/components/filters/side-panel-filters"
import { useBreakpoint } from "@/src/lib/hooks/screen/use-breakpoint"
import useBrands from "@/src/sections/brands/hooks/use-brands"
import useOffers from "@/src/sections/offers/hooks/use-offers"
import usePerfumeTypes from "@/src/sections/perfume-types/hooks/use-perfume-types"
import usePerfumesFilters from "@/src/sections/perfumes/filters/hooks/use-perfumes-filters"
import PerfumesFilters from "@/src/sections/perfumes/filters/perfumes-filters/perfumes-filters"
import useScents from "@/src/sections/scents/hooks/use-scents"
import { useSearchParams } from "next/navigation"
import React, { useEffect } from "react"

export default function PerfumesFiltersContainer() {
	const breakpoint = useBreakpoint()
	const searchParams = useSearchParams()
	const {
		filters,
		setFilters,
		handleChangeFilters,
		handleResetFilters,
		getActiveFiltersCount,
	} = usePerfumesFilters({})
	const { brands, loadingData: loadingBrands } = useBrands()
	const { perfumeTypes, loadingData: loadingPerfumeTypes } = usePerfumeTypes()
	const { scents, loadingData: loadingScents } = useScents()
	const { offers, loadingData: loadingOffers } = useOffers()

	useEffect(() => {
		const nameParam = searchParams.get("name")
		setFilters(oldFilters => ({ ...oldFilters, name: nameParam || "" }))
	}, [searchParams])

	return (
		<div>
			{breakpoint === "lg" ||
			breakpoint === "md" ||
			breakpoint === "sm" ||
			breakpoint === "xs" ? (
				<SheetFilters title="Filtros de Perfumes">
					<PerfumesFilters
						filters={filters}
						brands={{ data: brands, loading: loadingBrands }}
						perfumeTypes={{
							data: perfumeTypes,
							loading: loadingPerfumeTypes,
						}}
						scents={{ data: scents, loading: loadingScents }}
						offers={{ data: offers, loading: loadingOffers }}
						handleChangeFilters={handleChangeFilters}
					/>
				</SheetFilters>
			) : (
				<SidePanelFilters title="Filtros de Perfumes">
					<PerfumesFilters
						filters={filters}
						brands={{ data: brands, loading: loadingBrands }}
						perfumeTypes={{
							data: perfumeTypes,
							loading: loadingPerfumeTypes,
						}}
						scents={{ data: scents, loading: loadingScents }}
						offers={{ data: offers, loading: loadingOffers }}
						handleChangeFilters={handleChangeFilters}
					/>
				</SidePanelFilters>
			)}
		</div>
	)
}

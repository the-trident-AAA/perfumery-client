"use client"
import SheetFilters from "@/src/components/filters/sheet-filters"
import SidePanelFilters from "@/src/components/filters/side-panel-filters"
import { Button } from "@/src/components/ui/button"
import SheetContainer from "@/src/components/ui/sheet-container"
import { useBreakpoint } from "@/src/lib/hooks/screen/use-breakpoint"
import useBrands from "@/src/sections/brands/hooks/use-brands"
import useOffers from "@/src/sections/offers/hooks/use-offers"
import usePerfumeTypes from "@/src/sections/perfume-types/hooks/use-perfume-types"
import usePerfumesFilters from "@/src/sections/perfumes/filters/hooks/use-perfumes-filters"
import PerfumesFilters from "@/src/sections/perfumes/filters/perfumes-filters/perfumes-filters"
import useScents from "@/src/sections/scents/hooks/use-scents"
import { SlidersHorizontal } from "lucide-react"
import React from "react"

export default function PerfumesFiltersContainer() {
	const breakpoint = useBreakpoint()

	const {
		filters,
		handleChangeFilters,
		handleResetFilters,
		getActiveFiltersCount,
	} = usePerfumesFilters({})
	const {
		brands,
		loadingData: loadingBrands,
		filters: brandFilters,
		handleChangeFilters: handleChangeFiltersBrands,
	} = useBrands()
	const {
		perfumeTypes,
		loadingData: loadingPerfumeTypes,
		filters: perfumeTypesFilters,
		handleChangeFilters: handleChangeFiltersPerfumeTypes,
	} = usePerfumeTypes()
	const {
		scents,
		loadingData: loadingScents,
		filters: scentsFilters,
		handleChangeFilters: handleChangeFiltersScents,
	} = useScents()
	const {
		offers,
		loadingData: loadingOffers,
		filters: offersFilters,
		handleChangeFilters: handleChangeFiltersOffers,
	} = useOffers()

	return (
		<div>
			{breakpoint === "lg" ||
			breakpoint === "md" ||
			breakpoint === "sm" ||
			breakpoint === "xs" ? (
				<SheetContainer
					title="Filtros de Perfumes"
					trigger={
						<Button
							variant={"secondary"}
							className="flex text-primary items-center gap-2"
						>
							{" "}
							<SlidersHorizontal /> Filtros
						</Button>
					}
				>
					<PerfumesFilters
						filters={filters}
						brands={{
							data: brands,
							loading: loadingBrands,
							filters: brandFilters,
							handleChangeFilters: handleChangeFiltersBrands,
						}}
						perfumeTypes={{
							data: perfumeTypes,
							loading: loadingPerfumeTypes,
							filters: perfumeTypesFilters,
							handleChangeFilters:
								handleChangeFiltersPerfumeTypes,
						}}
						scents={{
							data: scents,
							loading: loadingScents,
							filters: scentsFilters,
							handleChangeFilters: handleChangeFiltersScents,
						}}
						offers={{
							data: offers,
							loading: loadingOffers,
							filters: offersFilters,
							handleChangeFilters: handleChangeFiltersOffers,
						}}
						handleChangeFilters={handleChangeFilters}
					/>
				</SheetContainer>
			) : (
				<SidePanelFilters title="Filtros de Perfumes">
					<PerfumesFilters
						filters={filters}
						brands={{
							data: brands,
							loading: loadingBrands,
							filters: brandFilters,
							handleChangeFilters: handleChangeFiltersBrands,
						}}
						perfumeTypes={{
							data: perfumeTypes,
							loading: loadingPerfumeTypes,
							filters: perfumeTypesFilters,
							handleChangeFilters:
								handleChangeFiltersPerfumeTypes,
						}}
						scents={{
							data: scents,
							loading: loadingScents,
							filters: scentsFilters,
							handleChangeFilters: handleChangeFiltersScents,
						}}
						offers={{
							data: offers,
							loading: loadingOffers,
							filters: offersFilters,
							handleChangeFilters: handleChangeFiltersOffers,
						}}
						handleChangeFilters={handleChangeFilters}
					/>
				</SidePanelFilters>
			)}
		</div>
	)
}

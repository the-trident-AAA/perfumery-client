"use client"
import React, { createContext } from "react"
import usePerfumesFilters, {
	PerfumesFilters,
} from "@/src/sections/perfumes/filters/hooks/use-perfumes-filters"

interface Props {
	filters: PerfumesFilters
	getActiveFiltersCount: () => number
	handleChangeFilters: (
		updatedFilters: Partial<PerfumesFilters>,
	) => Promise<void>
	handleResetFilters: () => void
}

const defaultProps: Props = {
	filters: {
		priceRange: [0, 1000],
		millilitersRange: [0, 100],
		scentsIds: [],
	},
	getActiveFiltersCount: () => {
		throw new Error("getActiveFiltersCount no está definido.")
	},
	handleChangeFilters: () => {
		throw new Error("handleChangeFilters no está definido.")
	},
	handleResetFilters: () => {
		throw new Error("handleResetFilters no está definido.")
	},
}

export const PerfumesFiltersContext = createContext<Props>(defaultProps)

export function PerfumesFiltersProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const {
		filters,
		getActiveFiltersCount,
		handleChangeFilters,
		handleResetFilters,
	} = usePerfumesFilters({})

	return (
		<PerfumesFiltersContext.Provider
			value={{
				filters,
				getActiveFiltersCount,
				handleChangeFilters,
				handleResetFilters,
			}}
		>
			{children}
		</PerfumesFiltersContext.Provider>
	)
}

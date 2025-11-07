"use client"

import { Checkbox } from "@/src/components/ui/checkbox"
import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import {
	Search,
	AlertCircleIcon,
	X,
	ArrowDownAZ,
	ArrowUpZA,
} from "lucide-react"
import React from "react"

interface Option {
	value: string
	label: string
}

interface Props {
	id: string
	label?: string
	values: string[]
	options: Option[]
	handleValuesChange: (value: string, checked: boolean) => void
	handleDeselectAll?: () => void
	loading?: boolean
	filterValue?: string
	onFilterChange?: (value: string) => void
	filterPlaceholder?: string
	emptyText?: string
	deselectAllText?: string
	sortDirection?: "ASC" | "DESC"
	onSortChange?: (direction: "ASC" | "DESC") => void
}

export default function ListInput({
	id,
	label,
	values,
	options,
	handleValuesChange,
	handleDeselectAll,
	loading = false,
	filterValue,
	onFilterChange,
	filterPlaceholder = "Buscar...",
	emptyText = "No hay opciones disponibles",
	deselectAllText = "Deseleccionar todos",
	sortDirection = "ASC",
	onSortChange,
}: Props) {
	// Filtrado local si no se pasa onFilterChange
	const filteredOptions = onFilterChange
		? options
		: options.filter(opt =>
				opt.label
					.toLowerCase()
					.includes((filterValue || "").toLowerCase()),
			)

	// Ordenamiento local si no se pasa handler externo
	const sortedOptions = onSortChange
		? filteredOptions
		: [...filteredOptions].sort((a, b) =>
				sortDirection === "ASC"
					? a.label.localeCompare(b.label)
					: b.label.localeCompare(a.label),
			)

	// Verificar si hay elementos seleccionados
	const hasSelectedItems = values.length > 0

	const handleSortToggle = () => {
		const next = sortDirection === "ASC" ? "DESC" : "ASC"
		onSortChange?.(next)
	}

	return (
		<div className="space-y-3">
			{label && <Label className="text-secondary">{label}</Label>}

			<div className="overflow-hidden border rounded-md">
				{/* Input de búsqueda con botón de orden */}
				{onFilterChange && (
					<div className="p-2 sticky top-0 z-10 border-b flex items-center gap-2">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder={filterPlaceholder}
								value={filterValue || ""}
								onChange={e => onFilterChange(e.target.value)}
								className="pl-10 pr-9"
							/>
						</div>

						{/* Botón de ordenamiento */}
						{onSortChange && (
							<Button
								type="button"
								size={"icon"}
								variant={"secondary"}
								onClick={handleSortToggle}
								className="flex-shrink-0 p-2 rounded-md text-primary transition"
								title={
									sortDirection === "ASC"
										? "Ordenar Z→A"
										: "Ordenar A→Z"
								}
							>
								{sortDirection === "ASC" ? (
									<ArrowDownAZ className="h-4 w-4" />
								) : (
									<ArrowUpZA className="h-4 w-4" />
								)}
							</Button>
						)}
					</div>
				)}

				{/* Botón para deseleccionar todos */}
				{hasSelectedItems && handleDeselectAll && (
					<div className="px-4 py-2 border-b bg-muted/30">
						<Button
							type="button"
							variant="secondary"
							size="sm"
							onClick={handleDeselectAll}
							className="w-full justify-start items-center text-primary gap-2 text-sm h-7"
						>
							<X className="h-3 w-3" />
							{deselectAllText}
						</Button>
					</div>
				)}

				{/* Lista de opciones */}
				{loading ? (
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-4 gap-x-2 overflow-y-auto max-h-[208px] px-4 py-3">
						{[...Array(18)].map((_, index) => (
							<div
								key={index}
								className="flex items-center space-x-2"
							>
								<div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
								<div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
							</div>
						))}
					</div>
				) : sortedOptions.length > 0 ? (
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-4 gap-x-2 overflow-y-auto max-h-[208px] px-4 py-3">
						{sortedOptions.map((option, index) => (
							<div
								key={index}
								className="flex items-center gap-2 min-w-0"
							>
								<Checkbox
									id={`${id}-${option.value}`}
									checked={values.includes(option.value)}
									onCheckedChange={checked =>
										handleValuesChange(
											option.value,
											checked as boolean,
										)
									}
								/>
								<Label
									htmlFor={`${id}-${option.value}`}
									className="text-sm text-secondary font-normal leading-tight cursor-pointer min-w-0 block truncate"
									title={option.label}
								>
									{option.label}
								</Label>
							</div>
						))}
					</div>
				) : (
					<div className="flex items-center gap-2 p-3 text-sm text-muted-foreground">
						<AlertCircleIcon className="h-4 w-4" />
						{emptyText}
					</div>
				)}
			</div>
		</div>
	)
}

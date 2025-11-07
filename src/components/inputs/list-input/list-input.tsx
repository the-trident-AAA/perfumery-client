"use client"

import { Checkbox } from "@/src/components/ui/checkbox"
import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { Search, AlertCircleIcon, X } from "lucide-react"
import React, { useEffect, useRef } from "react"

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
}: Props) {
	const inputRef = useRef<HTMLInputElement>(null)

	// Autofocus del input cuando hay onFilterChange
	useEffect(() => {
		if (onFilterChange && inputRef.current) {
			setTimeout(() => inputRef.current?.focus(), 100)
		}
	}, [onFilterChange])

	// Filtrado local si no se pasa onFilterChange
	const filteredOptions = onFilterChange
		? options
		: options.filter(opt =>
				opt.label
					.toLowerCase()
					.includes((filterValue || "").toLowerCase()),
			)

	// Verificar si hay elementos seleccionados para mostrar el botón
	const hasSelectedItems = values.length > 0

	return (
		<div className="space-y-3">
			{label && <Label className="text-secondary">{label}</Label>}

			{/* Cargando */}

			<div className="overflow-hidden">
				{/* Input de búsqueda */}
				{onFilterChange && (
					<div className="p-2 sticky top-0 z-10">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								ref={inputRef}
								placeholder={filterPlaceholder}
								value={filterValue || ""}
								onChange={e => onFilterChange(e.target.value)}
								className="pl-10"
								onKeyDown={e => {
									if (e.key === "Escape")
										inputRef.current?.blur()
								}}
							/>
						</div>
					</div>
				)}

				{/* Botón para deseleccionar todos */}
				{hasSelectedItems && handleDeselectAll && (
					<div className="px-4 py-2 border-b">
						<Button
							type="button"
							variant="secondary"
							size="sm"
							onClick={handleDeselectAll}
							className="w-full justify-start items-center text-primary gap-2 text-sm lg:text-sm xl:text-sm h-7 lg:h-7 xl:h-7"
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
				) : filteredOptions.length > 0 ? (
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-4 gap-x-2 overflow-y-auto max-h-[208px] px-4 py-3">
						{filteredOptions.map((option, index) => (
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

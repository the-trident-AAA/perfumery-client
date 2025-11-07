"use client"

import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import {
	Search,
	ChevronDown,
	XIcon,
	AlertCircleIcon,
	ArrowDownAZ,
	ArrowUpZA,
} from "lucide-react"
import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/src/lib/utils/utils"
import { Button } from "@/src/components/ui/button"

interface Option {
	label: string
	value: string
}

interface Props {
	label?: string
	labelClassName?: string
	placeHolder?: string
	value?: string
	onValueChange?: (value: string) => void
	options: Option[]
	loading?: boolean
	clearable?: {
		handleClear: () => void
	}
	fullWidth?: boolean
	emptyText?: string
	filterValue?: string
	onFilterChange?: (value: string) => void
	filterPlaceholder?: string
	sortDirection?: "ASC" | "DESC"
	onSortChange?: (direction: "ASC" | "DESC") => void
}

export default function SelectInput({
	label,
	labelClassName,
	placeHolder = "Selecciona un elemento",
	value,
	onValueChange,
	options,
	loading = false,
	clearable,
	fullWidth = true,
	emptyText = "No hay datos",
	filterValue,
	onFilterChange,
	filterPlaceholder = "Buscar...",
	sortDirection = "ASC",
	onSortChange,
}: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const selectRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	// Opción seleccionada
	const selectedOption = options.find(opt => opt.value === value)

	// Cerrar dropdown al hacer click fuera
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () =>
			document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	// Focus en el input de búsqueda al abrir
	useEffect(() => {
		if (isOpen && onFilterChange && inputRef.current) {
			setTimeout(() => inputRef.current?.focus(), 100)
		}
	}, [isOpen, onFilterChange])

	// Filtrado local si no se pasa `onFilterChange`
	const filteredOptions = onFilterChange
		? options
		: options.filter(opt =>
				opt.label
					.toLowerCase()
					.includes((filterValue || "").toLowerCase()),
			)

	// Aplicar ordenamiento local si no se pasa handler
	const sortedOptions = onSortChange
		? filteredOptions
		: [...filteredOptions].sort((a, b) =>
				sortDirection === "ASC"
					? a.label.localeCompare(b.label)
					: b.label.localeCompare(a.label),
			)

	const handleSelect = (val: string) => {
		onValueChange?.(val)
		setIsOpen(false)
	}

	const handleSortToggle = () => {
		const next = sortDirection === "ASC" ? "DESC" : "ASC"
		onSortChange?.(next)
	}

	return (
		<div className={cn("space-y-2", fullWidth && "w-full")} ref={selectRef}>
			{label && <Label className={labelClassName}>{label}</Label>}

			<div className="relative">
				{/* Trigger principal */}
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					disabled={loading}
					className={cn(
						"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
						fullWidth && "w-full",
						!selectedOption && "text-muted-foreground",
					)}
				>
					<span>
						{loading
							? "Cargando..."
							: selectedOption
								? selectedOption.label
								: placeHolder}
					</span>
					<ChevronDown className="h-4 w-4 opacity-50" />
				</button>

				{/* Dropdown personalizado */}
				{isOpen && (
					<div className="absolute z-50 w-full mt-1 border border-input bg-background rounded-md shadow-md max-h-60 overflow-auto">
						{/* 🔍 Input de búsqueda con botón de orden */}
						{onFilterChange && (
							<div className="p-2 border-b flex items-center gap-2">
								<div className="relative flex-1">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
									<Input
										ref={inputRef}
										placeholder={filterPlaceholder}
										value={filterValue || ""}
										onChange={e =>
											onFilterChange(e.target.value)
										}
										className="pl-10 pr-9"
										onKeyDown={e => {
											if (e.key === "Escape")
												setIsOpen(false)
										}}
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

						{/* Lista de opciones */}
						<div className="py-1">
							{sortedOptions.length > 0 ? (
								sortedOptions.map(option => (
									<button
										key={option.value}
										type="button"
										onClick={() =>
											handleSelect(option.value)
										}
										className={cn(
											"relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
											value === option.value &&
												"bg-accent text-accent-foreground",
										)}
									>
										<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
											{value === option.value && (
												<span className="h-2 w-2 rounded-full bg-current" />
											)}
										</span>
										{option.label}
									</button>
								))
							) : (
								<div className="flex gap-2 p-2 text-sm text-muted-foreground">
									<AlertCircleIcon className="h-4 w-4" />
									{emptyText}
								</div>
							)}
						</div>
					</div>
				)}

				{/* Botón clear */}
				{clearable && value && (
					<button
						type="button"
						onClick={clearable.handleClear}
						className="absolute right-8 top-1/2 -translate-y-1/2 rounded-sm p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
						title="Limpiar selección"
					>
						<XIcon className="h-4 w-4" />
					</button>
				)}
			</div>
		</div>
	)
}

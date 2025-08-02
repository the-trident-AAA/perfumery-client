"use client"

import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import SelectInput from "@/src/components/inputs/select-input/select-input"

interface PaginationProps {
	currentPage: number
	totalPages: number
	totalItems: number
	itemsPerPage: number
	onPageChange: (page: number) => void
	onItemsPerPageChange: (itemsPerPage: string) => void
	itemsPerPageOptions?: number[]
	showItemsPerPage?: boolean
	showTotalItems?: boolean
	maxVisiblePages?: number
}

export default function CustomPagination({
	currentPage,
	totalPages,
	totalItems,
	itemsPerPage,
	onPageChange,
	onItemsPerPageChange,
	itemsPerPageOptions = [5, 10, 20, 50],
	showItemsPerPage = true,
	showTotalItems = true,
	maxVisiblePages = 5,
}: PaginationProps) {
	// Calcular el rango de elementos mostrados
	const startItem = (currentPage - 1) * itemsPerPage + 1
	const endItem = Math.min(currentPage * itemsPerPage, totalItems)

	// Generar números de página visibles - Adaptativo para móvil
	const getVisiblePages = () => {
		const pages: (number | string)[] = []
		// Reducir páginas visibles en móvil
		const isMobile =
			typeof window !== "undefined" && window.innerWidth < 640
		const visibleCount = isMobile ? 3 : maxVisiblePages

		if (totalPages <= visibleCount) {
			// Si hay pocas páginas, mostrar todas
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i)
			}
		} else {
			const halfVisible = Math.floor(visibleCount / 2)

			if (currentPage <= halfVisible + 1) {
				// Mostrar páginas del inicio
				for (let i = 1; i <= visibleCount - 1; i++) {
					pages.push(i)
				}
				if (totalPages > visibleCount) {
					pages.push("...")
					pages.push(totalPages)
				}
			} else if (currentPage >= totalPages - halfVisible) {
				// Mostrar páginas del final
				pages.push(1)
				if (totalPages > visibleCount) {
					pages.push("...")
				}
				for (
					let i = totalPages - visibleCount + 2;
					i <= totalPages;
					i++
				) {
					pages.push(i)
				}
			} else {
				// Mostrar páginas del medio
				pages.push(1)
				pages.push("...")
				for (
					let i = currentPage - halfVisible + 1;
					i <= currentPage + halfVisible - 1;
					i++
				) {
					pages.push(i)
				}
				pages.push("...")
				pages.push(totalPages)
			}
		}

		return pages
	}

	const visiblePages = getVisiblePages()

	return (
		<div className="flex relative flex-col gap-4 p-3 sm:p-4 bg-gradient-to-br from-primary via-primary/90 to-primary/80 border rounded-lg shadow-sm">
			{/* Información de elementos - Solo en desktop */}
			{showTotalItems && (
				<div className="hidden sm:block font-semibold text-sm sm:text-base text-secondary text-center sm:text-left">
					Mostrando {startItem} - {endItem} de {totalItems} elementos
				</div>
			)}

			{/* Controles principales de paginación */}
			<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
				{/* Información compacta para móvil */}
				{showTotalItems && (
					<div className="sm:hidden text-xs text-secondary text-center">
						{startItem}-{endItem} de {totalItems}
					</div>
				)}

				{/* Navegación de páginas */}
				<div className="flex items-center gap-1 sm:gap-2 order-2 sm:order-1">
					{/* Botón primera página - Solo desktop */}
					<Button
						variant="secondary"
						size="sm"
						onClick={() => onPageChange(1)}
						disabled={currentPage === 1}
						className="hidden text-primary lg:flex h-8 w-8 p-0"
						title="Primera página"
					>
						<ChevronsLeft className="h-3 w-3" />
					</Button>

					{/* Botón página anterior */}
					<Button
						variant="secondary"
						size="sm"
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="h-8 text-primary px-2 sm:px-3"
						title="Página anterior"
					>
						<ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
						<span className="hidden md:inline ml-1 text-xs sm:text-sm">
							Anterior
						</span>
					</Button>

					{/* Números de página - Adaptativo */}
					<div className="flex items-center gap-0.5 sm:gap-1">
						{visiblePages.map((page, index) => (
							<div key={index}>
								{page === "..." ? (
									<span className="px-1 sm:px-2 py-2 text-gray-400  text-xs sm:text-sm">
										...
									</span>
								) : (
									<Button
										variant={
											currentPage === page
												? "secondary"
												: "outline"
										}
										size="sm"
										onClick={() =>
											onPageChange(page as number)
										}
										className={`h-8 w-8  ${currentPage === page && "text-primary"} sm:min-w-[40px] p-0 text-xs sm:text-sm`}
										title={`Página ${page}`}
									>
										{page}
									</Button>
								)}
							</div>
						))}
					</div>

					{/* Botón página siguiente */}
					<Button
						variant="secondary"
						size="sm"
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="h-8 text-primary  px-2 sm:px-3"
						title="Página siguiente"
					>
						<span className="hidden md:inline mr-1 text-xs sm:text-sm">
							Siguiente
						</span>
						<ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
					</Button>

					{/* Botón última página - Solo desktop */}
					<Button
						variant="secondary"
						size="sm"
						onClick={() => onPageChange(totalPages)}
						disabled={currentPage === totalPages}
						className="hidden lg:flex text-primary h-8 w-8 p-0"
						title="Última página"
					>
						<ChevronsRight className="h-3 w-3" />
					</Button>
				</div>

				{/* Selector de elementos por página */}
				{showItemsPerPage && (
					<div className="flex items-center gap-2 text-xs sm:text-sm order-1 sm:order-2">
						<SelectInput
							label="Elementos por página"
							labelClassName="text-secondary text-sm sm:text-base font-semibold"
							value={String(itemsPerPage)}
							onValueChange={onItemsPerPageChange}
							options={itemsPerPageOptions.map(itemPerPage => ({
								value: String(itemPerPage),
								label: String(itemPerPage),
							}))}
						/>
					</div>
				)}
			</div>

			{/* Información adicional para móvil */}
			<div className="sm:hidden flex justify-center">
				<span className="text-xs text-gray-500">
					Página {currentPage} de {totalPages}
				</span>
			</div>
		</div>
	)
}

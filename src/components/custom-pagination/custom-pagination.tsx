import Link from "next/link"
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"

interface PaginationSSRProps {
	currentPage: number
	totalPages: number
	searchParams: { [key: string]: string | string[] | undefined }
	itemsPerPage: number
	itemsPerPageOptions?: number[]
	totalItems?: number
}

export default function CustomPaginationSSR({
	currentPage,
	totalPages,
	searchParams,
	itemsPerPage,
	itemsPerPageOptions = [5, 10, 20, 50],
	totalItems,
}: PaginationSSRProps) {
	// Build URL
	const buildUrl = (page: number, customLimit?: number) => {
		const params = new URLSearchParams()

		for (const key in searchParams) {
			if (key === "page" || key === "limit") continue
			const value = searchParams[key]
			if (!value) continue

			if (Array.isArray(value)) {
				value.forEach(v => params.append(key, v))
			} else {
				params.set(key, value)
			}
		}

		params.set("page", String(page))
		params.set("limit", String(customLimit ?? itemsPerPage))

		return `?${params.toString()}`
	}

	// Pages
	const getPages = () => {
		const pages: (number | string)[] = []
		const max = 5
		const half = Math.floor(max / 2)

		if (totalPages <= max) {
			for (let i = 1; i <= totalPages; i++) pages.push(i)
			return pages
		}

		if (currentPage <= half + 1) {
			for (let i = 1; i <= max - 1; i++) pages.push(i)
			pages.push("...", totalPages)
			return pages
		}

		if (currentPage >= totalPages - half) {
			pages.push(1, "...")
			for (let i = totalPages - (max - 2); i <= totalPages; i++)
				pages.push(i)
			return pages
		}

		pages.push(1, "...")
		for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
		pages.push("...", totalPages)

		return pages
	}

	const pages = getPages()

	// Cálculos (opcionales si envías totalItems)
	const startItem = totalItems ? (currentPage - 1) * itemsPerPage + 1 : null
	const endItem = totalItems
		? Math.min(currentPage * itemsPerPage, totalItems)
		: null

	return (
		<div className="flex relative flex-col gap-4 p-3 sm:p-4 bg-gradient-to-br from-primary via-primary/90 to-primary/80 border rounded-lg shadow-sm">
			{/* Info desktop */}
			{totalItems && (
				<div className="hidden sm:block font-semibold text-sm sm:text-base text-secondary text-center sm:text-left">
					Mostrando {startItem} - {endItem} de {totalItems} elementos
				</div>
			)}

			<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
				{/* Info móvil */}
				{totalItems && (
					<div className="sm:hidden text-xs text-secondary text-center">
						{startItem}-{endItem} de {totalItems}
					</div>
				)}

				{/* Controles */}
				<div className="flex items-center gap-1 sm:gap-2 order-2 sm:order-1">
					{/* Primera página */}
					{Number(currentPage) > 1 ? (
						<NavigationComponent href={buildUrl(1)}>
							<Button
								variant="secondary"
								size="sm"
								className="hidden text-primary lg:flex h-8 w-8 p-0"
							>
								<ChevronsLeft className="h-3 w-3" />
							</Button>
						</NavigationComponent>
					) : (
						<Button
							variant="secondary"
							size="sm"
							className="hidden text-primary lg:flex h-8 w-8 p-0"
							disabled
						>
							<ChevronsLeft className="h-3 w-3" />
						</Button>
					)}

					{/* Anterior */}
					{Number(currentPage) > 1 ? (
						<NavigationComponent href={buildUrl(currentPage - 1)}>
							<Button
								variant="secondary"
								size="sm"
								className="h-8 text-primary px-2 sm:px-3"
							>
								<ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
								<span className="hidden md:inline ml-1 text-xs sm:text-sm">
									Anterior
								</span>
							</Button>
						</NavigationComponent>
					) : (
						<Button
							variant="secondary"
							size="sm"
							disabled
							className="h-8 text-primary px-2 sm:px-3"
						>
							<ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
							<span className="hidden md:inline ml-1 text-xs sm:text-sm">
								Anterior
							</span>
						</Button>
					)}

					{/* Páginas */}
					<div className="flex items-center gap-0.5 sm:gap-1">
						{pages.map((p, i) =>
							p === "..." ? (
								<span
									key={i}
									className="px-1 sm:px-2 py-2 text-gray-300 text-xs sm:text-sm"
								>
									...
								</span>
							) : (
								<Button
									key={i}
									variant={
										p === currentPage
											? "secondary"
											: "outline"
									}
									size="sm"
									className={`h-8 w-8 ${
										p === currentPage && "text-primary"
									} sm:min-w-[40px] p-0 text-xs sm:text-sm`}
									asChild
									title={`Página ${p}`}
								>
									<Link href={buildUrl(p as number)}>
										{p}
									</Link>
								</Button>
							),
						)}
					</div>

					{/* Siguiente */}
					{Number(currentPage) < totalPages ? (
						<NavigationComponent href={buildUrl(currentPage + 1)}>
							<Button
								variant="secondary"
								size="sm"
								className="h-8 text-primary px-2 sm:px-3"
							>
								<span className="hidden md:inline mr-1 text-xs sm:text-sm">
									Siguiente
								</span>
								<ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
							</Button>
						</NavigationComponent>
					) : (
						<Button
							variant="secondary"
							size="sm"
							disabled
							className="h-8 text-primary px-2 sm:px-3"
						>
							<span className="hidden md:inline mr-1 text-xs sm:text-sm">
								Siguiente
							</span>
							<ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
						</Button>
					)}

					{/* Última página */}
					{Number(currentPage) < totalPages ? (
						<NavigationComponent href={buildUrl(totalPages)}>
							<Button
								variant="secondary"
								size="sm"
								className="hidden lg:flex text-primary h-8 w-8 p-0"
							>
								<ChevronsRight className="h-3 w-3" />
							</Button>
						</NavigationComponent>
					) : (
						<Button
							variant="secondary"
							size="sm"
							disabled
							className="hidden lg:flex text-primary h-8 w-8 p-0"
						>
							<ChevronsRight className="h-3 w-3" />
						</Button>
					)}
				</div>

				{/* Selector SSR items-per-page */}
				<div className="flex items-center gap-2 text-xs sm:text-sm order-1 sm:order-2">
					<span className="text-secondary font-semibold">
						Elementos por página:
					</span>

					<div className="flex gap-1">
						{itemsPerPageOptions.map(opt => (
							<Link
								key={opt}
								href={buildUrl(1, opt)}
								className={`px-2 py-1 border rounded text-xs sm:text-sm ${
									opt === itemsPerPage
										? "bg-secondary text-primary font-semibold"
										: "bg-white hover:bg-gray-100"
								}`}
							>
								{opt}
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* Info móvil abajo */}
			<div className="sm:hidden flex justify-center">
				<span className="text-xs text-secondary">
					Página {currentPage} de {totalPages}
				</span>
			</div>
		</div>
	)
}

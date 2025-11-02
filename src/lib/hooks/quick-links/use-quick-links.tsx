"use client"
import { paths } from "@/src/lib/routes/paths"
import usePerfumeTypes from "@/src/sections/perfume-types/hooks/use-perfume-types"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export interface QuickLink {
	label: string
	href: string
	isScrollReact: boolean
	children?: Omit<QuickLink, "children">[]
}

export default function useQuickLinks() {
	const pathname = usePathname()
	const { perfumeTypes, loadingData: loadingDataPerfumesType } =
		usePerfumeTypes()
	const quickLinks: QuickLink[] = useMemo(
		() =>
			[
				{
					label: "Inicio",
					href:
						pathname === paths.home.root
							? "home-hero"
							: paths.home.root + "#home-hero",
					isScrollReact: pathname === paths.home.root ? true : false,
				},
				{
					label: "Ofertas",
					href:
						pathname === paths.home.root
							? "home-offers"
							: paths.home.root + "#home-offers",
					isScrollReact: pathname === paths.home.root ? true : false,
				},
				{
					label: "Más vendidos",
					href:
						pathname === paths.home.root
							? "best-selling"
							: paths.home.root + "#best-selling",
					isScrollReact: pathname === paths.home.root ? true : false,
				},
				{
					label: "Tipos de Perfumes",
					href:
						pathname === paths.home.root
							? "home-perfume-groups"
							: paths.home.root + "#home-perfume-groups",
					isScrollReact: pathname === paths.home.root ? true : false,
				},
				{
					label: "Perfumes",
					href: paths.perfumes().root,
					isScrollReact: false,
				},
				{
					label: "Fragancias",
					href: paths.perfumes().root,
					isScrollReact: false,
					children: perfumeTypes.map(perfumeType => ({
						label: perfumeType.name,
						href: paths.perfumes({ perfumeTypeId: perfumeType.id })
							.root,
						isScrollReact: false,
					})),
				},
			] as QuickLink[],
		[pathname, paths],
	)

	return { quickLinks, pathname, loadingDataPerfumesType }
}

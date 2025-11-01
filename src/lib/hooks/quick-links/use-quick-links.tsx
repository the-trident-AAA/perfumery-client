"use client"
import { paths } from "@/src/lib/routes/paths"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export interface QuickLink {
	label: string
	href: string
	isScrollReact: boolean
}

export default function useQuickLinks() {
	const pathname = usePathname()

	const quickLinks: QuickLink[] = useMemo(
		() => [
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
		],
		[pathname, paths],
	)

	return { quickLinks, pathname }
}

"use client"

import type React from "react"
import {
	Home,
	ShoppingBag,
	TrendingUp,
	SprayCan,
	HandCoins,
} from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { Link as LinkScrollReact } from "react-scroll"
import { paths } from "@/src/lib/routes/paths"
import { usePathname } from "next/navigation"

interface QuickLink {
	icon: React.ReactNode
	label: string
	href: string
	isScrollReact: boolean
}

const HeaderQuickLinks = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const pathname = usePathname()

	const quickLinks: QuickLink[] = useMemo(
		() => [
			{
				icon: <Home className="h-4 w-4" />,
				label: "Inicio",
				href:
					pathname === paths.home.root
						? "home-hero"
						: paths.home.root + "#home-hero",
				isScrollReact: pathname === paths.home.root ? true : false,
			},
			{
				icon: <HandCoins className="h-4 w-4" />,
				label: "Ofertas",
				href:
					pathname === paths.home.root
						? "home-offers"
						: paths.home.root + "#home-offers",
				isScrollReact: pathname === paths.home.root ? true : false,
			},
			{
				icon: <TrendingUp className="h-4 w-4" />,
				label: "Más vendidos",
				href:
					pathname === paths.home.root
						? "best-selling"
						: paths.home.root + "#best-selling",
				isScrollReact: pathname === paths.home.root ? true : false,
			},
			{
				icon: <SprayCan className="h-4 w-4" />,
				label: "Tipos de Perfumes",
				href:
					pathname === paths.home.root
						? "home-perfume-groups"
						: paths.home.root + "#home-perfume-groups",
				isScrollReact: pathname === paths.home.root ? true : false,
			},
			{
				icon: <ShoppingBag className="h-4 w-4" />,
				label: "Ir a Comprar",
				href: paths.perfumes().root,
				isScrollReact: false,
			},
		],
		[pathname, paths],
	)

	return (
		<div className="relative">
			{/* Gradient overlay effect */}
			<div className="absolute inset-0 bg-primary pointer-events-none" />

			<nav className="relative bg-primary backdrop-blur-sm shadow-lg">
				<div className="px-4 sm:px-6 py-2">
					<div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 ">
						{quickLinks.map((link, index) =>
							link.isScrollReact ? (
								<LinkScrollReact
									key={index}
									to={link.href}
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									activeClass="active"
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
									className="group relative cursor-pointer flex items-center gap-1.5 transition-all duration-300 hover:scale-110"
								>
									<LinkContent
										link={link}
										index={index}
										hoveredIndex={hoveredIndex}
										pathname={pathname}
									/>
								</LinkScrollReact>
							) : (
								<Link
									key={index}
									href={link.href}
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
									className="group relative flex items-center gap-1.5 transition-all duration-300 hover:scale-110"
								>
									<LinkContent
										link={link}
										index={index}
										hoveredIndex={hoveredIndex}
										pathname={pathname}
									/>
								</Link>
							),
						)}
					</div>
				</div>
			</nav>
		</div>
	)
}

function LinkContent({
	link,
	index,
	hoveredIndex,
	pathname,
}: {
	link: QuickLink
	index: number
	hoveredIndex: number | null
	pathname: string
}) {
	return (
		<>
			{/* Icon container with gradient background on hover */}
			<div
				className={`relative  transition-all duration-300 bg-white/60`}
			>
				<div
					className={`transition-colors duration-300 text-text-secondary`}
				>
					{link.icon}
				</div>
			</div>

			{/* Label */}
			<span
				className={`text-xs sm:text-sm transition-all duration-300 text-center whitespace-nowrap ${
					hoveredIndex === index || pathname === link.href
						? "font-bold"
						: "text-secondary font-semibold"
				}`}
			>
				{link.label}
			</span>

			{/* Bottom indicator line */}
			<div
				className={`absolute -bottom-2 group-[.active]:w-full left-1/2 -translate-x-1/2 h-0.5 bg-secondary transition-all duration-300 ${
					hoveredIndex === index || pathname === link.href
						? "w-full"
						: "w-0"
				}`}
			/>
		</>
	)
}

export default HeaderQuickLinks

"use client"

import type React from "react"
import { Home, ShoppingBag, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Link as LinkScrollReact } from "react-scroll"
import { paths } from "@/src/lib/routes/paths"

interface QuickLink {
	icon: React.ReactNode
	label: string
	href: string
	isScrollReact: boolean
}

const quickLinks: QuickLink[] = [
	{
		icon: <Home className="h-4 w-4" />,
		label: "Inicio",
		href: "home-hero",
		isScrollReact: true,
	},
	{
		icon: <Home className="h-4 w-4" />,
		label: "Ofertas",
		href: "home-offers",
		isScrollReact: true,
	},
	{
		icon: <ShoppingBag className="h-4 w-4" />,
		label: "Más vendidos",
		href: "best-selling",
		isScrollReact: true,
	},
	{
		icon: <TrendingUp className="h-4 w-4" />,
		label: "Tipos de Perfumes",
		href: "home-perfume-groups",
		isScrollReact: true,
	},
	{
		icon: <Users className="h-4 w-4" />,
		label: "Perfumes",
		href: paths.perfumes().root,
		isScrollReact: false,
	},
]

const HeaderQuickLinks = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
}: {
	link: QuickLink
	index: number
	hoveredIndex: number | null
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
					hoveredIndex === index
						? "font-bold"
						: "text-secondary font-semibold"
				}`}
			>
				{link.label}
			</span>

			{/* Bottom indicator line */}
			<div
				className={`absolute -bottom-2 group-[.active]:w-full left-1/2 -translate-x-1/2 h-0.5 bg-secondary transition-all duration-300 ${
					hoveredIndex === index ? "w-full" : "w-0"
				}`}
			/>
		</>
	)
}

export default HeaderQuickLinks

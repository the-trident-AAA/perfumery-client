"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Link as LinkScrollReact } from "react-scroll"
import useQuickLinks, {
	QuickLink,
} from "@/src/lib/hooks/quick-links/use-quick-links"

const HeaderQuickLinks = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const { quickLinks, pathname } = useQuickLinks()

	return (
		<div className="relative">
			{/* Gradient overlay effect */}
			<div className="absolute inset-0 bg-secondary pointer-events-none" />

			<nav className="relative bg-secondary backdrop-blur-sm shadow-lg">
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
									className="group relative cursor-pointer flex flex-col-reverse 2xs:flex-row items-center gap-1.5 transition-all duration-300 hover:scale-110"
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
									className="group relative flex flex-col-reverse 2xs:flex-row items-center gap-1.5 transition-all duration-300 hover:scale-110"
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
			{/* Label */}
			<span
				className={`text-[10.5px] text-primary 2xs:text-xs sm:text-sm transition-all duration-300 text-center whitespace-nowrap ${
					hoveredIndex === index || pathname === link.href
						? "font-bold"
						: "font-semibold"
				}`}
			>
				{link.label}
			</span>

			{/* Bottom indicator line */}
			<div
				className={`absolute -bottom-2 group-[.active]:w-full left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
					hoveredIndex === index || pathname === link.href
						? "w-full"
						: "w-0"
				}`}
			/>
		</>
	)
}

export default HeaderQuickLinks

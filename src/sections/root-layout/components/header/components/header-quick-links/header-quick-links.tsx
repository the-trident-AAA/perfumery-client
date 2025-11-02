"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Link as LinkScrollReact } from "react-scroll"
import useQuickLinks, {
	QuickLink,
} from "@/src/lib/hooks/quick-links/use-quick-links"
import PopoverContainer from "@/src/components/ui/popover-container"

const HeaderQuickLinks = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const { quickLinks, loadingDataPerfumesType } = useQuickLinks()
	const quickLinksFiltered = quickLinks.filter(
		quickLink => quickLink.label !== "Perfumes",
	)

	return (
		<div className="relative">
			{/* Gradient overlay effect */}
			<div className="absolute inset-0 bg-secondary pointer-events-none" />

			<nav className="relative bg-secondary backdrop-blur-sm shadow-lg">
				<div className="px-4 sm:px-6 py-2">
					<div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 ">
						{quickLinksFiltered.map((link, index) =>
							!link.children ? (
								<LinkContainer
									key={index}
									index={index}
									link={link}
									hoveredIndex={hoveredIndex}
									setHoveredIndex={setHoveredIndex}
								/>
							) : (
								<PopoverContainer
									key={index}
									contentClassName="bg-secondary px-3.5 py-2.5 border-0 mt-2 w-full flex items-center gap-2"
									trigger={
										<div>
											<LinkContent
												link={link}
												index={index}
												hoveredIndex={hoveredIndex}
												setHoveredIndex={
													setHoveredIndex
												}
											/>
										</div>
									}
								>
									{loadingDataPerfumesType ? (
										<p className="text-primary text-sm">
											Cargando...
										</p>
									) : (
										link.children.map(
											(linkChildren, indexChildren) => (
												<div key={indexChildren}>
													<LinkContainer
														index={
															index +
															indexChildren +
															1
														}
														link={linkChildren}
														hoveredIndex={
															hoveredIndex
														}
														setHoveredIndex={
															setHoveredIndex
														}
													/>
												</div>
											),
										)
									)}
								</PopoverContainer>
							),
						)}
					</div>
				</div>
			</nav>
		</div>
	)
}

function LinkContainer({
	link,
	index,
	hoveredIndex,
	setHoveredIndex,
}: {
	link: QuickLink
	index: number
	hoveredIndex: number | null
	setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>
}) {
	return link.isScrollReact ? (
		<LinkScrollReact
			to={link.href}
			spy={true}
			smooth={true}
			offset={-100}
			duration={500}
			activeClass="active"
			className="group"
		>
			<LinkContent
				link={link}
				index={index}
				hoveredIndex={hoveredIndex}
				setHoveredIndex={setHoveredIndex}
			/>
		</LinkScrollReact>
	) : (
		<Link href={link.href}>
			<LinkContent
				link={link}
				index={index}
				hoveredIndex={hoveredIndex}
				setHoveredIndex={setHoveredIndex}
			/>
		</Link>
	)
}

function LinkContent({
	link,
	index,
	hoveredIndex,
	setHoveredIndex,
}: {
	link: QuickLink
	index: number
	hoveredIndex: number | null
	setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>
}) {
	return (
		<div
			onMouseEnter={() => setHoveredIndex(index)}
			onMouseLeave={() => setHoveredIndex(null)}
			className="relative cursor-pointer flex flex-col-reverse 2xs:flex-row items-center gap-1.5 transition-all duration-300 hover:scale-110"
		>
			{/* Label */}
			<span
				className={`text-[10.5px] text-primary 2xs:text-xs sm:text-sm transition-all duration-300 text-center whitespace-nowrap ${
					hoveredIndex === index || link.isActive
						? "font-bold"
						: "font-semibold"
				}`}
			>
				{link.label}
			</span>

			{/* Bottom indicator line */}
			<div
				className={`absolute -bottom-2 group-[.active]:w-full left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
					hoveredIndex === index || link.isActive ? "w-full" : "w-0"
				}`}
			/>
		</div>
	)
}

export default HeaderQuickLinks

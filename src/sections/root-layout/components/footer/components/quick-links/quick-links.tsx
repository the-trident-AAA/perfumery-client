"use client"
import useQuickLinks from "@/src/lib/hooks/quick-links/use-quick-links"
import Link from "next/link"
import React from "react"
import { Link as LinkScrollReact } from "react-scroll"

export default function QuickLinks() {
	const { quickLinks } = useQuickLinks()
	const quickLinksFiltered = quickLinks.filter(
		quickLink => !quickLink.children,
	)
	return (
		<div className="space-y-4">
			<h4 className="font-medium text-secondary text-sm uppercase tracking-wider">
				Tienda
			</h4>
			<ul className="space-y-2 text-sm">
				{quickLinksFiltered.map((quickLink, index) => (
					<li key={index}>
						{quickLink.isScrollReact ? (
							<LinkScrollReact
								key={index}
								to={quickLink.href}
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
								className="cursor-pointer transition-all duration-300 hover:font-bold"
							>
								{quickLink.label}
							</LinkScrollReact>
						) : (
							<Link
								href={quickLink.href}
								className="cursor-pointer transition-all duration-300 hover:font-bold"
							>
								{quickLink.label}
							</Link>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}

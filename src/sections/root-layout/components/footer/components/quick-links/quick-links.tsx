import Link from "next/link"
import React from "react"

export default function QuickLinks() {
	return (
		<div className="space-y-4">
			<h4 className="font-medium text-sm uppercase tracking-wider">
				Shop
			</h4>
			<ul className="space-y-2 text-sm">
				<li>
					<Link
						href="#"
						className="text-neutral-600 hover:text-neutral-900"
					>
						Women's Perfumes
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className="text-neutral-600 hover:text-neutral-900"
					>
						Men's Colognes
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className="text-neutral-600 hover:text-neutral-900"
					>
						Gift Sets
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className="text-neutral-600 hover:text-neutral-900"
					>
						New Arrivals
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className="text-neutral-600 hover:text-neutral-900"
					>
						Best Sellers
					</Link>
				</li>
			</ul>
		</div>
	)
}

import Link from "next/link"
import React from "react"

export default function QuickLinks() {
	return (
		<div className="space-y-4">
			<h4 className="font-medium text-secondary text-sm uppercase tracking-wider">
				Shop
			</h4>
			<ul className="space-y-2 text-sm">
				<li>
					<Link href="#" className="text-secondary hover:text-white">
						Women's Perfumes
					</Link>
				</li>
				<li>
					<Link href="#" className="text-secondary hover:text-white">
						Men's Colognes
					</Link>
				</li>
				<li>
					<Link href="#" className="text-secondary hover:text-white">
						Gift Sets
					</Link>
				</li>
				<li>
					<Link href="#" className="text-secondary hover:text-white">
						New Arrivals
					</Link>
				</li>
				<li>
					<Link href="#" className="text-secondary hover:text-white">
						Best Sellers
					</Link>
				</li>
			</ul>
		</div>
	)
}

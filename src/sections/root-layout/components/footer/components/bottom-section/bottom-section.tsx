import Link from "next/link"
import React from "react"

export default function BottomSection() {
	return (
		<div className="border-t border-secondary mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-secondary">
			<p>
				© {new Date().getFullYear()} The Trident. All rights reserved.
			</p>
			<div className="flex space-x-6 mt-4 md:mt-0">
				<Link href="#" className="text-secondary hover:text-white">
					Privacy Policy
				</Link>
				<Link href="#" className="text-secondary hover:text-white">
					Terms of Service
				</Link>
				<Link href="#" className="text-secondary hover:text-white">
					Shipping & Returns
				</Link>
			</div>
		</div>
	)
}

import Link from "next/link"
import React from "react"

export default function BottomSection() {
	return (
		<div className="border-t border-secondary mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-secondary">
			<p>
				© {new Date().getFullYear()} The Trident. Todos los derechos
				reservados.
			</p>
		</div>
	)
}

import { SlidersHorizontal } from "lucide-react"
import React, { ReactNode } from "react"

interface Props {
	title: string
	children: ReactNode
}

export default function SidePanelFilters({ title, children }: Props) {
	return (
		<aside className="w-full bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-6 rounded-2xl min-h-screen ">
			<div className="flex gap-2 items-center justify-center mb-6">
				<SlidersHorizontal className="text-secondary" />
				<h2 className="text-xl font-semibold text-secondary">
					{title}
				</h2>
			</div>
			{children}
		</aside>
	)
}

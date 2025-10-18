import { SlidersHorizontal } from "lucide-react"
import React, { ReactNode } from "react"

interface Props {
	title: string
	children: ReactNode
}

export default function SidePanelFilters({ title, children }: Props) {
	return (
		<aside className="w-full min-w-[380px] bg-primary border-t-12 border-secondary p-6 rounded-2xl min-h-screen ">
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

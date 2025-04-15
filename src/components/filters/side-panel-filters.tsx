import React, { ReactNode } from "react"

interface Props {
	title: string
	children: ReactNode
}

export default function SidePanelFilters({ title, children }: Props) {
	return (
		<aside className="w-full p-6 border-r min-h-screen max-w-[300px]">
			<h2 className="text-xl font-semibold mb-6">{title}</h2>
			{children}
		</aside>
	)
}

import Link from "next/link"
import React, { ReactNode } from "react"

interface Props {
	children: ReactNode
	href: string
	className?: string
}

export default function NavigationComponent({
	children,
	href,
	className,
}: Props) {
	return (
		<Link className={className} href={href}>
			{children}
		</Link>
	)
}

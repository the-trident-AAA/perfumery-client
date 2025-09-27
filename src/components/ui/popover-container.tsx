import React, { ReactNode } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

interface Props {
	children: ReactNode
	trigger: ReactNode
	contentClassName?: string
}

export default function PopoverContainer({
	children,
	trigger,
	contentClassName,
}: Props) {
	return (
		<Popover>
			<PopoverTrigger asChild>{trigger}</PopoverTrigger>
			<PopoverContent className={contentClassName}>
				{children}
			</PopoverContent>
		</Popover>
	)
}

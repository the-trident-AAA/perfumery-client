"use client"
import { useBreakpoint } from "@/src/lib/hooks/screen/use-breakpoint"
import { useEffect, useState } from "react"

export default function useHeaderSearch() {
	const breakpoint = useBreakpoint()
	const [isMobile, setIsMobile] = useState<boolean>(
		breakpoint === "xs" || breakpoint === "md" || breakpoint === "lg",
	)

	useEffect(() => {
		setIsMobile(
			breakpoint === "xs" || breakpoint === "md" || breakpoint === "lg",
		)
	}, [breakpoint])

	return { isMobile }
}

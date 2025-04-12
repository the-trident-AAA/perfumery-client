"use client"
import { useBreakpoint } from "@/src/lib/hooks/screen/use-breakpoint"
import useClickOutside from "@/src/lib/hooks/screen/use-click-outside"
import { useEffect, useRef, useState } from "react"

export default function useHeaderSearch() {
	const breakpoint = useBreakpoint()
	const [isMobile, setIsMobile] = useState<boolean>(breakpoint === "xs")
	const [showSearch, setShowSearch] = useState<boolean>(false)
	const searchRef = useRef<HTMLDivElement>(null)

	useClickOutside(searchRef, () => {
		if (showSearch) setShowSearch(false)
	})

	useEffect(() => {
		setIsMobile(breakpoint === "xs")
	}, [breakpoint])

	const toggleSearch = () => {
		setShowSearch(!showSearch)
	}
	return { isMobile, toggleSearch, showSearch, searchRef }
}

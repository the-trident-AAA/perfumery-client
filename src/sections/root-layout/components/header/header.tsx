"use client"

import HeaderSearch from "@/src/sections/root-layout/components/header/components/header-search/header-search"
import AppLogo from "@/src/components/app-logo/app-logo"
import HeaderNavbar from "@/src/sections/root-layout/components/header/header-navbar"
import { Suspense, useEffect, useState, useRef } from "react"
import HeaderQuickLinks from "@/src/sections/root-layout/components/header/components/header-quick-links/header-quick-links"

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [showQuickLinks, setShowQuickLinks] = useState(true)

	const lastScrollY = useRef(0)
	const scrollDirection = useRef<"up" | "down" | null>(null)
	const scrollAccumulator = useRef(0)
	const ticking = useRef(false)

	useEffect(() => {
		const handleScroll = () => {
			if (ticking.current) return

			ticking.current = true

			window.requestAnimationFrame(() => {
				const currentScrollY = window.scrollY
				const scrollDiff = currentScrollY - lastScrollY.current

				setIsScrolled(currentScrollY > 10)

				if (currentScrollY < 100) {
					setShowQuickLinks(true)
					scrollAccumulator.current = 0
					scrollDirection.current = null
					lastScrollY.current = currentScrollY
					ticking.current = false
					return
				}

				const currentDirection =
					scrollDiff > 0 ? "down" : scrollDiff < 0 ? "up" : null

				if (
					currentDirection &&
					currentDirection !== scrollDirection.current
				) {
					scrollAccumulator.current = 0
					scrollDirection.current = currentDirection
				}

				if (currentDirection) {
					scrollAccumulator.current += Math.abs(scrollDiff)
				}

				if (scrollAccumulator.current > 80) {
					if (scrollDirection.current === "down" && showQuickLinks) {
						setShowQuickLinks(false)
						scrollAccumulator.current = 0
					} else if (
						scrollDirection.current === "up" &&
						!showQuickLinks
					) {
						setShowQuickLinks(true)
						scrollAccumulator.current = 0
					}
				}

				lastScrollY.current = currentScrollY
				ticking.current = false
			})
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [showQuickLinks])

	return (
		<div className="sticky top-0 z-50">
			<header
				className={`shadow-2xl transition-all duration-300 ${
					isScrolled
						? "bg-gradient-to-r from-[#eef6e7]/30 via-[#ecf7f0]/30 to-[#e4f5f4]/30 backdrop-blur-md"
						: "bg-gradient-to-r from-[#eef6e7] via-[#ecf7f0] to-[#e4f5f4] backdrop-blur-sm"
				}`}
			>
				<div className="px-6 py-4 flex sm:gap-4 items-center justify-between">
					<AppLogo avatarClassName="h-10 w-10 sm:h-12 sm:w-12" />
					<div className="flex-1 mx-2 max-w-2xl">
						<Suspense fallback={<div>Cargando...</div>}>
							<HeaderSearch />
						</Suspense>
					</div>
					<HeaderNavbar />
				</div>
				<div
					className={`transition-all duration-500 ease-in-out ${
						showQuickLinks
							? "opacity-100 translate-y-0 max-h-20"
							: "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
					}`}
				>
					<Suspense fallback={<div>Cargando...</div>}>
						<HeaderQuickLinks />
					</Suspense>
				</div>
			</header>
		</div>
	)
}

export default Header

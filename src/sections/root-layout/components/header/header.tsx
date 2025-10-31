"use client"

import HeaderSearch from "@/src/sections/root-layout/components/header/components/header-search/header-search"
import AppLogo from "@/src/components/app-logo/app-logo"
import HeaderNavbar from "@/src/sections/root-layout/components/header/header-navbar"
import { Suspense, useEffect, useState } from "react"
import HeaderQuickLinks from "@/src/sections/root-layout/components/header/components/header-quick-links/header-quick-links"

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

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
			</header>

			<HeaderQuickLinks />
		</div>
	)
}

export default Header

"use client"

import HeaderSearch from "@/src/sections/root-layout/components/header/components/header-search/header-search"
import AppLogo from "@/src/components/app-logo/app-logo"
import HeaderNavbar from "@/src/sections/root-layout/components/header/header-navbar"
import { Suspense, useEffect, useState } from "react"

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
		<header
			className={`shadow-2xl sticky top-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-gradient-to-r from-[#eef6e7]/30 via-[#ecf7f0]/30 to-[#e4f5f4]/30 backdrop-blur-md"
					: "bg-gradient-to-r from-[#eef6e7] via-[#ecf7f0] to-[#e4f5f4] backdrop-blur-sm"
			}`}
		>
			<div
				className={`absolute inset-y-0 left-0 w-1/2 bg-primary transition-opacity duration-300 ${
					isScrolled ? "opacity-20" : "opacity-90"
				}`}
				style={{
					clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)",
				}}
			/>
			<div className="px-6 py-4 flex items-center justify-between">
				<AppLogo avatarClassName="h-10 w-10 sm:h-12 sm:w-12" />
				<div className="flex-1 mx-2 max-w-2xl">
					<Suspense fallback={<div>Cargando...</div>}>
						<HeaderSearch />
					</Suspense>
				</div>
				<HeaderNavbar />
			</div>
		</header>
	)
}

export default Header

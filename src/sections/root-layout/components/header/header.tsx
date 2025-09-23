import HeaderSearch from "@/src/sections/root-layout/components/header/components/header-search/header-search"
import AppLogo from "@/src/components/app-logo/app-logo"
import HeaderNavbar from "@/src/sections/root-layout/components/header/header-navbar"
import { Suspense } from "react"

const Header = () => {
	return (
		<header className="shadow-2xl bg-white/80 backdrop-blur-sm sticky top-0 z-50">
			<div
				className="absolute inset-y-0 left-0 w-1/2 bg-primary opacity-90"
				style={{
					clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)",
				}}
			/>
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<AppLogo />
				<div className="flex-1 max-w-2xl mx-4 md:mx-8">
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

import HeaderSearch from "@/src/sections/root-layout/components/header/components/header-search/header-search"
import AppLogo from "@/src/components/app-logo/app-logo"
import HeaderNavbar from "@/src/sections/root-layout/components/header/header-navbar"

const Header = () => {
	return (
		<header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<AppLogo />
				<div className="flex-1 max-w-2xl mx-4 md:mx-8">
					<HeaderSearch />
				</div>
				<HeaderNavbar />
			</div>
		</header>
	)
}

export default Header

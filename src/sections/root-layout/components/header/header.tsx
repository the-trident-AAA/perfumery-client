import Logo from "./components/logo"

import User from "./components/user"
import HeaderSearch from "@/src/sections/root-layout/components/header/components/header-search/header-search"
import HeaderNavigationMenu from "@/src/sections/root-layout/components/header/components/header-navigation-menu/header-navigation-menu"
import LittleCar from "@/src/sections/root-layout/components/header/components/little-car/little-car"

const Header = () => {
	return (
		<header className="bg-primary sticky top-0 z-50 shadow-md flex flex-col">
			<div className="text-white container mx-auto py-4 px-6">
				<div className="flex items-center justify-between h-16">
					{/* Logo - alineado a la izquierda */}
					<div className="flex-shrink-0 flex items-center">
						<Logo />
					</div>

					{/* Barra de búsqueda - centrada con espacio adaptable */}
					<div className="flex-1 max-w-2xl mx-4 md:mx-8">
						<HeaderSearch />
					</div>

					{/* Iconos de usuario y carrito - alineados a la derecha */}
					<div className="flex items-center space-x-4">
						<LittleCar />
						<User />
					</div>
				</div>
			</div>
			<div className="bg-white">
				<HeaderNavigationMenu />
			</div>
		</header>
	)
}

export default Header

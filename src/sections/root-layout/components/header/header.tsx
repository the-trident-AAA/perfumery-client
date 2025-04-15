import Logo from "./components/logo"
import LittleCar from "./components/littleCar"
import User from "./components/user"
import HeaderSearch from "@/src/sections/root-layout/components/header/components/header-search/header-search"
import LoginButton from "@/src/sections/root-layout/components/header/components/login-button/login-button"

const Header = () => {
	return (
		<header className="bg-primary text-white sticky top-0 z-50 shadow-md">
			<div className="container mx-auto py-4 px-6">
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
						<User />
						<LittleCar />
						<LoginButton />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

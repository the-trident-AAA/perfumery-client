import { paths } from "@/src/lib/routes/paths"
import { HouseIcon, ShoppingCartIcon } from "lucide-react"
import { ReactNode } from "react"

interface NavigationItem {
	label: string
	icon?: ReactNode
	path: string
}

export const navigationItems: NavigationItem[] = [
	{
		label: "Inicio",
		path: paths.home.root,
		icon: <HouseIcon color="black" className="size-4 sm:size-6" />,
	},
	{
		label: "Perfumes",
		path: paths.perfumes().root,
		icon: <ShoppingCartIcon color="black" className="size-4 sm:size-6" />,
	},
]

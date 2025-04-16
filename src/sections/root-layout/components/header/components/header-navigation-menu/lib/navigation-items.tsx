import { paths } from "@/src/lib/routes/paths"
import { HouseIcon, ShoppingCartIcon } from "lucide-react"
import { ReactNode } from "react"

interface NavigationItem {
	label: string
	icon?: ReactNode
	path: string
	childrens?: NavigationItem[]
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
		childrens: [
			{
				label: "Diseñador",
				path: paths.perfumes({ group: "1" }).root,
				icon: (
					<ShoppingCartIcon
						color="black"
						className="size-4 sm:size-6"
					/>
				),
			},
			{
				label: "Árabe",
				path: paths.perfumes({ group: "2" }).root,
				icon: (
					<ShoppingCartIcon
						color="black"
						className="size-4 sm:size-6"
					/>
				),
			},
			{
				label: "Nicho",
				path: paths.perfumes({ group: "3" }).root,
				icon: (
					<ShoppingCartIcon
						color="black"
						className="size-4 sm:size-6"
					/>
				),
			},
			{
				label: "Nacional",
				path: paths.perfumes({ group: "4" }).root,
				icon: (
					<ShoppingCartIcon
						color="black"
						className="size-4 sm:size-6"
					/>
				),
			},
		],
	},
]

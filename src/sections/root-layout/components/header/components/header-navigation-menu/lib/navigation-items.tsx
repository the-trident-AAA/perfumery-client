import { paths } from "@/src/lib/routes/paths"
import { ShoppingCartIcon } from "lucide-react"
import { ReactNode } from "react"

export interface NavigationItem {
	label: string
	icon?: ReactNode
	path: string
	childrens?: NavigationItem[]
}

export const navigationItems: NavigationItem[] = [
	{
		label: "Perfumes",
		path: paths.perfumes().root,
		icon: <ShoppingCartIcon className="size-4 text-yellow-300 sm:size-6" />,
		childrens: [
			{
				label: "Diseñador",
				path: paths.perfumes({ group: "1" }).root,
				icon: (
					<ShoppingCartIcon className="size-4 text-yellow-300 sm:size-6" />
				),
			},
			{
				label: "Árabe",
				path: paths.perfumes({ group: "2" }).root,
				icon: (
					<ShoppingCartIcon className="size-4 text-yellow-300 sm:size-6" />
				),
			},
			{
				label: "Nicho",
				path: paths.perfumes({ group: "3" }).root,
				icon: (
					<ShoppingCartIcon className="size-4 text-yellow-300 sm:size-6" />
				),
			},
			{
				label: "Nacional",
				path: paths.perfumes({ group: "4" }).root,
				icon: (
					<ShoppingCartIcon className="size-4 text-yellow-300 sm:size-6" />
				),
			},
		],
	},
]

"use client"

import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import { Skeleton } from "@/src/components/ui/skeleton"
import { paths } from "@/src/lib/routes/paths"
import { PerfumeType } from "@/src/lib/types/perfume-types"
import usePerfumeTypes from "@/src/sections/perfume-types/hooks/use-perfume-types"
import { ShoppingCartIcon } from "lucide-react"
import Link from "next/link"
import React, { ReactNode } from "react"

interface LinkItemProps {
	label: string
	icon?: ReactNode
	path: string
}

const LinkItem = ({ label, icon, path }: LinkItemProps) => (
	<NavigationMenuLink
		className="text-[16px] bg-gradient-to-br from-primary via-primary/90 rounded-2xl to-primary/80 text-yellow-300 sm:text-xl"
		asChild
	>
		<Link href={path} className={navigationMenuTriggerStyle()}>
			<div className="flex gap-2 items-center">
				{icon && icon}
				{label}
			</div>
		</Link>
	</NavigationMenuLink>
)

export default function HeaderNavigationMenu() {
	const { perfumeTypes, loadingData: loadingDataPerfumeTypes } =
		usePerfumeTypes()

	if (loadingDataPerfumeTypes) {
		return (
			<div className="flex gap-4">
				<Skeleton className="h-10 w-32 rounded-xl" />
			</div>
		)
	}

	if (!perfumeTypes || perfumeTypes.length === 0) {
		return null // o algún fallback
	}

	const [first, ...restPerfumeTypes] = perfumeTypes

	const navigationItem = {
		label: first.name,
		path: paths.perfumes({ perfumeTypeId: first.id.toString() }).root,
		icon: <ShoppingCartIcon className="size-4 text-secondary sm:size-6" />,
		childrens: restPerfumeTypes.map((perfumeType: PerfumeType) => ({
			label: perfumeType.name,
			path: paths.perfumes({ perfumeTypeId: perfumeType.id.toString() })
				.root,
			icon: (
				<ShoppingCartIcon className="size-4 text-secondary sm:size-6" />
			),
		})),
	}

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					{navigationItem.childrens.length === 0 ? (
						<LinkItem
							label={navigationItem.label}
							icon={navigationItem.icon}
							path={navigationItem.path}
						/>
					) : (
						<>
							<NavigationMenuTrigger className="text-[16px] text-secondary sm:text-xl">
								{navigationItem.icon}
								{navigationItem.label}
							</NavigationMenuTrigger>
							<NavigationMenuContent className="flex flex-col gap-2">
								{navigationItem.childrens.map(
									(child, childIndex) => (
										<NavigationComponent
											key={childIndex}
											href={child.path}
										>
											<Button className="flex gap-2 w-full text-secondary justify-start">
												{child.icon}
												{child.label}
											</Button>
										</NavigationComponent>
									),
								)}
							</NavigationMenuContent>
						</>
					)}
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

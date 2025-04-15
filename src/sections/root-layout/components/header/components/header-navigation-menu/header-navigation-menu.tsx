import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import { navigationItems } from "@/src/sections/root-layout/components/header/components/header-navigation-menu/lib/navigation-items"
import Link from "next/link"
import React from "react"

export default function HeaderNavigationMenu() {
	return (
		<NavigationMenu className="mx-auto p-2">
			<NavigationMenuList>
				{navigationItems.map((navigationItem, index) => (
					<NavigationMenuItem key={index}>
						<NavigationMenuLink
							className="text-[16px] sm:text-xl"
							asChild
						>
							<Link
								href={navigationItem.path}
								className={navigationMenuTriggerStyle()}
							>
								<div className="flex gap-2 items-center">
									{navigationItem.icon && navigationItem.icon}
									{navigationItem.label}
								</div>
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	)
}

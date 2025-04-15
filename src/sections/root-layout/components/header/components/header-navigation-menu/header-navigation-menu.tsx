import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import { navigationItems } from "@/src/sections/root-layout/components/header/components/header-navigation-menu/lib/navigation-items"
import Link from "next/link"
import React from "react"

export default function HeaderNavigationMenu() {
	return (
		<NavigationMenu className="mx-auto p-2">
			<NavigationMenuList>
				{navigationItems.map((navigationItem, index) =>
					!navigationItem.childrens ? (
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
										{navigationItem.icon &&
											navigationItem.icon}
										{navigationItem.label}
									</div>
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					) : (
						<NavigationMenuItem key={index}>
							<NavigationMenuTrigger className="text-[16px] sm:text-xl">
								<div className="flex gap-2 items-center">
									{navigationItem.icon && navigationItem.icon}
									{navigationItem.label}
								</div>
							</NavigationMenuTrigger>
							<NavigationMenuContent className="flex flex-col 2xl:flex-row gap-2">
								{navigationItem.childrens.map(
									(child, childIndex) => (
										<NavigationMenuLink
											className="text-[16px] sm:text-xl"
											asChild
											key={childIndex}
										>
											<Link
												href={child.path}
												className={navigationMenuTriggerStyle()}
											>
												<div className="flex gap-2 items-center">
													{child.icon && child.icon}
													{child.label}
												</div>
											</Link>
										</NavigationMenuLink>
									),
								)}
							</NavigationMenuContent>
						</NavigationMenuItem>
					),
				)}
			</NavigationMenuList>
		</NavigationMenu>
	)
}

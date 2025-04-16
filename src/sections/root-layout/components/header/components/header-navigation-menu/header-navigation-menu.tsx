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
import React, { ReactNode } from "react"

interface LinkItemProps {
	label: string
	icon?: ReactNode
	path: string
}

const LinkItem = ({ label, icon, path }: LinkItemProps) => (
	<NavigationMenuLink className="text-[16px] sm:text-xl" asChild>
		<Link href={path} className={navigationMenuTriggerStyle()}>
			<div className="flex gap-2 items-center">
				{icon && icon}
				{label}
			</div>
		</Link>
	</NavigationMenuLink>
)

export default function HeaderNavigationMenu() {
	return (
		<NavigationMenu className="mx-auto p-2">
			<NavigationMenuList>
				{navigationItems.map((navigationItem, index) =>
					!navigationItem.childrens ? (
						<NavigationMenuItem key={index}>
							<LinkItem
								label={navigationItem.label}
								icon={navigationItem.icon}
								path={navigationItem.path}
							/>
						</NavigationMenuItem>
					) : (
						<NavigationMenuItem key={index}>
							<NavigationMenuTrigger className="text-[16px] sm:text-xl">
								<LinkItem
									label={navigationItem.label}
									icon={navigationItem.icon}
									path={navigationItem.path}
								/>
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

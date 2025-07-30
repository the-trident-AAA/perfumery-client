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
import { navigationItems } from "@/src/sections/root-layout/components/header/components/header-navigation-menu/lib/navigation-items"
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
	return (
		<NavigationMenu>
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
							<NavigationMenuTrigger className="text-[16px] text-white sm:text-xl">
								{navigationItem.icon && navigationItem.icon}
								{navigationItem.label}
							</NavigationMenuTrigger>
							<NavigationMenuContent className="flex flex-col gap-2">
								{navigationItem.childrens.map(
									(child, childIndex) => (
										<NavigationComponent
											key={childIndex}
											href={child.path}
										>
											<Button className="flex gap-2 w-full justify-start">
												{child.icon && child.icon}
												{child.label}
											</Button>
										</NavigationComponent>
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

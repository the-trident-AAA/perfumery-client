import React from "react"
import NavigationComponent from "../navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Skeleton } from "@/src/components/ui/skeleton"

interface Props {
	avatarClassName?: string
	withText?: boolean
}

export default function AppLogo({
	avatarClassName = "h-12 w-12",
	withText = true,
}: Props) {
	return (
		<NavigationComponent className="z-30" href={paths.home.root}>
			<div className="flex items-center space-x-2">
				<Avatar className={avatarClassName}>
					<AvatarImage src="/icons/logo-icon.png" />
					<AvatarFallback>
						<div className="flex items-center gap-2">
							<Skeleton className="h-10 w-10 rounded-full" />
						</div>
					</AvatarFallback>
				</Avatar>
				{withText && (
					<span className="text-xl hidden sm:flex font-bold text-secondary">
						Perfumes del Puro
					</span>
				)}
			</div>
		</NavigationComponent>
	)
}

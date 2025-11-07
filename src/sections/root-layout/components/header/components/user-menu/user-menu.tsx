"use client"

import { User, Settings } from "lucide-react"
import { useContext, useMemo } from "react"
import { Skeleton } from "@/src/components/ui/skeleton"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/components/ui/popover"
import { Button } from "@/src/components/ui/button"
import { Separator } from "@/src/components/ui/separator"
import SignOutButton from "@/src/sections/root-layout/components/header/components/sign-out-button/sign-out-button"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"
import { ProfileContext } from "@/src/sections/auth/context/profile-context/profile-context"
import Image from "next/image"
import { PopoverClose } from "@radix-ui/react-popover"

export default function UserMenu() {
	const { user, loading } = useContext(ProfileContext)

	const userInitials = useMemo(() => {
		if (!user?.email) return "?"

		// Handle email format for initials
		const emailParts = user.email.split("@")[0]
		const nameParts = emailParts.split(/[._-]/)

		if (nameParts.length >= 2) {
			return (nameParts[0][0] + nameParts[1][0]).toUpperCase()
		}

		return emailParts.slice(0, 2).toUpperCase()
	}, [user?.email])

	if (loading) {
		return (
			<div className="flex items-center gap-2">
				<Skeleton className="h-10 w-10 rounded-full" />
			</div>
		)
	}

	if (!user) {
		return (
			<div className="flex items-center justify-center h-10 w-10 rounded-full bg-destructive/10 text-destructive border border-destructive/20">
				<User className="h-4 w-4" />
			</div>
		)
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="relative h-9.5 w-9.5 sm:h-10 sm:w-10 rounded-full overflow-hidden shadow-sm bg-secondary">
					{user.avatar ? (
						<Image
							src={user.avatar || "/placeholder.svg"}
							alt={`Avatar de ${user.username || user.email}`}
							fill
							className="object-cover"
							sizes="48px"
						/>
					) : (
						<div className="flex items-center justify-center h-full w-full bg-secondary text-primary font-semibold">
							{userInitials}
						</div>
					)}
				</div>
			</PopoverTrigger>

			<PopoverContent
				className="w-80 p-0 shadow-lg border-0 bg-background/95 backdrop-blur-sm"
				align="end"
				sideOffset={8}
			>
				{/* Header del usuario */}
				<div className="p-4 border-b bg-gradient-to-r from-muted/50 to-muted/30">
					<div className="flex items-center gap-3">
						<div className="relative h-12 w-12 rounded-full overflow-hidden shadow-sm bg-secondary">
							{user.avatar ? (
								<Image
									src={user.avatar || "/placeholder.svg"}
									alt={`Avatar de ${user.username || user.email}`}
									fill
									className="object-cover"
									sizes="48px"
								/>
							) : (
								<div className="flex items-center justify-center h-full w-full bg-secondary text-primary font-semibold">
									{userInitials}
								</div>
							)}
						</div>
						<div className="flex-1 min-w-0">
							<p className="font-semibold text-sm text-foreground truncate">
								{user.username}
							</p>
							<p className="text-xs text-muted-foreground truncate">
								{user.email || "email@ejemplo.com"}
							</p>
						</div>
					</div>
				</div>

				{/* Opciones del menú */}
				<div className="p-2">
					<div className="space-y-1">
						<NavigationComponent href={paths.profile.root}>
							<PopoverClose asChild>
								<Button
									variant="ghost"
									className="w-full group justify-between h-10 px-3 hover:bg-secondary hover:text-primary transition-colors"
								>
									<div className="flex items-center">
										<User className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-primary" />
										<span className="text-sm font-medium">
											Ver perfil
										</span>
									</div>
								</Button>
							</PopoverClose>
						</NavigationComponent>

						<NavigationComponent href={paths.editProfile.root}>
							<PopoverClose asChild>
								<Button
									variant="ghost"
									className="w-full group justify-between h-10 px-3 hover:bg-secondary hover:text-primary transition-colors"
								>
									<div className="flex items-center">
										<Settings className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-primary" />
										<span className="text-sm font-medium">
											Editar Perfil
										</span>
									</div>
								</Button>
							</PopoverClose>
						</NavigationComponent>
					</div>
				</div>

				<Separator className="my-2" />

				{/* Botón de cerrar sesión */}
				<div className="p-2">
					<PopoverClose asChild>
						<SignOutButton />
					</PopoverClose>
				</div>
			</PopoverContent>
		</Popover>
	)
}

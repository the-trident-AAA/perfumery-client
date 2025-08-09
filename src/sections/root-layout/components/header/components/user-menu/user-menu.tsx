"use client"

import { User, Settings, HelpCircle, ChevronRight } from "lucide-react"
import { useCallback, useMemo } from "react"
import { useSession } from "next-auth/react"
import { Skeleton } from "@/src/components/ui/skeleton"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/components/ui/popover"
import { Button } from "@/src/components/ui/button"
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar"
import { Badge } from "@/src/components/ui/badge"
import { Separator } from "@/src/components/ui/separator"
import SignOutButton from "@/src/sections/root-layout/components/header/components/sign-out-button/sign-out-button"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"

export default function UserMenu() {
	const { data: session, status } = useSession()
	const user = session?.user
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

	const handleOpenProfileModal = useCallback(() => {
		// Implementar lógica del modal de perfil
		console.log("Opening profile modal")
	}, [])

	const handleOpenSettings = useCallback(() => {
		// Implementar lógica de configuración
		console.log("Opening settings")
	}, [])

	const handleOpenHelp = useCallback(() => {
		// Implementar lógica de ayuda
		console.log("Opening help")
	}, [])

	if (status === "loading") {
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
				<Button
					variant="ghost"
					className="relative h-10 w-10 rounded-full hover:bg-accent/50 transition-colors duration-200"
					aria-label="Menú de usuario"
				>
					<Avatar className="h-10 w-10 shadow-sm">
						<AvatarFallback className="bg-secondary text-primary font-semibold text-sm">
							{userInitials}
						</AvatarFallback>
					</Avatar>
				</Button>
			</PopoverTrigger>

			<PopoverContent
				className="w-80 p-0 shadow-lg border-0 bg-background/95 backdrop-blur-sm"
				align="end"
				sideOffset={8}
			>
				{/* Header del usuario */}
				<div className="p-4 border-b bg-gradient-to-r from-muted/50 to-muted/30">
					<div className="flex items-center gap-3">
						<Avatar className="h-12 w-12 shadow-sm">
							<AvatarFallback className="bg-secondary text-primary font-semibold">
								{userInitials}
							</AvatarFallback>
						</Avatar>
						<div className="flex-1 min-w-0">
							<p className="font-semibold text-sm text-foreground truncate">
								{user.email?.split("@")[0] || "Usuario"}
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
							<Button
								variant="ghost"
								className="w-full group justify-between h-10 px-3 hover:bg-secondary hover:text-primary transition-colors"
								onClick={handleOpenProfileModal}
							>
								<div className="flex items-center">
									<User className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-primary" />
									<span className="text-sm font-medium">
										Ver perfil
									</span>
								</div>
							</Button>
						</NavigationComponent>

						<Button
							variant="ghost"
							className="w-full group justify-between h-10 px-3 hover:bg-secondary hover:text-primary transition-colors"
							onClick={handleOpenSettings}
						>
							<div className="flex items-center">
								<Settings className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-primary" />
								<span className="text-sm font-medium">
									Editar Perfil
								</span>
							</div>
						</Button>
					</div>
				</div>

				<Separator className="my-2" />

				{/* Botón de cerrar sesión */}
				<div className="p-2">
					<SignOutButton />
				</div>
			</PopoverContent>
		</Popover>
	)
}

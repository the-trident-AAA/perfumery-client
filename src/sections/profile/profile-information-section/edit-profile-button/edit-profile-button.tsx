import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import React from "react"

export default function EditProfileButton() {
	return (
		<NavigationComponent className="w-full" href={paths.editProfile.root}>
			<Button
				variant={"secondary"}
				className="w-full py-3 px-4 text-primary"
			>
				Editar Perfil
			</Button>
		</NavigationComponent>
	)
}

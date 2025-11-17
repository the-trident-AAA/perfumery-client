import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card"
import CreateNewPasswordFormContainer from "@/src/sections/users/form/profile/components/create-new-password/form/create-new-password-form-container"
import { Lock } from "lucide-react"
import React from "react"

interface Props {
	userId: string
}

export default function CreateNewPasswordContainer({ userId }: Props) {
	return (
		<div className="flex flex-col gap-4">
			<Card className="w-full bg-primary border-0 h-full">
				<CardHeader className="pb-4">
					<CardTitle className="flex items-center gap-2 text-lg">
						<Lock className="w-5 h-5" />
						Seguridad
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<p>
						Detectamos que todavía no tienes una contraseña creada.
						Ingresa una nueva en el campo siguiente para mejorar la
						seguridad de tu acceso.
					</p>
					<CreateNewPasswordFormContainer userId={userId} />
				</CardContent>
			</Card>
		</div>
	)
}

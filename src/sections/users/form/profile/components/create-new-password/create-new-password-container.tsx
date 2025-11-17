import CreateNewPasswordFormContainer from "@/src/sections/users/form/profile/components/create-new-password/form/create-new-password-form-container"
import React from "react"

interface Props {
	userId: string
}

export default function CreateNewPasswordContainer({ userId }: Props) {
	return (
		<div className="flex flex-col gap-4">
			<p>
				Hola, para mayor seguridad introduzca la que quiera sea su
				contraseña en este campo:
			</p>
			<CreateNewPasswordFormContainer userId={userId} />
		</div>
	)
}

import CreateNewPasswordFormContainer from "@/src/sections/users/form/profile/components/create-new-password/form/create-new-password-form-container"
import React from "react"

export default function CreateNewPasswordContainer() {
	return (
		<div className="flex flex-col gap-4">
			<p>
				Hola, para mayor seguridad introduzca la que quiera sea su
				contraseña en este campo:
			</p>
			<CreateNewPasswordFormContainer />
		</div>
	)
}

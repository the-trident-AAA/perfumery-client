import { getUserProfile } from "@/src/lib/services/users"
import ModalWrapper from "@/src/sections/modal-page/components/modal-wrapper/modal-wrapper"
import ProfileUserFormContainer from "@/src/sections/users/form/profile/profile-user-form-container"
import React from "react"

type Props = {
	params: Promise<{ id: string }>
}

export default async function EditProfilePage({ params }: Props) {
	const { id } = await params
	// get the profile
	const res = await getUserProfile()

	if (!res.response || res.error)
		throw new Error("Error en la obtención del perfil de usuario")

	return (
		<ModalWrapper>
			<div className="max-w-3xl overflow-auto">
				<ProfileUserFormContainer user={res.response} />
			</div>
		</ModalWrapper>
	)
}

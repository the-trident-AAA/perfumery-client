import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { getUserProfile } from "@/src/lib/services/users"

import EditProfileButton from "@/src/sections/profile/profile-information-section/edit-profile-button/edit-profile-button"

export default async function ProfileInformationSection() {
	const res = await getUserProfile()

	if (!res.response || res.error)
		throw new Error("Error en la carga del perfil")

	const user = res.response
	return (
		<div className="flex flex-col items-center p-6 max-w-xs">
			<Avatar className="size-56">
				<AvatarImage src={user.avatar} />
				<AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
			</Avatar>

			<h1 className="text-2xl font-bold text-secondary mt-2">
				{user.username}
			</h1>

			<p className="text-secondary font-semibold text-sm mt-1 mb-6">
				{user.email}
			</p>

			<EditProfileButton />
		</div>
	)
}

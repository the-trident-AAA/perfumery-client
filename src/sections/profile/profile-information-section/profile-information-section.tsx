import { getUserProfile } from "@/src/lib/services/users"
import { User } from "@/src/lib/types/users"
import EditProfileButton from "@/src/sections/profile/profile-information-section/edit-profile-button/edit-profile-button"
import Image from "next/image"

function userInitials(user: User) {
	if (!user?.email) return "?"

	// Handle email format for initials
	const emailParts = user.email.split("@")[0]
	const nameParts = emailParts.split(/[._-]/)

	if (nameParts.length >= 2) {
		return (nameParts[0][0] + nameParts[1][0]).toUpperCase()
	}

	return emailParts.slice(0, 2).toUpperCase()
}

export default async function ProfileInformationSection() {
	const res = await getUserProfile()

	if (!res.response || res.error)
		throw new Error("Error en la carga del perfil")

	const user = res.response
	return (
		<div className="flex flex-col items-center p-6 max-w-xs">
			<div className="relative h-64 w-64 rounded-full overflow-hidden shadow-sm bg-secondary">
				{user.avatar ? (
					<Image
						src={user.avatar || "/placeholder.svg"}
						alt={`Avatar de ${user.username || user.email}`}
						fill
						className="object-cover"
						sizes="1920px"
					/>
				) : (
					<div className="flex items-center justify-center h-full w-full bg-secondary text-primary font-semibold">
						{userInitials(user)}
					</div>
				)}
			</div>

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

import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Button } from "@/src/components/ui/button"
import EditProfileButton from "@/src/sections/profile/profile-information-section/edit-profile-button/edit-profile-button"

interface Props {}

export default function ProfileInformationSection() {
	return (
		<div className="flex flex-col items-center p-6 max-w-xs">
			<Avatar className="size-56">
				<AvatarImage src="/images/place-holder.jpg" />
				<AvatarFallback>AP</AvatarFallback>
			</Avatar>

			<h1 className="text-2xl font-bold text-secondary mt-2">
				Andy Pelaez
			</h1>

			<p className="text-secondary font-semibold text-sm mt-1 mb-6">
				andyP02@gmail.com
			</p>

			<EditProfileButton />
		</div>
	)
}

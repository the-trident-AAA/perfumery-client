import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Button } from "@/src/components/ui/button"

interface Props {}

export default function ProfileInformationSection() {
	return (
		<div className="flex flex-col items-center p-6 max-w-xs">
			<Avatar className="size-56">
				<AvatarImage src="/images/place-holder.jpg" />
				<AvatarFallback>AP</AvatarFallback>
			</Avatar>

			<h1 className="text-2xl font-medium text-gray-700 mt-2">
				Andy Pelaez
			</h1>

			<p className="text-gray-500 text-sm mt-1 mb-6">andyP02@gmail.com</p>

			<Button
				className="w-full py-3 px-4
          transition-colors rounded-md text-lg font-medium"
			>
				Editar Perfil
			</Button>
		</div>
	)
}

"use client"

import { use } from "react"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/src/components/ui/form"
import ProfileUserForm from "./profile-user-form"
import { Button } from "@/src/components/ui/button"
import ChangePasswordMode from "./components/change-password-mode/change-password-mode"
import { User as UserIcon } from "lucide-react"
import { Card } from "@/src/components/ui/card"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import {
	UserEdit,
	userEditSchema,
} from "@/src/sections/users/form/edit/schemas/edit-user-schema"
import { User } from "@/src/lib/types/users"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import useEditUser from "@/src/sections/users/hooks/use-edit-user"
import useImageForm from "@/src/components/form/hooks/use-image-form"
import { revalidateServerTags } from "@/src/lib/cache"
import { tagsCacheByRoutes } from "@/src/lib/routes/api-routes/api-routes"

interface Props {
	user: User
	refreshUserInfo: () => Promise<void>
}

export default function ProfileUserFormContainer({
	user,
	refreshUserInfo,
}: Props) {
	const { handleCloseModal } = use(ModalContext)
	const {
		loading: submitLoading,
		editUser,
		error,
	} = useEditUser({
		id: user.id.toString(),
		onEditAction: () => {
			toast.success("Información de perfil actualizada con éxito")
			revalidateServerTags(
				tagsCacheByRoutes.users.singleTag + ": " + user.id,
			)
			refreshUserInfo()
		},
	})
	const form = useForm<UserEdit>({
		resolver: zodResolver(userEditSchema),
		defaultValues: {
			username: user.username,
		},
	})

	const { loading: imageLoading, error: imageError } = useImageForm({
		form,
		imageUrl: user.avatar,
		imageName: user.username,
		fieldName: "avatar",
	})

	const handleClose = () => {
		handleCloseModal(modalTypes.profileUserModal.name)
	}

	function onSubmit(data: UserEdit) {
		editUser(data)
	}
	return (
		<div className="w-full flex flex-1 flex-col justify-between gap-4 h-full">
			<div className="flex items-center gap-4 mb-6">
				<div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
					<UserIcon className="w-8 h-8 text-primary" />
				</div>
				<div>
					<h2 className="text-2xl font-bold">Perfil de Usuario</h2>
					<p className="text-secondary">
						Gestiona tu información personal y seguridad
					</p>
				</div>
			</div>
			<div className="flex w-full h-full gap-2 ">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full"
					>
						<Card className="w-full h-full bg-primary border-0 flex flex-col justify-between gap-4 p-6">
							<ProfileUserForm
								user={user}
								error={error}
								imageRecived={{
									loading: imageLoading,
									error: imageError,
								}}
							/>
							<Button
								variant={"secondary"}
								className="text-primary"
								type="submit"
								disabled={submitLoading}
							>
								Guardar Cambios
							</Button>
						</Card>
					</form>
				</Form>
				<ChangePasswordMode user={user} />
			</div>
			<div className="flex gap-2 justify-end">
				<Button
					type="button"
					variant={"secondary"}
					className="text-primary"
					onClick={handleClose}
				>
					Cerrar
				</Button>
			</div>
		</div>
	)
}

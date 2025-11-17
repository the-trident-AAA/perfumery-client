"use client"

import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/src/components/ui/form"
import { Button } from "@/src/components/ui/button"
import useCreateNewPassword from "@/src/sections/users/form/profile/components/create-new-password/hooks/use-create-new-password"
import {
	CreateNewPassword,
	createNewPasswordSchema,
} from "@/src/sections/users/form/profile/components/create-new-password/form/schemas/create-new-password-schema"
import { AlertDestructive } from "@/src/components/ui/alert-destructive"
import CreateNewPasswordForm from "@/src/sections/users/form/profile/components/create-new-password/form/create-new-password-form"
import { revalidateServerTags } from "@/src/lib/cache"
import { tagsCacheByRoutes } from "@/src/lib/routes/api-routes/api-routes"

interface Props {
	userId: string
}

export default function CreateNewPasswordFormContainer({ userId }: Props) {
	const {
		loading: submitLoading,
		createNewPassword,
		error,
	} = useCreateNewPassword({
		onNewPasswordAction: () => {
			toast.success("Contraseña creada con éxito")
			revalidateServerTags(
				tagsCacheByRoutes.users.singleTag + ": " + userId,
			)
		},
	})
	const form = useForm<CreateNewPassword>({
		resolver: zodResolver(createNewPasswordSchema),
		defaultValues: {
			newPassword: "",
			confirmPassword: "",
		},
	})

	function onSubmit(createNewPasswordData: CreateNewPassword) {
		createNewPassword(createNewPasswordData)
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full flex flex-1 flex-col gap-4 h-full"
			>
				{error && <AlertDestructive title={error} />}
				<CreateNewPasswordForm />
				<Button
					variant={"secondary"}
					type="submit"
					disabled={submitLoading}
					className="w-full text-primary"
				>
					Crear Contraseña
				</Button>
			</form>
		</Form>
	)
}

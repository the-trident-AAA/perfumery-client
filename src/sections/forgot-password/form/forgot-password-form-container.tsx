"use client"

import { AlertDestructive } from "@/src/components/ui/alert-destructive"
import { Button } from "@/src/components/ui/button"
import { Form } from "@/src/components/ui/form"
import { paths } from "@/src/lib/routes/paths"
import useResetPassword from "@/src/sections/auth/hooks/use-reset-password"
import ForgotPasswordForm from "@/src/sections/forgot-password/form/forgot-password-form"
import {
	ForgotPassword,
	forgotPasswordSchema,
} from "@/src/sections/forgot-password/form/schemas/forgot-password-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

interface Props {
	userId: string
	otp: string
}

export default function ForgotPasswordFormContainer({ userId, otp }: Props) {
	const router = useRouter()
	const {
		resetPassword,
		loading: loadingSubmit,
		error: resetPasswordError,
	} = useResetPassword({
		onResetPasswordAction: () => {
			toast.success("Cambio de contraseña realizado con éxito")
			router.push(paths.home.root)
		},
	})
	const form = useForm<ForgotPassword>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			newPassword: "",
			confirmPassword: "",
		},
	})

	function onSubmit(forgotPassword: ForgotPassword) {
		resetPassword(userId, otp, forgotPassword)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full"
			>
				{resetPasswordError && (
					<AlertDestructive title={resetPasswordError} />
				)}
				<ForgotPasswordForm />
				<Button
					type="submit"
					disabled={loadingSubmit}
					variant={"secondary"}
					className="w-full text-primary"
				>
					Cambiar contraseña
				</Button>
			</form>
		</Form>
	)
}

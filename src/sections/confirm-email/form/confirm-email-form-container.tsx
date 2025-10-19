"use client"
import { AlertDestructive } from "@/src/components/ui/alert-destructive"
import { Button } from "@/src/components/ui/button"
import { Form } from "@/src/components/ui/form"
import { paths } from "@/src/lib/routes/paths"
import ConfirmEmailForm from "@/src/sections/confirm-email/form/confirm-email-form"
import {
	confirmEmailSchema,
	ConfirmEmailSchema,
} from "@/src/sections/confirm-email/form/schemas/confirm-email-schema"
import useVerifyEmail from "@/src/sections/confirm-email/hooks/use-verify-email"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

export default function ConfirmEmailFormContainer() {
	const router = useRouter()
	const {
		verifyEmail,
		loading: loadingVerifyEmail,
		error: verifyEmailError,
	} = useVerifyEmail({
		onVerifyEmailAction: userId => {
			toast.success("Identidad verificada con éxito")
			router.push(
				paths.verificationCode({
					id: userId,
					objective: "change-password",
				}).root,
			)
		},
	})

	const form = useForm<ConfirmEmailSchema>({
		resolver: zodResolver(confirmEmailSchema),
		defaultValues: {
			email: "",
		},
	})

	function onSubmit(confirmEmail: ConfirmEmailSchema) {
		verifyEmail(confirmEmail)
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full"
			>
				{verifyEmailError && (
					<AlertDestructive title={verifyEmailError} />
				)}
				<ConfirmEmailForm />
				<Button
					type="submit"
					disabled={loadingVerifyEmail}
					variant={"secondary"}
					className="w-full text-primary"
				>
					Verificar Email
				</Button>
			</form>
		</Form>
	)
}

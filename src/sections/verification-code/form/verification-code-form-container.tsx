"use client"
import { AlertDestructive } from "@/src/components/ui/alert-destructive"
import { Button } from "@/src/components/ui/button"
import { Form } from "@/src/components/ui/form"
import { paths } from "@/src/lib/routes/paths"
import useVerifyOtp from "@/src/sections/auth/hooks/use-verify-otp"
import {
	Otp,
	otpSchema,
} from "@/src/sections/verification-code/form/schemas/verification-code-schema"
import VerificationCodeForm from "@/src/sections/verification-code/form/verification-code-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"

interface Props {
	userId: string
	objective: string
}

export default function VerfificationCodeFormContainer({
	userId,
	objective,
}: Props) {
	const router = useRouter()
	const {
		verifyOtp,
		loading: loadingSubmit,
		error: verifyOtpError,
	} = useVerifyOtp({
		onVerifyOtpAction: (otp: string) => {
			router.push(
				objective === "activate"
					? paths.home.root
					: paths.changePassword({ id: userId, otp }).root,
			)
		},
	})

	const form = useForm<Otp>({
		resolver: zodResolver(otpSchema),
		defaultValues: {
			otp: "",
		},
	})

	function onSubmit(otp: Otp) {
		verifyOtp(userId, otp)
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full"
			>
				{verifyOtpError && <AlertDestructive title={verifyOtpError} />}
				<VerificationCodeForm />
				<Button
					type="submit"
					disabled={loadingSubmit}
					variant={"secondary"}
					className="w-full text-primary"
				>
					Verificar Código
				</Button>
			</form>
		</Form>
	)
}

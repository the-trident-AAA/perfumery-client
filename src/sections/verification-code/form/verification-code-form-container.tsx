"use client"
import { AlertDestructive } from "@/src/components/ui/alert-destructive"
import { Button } from "@/src/components/ui/button"
import { Form } from "@/src/components/ui/form"
import { paths } from "@/src/lib/routes/paths"
import useCheckOtp from "@/src/sections/auth/hooks/use-check-otp"
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
		loading: loadingVerifyOtp,
		error: verifyOtpError,
	} = useVerifyOtp({
		onVerifyOtpAction: () => {
			router.push(paths.home.root)
		},
	})
	const {
		checkOtp,
		loading: loadingCheckOtp,
		error: checkOtpError,
	} = useCheckOtp({
		onCheckOtpAction: (otp: string) => {
			router.push(paths.forgotPassword({ id: userId, otp }).root)
		},
	})

	const form = useForm<Otp>({
		resolver: zodResolver(otpSchema),
		defaultValues: {
			otp: "",
		},
	})

	function onSubmit(otp: Otp) {
		if (objective === "activate") verifyOtp(userId, otp)
		else checkOtp(userId, otp)
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full"
			>
				{objective === "activate"
					? verifyOtpError && (
							<AlertDestructive title={verifyOtpError} />
						)
					: checkOtpError && (
							<AlertDestructive title={checkOtpError} />
						)}
				<VerificationCodeForm />
				<Button
					type="submit"
					disabled={
						objective === "activate"
							? loadingVerifyOtp
							: loadingCheckOtp
					}
					variant={"secondary"}
					className="w-full text-primary"
				>
					Verificar Código
				</Button>
			</form>
		</Form>
	)
}

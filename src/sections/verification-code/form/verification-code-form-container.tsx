"use client"
import { AlertDestructive } from "@/src/components/ui/alert-destructive"
import { Button } from "@/src/components/ui/button"
import { Form } from "@/src/components/ui/form"
import { paths } from "@/src/lib/routes/paths"
import { verifyToken } from "@/src/lib/token"
import useActivateAccount from "@/src/sections/auth/hooks/use-activate-account"
import useCheckOtp from "@/src/sections/auth/hooks/use-check-otp"
import useSignIn from "@/src/sections/sign-in/form/hooks/use-sign-in"
import {
	Otp,
	otpSchema,
} from "@/src/sections/verification-code/form/schemas/verification-code-schema"
import VerificationCodeForm from "@/src/sections/verification-code/form/verification-code-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

interface Props {
	userId: string
	objective: string
}

export default function VerfificationCodeFormContainer({
	userId,
	objective,
}: Props) {
	const { signIn, loading: loadingSignin } = useSignIn({
		onSignInAction: () => {
			window.location.href = paths.home.root
		},
	})

	const router = useRouter()
	const {
		activateAccount,
		loading: loadingActivateAccount,
		error: activateAccountError,
	} = useActivateAccount({
		onActivateAccountAction: async () => {
			toast.success("Verificación realizada con éxito")
			const temporalToken = localStorage.getItem("temporalToken")
			const credentials = (await verifyToken(
				JSON.parse(temporalToken as string).data,
			)) as {
				username: string
				password: string
			}
			console.log(credentials)
			signIn({
				firstCredential: credentials.username,
				password: credentials.password,
			})
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
		if (objective === "activate") activateAccount(userId, otp)
		else checkOtp(userId, otp)
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full"
			>
				{objective === "activate"
					? activateAccountError && (
							<AlertDestructive title={activateAccountError} />
						)
					: checkOtpError && (
							<AlertDestructive title={checkOtpError} />
						)}
				<VerificationCodeForm />
				<Button
					type="submit"
					disabled={
						objective === "activate"
							? loadingActivateAccount || loadingSignin
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

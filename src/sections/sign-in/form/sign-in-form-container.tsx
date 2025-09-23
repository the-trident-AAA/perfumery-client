"use client"
import React, { useEffect } from "react"
import { Credentials, credentialsSchema } from "./schemas/credentials-schema"
import SignInForm from "./sign-in-form"
import useSignIn from "./hooks/use-sign-in"
import { toast } from "react-toastify"
import { paths } from "@/src/lib/routes/paths"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/src/components/ui/button"
import { AlertDestructive } from "@/src/components/ui/alert-destructive"
import useVerifyStateAccount from "@/src/sections/auth/hooks/use-verify-state-account"
import { useSession } from "next-auth/react"

export default function SignInFormContainer() {
	const { data: session, status } = useSession()
	const { signIn, loading: loadingSignIn, error: signInError } = useSignIn()

	useEffect(() => {
		if (status === "authenticated") {
			toast.success("Inicio de sesión realizado con éxito")
			window.location.href = paths.home.root
		}
	}, [session, status])

	const {
		verifyStateAccount,
		loading: loadingVerifiyStateAccount,
		error: verifyStateAccountError,
		loadingSendOtp,
	} = useVerifyStateAccount({
		onVerifyStateAccountAction: (credentials: Credentials) => {
			signIn(credentials)
		},
	})

	const form = useForm<Credentials>({
		resolver: zodResolver(credentialsSchema),
		defaultValues: {
			firstCredential: "",
			password: "",
		},
	})

	function onSubmit(credentials: Credentials) {
		verifyStateAccount(credentials)
	}

	return (
		<FormProvider {...form}>
			<div className=" flex flex-col gap-4 justify-center max-w-md mx-auto w-full">
				<h1 className="text-3xl font-bold">Inicie sesión</h1>
				<p className="text-secondary font-semibold">
					Ingrese el correo electrónico asociado a su cuenta
				</p>
				{verifyStateAccountError && (
					<AlertDestructive title={verifyStateAccountError} />
				)}
				{signInError && <AlertDestructive title={signInError} />}
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full flex flex-col gap-6"
				>
					<SignInForm />
					<Button
						type="submit"
						variant={"secondary"}
						className="w-full text-primary"
						disabled={
							loadingSignIn ||
							loadingVerifiyStateAccount ||
							loadingSendOtp
						}
					>
						Iniciar Sesión
					</Button>
				</form>
			</div>
		</FormProvider>
	)
}

"use client"
import React from "react"
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
import Link from "next/link"

export default function SignInFormContainer() {
	const {
		signIn,
		loading: loadingSignIn,
		error: signInError,
	} = useSignIn({
		onSignInAction: () => {
			toast.success("Inicio de sesión realizado con éxito")
			window.location.href = paths.home.root
		},
	})

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
					<div className="text-right">
						<Link
							href={paths.confirm_email.root}
							className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
						>
							¿Olvidaste tu contraseña?
						</Link>
					</div>
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

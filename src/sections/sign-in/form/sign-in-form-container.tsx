"use client"
import React from "react"
import { Credentials, credentialsSchema } from "./schemas/credentials-schema"
import SignInForm from "./sign-in-form"
import useSignIn from "./hooks/use-sign-in"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { paths } from "@/src/lib/routes/paths"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/src/components/ui/button"
import { AlertDestructive } from "@/src/components/ui/alert-destructive"

export default function SignInFormContainer() {
	const router = useRouter()
	const {
		signIn,
		loading: submitLoading,
		error,
	} = useSignIn({
		onSignInAction: () => {
			toast.success("Inicio de sessión realizado con éxtio")
			router.push(paths.home.root)
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
		signIn(credentials)
	}

	return (
		<FormProvider {...form}>
			<div className="flex-grow flex flex-col gap-4 justify-center max-w-md mx-auto w-full">
				<h1 className="text-3xl font-bold">Inicie sesión</h1>
				<p className="text-gray-500">
					Ingrese el correo electrónico asociado a su cuenta
				</p>
				{error && <AlertDestructive description={error} />}
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full flex flex-col gap-6"
				>
					<SignInForm />
					<Button
						type="submit"
						variant={"default"}
						className="w-full"
						disabled={submitLoading}
					>
						Iniciar Sesión
					</Button>
				</form>
			</div>
		</FormProvider>
	)
}

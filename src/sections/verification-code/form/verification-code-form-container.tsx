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
			try {
				toast.success("Verificación realizada con éxito")
				const temporalToken = localStorage.getItem("temporalToken")

				if (!temporalToken) {
					console.error("No se encontró el token temporal")
					toast.error("Error en la autenticación automática")
					return
				}

				const credentials = (await verifyToken(
					JSON.parse(temporalToken).data,
				)) as {
					email: string
					password: string
				}

				console.log("Credenciales recuperadas:", credentials)
				console.log("Email:", credentials.email)
				console.log("Password length:", credentials.password.length)

				// Intentar hacer login automático primero
				console.log("Iniciando login automático...")
				const signInResult = await signIn({
					firstCredential: credentials.email,
					password: credentials.password,
					isAutoLogin: true,
				})

				console.log("Resultado del login automático:", signInResult)

				// Solo limpiar el token temporal si el login fue exitoso
				if (signInResult.success) {
					console.log(
						"Login automático exitoso, limpiando token temporal",
					)
					localStorage.removeItem("temporalToken")
					toast.success(
						"¡Bienvenido! Tu cuenta ha sido verificada y has iniciado sesión automáticamente",
					)
				} else {
					console.log(
						"Login automático falló, intentando con credenciales frescas",
					)
					// Si el login automático falla, intentar recuperar credenciales nuevamente
					try {
						const freshCredentials = (await verifyToken(
							JSON.parse(temporalToken).data,
						)) as {
							email: string
							password: string
						}

						console.log(
							"Intentando login con credenciales frescas:",
							freshCredentials.email,
						)

						const retryResult = await signIn({
							firstCredential: freshCredentials.email,
							password: freshCredentials.password,
							isAutoLogin: true,
						})

						if (retryResult.success) {
							console.log(
								"Login con credenciales frescas exitoso",
							)
							localStorage.removeItem("temporalToken")
							toast.success(
								"¡Bienvenido! Tu cuenta ha sido verificada y has iniciado sesión automáticamente",
							)
						} else {
							console.log(
								"Ambos intentos de login automático fallaron",
							)
							toast.error(
								"La verificación fue exitosa pero no pudimos iniciar sesión automáticamente. Por favor inicia sesión manualmente.",
							)
							setTimeout(() => {
								router.push(paths.sign_in().root)
							}, 2000)
						}
					} catch (retryError) {
						console.error(
							"Error en reintento de login:",
							retryError,
						)
						toast.error(
							"La verificación fue exitosa pero no pudimos iniciar sesión automáticamente. Por favor inicia sesión manualmente.",
						)
						setTimeout(() => {
							router.push(paths.sign_in().root)
						}, 2000)
					}
				}
			} catch (error) {
				console.error("Error en la activación:", error)
				toast.error(
					"Error en la autenticación automática. Por favor inicia sesión manualmente",
				)
				setTimeout(() => {
					router.push(paths.sign_in().root)
				}, 2000)
			}
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

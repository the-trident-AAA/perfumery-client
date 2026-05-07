"use client"

import { Button } from "@/src/components/ui/button"
import { Form } from "@/src/components/ui/form"
import useSendOtp from "@/src/sections/auth/hooks/use-send-otp"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"
import { Mail, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const forgotPasswordSchema = z.object({
	email: z.string().email({
		message: "Debe introducir un email válido",
	}),
})

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordPage() {
	const router = useRouter()

	const {
		sendOtp,
		loading: loadingSubmit,
		error: sendOtpError,
	} = useSendOtp({
		onSendAction: (userId: string) => {
			toast.success("Código de verificación enviado a tu email")
			// Redirigir a la página de verificación
			window.location.href = `/verification-code/${userId}/forgot`
		},
	})

	const form = useForm<ForgotPasswordForm>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	})

	function onSubmit(forgotPassword: ForgotPasswordForm) {
		sendOtp(forgotPassword.email)
	}

	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="w-full max-w-sm">
				{/* Botón de volver */}
				<div className="w-full flex justify-start mb-4">
					<button
						onClick={() => router.back()}
						className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						<span className="text-sm">Volver</span>
					</button>
				</div>

				<div className="flex flex-col gap-6 justify-center items-center">
					<div className="mx-auto w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center">
						<Mail className="w-8 h-8 text-primary" />
					</div>
					<div className="space-y-2 text-center">
						<p className="text-2xl text-secondary font-bold">
							¿Olvidaste tu contraseña?
						</p>
						<p className="text-secondary font-semibold">
							Introduce tu email para recibir un código de
							verificación
						</p>
					</div>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-col gap-4 w-full"
						>
							{sendOtpError && (
								<div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
									{sendOtpError}
								</div>
							)}

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									placeholder="Introduce tu email"
									{...form.register("email")}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
								{form.formState.errors.email && (
									<p className="text-red-500 text-sm mt-1">
										{form.formState.errors.email.message}
									</p>
								)}
							</div>

							<Button
								type="submit"
								disabled={loadingSubmit}
								variant={"secondary"}
								className="w-full text-primary"
							>
								{loadingSubmit
									? "Enviando..."
									: "Enviar código"}
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	)
}

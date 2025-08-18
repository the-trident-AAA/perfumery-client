"use client"

import { AlertDestructive } from "@/src/components/ui/alert-destructive"
import { Button } from "@/src/components/ui/button"
import { Form } from "@/src/components/ui/form"
import { paths } from "@/src/lib/routes/paths"
import useRegister from "@/src/sections/auth/hooks/use-register"
import useSendOtp from "@/src/sections/auth/hooks/use-send-otp"
import RegistrationForm from "@/src/sections/registration/form/registration-form"
import {
	Register,
	registerSchema,
} from "@/src/sections/registration/form/schemas/register-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

export default function RegistrationFormContainer() {
	const router = useRouter()
	const { sendOtp, loading: loadingSendOtp } = useSendOtp({})
	const {
		register,
		loading: loadingSubmit,
		error: registerPasswordError,
	} = useRegister({
		onRegisterAction: async (userId: string) => {
			toast.success("Registro completado con éxito")
			await sendOtp(userId)
			router.push(
				paths.verificationCode({ id: userId, objective: "activate" })
					.root,
			)
		},
	})
	const form = useForm<Register>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	})

	function onSubmit(registerSchema: Register) {
		register(registerSchema)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full"
			>
				{registerPasswordError && (
					<AlertDestructive title={registerPasswordError} />
				)}
				<RegistrationForm />
				<Button
					type="submit"
					disabled={loadingSubmit || loadingSendOtp}
					variant={"secondary"}
					className="w-full text-primary"
				>
					Crear Cuenta
				</Button>
				<Button
					type="button"
					onClick={() => {
						router.back()
					}}
					variant={"outline"}
					className="w-full"
				>
					Cancelar
				</Button>
			</form>
		</Form>
	)
}

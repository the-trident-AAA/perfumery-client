"use client"

import { AlertDestructive } from "@/src/components/ui/alert-destructive"
import { Button } from "@/src/components/ui/button"
import { Form } from "@/src/components/ui/form"
import { paths } from "@/src/lib/routes/paths"
import useRegister from "@/src/sections/auth/hooks/use-register"
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
	const {
		register,
		loading: loadingSubmit,
		error: registerPasswordError,
	} = useRegister({
		onRegisterAction: (userId: string) => {
			toast.success("Registro completado con éxito")
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
				{/* Password Requirements */}
				<div className="text-xs text-secondary font-semibold space-y-1">
					<p>Requisitos:</p>
					<ul className="list-disc list-inside space-y-1 ml-2">
						<li className={"text-primary"}>
							Usuario: mínimo 3 caracteres
						</li>
						<li className={"text-primary"}>Email válido</li>
						<li className={"text-primary"}>
							Contraseña: mínimo 8 caracteres
						</li>
						<li className={"text-primary"}>
							Una mayúscula, una minúscula y un número
						</li>
					</ul>
				</div>
				<Button
					type="submit"
					disabled={loadingSubmit}
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

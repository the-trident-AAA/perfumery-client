import { z } from "zod"

export interface Register {
	username: string
	email: string
	password: string
	confirmPassword: string
}

export const registerSchema = z
	.object({
		username: z
			.string()
			.min(3, { message: "Debe contar con al menos 3 caracteres" }),
		email: z.string().email({
			message:
				"El campo debe seguir las directrices de un correo electrónico",
		}),
		password: z.string().refine(val => val.length >= 8, {
			message: "La contraseña debe tener al menos 8 caracteres",
		}),
		confirmPassword: z.string().refine(val => val.length >= 8, {
			message: "La contraseña debe tener al menos 8 caracteres",
		}),
	})
	.refine(
		data => {
			// Si se ingresa nueva contraseña, la confirmación debe coincidir
			if (data.password.length > 0) {
				return data.password === data.confirmPassword
			}
			return true
		},
		{
			message: "Las contraseñas no coinciden",
			path: ["confirmPassword"], // Esto hace que el error aparezca en el campo confirmPassword
		},
	)

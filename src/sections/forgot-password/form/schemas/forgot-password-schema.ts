import { z } from "zod"

export interface ForgotPassword {
	newPassword: string
	confirmPassword: string
}

export const forgotPasswordSchema = z
	.object({
		newPassword: z.string().refine(val => val.length >= 8, {
			message: "La contraseña debe tener al menos 8 caracteres",
		}),
		confirmPassword: z.string().refine(val => val.length >= 8, {
			message: "La contraseña debe tener al menos 8 caracteres",
		}),
	})
	.refine(
		data => {
			// Si se ingresa nueva contraseña, la confirmación debe coincidir
			if (data.newPassword.length > 0) {
				return data.newPassword === data.confirmPassword
			}
			return true
		},
		{
			message: "Las contraseñas no coinciden",
			path: ["confirmPassword"], // Esto hace que el error aparezca en el campo confirmPassword
		},
	)

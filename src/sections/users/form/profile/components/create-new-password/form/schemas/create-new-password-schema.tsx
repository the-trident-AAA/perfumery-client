import { z } from "zod"

export interface CreateNewPassword {
	newPassword: string
}

export const createNewPasswordSchema = z.object({
	newPassword: z.string().refine(val => val.length === 0 || val.length >= 8, {
		message: "La contraseña debe tener al menos 8 caracteres",
	}),
})

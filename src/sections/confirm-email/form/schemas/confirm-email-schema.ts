import { z } from "zod"

export interface ConfirmEmailSchema {
	email: string
}

export const confirmEmailSchema = z.object({
	email: z.string().email({
		message:
			"El campo debe seguir las directrices de un correo electrónico",
	}),
})

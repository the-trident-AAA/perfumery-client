import { z } from "zod"

export interface UserEdit {
	username: string
	avatar?: string
}

export const userEditSchema = z.object({
	username: z
		.string()
		.min(1, { message: "El nombre de usuario es requerido" }),
	avatar: z
		.instanceof(File, {
			message: "Por favor seleccione una imagen.",
		})
		.optional()
		.refine(
			file => !file || file.size <= 5 * 1024 * 1024,
			"La imagen no debe exceder 5MB.",
		)
		.refine(
			file => !file || file.type.startsWith("image/"),
			"El archivo debe ser una imagen.",
		),
})

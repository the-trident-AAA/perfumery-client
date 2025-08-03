import { z } from "zod"

export interface OrderPerfumeEdit {
	id: string
	perfumeId: string
	cant: number
}

export const orderPerfumeSchema = z.object({
	id: z.string(),
	perfumeId: z.string(),
	cant: z
		.number()
		.min(1, { message: "Debe de seleccionar al menos una cantidad" }),
})

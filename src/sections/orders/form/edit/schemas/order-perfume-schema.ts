import { z } from "zod"

export interface OrderPerfumeEdit {
	perfumeId: string
	cant: number
}

export const orderPerfumeSchema = z.object({
	perfumeId: z.string(),
	cant: z
		.number()
		.min(1, { message: "Debe de seleccionar al menos una cantidad" }),
})

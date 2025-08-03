import {
	OrderPerfumeEdit,
	orderPerfumeSchema,
} from "@/src/sections/orders/form/edit/schemas/order-perfume-schema"
import { z } from "zod"

export interface OrderEdit {
	perfumes: OrderPerfumeEdit[]
}

export const orderEditSchema = z.object({
	perfumes: z.array(orderPerfumeSchema),
})

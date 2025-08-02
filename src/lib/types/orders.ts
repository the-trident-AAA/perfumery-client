import { OrderPerfume } from "@/src/lib/types/orders-perfumes"
import { User } from "@/src/lib/types/users"

export interface Order {
	id: string
	state: OrderState
	user: User
	orderPerfumes: OrderPerfume[]
	totalItems: number
	totalMount: number
}

export enum OrderState {
	PENDING = "pendiente",
	CANCELED = "cancelado",
	COMPLETED = "completado",
}

import { OrderPerfume } from "@/src/lib/types/orders-perfumes"

export interface Order {
	id: string
	state: OrderState
	price: number
	orderPerfumes: OrderPerfume[]
}

export enum OrderState {
	PENDING = "pendiente",
	CANCELED = "cancelado",
	COMPLETED = "completado",
}

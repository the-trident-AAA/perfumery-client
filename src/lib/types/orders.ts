import {
	OrderPerfume,
	OrderPerfumeEditDto,
} from "@/src/lib/types/orders-perfumes"
import { User } from "@/src/lib/types/users"
import { OrderEdit } from "@/src/sections/orders/form/edit/schemas/order-edit-schema"

export interface Order {
	id: string
	state: OrderState
	user: User
	orderPerfumes: OrderPerfume[]
	totalItems: number
	totalMount: number
}

export interface OrderEditDto {
	perfumes: OrderPerfumeEditDto[]
}

export const convertOrderEditDto = (orderEdit: OrderEdit): OrderEditDto => {
	return {
		...orderEdit,
	}
}

export enum OrderState {
	PENDING = "pendiente",
	CANCELED = "cancelado",
	COMPLETED = "completado",
}

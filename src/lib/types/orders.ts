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

export const getOrderStateText = (orderState: OrderState) => {
	if (orderState === OrderState.PENDING) return "Pendiente"
	else if (orderState === OrderState.CANCELED) return "Cancelada"
	else if (orderState === OrderState.COMPLETED) return "Aceptada"
	else return "Desconocida"
}

export const getOrderStateVariant = (orderState: OrderState) => {
	if (orderState === OrderState.PENDING) return "bg-[#ffb703] text-secondary"
	else if (orderState === OrderState.CANCELED)
		return "bg-destructive text-white"
	else if (orderState === OrderState.COMPLETED)
		return "bg-[#058c42] text-secondary"
	else return "bg-destructive text-white"
}

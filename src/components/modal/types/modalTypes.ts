export interface InfoModal {
	name: string
	// metadata
	entity?: string // id entity
	elements?: any[]
	actionInsert?: (element: any) => void
	onClose?: () => void
	onOpen?: () => void
	actionExecute?: () => void
}
export interface SectionModal {
	name: string
	title?: string
}
export interface ModalTypes {
	perfumDetailsModal: SectionModal
	loginModal: SectionModal
	registrationModal: SectionModal
	shopCartModal: SectionModal
	editProfileModal: SectionModal
	changePasswordModal: SectionModal
	clearShopCartModal: SectionModal & {
		message: string
		warningMessage: string
		cancelButtonText: string
		confirmButtonText: string
	}
	ordersModal: SectionModal
}

export const modalTypes: ModalTypes = {
	perfumDetailsModal: {
		name: "perfumDetailsModal",
		title: "Detalles del Perfume",
	},
	loginModal: {
		name: "loginModal",
		title: "Inicie Sesión",
	},
	registrationModal: {
		name: "registrationModal",
		title: "Registro de Usuario",
	},
	shopCartModal: {
		name: "shopCartModal",
		title: "Carrito de Compras",
	},
	editProfileModal: {
		name: "editProfileModal",
		title: "Edite su información de Pérfil",
	},
	changePasswordModal: {
		name: "changePasswordModal",
		title: "Cambie su contraseña actual",
	},
	clearShopCartModal: {
		name: "clearShopCartModal",
		title: "Limpieza de Carrito de Compras",
		message: "¿Está seguro de que desea limpiar su carrito de compras?",
		warningMessage:
			"La acción de limpieza del carrito de compras provocará la eliminación de todos los perfumes que se encuentran en el mismo.",
		cancelButtonText: "Cancelar",
		confirmButtonText: "Confirmar",
	},
	ordersModal: {
		name: "ordersModal",
		title: "Pedidos",
	},
}

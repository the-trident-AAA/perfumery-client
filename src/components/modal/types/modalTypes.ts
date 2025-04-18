export interface InfoModal {
	name: string
	// matadata
	entity?: string // id entity
	actionInsert?: (element: any) => void
	onClose?: () => void
	onOpen?: () => void
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
}

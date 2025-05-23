export interface InfoModal {
	name: string
	// matadata
	entity?: string // id entity
	elements?: any[]
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
	editProfileModal: SectionModal
	changePasswordModal: SectionModal
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
}

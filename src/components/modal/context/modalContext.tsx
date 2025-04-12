"use client"

import React, { createContext } from "react"
import useModal from "../hooks/useModal"

interface Props {
	currentModal: string[]
	handleOpenModal: (modalName: string) => void
	handleCloseModal: (modalName: string) => void
	onOpenChange: (modalName: string) => void
	isModalOpen: (modalName: string) => boolean
}

const defaultProps: Props = {
	currentModal: [],
	handleOpenModal: () => {
		throw new Error("handleOpenModal no está definido.")
	},
	handleCloseModal: () => {
		throw new Error("handleCloseModal no está definido.")
	},
	onOpenChange: () => {
		throw new Error("onOpenChange no está definido.")
	},
	isModalOpen: () => {
		throw new Error("isModalOpen no está definido.")
	},
}

export const ModalContext = createContext<Props>(defaultProps)

export function ModalProvider({ children }: { children: React.ReactNode }) {
	const {
		currentModal,
		handleOpenModal,
		handleCloseModal,
		onOpenChange,
		isModalOpen,
	} = useModal()

	return (
		<ModalContext.Provider
			value={{
				currentModal,
				handleCloseModal,
				handleOpenModal,
				onOpenChange,
				isModalOpen,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

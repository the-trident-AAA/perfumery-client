import { useState } from "react"
import { InfoModal } from "../types/modalTypes"

export default function useModal() {
	const [currentModal, setCurrentModal] = useState<InfoModal[]>([])

	const handleOpenModal = (infoModal: InfoModal) => {
		if (infoModal.onOpen) infoModal.onOpen()

		setCurrentModal(prev => {
			// Evitar duplicados (opcional)
			if (prev.some(modal => modal.name === infoModal.name)) return prev
			return [...prev, infoModal]
		})
	}

	const handleCloseModal = (
		modalName: string,
		callOnClose: boolean = true,
	) => {
		setCurrentModal(prev => {
			const modalToClose = prev.find(modal => modal.name === modalName)
			if (modalToClose && modalToClose.onClose && callOnClose)
				modalToClose.onClose()

			return prev.filter(infoModal => infoModal.name !== modalName)
		})
	}

	const onOpenChange = (modalName: string) => {
		handleCloseModal(modalName)
	}

	const getInfoModal = (modalName: string) =>
		currentModal.find(infoModal => infoModal.name === modalName)

	const isModalOpen = (modalName: string) =>
		currentModal.some(infoModal => infoModal.name === modalName)

	return {
		currentModal,
		onOpenChange,
		handleOpenModal,
		handleCloseModal,
		isModalOpen,
		getInfoModal,
	}
}

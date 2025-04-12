import { useState } from "react"
import { InfoModal } from "../types/modalTypes"

export default function useModal() {
	const [currentModal, setCurrentModal] = useState<InfoModal[]>([])

	const handleOpenModal = (infoModal: InfoModal) => {
		setCurrentModal([...currentModal, infoModal])
	}

	const handleCloseModal = (modalName: string) => {
		setCurrentModal(
			currentModal.filter(infoModal => infoModal.name !== modalName),
		)
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

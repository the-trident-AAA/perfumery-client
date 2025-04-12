"use client"
import { useState } from "react"

export default function useModal() {
	const [currentModal, setCurrentModal] = useState<string[]>([])

	const handleOpenModal = (modalName: string) => {
		setCurrentModal([...currentModal, modalName])
	}

	const handleCloseModal = (modalName: string) => {
		setCurrentModal(currentModal.filter(modal => modal !== modalName))
	}

	const onOpenChange = (modalName: string) => {
		handleCloseModal(modalName)
	}

	const isModalOpen = (modalName: string) => currentModal.includes(modalName)
	return {
		currentModal,
		onOpenChange,
		handleOpenModal,
		handleCloseModal,
		isModalOpen,
	}
}

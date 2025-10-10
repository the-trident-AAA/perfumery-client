"use client"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { useBreakpoint } from "@/src/lib/hooks/screen/use-breakpoint"
import { useCallback, useContext, useEffect, useState } from "react"

export default function useLittleCar() {
	const { handleOpenModal, handleCloseModal } = useContext(ModalContext)
	const breakpoint = useBreakpoint()
	const [isPopoverOpen, setIsPopoverOpen] = useState(false)
	const [isShopCartOpen, setIsShopCartOpen] = useState(false)

	const closeModal = useCallback(() => {
		setIsShopCartOpen(false)
	}, [setIsShopCartOpen])

	const handleOnOpenPopover = useCallback(
		(open: boolean) => {
			setIsShopCartOpen(open)
			if (
				breakpoint === "md" ||
				breakpoint === "sm" ||
				breakpoint === "xs"
			) {
				if (open) {
					handleOpenModal({
						name: modalTypes.shopCartModal.name,
						onClose: closeModal,
					})
				} else {
					handleCloseModal(modalTypes.shopCartModal.name)
				}
			} else {
				setIsPopoverOpen(open)
			}
		},
		[handleOpenModal, handleCloseModal, setIsPopoverOpen, breakpoint],
	)

	const resizing = useCallback(() => {
		if (
			isShopCartOpen &&
			(breakpoint === "md" || breakpoint === "sm" || breakpoint === "xs")
		) {
			setIsPopoverOpen(false)
			handleOpenModal({
				name: modalTypes.shopCartModal.name,
				onClose: closeModal,
			})
		} else if (
			!(breakpoint === "md" || breakpoint === "sm" || breakpoint === "xs")
		) {
			if (isShopCartOpen) {
				setIsPopoverOpen(true)
				handleCloseModal(modalTypes.shopCartModal.name, false)
			}
		}
	}, [
		setIsPopoverOpen,
		handleCloseModal,
		isShopCartOpen,
		breakpoint,
		closeModal,
	])

	const handleClose = useCallback(() => {
		console.log("Entre al hadnel")
		if (breakpoint === "md" || breakpoint === "sm" || breakpoint === "xs") {
			console.log("Entre al modal")
			// En breakpoints pequeños, cerrar el modal
			handleCloseModal(modalTypes.shopCartModal.name)
		} else {
			// En breakpoints grandes, cerrar el popover
			setIsPopoverOpen(false)
		}
		setIsShopCartOpen(false)
	}, [breakpoint, handleCloseModal, setIsPopoverOpen])

	useEffect(() => {
		resizing()
	}, [breakpoint])
	return { isPopoverOpen, handleOnOpenPopover, handleClose }
}

"use client"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import useModal from "@/src/components/modal/hooks/useModal"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import PerfumDetailsPanel from "@/src/sections/perfums/perfum-details/perfum-details-panel/perfum-details-panel"
import React, { useContext } from "react"

const perfum = {
	id: "8",
	brand: "Christian Dior",
	name: "Sauvage",
	description:
		"Una de las mejores fragancias que podrás encontrar sin duda alguna",
	price: 90,
	image: "/images/place-holder.jpg",
}

export default function PerfumDetailsContainer() {
	const { getInfoModal } = useContext(ModalContext)
	const infoModal = getInfoModal(modalTypes.perfumDetailsModal.name)
	const id = infoModal && infoModal.entity ? infoModal.entity : null
	if (id)
		return <PerfumDetailsPanel perfum={{ ...perfum, id: id.toString() }} />
}

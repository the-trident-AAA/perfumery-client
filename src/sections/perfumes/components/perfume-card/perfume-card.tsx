"use client"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { Perfume } from "@/src/lib/types/perfumes"
import { perfumeImagePlaceHolder } from "@/src/sections/perfumes/lib/image-place-holder"
//import { useState } from "react"
import Image from "next/image"
import { useContext } from "react"
//import { Heart } from "lucide-react"

interface Props {
	perfume: Perfume
}

export default function PerfurmeCard({
	perfume: { id, brand, name, description, price, image },
}: Props) {
	const { handleOpenModal } = useContext(ModalContext)
	const onDetails = () => {
		handleOpenModal({
			name: modalTypes.perfumDetailsModal.name,
			entity: id,
		})
	}
	return (
		<div
			className="w-full max-w-xs bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
			onClick={onDetails}
		>
			<div className="relative">
				<Image
					className="aspect-square object-cover"
					src={image || perfumeImagePlaceHolder}
					alt={name}
					width={400}
					height={400}
				/>
				{/*<button className="absolute top-3 right-3 p-1" onClick={() => setIsFavorite(!isFavorite)}>
          <Heart className={`w-6 h-6 ${isFavorite ? "fill-black stroke-black" : "stroke-black"}`} />
        </button>*/}
			</div>

			<div className="p-4 sm:space-y-2">
				<h3 className="font-bold text-base sm:text-lg text-black">
					{brand}
				</h3>
				<div className="space-y-0.5">
					<h4 className="text-sm font-medium text-blue-900">
						{name}
					</h4>
					<p className="line-clamp-3 break-words text-xs text-secondary-app sm:text-sm">
						{description}
					</p>
				</div>

				<div className="pt-1 sm:pt-4 sm:pb-2">
					<p className="text-sm sm:text-xl font-semibold">
						{price.toFixed(2)} $
					</p>
				</div>
			</div>

			<div className="border-t border-gray-200">
				<button className="w-full py-3 text-sm sm:text-xl text-center text-pink-600 font-medium hover:bg-pink-50 transition-colors">
					Añadir al carrito
				</button>
			</div>
		</div>
	)
}

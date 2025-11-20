"use client"
import Image from "next/image"
import { useState } from "react"
import { ZoomIn } from "lucide-react"
import ImageViewerModal from "@/src/components/image-viewer-modal/image-viewer-modal"

interface Props {
	altName: string
	images: string[]
}

export default function ThumbnailsImage({ images, altName }: Props) {
	const [selectedImageIndex, setSelectedImageIndex] = useState(0)
	const [isViewerOpen, setIsViewerOpen] = useState(false)

	const openViewer = () => {
		setIsViewerOpen(true)
	}

	return (
		<>
			<div className="flex flex-col gap-4">
				{/* Imagen principal */}
				<div
					className="relative aspect-square w-full md:h-[52vh] border-3 border-secondary rounded-xl overflow-hidden bg-white flex items-center justify-center cursor-pointer group"
					onClick={openViewer}
				>
					<Image
						src={images[selectedImageIndex] || "/placeholder.svg"}
						alt={altName}
						width={1920}
						height={1080}
						quality={100}
						className="w-full h-full object-contain"
					/>

					{/* Overlay con icono de zoom */}
					<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-secondary/60">
						<div className="bg-white/90 rounded-full p-4 backdrop-blur-sm animate-pulse">
							<ZoomIn
								className="w-12 h-12 text-secondary"
								strokeWidth={2.5}
							/>
						</div>
					</div>
				</div>

				{/* Thumbnails */}
				<div className="flex flex-wrap gap-3 overflow-x-auto pb-2">
					{images.map((image, index) => (
						<button
							key={index}
							onClick={() => setSelectedImageIndex(index)}
							className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex items-center justify-center bg-white ${
								selectedImageIndex === index
									? "border-secondary ring-2 ring-primary"
									: "border-gray-200 hover:border-gray-300"
							}`}
						>
							<Image
								src={image || "/placeholder.svg"}
								alt={`${altName} vista ${index + 1}`}
								width={80}
								height={80}
								className="w-full h-full object-contain"
							/>
						</button>
					))}
				</div>
			</div>

			<ImageViewerModal
				images={images}
				initialIndex={selectedImageIndex}
				altName={altName}
				isOpen={isViewerOpen}
				onClose={() => setIsViewerOpen(false)}
			/>
		</>
	)
}

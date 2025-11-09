"use client"

import Image from "next/image"
import { cn } from "@/src/lib/utils/utils"
import { useEffect, useState } from "react"

interface BackgroundImageCarouselProps {
	title: string
	images: string[]
	autoPlayInterval?: number
}

export function HomeBannerImagesCarouselDekstop({
	title,
	images,
	autoPlayInterval = 5000,
}: BackgroundImageCarouselProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const [isTransitioning, setIsTransitioning] = useState(false)

	useEffect(() => {
		if (images.length <= 1) return

		const interval = setInterval(() => {
			setIsTransitioning(true)
			setTimeout(() => {
				setCurrentImageIndex(prev => (prev + 1) % images.length)
				setIsTransitioning(false)
			}, 500)
		}, autoPlayInterval)

		return () => clearInterval(interval)
	}, [images.length, autoPlayInterval])

	return (
		<div className="absolute inset-0">
			{images.map((image, index) => (
				<div
					key={index}
					className={cn(
						"absolute inset-0 transition-opacity duration-1000",
						index === currentImageIndex
							? "opacity-100"
							: "opacity-0",
					)}
				>
					<Image
						src={image || "/placeholder.svg"}
						width={1920}
						height={1080}
						quality={100}
						alt={`${title} - imagen ${index + 1}`}
						className="h-full w-full object-cover"
					/>
					{/* Overlay oscuro para mejor legibilidad del texto */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
				</div>
			))}

			{/* Indicadores */}
			{images.length > 1 && (
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentImageIndex(index)}
							className={cn(
								"h-1.5 rounded-full transition-all duration-300",
								index === currentImageIndex
									? "w-8 bg-white"
									: "w-1.5 bg-white/50 hover:bg-white/70",
							)}
							aria-label={`Ver imagen ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	)
}

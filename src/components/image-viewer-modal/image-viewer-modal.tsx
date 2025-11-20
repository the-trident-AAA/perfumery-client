"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/src/components/ui/button"

interface ImageViewerModalProps {
	images: string[]
	initialIndex: number
	altName: string
	isOpen: boolean
	onClose: () => void
}

export default function ImageViewerModal({
	images,
	initialIndex,
	altName,
	isOpen,
	onClose,
}: ImageViewerModalProps) {
	const [currentIndex, setCurrentIndex] = useState(initialIndex)
	const [scale, setScale] = useState(1)
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [isDragging, setIsDragging] = useState(false)
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
	const containerRef = useRef<HTMLDivElement>(null)

	// Reset zoom and position when image changes
	useEffect(() => {
		setScale(1)
		setPosition({ x: 0, y: 0 })
	}, [currentIndex])

	// Reset index when modal opens
	useEffect(() => {
		if (isOpen) {
			setCurrentIndex(initialIndex)
		}
	}, [isOpen, initialIndex])

	// Keyboard navigation
	useEffect(() => {
		if (!isOpen) return

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose()
			if (e.key === "ArrowLeft") handlePrevious()
			if (e.key === "ArrowRight") handleNext()
			if (e.key === "+" || e.key === "=") handleZoomIn()
			if (e.key === "-") handleZoomOut()
		}

		window.addEventListener("keydown", handleKeyDown)
		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [isOpen, currentIndex, scale])

	const handleNext = () => {
		setCurrentIndex(prev => (prev + 1) % images.length)
	}

	const handlePrevious = () => {
		setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
	}

	const handleZoomIn = () => {
		setScale(prev => Math.min(prev + 0.5, 5))
	}

	const handleZoomOut = () => {
		setScale(prev => {
			const newScale = Math.max(prev - 0.5, 1)
			if (newScale === 1) {
				setPosition({ x: 0, y: 0 })
			}
			return newScale
		})
	}

	const handleDoubleClick = () => {
		if (scale === 1) {
			setScale(2)
		} else {
			setScale(1)
			setPosition({ x: 0, y: 0 })
		}
	}

	const handleMouseDown = (e: React.MouseEvent) => {
		if (scale > 1) {
			setIsDragging(true)
			setDragStart({
				x: e.clientX - position.x,
				y: e.clientY - position.y,
			})
		}
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (isDragging && scale > 1) {
			setPosition({
				x: e.clientX - dragStart.x,
				y: e.clientY - dragStart.y,
			})
		}
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	const handleTouchStart = (e: React.TouchEvent) => {
		if (scale > 1 && e.touches.length === 1) {
			setIsDragging(true)
			setDragStart({
				x: e.touches[0].clientX - position.x,
				y: e.touches[0].clientY - position.y,
			})
		}
	}

	const handleTouchMove = (e: React.TouchEvent) => {
		if (isDragging && scale > 1 && e.touches.length === 1) {
			setPosition({
				x: e.touches[0].clientX - dragStart.x,
				y: e.touches[0].clientY - dragStart.y,
			})
		}
	}

	const handleTouchEnd = () => {
		setIsDragging(false)
	}

	const handleWheel = (e: React.WheelEvent) => {
		e.preventDefault()
		if (e.deltaY < 0) {
			handleZoomIn()
		} else {
			handleZoomOut()
		}
	}

	const toggleZoom = () => {
		if (scale === 1) {
			setScale(2)
		} else {
			setScale(1)
			setPosition({ x: 0, y: 0 })
		}
	}

	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
					onClick={e => {
						if (e.target === e.currentTarget) {
							onClose()
						}
					}}
				>
					<motion.div
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -100, opacity: 0 }}
						transition={{ delay: 0.1, duration: 0.4 }}
						className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10"
					>
						<div className="text-white">
							<p className="text-sm opacity-60">
								{currentIndex + 1} / {images.length}
							</p>
							<p className="text-lg font-semibold">{altName}</p>
						</div>

						<div className="flex gap-2">
							<Button
								variant="ghost"
								size="icon"
								className="text-white hover:bg-white/10"
								onClick={e => {
									e.stopPropagation()
									toggleZoom()
								}}
							>
								<ZoomIn className="h-5 w-5" />
							</Button>
							<Button
								variant="ghost"
								size="icon"
								className="text-white hover:bg-white/10"
								onClick={e => {
									e.stopPropagation()
									onClose()
								}}
							>
								<X className="h-5 w-5" />
							</Button>
						</div>
					</motion.div>

					<div className="absolute inset-0 flex items-center justify-center p-4 md:p-20">
						<AnimatePresence mode="wait" custom={currentIndex}>
							<motion.div
								key={currentIndex}
								custom={currentIndex}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{
									duration: 0.5,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="relative max-w-full max-h-full"
								onClick={e => e.stopPropagation()}
							>
								<div
									ref={containerRef}
									className="relative flex items-center justify-center overflow-hidden"
									onMouseDown={handleMouseDown}
									onMouseMove={handleMouseMove}
									onMouseUp={handleMouseUp}
									onMouseLeave={handleMouseUp}
									onTouchStart={handleTouchStart}
									onTouchMove={handleTouchMove}
									onTouchEnd={handleTouchEnd}
									onDoubleClick={handleDoubleClick}
									onWheel={handleWheel}
									style={{
										cursor:
											scale > 1
												? isDragging
													? "grabbing"
													: "grab"
												: "pointer",
									}}
								>
									<div
										style={{
											transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
											transition: isDragging
												? "none"
												: "transform 0.2s ease-out",
										}}
									>
										<Image
											src={
												images[currentIndex] ||
												"/placeholder.svg"
											}
											alt={`${altName} - Imagen ${currentIndex + 1}`}
											width={1920}
											height={1080}
											className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl select-none"
											draggable={false}
											priority
										/>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					{images.length > 1 && (
						<>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -100, opacity: 0 }}
								transition={{ delay: 0.2, duration: 0.4 }}
							>
								<Button
									variant="ghost"
									size="icon"
									className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 w-12 h-12 rounded-full"
									onClick={e => {
										e.stopPropagation()
										handlePrevious()
									}}
								>
									<ChevronLeft className="h-8 w-8" />
								</Button>
							</motion.div>

							<motion.div
								initial={{ x: 100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 100, opacity: 0 }}
								transition={{ delay: 0.2, duration: 0.4 }}
							>
								<Button
									variant="ghost"
									size="icon"
									className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 w-12 h-12 rounded-full"
									onClick={e => {
										e.stopPropagation()
										handleNext()
									}}
								>
									<ChevronRight className="h-8 w-8" />
								</Button>
							</motion.div>
						</>
					)}

					<motion.div
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 100, opacity: 0 }}
						transition={{ delay: 0.15, duration: 0.4 }}
						className="absolute bottom-0 left-0 right-0 p-6"
						onClick={e => e.stopPropagation()}
					>
						<div className="flex gap-3 justify-center overflow-x-auto pb-2 scrollbar-hide">
							{images.map((image, index) => (
								<motion.button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
										index === currentIndex
											? "ring-2 ring-white scale-110"
											: "opacity-50 hover:opacity-100"
									}`}
									whileHover={{
										scale:
											index === currentIndex ? 1.1 : 1.05,
									}}
									whileTap={{ scale: 0.95 }}
								>
									<Image
										src={image || "/placeholder.svg"}
										alt={`Miniatura ${index + 1}`}
										fill
										className="object-cover"
										sizes="80px"
									/>
								</motion.button>
							))}
						</div>
					</motion.div>

					<motion.div
						className="absolute top-0 left-0 h-1 bg-white"
						initial={{ width: "0%" }}
						animate={{
							width: `${((currentIndex + 1) / images.length) * 100}%`,
						}}
						transition={{ duration: 0.3 }}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

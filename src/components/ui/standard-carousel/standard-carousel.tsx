"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import type React from "react"
import { ReactNode, useCallback, useEffect, useState } from "react"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/src/components/ui/carousel"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils/utils"

interface Props<T> {
	children: ReactNode
	className?: string
	contentClassName?: string
	autoPlay?: boolean
	autoPlayDelay?: number
	loop?: boolean
	slidesToScroll?: number
	showDots?: boolean
	/** Variante para la posición de los botones laterales */
	navVariant?: "default" | "spaced" | "banner"
	/** Variante de estilo de los indicadores (bolitas) */
	dotsVariant?: "default" | "banner"
}

export default function StandardCarousel<T extends { id: number | string }>({
	children,
	className,
	contentClassName,
	autoPlay = false,
	autoPlayDelay = 5000,
	loop = true,
	slidesToScroll = 1,
	showDots = false,
	navVariant = "default",
	dotsVariant = "default",
}: Props<T>) {
	const [api, setApi] = useState<CarouselApi>()
	const [canScrollPrev, setCanScrollPrev] = useState(false)
	const [canScrollNext, setCanScrollNext] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [totalSections, setTotalSections] = useState(0)

	const updateState = useCallback(() => {
		if (!api) return
		setCanScrollPrev(api.canScrollPrev())
		setCanScrollNext(api.canScrollNext())
		setCurrentIndex(api.selectedScrollSnap())
		setTotalSections(api.scrollSnapList().length)
	}, [api])

	useEffect(() => {
		if (!api) return
		updateState()
		api.on("select", updateState)
		api.on("resize", updateState)
		return () => {
			api.off("select", updateState)
			api.off("resize", updateState)
		}
	}, [api, updateState])

	useEffect(() => {
		if (!api || !autoPlay) return
		const interval = setInterval(() => {
			if (api.canScrollNext()) api.scrollNext()
			else api.scrollTo(0)
		}, autoPlayDelay)
		return () => clearInterval(interval)
	}, [api, autoPlay, autoPlayDelay])

	const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
	const scrollNext = useCallback(() => api?.scrollNext(), [api])
	const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api])

	// Posición de los botones según la variante
	const navPosition =
		navVariant === "spaced"
			? "absolute -left-7 -right-5"
			: navVariant === "default"
				? "absolute -left-4 -right-4"
				: "absolute left-3 right-3"

	return (
		<div className="relative w-full">
			<Carousel
				setApi={setApi}
				opts={{
					align: "start",
					loop,
					slidesToScroll,
				}}
				className={cn("w-full", className)}
			>
				{/* Contenido del carrusel */}
				<div className="relative">
					<CarouselContent
						className={cn(
							"-ml-2 pr-2 pt-6 pb-4 md:-ml-4",
							contentClassName,
						)}
					>
						{children}
					</CarouselContent>

					{/* Variante “banner” de los dots (dentro del contenido) */}
					{showDots &&
						dotsVariant === "banner" &&
						totalSections > 1 && (
							<div className="absolute bottom-1.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
								{Array.from({ length: totalSections }).map(
									(_, index) => (
										<button
											key={index}
											onClick={() => scrollTo(index)}
											className={cn(
												"h-1 sm:h-1.5 rounded-full transition-all duration-300",
												currentIndex === index
													? "w-6 sm:w-8 bg-white"
													: "w-1 sm:w-1.5 bg-white/50 hover:bg-white/70",
											)}
											aria-label={`Ir a la sección ${index + 1}`}
										/>
									),
								)}
							</div>
						)}
				</div>

				{/* Botones laterales */}
				<div
					className={cn(
						"hidden sm:flex top-1/2 -translate-y-1/2 justify-between pointer-events-none",
						navPosition,
					)}
				>
					<Button
						variant="outline"
						size="icon"
						className={cn(
							"pointer-events-auto size-7 sm:size-9 rounded-full shadow-lg transition-all duration-300",
							"bg-background/95 backdrop-blur-sm border-2",
							"hover:scale-110 hover:shadow-xl",
							"disabled:opacity-0 disabled:pointer-events-none",
							canScrollPrev ? "opacity-100" : "opacity-0",
						)}
						onClick={scrollPrev}
						disabled={!canScrollPrev}
						aria-label="Anterior"
					>
						<ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
					</Button>

					<Button
						variant="outline"
						size="icon"
						className={cn(
							"pointer-events-auto size-7 sm:size-9 rounded-full shadow-lg transition-all duration-300",
							"bg-background/95 backdrop-blur-sm border-2",
							"hover:scale-110 hover:shadow-xl",
							"disabled:opacity-0 disabled:pointer-events-none",
							canScrollNext ? "opacity-100" : "opacity-0",
						)}
						onClick={scrollNext}
						disabled={!canScrollNext}
						aria-label="Siguiente"
					>
						<ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
					</Button>
				</div>
			</Carousel>

			{/* Variante “default” de los dots (debajo del carrusel) */}
			{showDots && dotsVariant === "default" && totalSections > 1 && (
				<div className="flex justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
					{Array.from({ length: totalSections }).map((_, index) => (
						<button
							key={index}
							onClick={() => scrollTo(index)}
							className={cn(
								"h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300",
								currentIndex === index
									? "bg-secondary scale-110 sm:scale-125"
									: "bg-muted-foreground/30 hover:bg-muted-foreground/50",
							)}
							aria-label={`Ir a la sección ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	)
}

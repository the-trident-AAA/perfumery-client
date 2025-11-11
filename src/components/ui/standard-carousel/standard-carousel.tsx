"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import type React from "react"
import { useCallback, useEffect, useState } from "react"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/src/components/ui/carousel"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils/utils"

interface Props<T> {
	items: T[]
	renderCard: (item: T) => React.ReactNode
	className?: string
	contentClassName?: string
	itemClassName?: string
	autoPlay?: boolean
	autoPlayDelay?: number
	loop?: boolean
	slidesToScroll?: number
	showDots?: boolean
	/** Variante para la posición de los botones laterales */
	navVariant?: "default" | "spaced"
}

export default function StandardCarousel<T extends { id: number | string }>({
	items,
	renderCard,
	className,
	contentClassName,
	itemClassName,
	autoPlay = false,
	autoPlayDelay = 5000,
	loop = true,
	slidesToScroll = 1,
	showDots = false,
	navVariant = "default",
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
			: "absolute -left-4 -right-4"

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
				<CarouselContent
					className={cn("-ml-2 pr-2 py-6 md:-ml-4", contentClassName)}
				>
					{items.map(item => (
						<CarouselItem
							key={item.id}
							className={cn("pl-2 md:pl-4", itemClassName)}
						>
							{renderCard(item)}
						</CarouselItem>
					))}
				</CarouselContent>

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
							"pointer-events-auto size-7 2xs:size-9 rounded-full shadow-lg transition-all duration-300",
							"bg-background/95 backdrop-blur-sm border-2",
							"hover:scale-110 hover:shadow-xl",
							"disabled:opacity-0 disabled:pointer-events-none",
							canScrollPrev ? "opacity-100" : "opacity-0",
						)}
						onClick={scrollPrev}
						disabled={!canScrollPrev}
						aria-label="Previous slide"
					>
						<ChevronLeft className="h-5 w-5" />
					</Button>

					<Button
						variant="outline"
						size="icon"
						className={cn(
							"pointer-events-auto size-7 2xs:size-9 rounded-full shadow-lg transition-all duration-300",
							"bg-background/95 backdrop-blur-sm border-2",
							"hover:scale-110 hover:shadow-xl",
							"disabled:opacity-0 disabled:pointer-events-none",
							canScrollNext ? "opacity-100" : "opacity-0",
						)}
						onClick={scrollNext}
						disabled={!canScrollNext}
						aria-label="Next slide"
					>
						<ChevronRight className="h-5 w-5" />
					</Button>
				</div>
			</Carousel>

			{/* Bolitas de navegación */}
			{showDots && totalSections > 1 && (
				<div className="flex justify-center gap-2 mt-3">
					{Array.from({ length: totalSections }).map((_, index) => (
						<button
							key={index}
							onClick={() => scrollTo(index)}
							className={cn(
								"h-2.5 w-2.5 rounded-full transition-all duration-300",
								currentIndex === index
									? "bg-secondary scale-125"
									: "bg-muted-foreground/30 hover:bg-muted-foreground/50",
							)}
							aria-label={`Go to section ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	)
}

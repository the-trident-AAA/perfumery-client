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
	itemClassName?: string
	autoPlay?: boolean
	autoPlayDelay?: number
	loop?: boolean
	slidesToScroll?: number
}

export default function StandardCarousel<T extends { id: number | string }>({
	items,
	renderCard,
	className,
	itemClassName,
	autoPlay = false,
	autoPlayDelay = 5000,
	loop = true,
	slidesToScroll = 1,
}: Props<T>) {
	const [api, setApi] = useState<CarouselApi>()

	const [canScrollPrev, setCanScrollPrev] = useState(false)
	const [canScrollNext, setCanScrollNext] = useState(false)

	// Calculate sections based on visible slides
	const updateSections = useCallback(() => {
		if (!api) return

		// Update navigation button states
		setCanScrollPrev(api.canScrollPrev())
		setCanScrollNext(api.canScrollNext())
	}, [api, items.length])

	useEffect(() => {
		if (!api) return

		updateSections()
		api.on("select", updateSections)
		api.on("resize", updateSections)

		return () => {
			api.off("select", updateSections)
			api.off("resize", updateSections)
		}
	}, [api, updateSections])

	// Auto-play functionality
	useEffect(() => {
		if (!api || !autoPlay) return

		const interval = setInterval(() => {
			if (api.canScrollNext()) {
				api.scrollNext()
			} else if (loop) {
				api.scrollTo(0)
			}
		}, autoPlayDelay)

		return () => clearInterval(interval)
	}, [api, autoPlay, autoPlayDelay, loop])

	const scrollPrev = useCallback(() => {
		api?.scrollPrev()
	}, [api])

	const scrollNext = useCallback(() => {
		api?.scrollNext()
	}, [api])

	const scrollToSection = useCallback(
		(sectionIndex: number) => {
			if (!api) return
			const slidesInView = api.slidesInView().length
			const targetSlide = sectionIndex * slidesInView
			api.scrollTo(targetSlide)
		},
		[api],
	)

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
				<CarouselContent className="-ml-2 p-1 md:-ml-4">
					{items.map(item => (
						<CarouselItem
							key={item.id}
							className={cn("pl-2 md:pl-4 ", itemClassName)}
						>
							{renderCard(item)}
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Navigation Buttons */}
				<div className="absolute -left-4 -right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
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
		</div>
	)
}

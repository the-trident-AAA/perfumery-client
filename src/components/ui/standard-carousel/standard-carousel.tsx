import { cn } from "@/src/lib/utils/utils"
import Autoplay from "embla-carousel-autoplay"
import React, { useContext } from "react"
import { StandardCarouselContext } from "./context/standard-carousel-context"
import useStandardCarousel from "./hooks/use-standard-carousel"
import { Carousel, CarouselContent, CarouselItem } from "../carousel"

interface Props<T> {
	items: T[]
	dimension: string
	itemsStyles: string
	withStylesContent?: boolean
	withProgressBar?: boolean
	variantProgressBar?: "onCarouselItem" | "belowCarouselItem"
	autoPlay?: boolean
	renderCard: (item: T) => React.ReactNode
	className?: string
	loop?: boolean
}

export default function StandardCarousel<T extends { id: number | string }>({
	items,
	dimension,
	renderCard,
	itemsStyles,
	className,
	withStylesContent = true,
	withProgressBar = false,
	variantProgressBar = "onCarouselItem",
	autoPlay = false,
	loop = false,
}: Props<T>) {
	const { isCentered } = useStandardCarousel({
		cantElements: items.length,
	})

	const { current, count, handleClick, setApi } = useContext(
		StandardCarouselContext,
	)

	const plugins = autoPlay
		? [Autoplay({ delay: 10000, stopOnInteraction: true })]
		: undefined

	return (
		<div className="relative w-full">
			<Carousel
				plugins={plugins}
				setApi={setApi}
				opts={{
					align: "center",
					loop,
				}}
				style={{
					maxWidth: dimension,
				}}
			>
				<CarouselContent
					className={
						withStylesContent
							? cn(
									"flex pb-9 pt-6",
									isCentered
										? "justify-center"
										: "justify-start",
									className,
								)
							: ""
					}
				>
					{items.map(item => (
						<CarouselItem key={item.id} className={itemsStyles}>
							{renderCard(item)}
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			{withProgressBar && (
				<div
					className={`absolute ${
						variantProgressBar === "onCarouselItem"
							? "bottom-4"
							: "bottom-0"
					} left-1/2 flex -translate-x-1/2 gap-2`}
				>
					{Array.from({ length: count }).map((_, index) => (
						<span
							key={index}
							onClick={handleClick(index)}
							className={cn(
								"size-2 cursor-pointer rounded-full transition-colors sm:size-3",
								current === index
									? "bg-primary"
									: "bg-gray-300",
							)}
						/>
					))}
				</div>
			)}
		</div>
	)
}

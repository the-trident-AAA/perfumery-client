"use client"

import { Skeleton } from "@/src/components/ui/skeleton"
import { cn } from "@/src/lib/utils/utils"

interface CardSkeletonGroupProps {
	count?: number
	containerClassName?: string
	cardClassName?: string
	cardInnerClassName?: string
	showImage?: boolean
	showFooter?: boolean
	imageHeight?: string
	titleWidth?: string
	descriptionWidth?: string
	footerHeight?: string
}

export function CardSkeletonGroup({
	count = 3,
	containerClassName,
	cardClassName,
	cardInnerClassName,
	showImage = true,
	showFooter = true,
	imageHeight = "h-48",
	titleWidth = "w-3/4",
	descriptionWidth = "w-full",
	footerHeight = "h-8",
}: CardSkeletonGroupProps) {
	return (
		<div
			className={cn(
				"grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
				containerClassName,
			)}
		>
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className={cn(
						"rounded-lg border border-border p-4 shadow-sm flex flex-col",
						cardClassName,
					)}
				>
					<div className={cn("space-y-3", cardInnerClassName)}>
						{showImage && (
							<Skeleton
								className={cn("w-full rounded-md", imageHeight)}
							/>
						)}

						<div className="space-y-2">
							<Skeleton className={cn("h-5", titleWidth)} />
							<Skeleton className={cn("h-4", descriptionWidth)} />
							<Skeleton className={cn("h-4 w-1/2")} />
						</div>

						{showFooter && (
							<div className="pt-4 mt-auto">
								<Skeleton
									className={cn(
										"w-full rounded-md",
										footerHeight,
									)}
								/>
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	)
}

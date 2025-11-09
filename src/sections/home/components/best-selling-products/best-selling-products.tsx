import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import BestSellingProductsList from "@/src/sections/home/components/best-selling-products/list/best-selling-products-list"
import { Suspense } from "react"
import { Sparkles } from "lucide-react"

export default async function BestSellingProducts() {
	return (
		<section
			id="best-selling"
			className="relative w-full overflow-hidden bg-primary py-16 md:py-24 lg:py-16"
		>
			{/* Subtle background accent */}
			<div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

			{/* Content */}
			<div className="relative z-10">
				{/* Header */}
				<div className="text-center space-y-4 px-4">
					{/* Title */}
					<div className="space-y-4">
						<h2 className="text-3xl lg:text-4xl font-bold text-secondary">
							Los favoritos de{" "}
							<span className="">nuestros clientes</span>
						</h2>
					</div>

					{/* Description */}
					<p className="max-w-2xl font-serif mx-auto text-lg md:text-xl text-foreground leading-relaxed text-pretty">
						Descubre las fragancias más amadas. Cada perfume ha sido
						seleccionado por su calidad excepcional y popularidad
					</p>
				</div>

				{/* Products Grid */}
				<div className="relative pl-2 sm:pl-6 sm:px-6 lg:px-8">
					<Suspense
						fallback={
							<CardSkeletonGroup
								containerClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
								count={3}
							/>
						}
					>
						<BestSellingProductsList />
					</Suspense>
				</div>

				{/* Trust indicators */}
				<div className="flex px-4 sm:px-6 lg:px-8 flex-wrap items-center justify-center gap-6 md:gap-8 mt-12 md:mt-16 pt-12 border-t border-border">
					<div className="flex items-center gap-2 text-sm text-foreground">
						<div className="w-1.5 h-1.5 rounded-full bg-green-400" />
						<span>Productos auténticos</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-foreground">
						<div className="w-1.5 h-1.5 rounded-full bg-green-400" />
						<span>Envío gratuito</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-foreground">
						<div className="w-1.5 h-1.5 rounded-full bg-green-400" />
						<span>Garantía de calidad</span>
					</div>
				</div>
			</div>
		</section>
	)
}

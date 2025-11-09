import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import { HomeBanner } from "@/src/lib/types/home-banners"
import { HomeBannerImagesCarouselDekstop } from "@/src/sections/home/components/home-banner-section/components/home-banner-images-carousel/home-banner-images-carousel-dekstop"

import { ArrowRight, ShoppingBag } from "lucide-react"

interface HomeBannerProps {
	homeBanner: HomeBanner
	autoPlayInterval?: number
}

export function HomeBannerSectionDekstop({
	homeBanner,
	autoPlayInterval,
}: HomeBannerProps) {
	return (
		<div className="relative h-[500px] 2xl:h-[600px] w-full overflow-hidden">
			{/* Carrusel encapsulado (client-side) */}
			<HomeBannerImagesCarouselDekstop
				title={homeBanner.title}
				images={homeBanner.images}
				autoPlayInterval={autoPlayInterval}
			/>

			{/* Contenido del banner (puede ser server-side) */}
			<div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center">
				<div className="max-w-3xl space-y-6">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
						{homeBanner.title}
					</h1>
					<p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
						{homeBanner.description}
					</p>

					{homeBanner.statisticalTips.length > 0 && (
						<div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-8">
							{homeBanner.statisticalTips.map((tip, i) => (
								<div key={i} className="text-center text-white">
									<div className="text-sm">
										{tip.statistics}
									</div>
									<div className="text-2xl font-bold">
										{tip.info}
									</div>
								</div>
							))}
						</div>
					)}

					<NavigationComponent href={paths.perfumes().root}>
						<Button
							variant={"secondary"}
							className="group bg-secondary text-primary text-sm 2xs:text-base sm:text-lg font-bold px-4 sm:px-8 py-2.5 sm:py-4 h-auto cursor-pointer rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-secondary"
						>
							<ShoppingBag className="w-5 h-5 mr-3" />
							Explorar Colección
							<ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
						</Button>
					</NavigationComponent>

					{homeBanner.infoTips.length > 0 && (
						<div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-6 pt-4">
							{homeBanner.infoTips.map((tip, i) => (
								<div
									key={i}
									className="flex items-center gap-2 text-white"
								>
									<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
									<span className="text-sm">{tip}</span>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

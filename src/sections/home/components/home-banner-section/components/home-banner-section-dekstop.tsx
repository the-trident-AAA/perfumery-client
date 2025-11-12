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
		<div className="relative h-[180px] 2xs:h-[400px] 2xl:h-[400px] w-full overflow-hidden">
			{/* Carrusel encapsulado (client-side) */}
			<HomeBannerImagesCarouselDekstop
				title={homeBanner.title}
				images={homeBanner.images}
				autoPlayInterval={autoPlayInterval}
			/>

			{/* Contenido del banner (puede ser server-side) */}
			<div className="relative z-10 h-full lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center">
				<div className="max-w-3xl space-y-2 2xs:space-y-6">
					<div className="">
						<h1 className="text-base 2xs:text-4xl md:text-5xl font-bold text-white">
							{homeBanner.title}
						</h1>
						<p className="text-[10.5px] 2xs:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
							{homeBanner.description}
						</p>
					</div>

					{homeBanner.statisticalTips.length > 0 && (
						<div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-8">
							{homeBanner.statisticalTips.map((tip, i) => (
								<div key={i} className="text-center text-white">
									<div className="text-[10px] 2xs:text-sm">
										{tip.statistics}
									</div>
									<div className="text-[10px] 2xs:text-2xl font-bold">
										{tip.info}
									</div>
								</div>
							))}
						</div>
					)}

					<NavigationComponent href={paths.perfumes().root}>
						<Button
							variant={"secondary"}
							className="group bg-secondary text-primary text-[9px] 2xs:text-base sm:text-base font-bold px-1 2xs:px-4 sm:px-4 py-1 2xs:py-2.5 sm:py-2.5 h-auto cursor-pointer rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-secondary"
						>
							<ShoppingBag className="size-3 2xs:size-4 2xs:mr-3" />
							Explorar Colección
							<ArrowRight className="size-3 2xs:size-4 2xs:ml-3 transition-transform group-hover:translate-x-2" />
						</Button>
					</NavigationComponent>

					{homeBanner.infoTips.length > 0 && (
						<div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-6 pt-3 2xs:pt-4">
							{homeBanner.infoTips.map((tip, i) => (
								<div
									key={i}
									className="flex items-center gap-2 text-white"
								>
									<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
									<span className="text-[8px] 2xs:text-xs lg:text-sm">
										{tip}
									</span>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

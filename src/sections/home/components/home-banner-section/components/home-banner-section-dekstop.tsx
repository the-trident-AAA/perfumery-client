import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import { groupFilters, HomeBanner } from "@/src/lib/types/home-banners"
import { cn } from "@/src/lib/utils/utils"
import { ArrowRight, ShoppingBag } from "lucide-react"
import Image from "next/image"

interface HomeBannerProps {
	homeBanner: HomeBanner
	autoPlayInterval?: number
}

export function HomeBannerSectionDekstop({ homeBanner }: HomeBannerProps) {
	return (
		<div className="relative h-full py-6 2xs:py-8 2xl:py-14 w-full overflow-hidden">
			<div className={cn("absolute inset-0")}>
				<Image
					src={homeBanner.image}
					width={1920}
					height={1080}
					quality={100}
					alt={`${homeBanner.title}`}
					className="h-full w-full object-center"
				/>

				<div className="absolute inset-0 bg-gradient-to-b" />
			</div>

			<div className="relative z-10 h-full lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center">
				<div className="max-w-3xl space-y-3 2xs:space-y-6">
					<div className="space-y-1 2xs:space-y-2">
						<h1 className="text-xl 2xs:text-4xl md:text-5xl font-bold text-black">
							{homeBanner.title}
						</h1>
						<p className="text-sm 2xs:text-2xl md:text-xl text-black/90 leading-relaxed max-w-2xl">
							{homeBanner.description}
						</p>
					</div>

					{homeBanner.statisticalTips.length > 0 && (
						<div
							className={cn(
								"grid w-full items-center",
								"grid-cols-3", // Siempre 3 columnas en móvil
								"md:grid-cols-4 md:ml-10", // 4 columnas y margen en desktop
								homeBanner.statisticalTips.length === 1 &&
									"md:grid-cols-3 md:ml-23", // Caso especial de 1 elemento en desktop
							)}
						>
							{homeBanner.statisticalTips.map((tip, i) => (
								<div key={i} className="text-center text-black">
									<div className="text-sm 2xs:text-lg lg:text-base">
										{tip.statistics}
									</div>
									<div className="text-sm 2xs:text-2xl font-bold lg:text-xl">
										{tip.info}
									</div>
								</div>
							))}
						</div>
					)}
					{homeBanner.buttonText && (
						<NavigationComponent
							href={
								paths.perfumes(groupFilters(homeBanner.filters))
									.root
							}
						>
							<Button
								variant={"secondary"}
								className="group bg-secondary text-primary text-sm 2xs:text-base sm:text-base font-bold px-1 2xs:px-4 sm:px-4 py-1.5 2xs:py-2.5 sm:py-2.5 h-auto cursor-pointer rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-secondary ml-0 sm:ml-20"
							>
								<ShoppingBag className="size-4 2xs:size-4 2xs:mr-3" />
								{homeBanner.buttonText}
								<ArrowRight className="size-4 2xs:size-4 2xs:ml-3 transition-transform group-hover:translate-x-2" />
							</Button>
						</NavigationComponent>
					)}
					{homeBanner.infoTips.length > 0 && (
						<div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-6 pt-3 2xs:pt-4 lg:ml-20">
							{homeBanner.infoTips.map((tip, i) => (
								<div
									key={i}
									className="flex items-center gap-2 text-white"
								>
									<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
									<span className="text-[10px] 2xs:text-xs lg:text-sm">
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

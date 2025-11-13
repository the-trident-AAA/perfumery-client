import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import { HomeBanner } from "@/src/lib/types/home-banners"
import { cn } from "@/src/lib/utils/utils"
import { ArrowRight, ShoppingBag } from "lucide-react"
import Image from "next/image"

interface HomeBannerProps {
	homeBanner: HomeBanner
	autoPlayInterval?: number
}

export function HomeBannerSectionDekstop({ homeBanner }: HomeBannerProps) {
	return (
		<div className="relative min-h-[200px] 2xs:min-h-[400px] 2xl:min-h-[400px] py-4 2xs:py-8 w-full overflow-hidden">
			<div className={cn("absolute inset-0")}>
				<Image
					src={homeBanner.image}
					width={1920}
					height={1080}
					quality={100}
					alt={`${homeBanner.title}`}
					className="h-full w-full object-cover"
				/>

				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
			</div>

			<div className="relative z-10 h-full lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center">
				<div className="max-w-3xl space-y-2 2xs:space-y-6">
					<div className="space-y-1 2xs:space-y-2">
						<h1 className="text-lg 2xs:text-4xl md:text-5xl font-bold text-white">
							{homeBanner.title}
						</h1>
						<p className="text-xs 2xs:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
							{homeBanner.description}
						</p>
					</div>

					{homeBanner.statisticalTips.length > 0 && (
						<div className="grid grid-cols-3 items-center">
							{homeBanner.statisticalTips.map((tip, i) => (
								<div key={i} className="text-center text-white">
									<div className="text-xs 2xs:text-lg">
										{tip.statistics}
									</div>
									<div className="text-xs 2xs:text-2xl font-bold">
										{tip.info}
									</div>
								</div>
							))}
						</div>
					)}

					<NavigationComponent href={paths.perfumes().root}>
						<Button
							variant={"secondary"}
							className="group bg-secondary text-primary text-xs 2xs:text-base sm:text-base font-bold px-1 2xs:px-4 sm:px-4 py-1.5 2xs:py-2.5 sm:py-2.5 h-auto cursor-pointer rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-secondary"
						>
							<ShoppingBag className="size-4 2xs:size-4 2xs:mr-3" />
							Explorar Colección
							<ArrowRight className="size-4 2xs:size-4 2xs:ml-3 transition-transform group-hover:translate-x-2" />
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
									<span className="text-[9px] 2xs:text-xs lg:text-sm">
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

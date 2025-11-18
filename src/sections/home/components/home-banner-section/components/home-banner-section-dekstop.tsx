import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import {
	getTextColorColor,
	groupFilters,
	HomeBanner,
	TextColor,
} from "@/src/lib/types/home-banners"
import { cn } from "@/src/lib/utils/utils"
import { ArrowRight, ShoppingBag } from "lucide-react"
import Image from "next/image"

interface Props {
	homeBanner: HomeBanner
}

export function HomeBannerSectionDekstop({ homeBanner }: Props) {
	return (
		<div className="relative h-full min-h-[290px] sm:min-h-[400px] py-6 2xs:py-8 2xl:py-14 w-full overflow-hidden">
			<div className={cn("absolute inset-0")}>
				<Image
					src={homeBanner.image}
					width={1920}
					height={1080}
					quality={100}
					alt={`${homeBanner.title}`}
					className="h-full w-full hidden sm:flex object-center"
				/>
				<Image
					src={homeBanner.mobileImage}
					width={500}
					height={400}
					quality={100}
					alt={`${homeBanner.title}`}
					className="h-full w-full flex sm:hidden object-center"
				/>
				<div
					className={`absolute inset-0 ${homeBanner.textColor === TextColor.LIGHT ? "bg-black/60" : "bg-transpartent"} rounded-2xl`}
				/>
			</div>

			{homeBanner.title &&
				homeBanner.description &&
				homeBanner.buttonText &&
				homeBanner.infoTips.length > 0 &&
				homeBanner.statisticalTips.length > 0 && (
					<div
						className={`relative max-w-[260px] 2xs:max-w-[365px] md:max-w-[470px] lg:max-w-full z-10 h-full ${getTextColorColor(homeBanner.textColor)} sm:pl-1 md:pl-4 flex flex-col justify-center`}
					>
						<div
							className={`absolute flex md:hidden inset-0 ${homeBanner.textColor === TextColor.LIGHT ? "bg-transparent" : "bg-primary/60"} rounded-2xl`}
						/>
						<div className="max-w-3xl z-20 flex flex-col justify-center items-center space-y-3  sm:space-y-6">
							{homeBanner.title && homeBanner.description && (
								<div className="space-y-1 w-full flex flex-col items-center justify-center sm:space-y-2">
									<h1 className="text-xl text-center max-w-[220px] sm:max-w-full 2xs:text-xl md:text-5xl font-bold">
										{homeBanner.title}
									</h1>
									<p className="text-xs 2xs:text-sm md:text-xl text-center max-w-[220px] sm:max-w-full">
										{homeBanner.description}
									</p>
								</div>
							)}

							{homeBanner.statisticalTips.length > 0 && (
								<div className="flex flex-wrap gap-4 w-full justify-center items-center">
									{homeBanner.statisticalTips.map(
										(tip, i) => (
											<div
												key={i}
												className="text-center"
											>
												<div className="text-xs 2xs:text-sm md:text-lg">
													{tip.statistics}
												</div>
												<div className="text-xs 2xs:text-base md:text-2xl font-bold">
													{tip.info}
												</div>
											</div>
										),
									)}
								</div>
							)}

							{homeBanner.buttonText && (
								<NavigationComponent
									href={
										paths.perfumes(
											groupFilters(homeBanner.filters),
										).root
									}
								>
									<Button
										variant={"secondary"}
										className="group bg-secondary text-primary text-[11px] 2xs:text-[12px] md:text-base font-bold px-1 2xs:px-2 md:px-4 py-1.5 2xs:py-2 md:py-2.5 h-auto cursor-pointer rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-secondary"
									>
										<ShoppingBag className="size-3 md:size-4 md:mr-3" />
										{homeBanner.buttonText}
										<ArrowRight className="size-3 md:size-4 md:ml-3 transition-transform group-hover:translate-x-2" />
									</Button>
								</NavigationComponent>
							)}

							{homeBanner.infoTips.length > 0 && (
								<div className="flex flex-wrap pl-8 sm:pl-0 gap-3 sm:gap-4 w-full sm:justify-center sm:items-center">
									{homeBanner.infoTips.map((tip, i) => (
										<div
											key={i}
											className="flex items-center gap-2"
										>
											<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
											<span className="text-[10px] sm:text-xs font-semibold lg:text-sm xl:text-base">
												{tip}
											</span>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				)}
		</div>
	)
}

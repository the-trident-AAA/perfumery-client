import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, ArrowRight } from "lucide-react"
import {
	groupFilters,
	HomeBanner,
	TextColor,
} from "@/src/lib/types/home-banners"
import { cn } from "@/src/lib/utils/utils"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"

interface Props {
	homeBanner: HomeBanner
}

export function HomeBannerSectionMobile({ homeBanner }: Props) {
	return (
		<div className="flex sm:hidden w-full min-h-[290px] overflow-hidden">
			<div
				className={cn(
					"flex flex-col justify-center px-3 py-4 gap-2 w-[50%]",
					homeBanner.textColor === TextColor.LIGHT
						? "bg-secondary text-primary"
						: "bg-white text-black",
				)}
			>
				<h1 className="text-sm font-bold leading-tight text-balance">
					{homeBanner.title}
				</h1>

				<p className="text-xs leading-snug opacity-90 text-pretty">
					{homeBanner.description}
				</p>

				{homeBanner.statisticalTips.length > 0 && (
					<div className="flex flex-col gap-1.5">
						{homeBanner.statisticalTips.map((tip, i) => (
							<div key={i} className="flex flex-col gap-0.5">
								<div className="text-[10px] opacity-75">
									{tip.statistics}
								</div>
								<div className="font-semibold text-sm leading-tight">
									{tip.info}
								</div>
							</div>
						))}
					</div>
				)}

				{homeBanner.buttonText && (
					<Link href={""}>
						<Button
							variant="secondary"
							size="sm"
							className="group w-full px-3 py-2 text-[10px] font-semibold rounded-full flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all"
						>
							<ShoppingBag className="size-3" />
							{homeBanner.buttonText}
							<ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
						</Button>
					</Link>
				)}

				{homeBanner.infoTips.length > 0 && (
					<div className="flex flex-col gap-1 pt-1 border-t border-current/10">
						{homeBanner.infoTips.map((tip, i) => (
							<div key={i} className="flex items-start gap-1.5">
								<div className="w-1 h-1 bg-green-400 rounded-full animate-pulse mt-1 flex-shrink-0" />
								<span className="text-[10px] leading-snug flex-1">
									{tip}
								</span>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="relative w-[50%] aspect-square">
				<Image
					src={
						homeBanner.mobileImage ||
						"/placeholder.svg?height=600&width=800"
					}
					alt={homeBanner.title}
					fill
					sizes="60vw"
					className="object-center"
					priority
				/>
			</div>
		</div>
	)
}

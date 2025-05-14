import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import { HomeBanner } from "@/src/lib/types/home-banners"
import Image from "next/image"

interface Props {
	homeBanner: HomeBanner
}

export default function HomeBannerSection({
	homeBanner: { id, title, description, image },
}: Props) {
	return (
		<div
			id={id}
			className="relative w-full h-full overflow-hidden bg-gradient-to-r from-primary to-slate-800 text-white rounded-2xl"
		>
			<div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
				<div className="grid items-center gap-8 md:grid-cols-2">
					<div className="order-2 w-full md:order-1">
						<h1 className="mb-4 text-xl font-bold leading-tight md:text-4xl lg:text-5xl">
							{title}
						</h1>
						<p className="mb-6 text-sm lg:text-lg break-words line-clamp-8 text-slate-300">
							{description}
						</p>
						<div className=" w-full ">
							<NavigationComponent href="/">
								<Button
									variant={"default"}
									className="rounded-md w-full lg:min-w-[300px] h-full bg-white font-medium text-slate-900 transition-colors hover:bg-slate-100"
								>
									Ir a ver
								</Button>
							</NavigationComponent>
						</div>
					</div>
					<div className="order-1 flex justify-center md:order-2">
						<div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80 lg:h-96">
							<Image
								src={image || "/images/place-holder.jpg"}
								alt={title}
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl"></div>
			<div className="absolute -top-16 -left-16 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl"></div>
		</div>
	)
}

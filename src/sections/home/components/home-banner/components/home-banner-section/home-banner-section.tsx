import { Button } from "@/src/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Props {
	title: string
	image: string
	url: string
}

export default function HomeBannerSection({ title, image, url }: Props) {
	return (
		<div className="relative flex h-[25rem] w-full sm:h-[32rem]">
			{/* Background Image */}
			<div className="absolute inset-0 z-0 h-full w-full">
				<Image
					src={image || "/placeholder.svg"}
					alt="banner image"
					fill
					sizes="100vw"
					className="h-full rounded-3xl w-full object-cover"
					quality={100}
					placeholder="blur"
					blurDataURL="/images/banner image place holder.png"
					priority
				/>

				{/* Dark Overlay */}
				<div className="absolute inset-0 rounded-3xl bg-black/40 z-10"></div>
			</div>

			{/* Content */}
			<div className="relative z-20 flex pt-6 items-center justify-center w-full">
				<div className="flex flex-col items-center max-w-[250px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
					<h1 className="mb-4 font-ws-bold text-lg line-clamp-3 text-white sm:mb-6 sm:text-4xl">
						{title}
					</h1>
					<Link className="w-fit" href={url}>
						<Button className="hover:bg-primary transform rounded-xl bg-primary text-black font-medium transition duration-300 ease-in-out hover:scale-105 sm:px-16 sm:py-8 sm:text-xl">
							ver más....
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

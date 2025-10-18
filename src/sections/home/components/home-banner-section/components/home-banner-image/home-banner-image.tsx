import { homeBannerImagePlaceHolder } from "@/src/sections/home/components/home-banners/lib/image-place-holder"
import Image from "next/image"
import React from "react"

interface Props {
	image: { id: string; image: string }
}

export default function HomeBannerImage({ image: { id, image } }: Props) {
	return (
		<div className="aspect-square w-full lg:h-[60vh] xl:h-[80vh] 2xs:rounded-xl overflow-hidden bg-gray-100">
			<Image
				src={image || homeBannerImagePlaceHolder}
				alt={id}
				width={600}
				height={600}
				className="w-full h-full object-center"
			/>
		</div>
	)
}

import { Tape } from "@/src/lib/types/tapes"
import { cn } from "@/src/lib/utils/utils"
import Image from "next/image"
import React from "react"

interface Props {
	tape: Tape
}

export default function HomeTapeSection({ tape }: Props) {
	return (
		<div className="relative w-full h-[40px] sm:h-[100px]">
			<div className={cn("absolute inset-0")}>
				<Image
					src={tape.image}
					width={1920}
					height={1080}
					quality={100}
					alt={`${tape.name}`}
					className="h-full w-full object-center"
				/>
			</div>
		</div>
	)
}

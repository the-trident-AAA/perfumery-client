"use client"
import React from "react"
import dynamic from "next/dynamic"
import { useBreakpoint } from "@/src/lib/hooks/screen/use-breakpoint"

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
	ssr: false,
})

interface Props {
	videoUrl: string
}
export default function YoutubePlayer({ videoUrl }: Props) {
	const breakpoint = useBreakpoint()
	return (
		<div className="player-wrapper">
			<ReactPlayer
				url={videoUrl}
				className="react-player"
				playing={false}
				controls
				{...(breakpoint === "2xl" ? {} : { width: "100%" })}
			/>
		</div>
	)
}

import YoutubePlayer from "@/src/components/youtube-player/youtube-player"
import React from "react"

export default function Promotion() {
	return (
		<div className="w-full my-12">
			<div className="aspect-w-16 aspect-h-9">
				<YoutubePlayer videoUrl="https://www.youtube.com/watch?v=Skov5WItyE4" />
			</div>
		</div>
	)
}

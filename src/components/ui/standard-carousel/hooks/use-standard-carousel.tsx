import { useBreakpoint } from "@/src/lib/hooks/screen/use-breakpoint"
import { useEffect, useState } from "react"

interface Props {
	cantElements: number
}

export default function useStandardCarousel({ cantElements }: Props) {
	const breakpoint = useBreakpoint()
	const [isCentered, setIsCentered] = useState(false)

	useEffect(() => {
		switch (breakpoint) {
			case "3xl":
				setIsCentered(cantElements < 6)
				break
			case "2xl":
				setIsCentered(cantElements < 5)
				break
			case "xl":
				setIsCentered(cantElements < 4)
				break
			case "lg":
				setIsCentered(cantElements < 4)
				break
			case "md":
				setIsCentered(cantElements < 2)
				break

			default:
				setIsCentered(cantElements < 2)
				break
		}
	}, [breakpoint])
	return { isCentered }
}

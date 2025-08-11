import { cn } from "@/src/lib/utils/utils"
import { Loader2 } from "lucide-react"

interface Props {
	size?: number
	className?: string
}

export function LoadingSpinner({ size = 24, className }: Props) {
	return (
		<div className="p-12">
			<Loader2
				className={cn("animate-spin text-secondary", className)}
				size={size}
			/>
		</div>
	)
}

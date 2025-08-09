"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/src/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BackButton() {
	const router = useRouter()

	return (
		<Button
			variant="secondary"
			size="sm"
			className="flex max-w-[100px] gap-2 text-primary"
			onClick={() => router.back()}
		>
			<ArrowLeft className="w-4 h-4" />
			Volver
		</Button>
	)
}

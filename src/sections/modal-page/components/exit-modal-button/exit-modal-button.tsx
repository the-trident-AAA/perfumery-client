"use client"
import { Button } from "@/src/components/ui/button"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

export default function ExitModalButton() {
	const router = useRouter()

	const close = () => router.back()
	return (
		<Button
			variant={"ghost"}
			className="hover:text-destructive"
			size={"icon"}
			onClick={close}
		>
			<X size={32} />
		</Button>
	)
}

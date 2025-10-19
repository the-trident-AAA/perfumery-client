"use client"
import { paths } from "@/src/lib/routes/paths"
import ExitModalButton from "@/src/sections/modal-page/components/exit-modal-button/exit-modal-button"
import { usePathname } from "next/navigation"
import React, { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function ModalLayoutContainer({ children }: Props) {
	const pathname = usePathname()

	let maxWidth = "max-w-lg"
	if (pathname.includes(paths.editProfile.root)) maxWidth = "max-w-3xl"
	else if (pathname.includes("/verification-code")) maxWidth = "max-w-sm"
	else if (pathname.includes("/forgot-password")) maxWidth = "max-w-sm"
	else if (pathname.includes(paths.registration.root)) maxWidth = "max-w-md"
	else if (pathname.includes(paths.profile.root)) maxWidth = "max-w-3xl"
	return (
		<div
			className={`flex flex-col w-full max-h-[100vh] ${maxWidth} gap-4 bg-muted p-4 rounded-2xl shadow-xl`}
		>
			{/* Botón de cerrar */}
			<div className="flex w-full gap-2 justify-between items-center">
				<p></p>
				<ExitModalButton />
			</div>
			<div className="flex-1 overflow-auto">{children}</div>
		</div>
	)
}

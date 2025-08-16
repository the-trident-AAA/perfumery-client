"use client"

import ExitModalButton from "@/src/sections/modal-page/components/exit-modal-button/exit-modal-button"

export default function ModalLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<div className="relative flex flex-col gap-4 items-center justify-center bg-muted p-4 rounded-2xl shadow-xl max-w-2xl w-full">
				{/* Botón de cerrar */}
				<div className="flex w-full gap-2 justify-between items-center">
					<p>Title</p>
					<ExitModalButton />
				</div>
				{children}
			</div>
		</div>
	)
}

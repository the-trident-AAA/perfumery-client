import ModalLayoutContainer from "@/src/sections/modal-layout/modal-layout-container"

export default function ModalLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<ModalLayoutContainer>{children}</ModalLayoutContainer>
		</div>
	)
}

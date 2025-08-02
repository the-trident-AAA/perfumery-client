interface Props {
	title: string
	description: string
}

export default function DetailsSectionHeader({ title, description }: Props) {
	return (
		<div className="relative flex flex-col sm:flex-row sm:items-center bg-secondary rounded-lg shadow-sm gap-4 p-6 overflow-hidden">
			{/* Panel azul diagonal superpuesto */}
			<div
				className="absolute inset-y-0 left-0 w-[100vh] bg-primary opacity-90"
				style={{
					clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)",
				}}
			/>

			{/* Contenido principal con z-index para estar por encima */}
			<div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 w-full">
				<div className="flex flex-col gap-2 max-w-[70vh]">
					<h1 className="text-2xl font-bold text-secondary">
						{title}
					</h1>
					<p className="text-secondary">{description}</p>
				</div>
			</div>
		</div>
	)
}

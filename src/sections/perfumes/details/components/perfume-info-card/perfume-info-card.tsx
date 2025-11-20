import type { ReactNode } from "react"

interface Props {
	title: string
	icon: ReactNode
	info: string
}

export default function PerfumeInfoCard({ info, title, icon }: Props) {
	return (
		<div className="h-full overflow-hidden relative">
			{/* Diagonal stripes pattern */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `repeating-linear-gradient(
            45deg,
            hsl(var(--primary)),
            hsl(var(--primary)) 10px,
            hsl(var(--secondary)) 10px,
            hsl(var(--secondary)) 20px
          )`,
				}}
			/>

			{/* Content */}
			<div className="text-center rounded-0 flex flex-col justify-center items-center gap-1 h-full relative">
				<div className="flex items-center gap-2">
					<div
						className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center mb-1 border-2 border-primary shadow-sm 
            transition-transform duration-300 ease-out hover:scale-110 hover:rotate-[5deg]"
					>
						<div className="text-primary mt-1 [&>svg]:w-4 [&>svg]:h-4">
							{icon}
						</div>
					</div>

					<h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
						{title}
					</h2>
				</div>
				<h3 className="text-sm text-foreground">{info}</h3>
			</div>
		</div>
	)
}

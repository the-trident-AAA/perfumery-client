"use client"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

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

			{/* Gradient overlay for depth */}

			<div className="text-center rounded-0 flex flex-col justify-center items-center gap-1 h-full justify-center relative z-10">
				<div className="flex items-center gap-2">
					<motion.div
						whileHover={{ scale: 1.1, rotate: 5 }}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 10,
						}}
						className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center mb-1 border-2 border-primary shadow-sm"
					>
						<div className="text-primary mt-1 [&>svg]:w-4 [&>svg]:h-4">
							{icon}
						</div>
					</motion.div>

					<p className="text-sm font-bold text-foreground uppercase tracking-wider">
						{title}
					</p>
				</div>
				<p className="text-sm text-foreground">{info}</p>
			</div>
		</div>
	)
}

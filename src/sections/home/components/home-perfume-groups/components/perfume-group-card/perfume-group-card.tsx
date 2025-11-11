"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { paths } from "@/src/lib/routes/paths"
import type { PerfumeType } from "@/src/lib/types/perfume-types"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"

interface Props {
	perfumeGroup: PerfumeType
	w?: string
}

export default function PerfumeGroupCard({
	perfumeGroup: { id, name, image },
	w = "w-full",
}: Props) {
	return (
		<motion.div
			whileHover={{
				scale: 1.04,
				boxShadow:
					"0 16px 20px -5px rgba(0, 0, 0, 0.15), 0 8px 8px -5px rgba(0, 0, 0, 0.05)",
			}}
			whileTap={{ scale: 0.96 }}
			className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${w}`}
		>
			<NavigationComponent
				href={paths.perfumes({ perfumeTypeId: id.toString() }).root}
			>
				<Image
					src={image || "/images/place-holder.jpg"}
					alt={`${name} perfume collection`}
					fill
					className="absolute inset-0 object-cover z-0"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				{/* Sombra más sutil */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 z-10" />

				{/* Contenido más compacto */}
				<div className="relative z-20 flex flex-col items-center justify-center h-48 sm:h-44 2xl:h-48 p-4 text-white">
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-1">
						{name}
					</h3>
					<motion.div
						initial={{ width: 0 }}
						whileHover={{ width: "70%" }}
						transition={{ duration: 0.3 }}
						className="h-0.5 bg-white rounded-full"
					/>
				</div>
			</NavigationComponent>
		</motion.div>
	)
}

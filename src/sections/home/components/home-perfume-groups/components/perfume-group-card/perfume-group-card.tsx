"use client"
import React from "react"
import { motion } from "framer-motion"
import { paths } from "@/src/lib/routes/paths"
import { PerfumeType } from "@/src/lib/types/perfume-types"
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
				scale: 1.05,
				boxShadow:
					"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			}}
			whileTap={{ scale: 0.95 }}
			className={
				"relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ease-in-out " +
				w
			}
		>
			<NavigationComponent
				href={paths.perfumes({ perfumeTypeId: id.toString() }).root}
			>
				<div
					className="absolute inset-0 bg-cover bg-center z-0"
					style={{
						backgroundImage: `url(${image || "/images/place-holder.jpg"})`,
					}}
				/>
				<div className="absolute inset-0 bg-gradient-to-b bg-black/40 z-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
				<div className="relative z-20 flex flex-col items-center justify-center h-64 p-6 text-white">
					<h3 className="text-xl sm:text-3xl font-bold text-center mb-2">
						{name}
					</h3>
					<motion.div
						initial={{ width: 0 }}
						whileHover={{ width: "80%" }}
						transition={{ duration: 0.3 }}
						className="h-1 bg-white rounded-full"
					/>
				</div>
			</NavigationComponent>
		</motion.div>
	)
}

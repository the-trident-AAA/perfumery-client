"use client"
import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface PerfumeGroup {
	name: string
	image: string
	icon?: ReactNode
}
interface Props {
	perfumeGroup: PerfumeGroup
	href: string
	w?: string
}

export default function PerfumeGroupCard({
	perfumeGroup: { name, image, icon },
	href,
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
			<Link href={href} className="group">
				<div
					className="absolute inset-0 bg-cover bg-center z-0"
					style={{ backgroundImage: `url(${image})` }}
				/>
				<div className="absolute inset-0 bg-gradient-to-b bg-black/40 z-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
				<div className="relative z-20 flex flex-col items-center justify-center h-64 p-6 text-white">
					{icon && (
						<motion.div
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.5 }}
							className="bg-white text-primary rounded-full p-4 mb-4"
						>
							{icon}
						</motion.div>
					)}
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
			</Link>
		</motion.div>
	)
}

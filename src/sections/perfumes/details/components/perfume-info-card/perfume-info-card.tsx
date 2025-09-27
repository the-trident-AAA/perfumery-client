"use client"
import { Card, CardContent } from "@/src/components/ui/card"
import React, { ReactNode } from "react"
import { motion } from "framer-motion"

interface Props {
	title: string
	icon: ReactNode
	info: string
}

export default function PerfumeInfoCard({ info, title, icon }: Props) {
	return (
		<motion.div
			whileHover={{
				scale: 1.05,
				boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
			}}
			transition={{ type: "spring", stiffness: 200, damping: 15 }}
		>
			<Card className="bg-primary h-full border-t-6 border-b-6 border-secondary rounded-xl overflow-hidden cursor-pointer">
				<CardContent className="p-4 text-center flex flex-col items-center gap-2 transition-colors duration-300 hover:bg-primary/90">
					<motion.div
						whileHover={{ rotate: 5 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						{icon}
					</motion.div>
					<p className="text-sm font-semibold text-secondary">
						{info}
					</p>
					<p className="text-xs font-semibold text-secondary">
						{title}
					</p>
				</CardContent>
			</Card>
		</motion.div>
	)
}

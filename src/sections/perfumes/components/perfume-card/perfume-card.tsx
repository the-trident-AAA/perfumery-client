"use client"

import type React from "react"
import { Heart, Sparkles, Zap, Gift } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { getGenderColor, Perfume } from "@/src/lib/types/perfumes"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { fCurrency } from "@/src/lib/utils/format-number"
import AddShopCartPerfumeButton from "@/src/sections/perfumes/components/perfume-card/components/add-shop-cart-perfume-button"

interface Props {
	perfume: Perfume
}

export default function PerfumeCard({ perfume }: Props) {
	const [isLiked, setIsLiked] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	const discountedPrice = perfume.discountOffer
		? perfume.price * (1 - perfume.discountOffer / 100)
		: perfume.price

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	const handleMouseMove = (e: React.MouseEvent) => {
		const rect = e.currentTarget.getBoundingClientRect()
		setMousePosition({
			x: (e.clientX - rect.left) / rect.width,
			y: (e.clientY - rect.top) / rect.height,
		})
	}

	return (
		<Card
			className={`group relative overflow-hidden border-0 bg-gradient-to-br from-white via-white to-gray-50/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 ${
				isLoaded ? "animate-fade-in-up" : "opacity-0"
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onMouseMove={handleMouseMove}
		>
			{/* Franjas decorativas superiores animadas */}
			<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/60 via-primary to-primary/60 z-20" />
			<div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-yellow-400 via-white to-yellow-400 opacity-80 z-20" />

			{/* Líneas laterales con efecto de flujo */}
			<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent z-10 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
			<div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent z-10 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />

			{/* Elementos decorativos flotantes */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{/* Círculos decorativos que siguen el mouse */}
				<div
					className="absolute w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl transition-all duration-300"
					style={{
						top: `${mousePosition.y * 100}%`,
						left: `${mousePosition.x * 100}%`,
						transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
					}}
				/>

				{/* Partículas flotantes */}
				<Sparkles className="absolute top-6 right-8 h-4 w-4 text-primary/60 animate-pulse" />
				<Sparkles className="absolute top-16 left-6 h-3 w-3 text-primary/40 animate-pulse delay-300" />
				<Sparkles className="absolute bottom-23 left-32 h-5 w-5 text-primary/50 animate-pulse delay-700" />

				{/* Elementos geométricos */}
				<div className="absolute top-8 left-8 w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
				<div className="absolute top-12 right-16 w-1.5 h-1.5 bg-yellow-400/80 rounded-full animate-bounce delay-200" />
				<div className="absolute bottom-16 left-12 w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce delay-500" />
			</div>

			{/* Background gradient dinámico */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

			{/* Patrón de fondo sutil */}
			<div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -skew-y-12 h-8 top-20" />
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent transform -skew-y-12 h-8 top-40" />
			</div>

			{/* Discount Badge súper mejorado */}
			{perfume.discountOffer && (
				<div className="absolute top-4 right-4 z-30">
					<div className="relative animate-bounce-subtle">
						<Badge className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-4 py-2 shadow-xl border-2 border-white/20">
							<Zap className="h-3 w-3 mr-1" />-
							{perfume.discountOffer}%
						</Badge>
						{/* Efecto de brillo */}
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded" />
						{/* Punto pulsante */}
						<div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
					</div>
				</div>
			)}

			{/* Wishlist Button mejorado */}
			<Button
				variant="ghost"
				size="icon"
				className="absolute top-16 right-4 z-30 bg-white/90 hover:bg-white shadow-xl backdrop-blur-sm border border-white/40 transition-all duration-300 transform hover:scale-110"
				onClick={() => setIsLiked(!isLiked)}
			>
				<Heart
					className={`h-4 w-4 transition-all duration-300 ${
						isLiked
							? "fill-red-500 text-red-500 scale-125 animate-pulse"
							: "text-gray-600 hover:text-red-400 hover:scale-110"
					}`}
				/>
			</Button>

			<CardContent className="p-0">
				{/* Image Section súper mejorada */}
				<div className="relative h-80 overflow-hidden">
					<Image
						src={
							perfume.image ||
							`/placeholder.svg?height=320&width=280&query=elegant ${perfume.name || "perfume"} bottle luxury premium`
						}
						alt={perfume.name}
						fill
						className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
					/>

					{/* Overlay con gradiente mejorado */}
					<div
						className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end transition-all duration-500 ${
							isHovered ? "opacity-100" : "opacity-0"
						}`}
					>
						<div className="p-5 w-full transform transition-all duration-300 group-hover:translate-y-[-4px]">
							<div className="flex items-center gap-2 mb-3 animate-slide-up">
								<Sparkles className="h-5 w-5 text-yellow-400 animate-spin-slow" />
								<span className="text-sm font-semibold text-white">
									Notas aromáticas
								</span>
							</div>
							<div className="flex flex-wrap gap-2 animate-fade-in delay-200">
								{perfume.scents
									.slice(0, 4)
									.map((scent, index) => (
										<Badge
											key={index}
											className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 transform hover:scale-105"
											style={{
												animationDelay: `${index * 100}ms`,
											}}
										>
											{scent}
										</Badge>
									))}
								{perfume.scents.length > 4 && (
									<Badge className="text-xs bg-primary/80 text-white border-primary/40 backdrop-blur-sm animate-pulse">
										+{perfume.scents.length - 4}
									</Badge>
								)}
							</div>
						</div>
					</div>

					{/* Línea divisoria animada */}
					<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

					{/* Efecto de brillo que cruza la imagen */}
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
				</div>

				{/* Content Section mejorada */}
				<div className="relative">
					{/* Franja decorativa interna */}
					<div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

					<div className="flex flex-col p-4 gap-2 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
						{/* Brand and Type mejorados */}
						<div className="flex items-center justify-between animate-fade-in delay-100">
							<Badge
								variant={"outline"}
								className="text-black font-bold bg-muted"
							>
								{perfume.brand}
							</Badge>
							<Badge
								variant={"default"}
								className="text-black font-bold bg-muted"
							>
								{perfume.perfumeType}
							</Badge>
						</div>

						{/* Title mejorado */}
						<div className="space-y-3 animate-fade-in delay-200">
							<h3 className="font-bold text-xl text-white line-clamp-1 transform group-hover:scale-105 origin-left">
								{perfume.name}
							</h3>
							<p className="text-sm text-white line-clamp-2 leading-relaxed">
								{perfume.description}
							</p>
						</div>

						{/* Details mejorados */}
						<div className="flex items-center justify-between text-sm animate-fade-in delay-300">
							<div className="flex items-center gap-3">
								<div
									className={`w-3 h-3 rounded-full bg-gradient-to-r ${getGenderColor(
										perfume.gender,
									)} border-2 border-white shadow-lg animate-pulse`}
								/>
								<span className="text-white font-semibold">
									{perfume.gender}
								</span>
							</div>
							<div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
								<Gift className="h-3 w-3 text-black" />
								<span className="text-black font-bold">
									{perfume.milliliters}ml
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2 p-4">
						{/* Price Section súper mejorada */}
						<div className="flex items-center justify-between pt-4 border-t border-border/50 animate-fade-in delay-400">
							<div className="flex flex-col space-y-1">
								{perfume.discountOffer ? (
									<>
										<span className="text-2xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
											{fCurrency(discountedPrice)}
										</span>
										<span className="text-sm text-muted-foreground line-through opacity-75">
											{fCurrency(perfume.price)}
										</span>
									</>
								) : (
									<span className="text-2xl font-black bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
										{fCurrency(perfume.price)}
									</span>
								)}
							</div>
							<AddShopCartPerfumeButton perfume={perfume} />
						</div>

						{/* Availability indicator mejorado */}
						<div className="flex items-center justify-between pt-3 animate-fade-in delay-500">
							<div className="flex items-center gap-2">
								<div
									className={`w-2.5 h-2.5 rounded-full ${
										perfume.available
											? "bg-green-500 animate-pulse"
											: "bg-red-500"
									} shadow-lg`}
								/>
								<span className="text-xs font-medium text-muted-foreground">
									{perfume.available ? "En stock" : "Agotado"}
								</span>
							</div>
							{perfume.available && perfume.cant <= 5 && (
								<div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-2 py-1 rounded-full animate-pulse">
									<Zap className="h-3 w-3" />
									<span className="text-xs font-bold">
										¡Solo {perfume.cant}!
									</span>
								</div>
							)}
						</div>
					</div>

					{/* Franja decorativa inferior */}
					<div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-400/40 via-primary/60 to-yellow-400/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
				</div>
			</CardContent>

			{/* Franja inferior con efecto de onda */}
			<div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

			{/* Efecto de brillo general */}
			<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 ease-out pointer-events-none" />
		</Card>
	)
}

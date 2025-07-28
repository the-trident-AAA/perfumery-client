"use client"

import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { getGenderColor, Perfume } from "@/src/lib/types/perfumes"
import { fCurrency } from "@/src/lib/utils/format-number"
import AddShopCartPerfumeButton from "@/src/sections/perfumes/components/perfume-card/components/add-shop-cart-perfume-button"
import { Heart, ShoppingCart, Sparkles, Star, Award } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface PerfumeCardProps {
	perfume: Perfume
}

export function PerfumeCard({ perfume }: PerfumeCardProps) {
	const [isLiked, setIsLiked] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const discountedPrice = perfume.discountOffer
		? perfume.price * (1 - perfume.discountOffer / 100)
		: perfume.price

	return (
		<Card
			className="group relative overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Franja superior profesional */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 z-10" />

			{/* Líneas laterales sutiles */}
			<div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary/30 via-primary/10 to-transparent z-10" />
			<div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-primary/30 via-primary/10 to-transparent z-10" />

			{/* Indicador de calidad premium */}
			<div className="absolute top-3 left-3 z-20">
				<div className="flex items-center gap-1 bg-primary/10 backdrop-blur-sm rounded-full px-2 py-1">
					<Award className="h-3 w-3 text-primary" />
					<span className="text-xs font-medium text-primary">
						Premium
					</span>
				</div>
			</div>

			{/* Background gradient sutil */}
			<div
				className={`absolute inset-0 transition-opacity duration-300`}
			/>

			{/* Discount Badge profesional */}
			{perfume.discountOffer && (
				<div className="absolute top-3 right-3 z-20">
					<Badge className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold px-3 py-1 shadow-md">
						-{perfume.discountOffer}%
					</Badge>
				</div>
			)}

			{/* Wishlist Button */}
			<Button
				variant="ghost"
				size="icon"
				className="absolute top-12 right-3 z-20 bg-background/80 hover:bg-background shadow-sm backdrop-blur-sm border border-border/20"
				onClick={() => setIsLiked(!isLiked)}
			>
				<Heart
					className={`h-4 w-4 transition-all duration-200 ${
						isLiked
							? "fill-destructive text-destructive"
							: "text-muted-foreground hover:text-primary"
					}`}
				/>
			</Button>

			<CardContent className="p-0">
				{/* Image Section */}
				<div className="relative h-72 overflow-hidden">
					<Image
						src={
							perfume.image ||
							`/placeholder.svg?height=288&width=280&query=elegant ${perfume.name || "/placeholder.svg"} perfume bottle luxury`
						}
						alt={perfume.name}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-105"
					/>

					{/* Overlay profesional */}
					<div
						className={`absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/50 to-transparent flex items-end transition-opacity duration-300 ${
							isHovered ? "opacity-100" : "opacity-0"
						}`}
					>
						<div className="p-4 w-full">
							<div className="flex items-center gap-2 mb-2">
								<Sparkles className="h-4 w-4 text-white" />
								<span className="text-sm font-medium text-white">
									Notas aromáticas
								</span>
							</div>
							<div className="flex flex-wrap gap-1">
								{perfume.scents
									.slice(0, 4)
									.map((scent, index) => (
										<Badge
											key={index}
											variant="secondary"
											className="text-xs bg-primary text-white border-primary/20"
										>
											{scent}
										</Badge>
									))}
								{perfume.scents.length > 4 && (
									<Badge
										variant="secondary"
										className="text-xs bg-primary/80 text-white border-primary/20"
									>
										+{perfume.scents.length - 4}
									</Badge>
								)}
							</div>
						</div>
					</div>

					{/* Línea divisoria */}
					<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
				</div>

				{/* Content Section */}
				<div className="p-5 space-y-4">
					{/* Brand and Type */}
					<div className="flex items-center justify-between">
						<Badge
							variant="outline"
							className="text-xs font-medium border-primary/30 text-primary bg-primary/5"
						>
							{perfume.brand}
						</Badge>
						<Badge
							variant="secondary"
							className="text-xs bg-muted text-muted-foreground"
						>
							{perfume.perfumeType}
						</Badge>
					</div>

					{/* Title */}
					<div className="space-y-2">
						<h3 className="font-semibold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
							{perfume.name}
						</h3>
						<p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
							{perfume.description}
						</p>
					</div>

					{/* Details */}
					<div className="flex items-center justify-between text-sm">
						<div className="flex items-center gap-2">
							<div
								className={`w-2 h-2 rounded-full bg-gradient-to-r ${getGenderColor(perfume.gender)} border border-primary/20`}
							/>
							<span className="text-muted-foreground font-medium">
								{perfume.gender}
							</span>
						</div>
						<div className="flex items-center gap-1">
							<span className="text-primary font-semibold">
								{perfume.milliliters * 1000}ml
							</span>
						</div>
					</div>

					{/* Rating */}
					<div className="flex items-center gap-1">
						{[1, 2, 3, 4, 5].map(star => (
							<Star
								key={star}
								className="h-3 w-3 fill-primary/80 text-primary/80"
							/>
						))}
						<span className="text-xs text-muted-foreground ml-1">
							(4.8)
						</span>
					</div>

					{/* Price Section */}
					<div className="flex items-center justify-between pt-3 border-t border-border/50">
						<div className="flex flex-col">
							{perfume.discountOffer ? (
								<>
									<span className="text-xl font-bold text-foreground">
										{fCurrency(discountedPrice)}
									</span>
									<span className="text-sm text-muted-foreground line-through">
										{fCurrency(perfume.price)}
									</span>
								</>
							) : (
								<span className="text-xl font-bold text-foreground">
									{fCurrency(perfume.price)}
								</span>
							)}
						</div>
						<AddShopCartPerfumeButton perfume={perfume} />
					</div>

					{/* Availability indicator */}
					<div className="flex items-center gap-2 pt-2">
						<div
							className={`w-2 h-2 rounded-full ${perfume.available ? "bg-green-500" : "bg-red-500"}`}
						/>
						<span className="text-xs text-muted-foreground">
							{perfume.available ? "En stock" : "Agotado"}
						</span>
						{perfume.available && perfume.cant <= 5 && (
							<span className="text-xs text-amber-600 font-medium">
								¡Quedan {perfume.cant}!
							</span>
						)}
					</div>
				</div>
			</CardContent>

			{/* Franja inferior sutil */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
		</Card>
	)
}

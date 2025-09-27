"use client"
import type React from "react"
import { ArrowRight, Sparkles, Star, ShoppingBag, Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { HomeBanner } from "@/src/lib/types/home-banners"
import { Badge } from "@/src/components/ui/badge"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import HomeBannerImagesCarousel from "@/src/sections/home/components/home-banner-section/components/home-banner-images-carousel/home-banner-images-carousel"

interface Props {
	homeBanner: HomeBanner
}

export default function HomeBannerSection({
	homeBanner: { id, title, description, images, infoTips, statisticalTips },
}: Props) {
	const [isLoaded, setIsLoaded] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
		<div
			id={id}
			className="relative w-screen h-full overflow-hidden bg-primary"
			onMouseMove={handleMouseMove}
		>
			{/* Elementos decorativos de fondo animados */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Círculos decorativos grandes */}
				<div
					className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-3xl animate-pulse"
					style={{
						transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
					}}
				/>
				<div
					className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-white/10 to-white/5 blur-3xl animate-pulse delay-1000"
					style={{
						transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
					}}
				/>

				{/* Elementos geométricos flotantes */}
				<div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce" />
				<div className="absolute top-40 right-32 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-300" />
				<div className="absolute bottom-32 left-1/4 w-5 h-5 bg-white/15 rounded-full animate-bounce delay-700" />

				{/* Líneas decorativas */}
				<div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
				<div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />

				{/* Patrón de cuadrícula sutil */}
				<div className="absolute inset-0 opacity-5">
					<div className="grid grid-cols-12 h-full">
						{Array.from({ length: 12 }).map((_, i) => (
							<div key={i} className="border-r border-white/10" />
						))}
					</div>
				</div>
			</div>

			{/* Franja superior decorativa */}
			<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary via-secondary/80 to-secondary/40 opacity-80" />

			{/* Contenido principal */}
			<div className="relative py-6 z-10 container mx-auto px-6 h-full flex items-center">
				<div className="grid items-center gap-12 lg:grid-cols-2 w-full">
					{/* Contenido de texto */}
					<div
						className={`space-y-8 ${isLoaded ? "animate-fade-in-left" : "opacity-0"}`}
					>
						<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 items-center">
							<Avatar className="h-40 w-40">
								<AvatarImage src="/icons/logo-icon.png" />
								<AvatarFallback className="bg-secondary text-primary font-semibold text-sm">
									{"PP"}
								</AvatarFallback>
							</Avatar>

							{/* Título principal */}
							<div className="space-y-4">
								<h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-secondary animate-slide-up">
									<span className="block">
										{title.split(" ").slice(0, 2).join(" ")}
									</span>
									<span className="block">
										{title.split(" ").slice(2).join(" ")}
									</span>
								</h1>

								{/* Línea decorativa */}
								<div className="w-24 h-1 bg-secondary animate-expand-width" />
							</div>
						</div>

						{/* Descripción */}
						<p className="text-xl lg:text-2xl text-secondary leading-relaxed max-w-2xl animate-fade-in delay-300">
							{description}
						</p>

						{/* Estadísticas */}
						<div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-8 animate-fade-in delay-500">
							{statisticalTips.map((statisticalTip, index) => (
								<div key={index} className="text-center">
									<div className="text-secondary/70 text-sm">
										{statisticalTip.statistics}
									</div>
									<div className="text-3xl font-bold text-secondary">
										{statisticalTip.info}
									</div>
								</div>
							))}
						</div>

						{/* Botones de acción */}
						<div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-700">
							<NavigationComponent href={paths.perfumes().root}>
								<Button
									variant={"secondary"}
									className="group bg-secondary w-full sm:w-auto text-primary text-lg font-bold px-8 py-4 h-auto rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
								>
									<ShoppingBag className="w-5 h-5 mr-3" />
									Explorar Colección
									<ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
									{/* Efecto de brillo */}
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-full" />
								</Button>
							</NavigationComponent>
						</div>

						{/* Indicadores de confianza */}
						<div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-6 pt-4 animate-fade-in delay-1000">
							{infoTips.map((infoTip, index) => (
								<div
									key={index}
									className="flex items-center gap-2 text-secondary"
								>
									<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
									<span className="text-sm">{infoTip}</span>
								</div>
							))}
						</div>
					</div>

					{/* Sección de imagen */}
					<div
						className={`relative ${isLoaded ? "animate-fade-in-right" : "opacity-0"}`}
					>
						<HomeBannerImagesCarousel images={images} />
					</div>
				</div>
			</div>

			{/* Franja inferior decorativa */}

			{/* Indicador de scroll */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
					<div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
				</div>
			</div>
		</div>
	)
}

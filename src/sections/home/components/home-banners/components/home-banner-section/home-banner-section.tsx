"use client"

import type React from "react"
import { ArrowRight, Sparkles, Star, ShoppingBag, Heart } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { HomeBanner } from "@/src/lib/types/home-banners"
import { Badge } from "@/src/components/ui/badge"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"

interface Props {
	homeBanner: HomeBanner
}

const homeBannerImagePlaceHolder = "/placeholder.svg?height=600&width=800"

export default function HomeBannerSection({
	homeBanner: { id, title, description, image },
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
			className="relative w-screen h-full overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80"
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
			<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 opacity-80" />

			{/* Contenido principal */}
			<div className="relative py-2 z-10 container mx-auto px-6 h-full flex items-center">
				<div className="grid items-center gap-12 lg:grid-cols-2 w-full">
					{/* Contenido de texto */}
					<div
						className={`space-y-8 ${isLoaded ? "animate-fade-in-left" : "opacity-0"}`}
					>
						{/* Badge superior */}
						<div className="flex items-center gap-4">
							<Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm font-semibold animate-slide-down">
								<Sparkles className="w-4 h-4 mr-2" />
								Colección Premium
							</Badge>
							<div className="flex items-center gap-1">
								{[1, 2, 3, 4, 5].map(star => (
									<Star
										key={star}
										className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse"
									/>
								))}
								<span className="text-white/80 text-sm ml-2">
									(4.9)
								</span>
							</div>
						</div>

						{/* Título principal */}
						<div className="space-y-4">
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white animate-slide-up">
								<span className="block">
									{title.split(" ").slice(0, 2).join(" ")}
								</span>
								<span className="block bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent animate-shimmer">
									{title.split(" ").slice(2).join(" ")}
								</span>
							</h1>

							{/* Línea decorativa */}
							<div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-white animate-expand-width" />
						</div>

						{/* Descripción */}
						<p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl animate-fade-in delay-300">
							{description}
						</p>

						{/* Estadísticas */}
						<div className="flex items-center gap-8 animate-fade-in delay-500">
							<div className="text-center">
								<div className="text-3xl font-bold text-white">
									500+
								</div>
								<div className="text-white/70 text-sm">
									Fragancias
								</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-white">
									50+
								</div>
								<div className="text-white/70 text-sm">
									Marcas
								</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-white">
									10K+
								</div>
								<div className="text-white/70 text-sm">
									Clientes
								</div>
							</div>
						</div>

						{/* Botones de acción */}
						<div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-700">
							<NavigationComponent href="/">
								<Button className="group bg-white text-primary hover:bg-white/90 text-lg font-bold px-8 py-4 h-auto rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
									<ShoppingBag className="w-5 h-5 mr-3" />
									Explorar Colección
									<ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
									{/* Efecto de brillo */}
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-full" />
								</Button>
							</NavigationComponent>

							<Button
								variant="outline"
								className="group border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-semibold px-8 py-4 h-auto rounded-full backdrop-blur-sm transition-all duration-300 bg-transparent"
							>
								<Heart className="w-5 h-5 mr-3" />
								Lista de Deseos
							</Button>
						</div>

						{/* Indicadores de confianza */}
						<div className="flex items-center gap-6 pt-4 animate-fade-in delay-1000">
							<div className="flex items-center gap-2 text-white/80">
								<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
								<span className="text-sm">Envío gratis</span>
							</div>
							<div className="flex items-center gap-2 text-white/80">
								<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
								<span className="text-sm">
									Garantía 30 días
								</span>
							</div>
							<div className="flex items-center gap-2 text-white/80">
								<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600" />
								<span className="text-sm">Auténticos</span>
							</div>
						</div>
					</div>

					{/* Sección de imagen */}
					<div
						className={`relative ${isLoaded ? "animate-fade-in-right" : "opacity-0"}`}
					>
						<div className="relative">
							{/* Contenedor de imagen principal */}
							<div className="relative h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
								<Image
									src={image || homeBannerImagePlaceHolder}
									alt={title}
									fill
									className="object-cover transition-all duration-700 hover:scale-110"
									priority
								/>

								{/* Overlay con gradiente */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

								{/* Elementos flotantes sobre la imagen */}
								<div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 animate-bounce">
									<Sparkles className="w-6 h-6 text-white" />
								</div>

								<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 animate-slide-up delay-500">
									<div className="text-primary font-bold text-lg">
										Hasta 50% OFF
									</div>
									<div className="text-primary/70 text-sm">
										En fragancias seleccionadas
									</div>
								</div>
							</div>

							{/* Elementos decorativos alrededor de la imagen */}
							<div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-400/30 to-white/30 rounded-full blur-xl animate-pulse" />
							<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-white/30 to-yellow-400/30 rounded-full blur-xl animate-pulse delay-700" />

							{/* Marcos decorativos */}
							<div className="absolute -inset-4 border-2 border-white/20 rounded-3xl transform -rotate-1 animate-pulse" />
							<div className="absolute -inset-8 border border-white/10 rounded-3xl transform rotate-1 animate-pulse delay-500" />
						</div>
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

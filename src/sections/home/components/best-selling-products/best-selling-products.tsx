import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import BestSellingProductsList from "@/src/sections/home/components/best-selling-products/list/best-selling-products-list"
import { Suspense } from "react"
import { Sparkles, TrendingUp, Award, Star } from "lucide-react"

export default async function BestSellingProducts() {
	return (
		<section className="relative w-full overflow-hidden bg-primary">
			{/* Elementos decorativos de fondo */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Círculos decorativos grandes */}
				<div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 blur-3xl" />
				<div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-400/5 to-primary/5 blur-3xl" />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/3 to-yellow-400/3 blur-3xl" />

				{/* Elementos geométricos flotantes */}
				<div className="absolute top-20 left-20 w-3 h-3 bg-primary/20 rounded-full" />
				<div className="absolute top-32 right-32 w-2 h-2 bg-yellow-400/30 rounded-full" />
				<div className="absolute bottom-40 left-1/4 w-4 h-4 bg-primary/15 rounded-full" />
				<div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400/25 rounded-full" />

				{/* Líneas decorativas sutiles */}
				<div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
				<div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent" />

				{/* Patrón de cuadrícula muy sutil */}
				<div className="absolute inset-0 opacity-[0.02]">
					<div className="grid grid-cols-12 h-full">
						{Array.from({ length: 12 }).map((_, i) => (
							<div
								key={i}
								className="border-r border-primary/20"
							/>
						))}
					</div>
				</div>
			</div>

			{/* Franja superior decorativa */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />

			{/* Contenido principal */}
			<div className="relative z-10 pt-20 pb-24">
				<div className="lg:container lg:mx-auto px-6">
					{/* Header de la sección mejorado */}
					<div className="text-center space-y-8 mb-16">
						{/* Badge superior */}
						<div className="flex justify-center">
							<div className="inline-flex items-center text-primary gap-2 bg-secondary border border-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
								<TrendingUp className="w-4 h-4" />
								Más Vendidos
							</div>
						</div>

						{/* Título principal con efectos */}
						<div className="space-y-6">
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
								<span className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-secondary animate-slide-up">
									Los favoritos de
								</span>
								<span className="block text-secondary">
									nuestros clientes
								</span>
							</h2>

							{/* Línea decorativa */}
							<div className="flex justify-center">
								<div className="w-32 h-1 bg-gradient-to-r from-secondary to-secondary/80 rounded-full" />
							</div>
						</div>

						{/* Descripción mejorada */}
						<div className="max-w-3xl mx-auto space-y-4">
							<p className="text-xl lg:text-2xl text-secondary leading-relaxed font-semibold">
								Descubre los perfumes más vendidos y déjate
								cautivar por las fragancias que todos aman
							</p>
							<p className="text-lg text-secondary font-semibold leading-relaxed">
								Cada fragancia ha sido cuidadosamente
								seleccionada por su calidad excepcional y
								popularidad entre nuestros clientes
							</p>
						</div>

						{/* Estadísticas decorativas */}
						<div className="flex justify-center mx-4 items-center gap-8 pt-4">
							<div className="text-center">
								<div className="flex items-center justify-center gap-2 text-2xl font-bold text-secondary">
									<Award className="w-6 h-6 text-secondary" />
									#1
								</div>
								<div className="text-secondary text-sm font-semibold">
									En Ventas
								</div>
							</div>
							<div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
							<div className="text-center">
								<div className="flex items-center justify-center gap-2 text-2xl font-bold text-secondary">
									<Sparkles className="w-6 h-6 text-secondary" />
									98%
								</div>
								<div className="text-secondary text-sm font-semibold">
									Satisfacción
								</div>
							</div>
							<div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
							<div className="text-center">
								<div className="text-2xl flex gap-1 justify-center w-full items-center font-bold text-secondary">
									5
									<Star className="w-6 h-6 text-secondary" />
								</div>
								<div className="text-secondary text-sm font-semibold">
									Calificación
								</div>
							</div>
						</div>
					</div>

					{/* Contenedor de productos con efectos */}
					<div className="relative">
						{/* Elementos decorativos alrededor del contenedor */}
						<div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-primary/10 to-yellow-400/10 rounded-full blur-xl" />
						<div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-tl from-yellow-400/10 to-primary/10 rounded-full blur-xl" />

						{/* Marco decorativo sutil */}
						<div className="absolute -inset-4 bg-muted rounded-3xl" />

						<Suspense
							fallback={
								<div className="relative">
									<CardSkeletonGroup
										containerClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
										count={3}
									/>
								</div>
							}
						>
							<BestSellingProductsList />
						</Suspense>
					</div>

					{/* Elementos decorativos inferiores */}
					<div className="flex justify-center mt-12">
						<div className="flex items-center gap-4 text-secondary">
							<div className="w-2 h-2 bg-secondary rounded-full" />
							<span className="text-sm font-semibold">
								Productos auténticos garantizados
							</span>
							<div className="w-2 h-2 bg-secondary rounded-full" />
							<span className="text-sm font-semibold">
								Envío gratuito en pedidos
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

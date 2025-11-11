"use client"
import { Sparkles, Zap, Gift, Eye } from "lucide-react"
import Image from "next/image"
import { getGenderColor, type Perfume } from "@/src/lib/types/perfumes"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { fCurrency } from "@/src/lib/utils/format-number"
import AddShopCartPerfumeButton from "@/src/sections/perfumes/components/perfume-card/components/add-shop-cart-perfume-button"
import { perfumeImagePlaceHolder } from "@/src/sections/perfumes/lib/image-place-holder"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"
import Script from "next/script"

interface Props {
	perfume: Perfume
}

export default function PerfumeCard({ perfume }: Props) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: perfume.name,
		image: [perfume.image],
		description: perfume.description,
		brand: {
			"@type": "Brand",
			name: perfume.brand,
		},
		offers: {
			"@type": "Offer",
			url: `https://perfumesdelpuro.com/perfumes/${perfume.id}`,
			priceCurrency: "USD",
			price: perfume.totalPrice,
			availability:
				perfume.available && perfume.cant > 0
					? "https://schema.org/InStock"
					: "https://schema.org/OutOfStock",
		},
	}

	return (
		<article className="h-full">
			<Script
				id={`product-structured-data-${perfume.id}`}
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<style jsx>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes bounceSubtle {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-5px);
					}
				}

				@keyframes spinSlow {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				@keyframes slideUp {
					from {
						opacity: 0;
						transform: translateY(10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}

				.card {
					animation: fadeInUp 0.7s ease-out forwards;
				}

				.floating-circle {
					transform-origin: center;
					transition: transform 0.3s ease;
				}

				.card:hover .floating-circle {
					transform: scale(1.5);
				}

				.card:hover .dynamic-gradient {
					opacity: 1;
				}

				.card:hover .background-pattern {
					opacity: 0.1;
				}

				.card:hover .shine-effect {
					transform: translateX(100%);
				}

				.card:hover .image-container img {
					transform: scale(1.1);
					filter: brightness(1.1);
				}

				.card:hover .overlay-content {
					opacity: 1;
				}

				.card:hover .divider-line {
					transform: scaleX(1);
				}

				.card:hover .internal-stripe {
					transform: scaleX(1);
				}

				.card:hover .title {
					transform: scale(1.05);
				}
			`}</style>

			<Card className="group pb-2.5 pt-2 card relative overflow-hidden h-full border-0 bg-primary shadow-lg hover:shadow-xl transition-all duration-700 transform hover:-translate-y-4">
				{/* Franjas decorativas superiores animadas */}
				<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60 z-20" />

				{/* Elementos decorativos flotantes */}
				<div className="absolute inset-0 pointer-events-none overflow-hidden">
					{/* Círculos decorativos en posición fija (sin seguimiento de mouse) */}
					<div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl transition-all duration-300 floating-circle" />

					{/* Partículas flotantes */}
					<Sparkles className="absolute top-6 right-8 h-4 w-4 md:h-3 md:w-3 lg:h-3 lg:w-3 text-primary/60 animate-pulse" />
					<Sparkles className="absolute top-16 left-6 h-3 w-3 md:h-2.5 md:w-2.5 lg:h-2.5 lg:w-2.5 text-primary/40 animate-pulse delay-300" />
					<Sparkles className="absolute bottom-23 left-32 h-5 w-5 md:h-3.5 md:w-3.5 lg:h-3.5 lg:w-3.5 text-primary/50 animate-pulse delay-700" />

					{/* Elementos geométricos */}
					<div className="absolute top-8 left-8 w-2 h-2 md:w-1.5 md:h-1.5 lg:w-1.5 lg:h-1.5 bg-primary/60 rounded-full animate-bounce" />
					<div className="absolute top-12 right-16 w-1.5 h-1.5 md:w-1 md:h-1 lg:w-1 lg:h-1 bg-yellow-400/80 rounded-full animate-bounce delay-200" />
					<div className="absolute bottom-16 left-12 w-2.5 h-2.5 md:w-1.5 md:h-1.5 lg:w-1.5 lg:h-1.5 bg-primary/40 rounded-full animate-bounce delay-500" />
				</div>

				{/* Background gradient dinámico */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 dynamic-gradient" />

				{/* Patrón de fondo sutil */}
				<div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 background-pattern">
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -skew-y-12 h-8 top-20" />
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent transform -skew-y-12 h-8 top-40" />
				</div>

				{/* Discount Badge súper mejorado */}
				{perfume.discountOffer && (
					<div className="absolute top-4 right-4 z-30">
						<div
							className="relative"
							style={{ animation: "bounceSubtle 2s infinite" }}
						>
							<Badge className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-4 py-2 md:px-3 md:py-1.5 lg:px-1 lg:py-1 md:text-xs lg:text-xs shadow-xl border-2 border-white/20">
								<Zap className="h-3 w-3 md:h-2.5 md:w-2.5 lg:h-2.5 lg:w-2.5 mr-1" />
								-{perfume.discountOffer * 100}%
							</Badge>
							{/* Efecto de brillo */}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded shine-effect" />
							{/* Punto pulsante */}
							<div className="absolute -top-1 -right-1 w-3 h-3 md:w-2 md:h-2 lg:w-2 lg:h-2 bg-yellow-400 rounded-full animate-ping" />
						</div>
					</div>
				)}

				<CardContent className="p-0">
					{/* Imagen de fondo mejorada */}
					<NavigationComponent
						href={paths.perfume({ id: perfume.id }).root}
					>
						<div className="relative h-38 2xs:h-54 md:h-38 lg:h-38 2xl:h-44 w-full overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 image-container">
							<figure className="absolute inset-0 flex items-center justify-center">
								<Image
									src={
										perfume.image || perfumeImagePlaceHolder
									}
									width={600}
									height={400}
									alt={`Perfume ${perfume.name} de ${perfume.brand}`}
									itemProp="image"
									className="object-contain w-full h-full max-h-[90%] md:max-w-[90%] md:max-h-[90%] transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
								/>
								<figcaption className="sr-only">
									{perfume.name} – {perfume.perfumeType}
								</figcaption>
							</figure>

							{/* Partículas flotantes */}
							<div className="absolute inset-0 pointer-events-none">
								<Sparkles className="absolute top-8 left-8 h-4 w-4 md:h-3 md:w-3 lg:h-3 lg:w-3 text-primary/60 animate-pulse" />
								<Sparkles className="absolute top-16 right-12 h-3 w-3 md:h-2.5 md:w-2.5 lg:h-2.5 lg:w-2.5 text-primary/40 animate-pulse delay-500" />
								<Sparkles className="absolute bottom-20 left-16 h-5 w-5 md:h-3.5 md:w-3.5 lg:h-3.5 lg:w-3.5 text-primary/50 animate-pulse delay-1000" />
							</div>

							{/* Overlay con gradiente mejorado */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

							{/* Contenido del overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end gap-2.5 md:gap-2 lg:gap-2 transition-all duration-500 opacity-0 group-hover:opacity-100 overlay-content">
								<Button
									className="text-secondary flex gap-2 md:gap-1.5 lg:gap-1.5 items-center cursor-pointer md:text-sm lg:text-sm md:py-1.5 lg:py-1.5 md:px-3 lg:px-3"
									variant={"default"}
								>
									<Eye className="md:h-4 md:w-4 lg:h-4 lg:w-4" />
									Ver Detalles
								</Button>
								<div className="p-5 md:p-3 lg:p-3 w-full transform transition-all duration-300 group-hover:-translate-y-1">
									<div
										className="flex items-center gap-2 md:gap-1.5 lg:gap-1.5 mb-3 md:mb-2 lg:mb-2"
										style={{
											animation: "slideUp 0.5s ease-out",
										}}
									>
										<Sparkles
											className="h-5 w-5 md:h-4 md:w-4 lg:h-4 lg:w-4 text-yellow-400"
											style={{
												animation:
													"spinSlow 3s linear infinite",
											}}
										/>
										<span className="text-sm md:text-xs lg:text-xs font-semibold text-white">
											Acordes
										</span>
									</div>
									<div className="flex flex-wrap gap-2 md:gap-1.5 lg:gap-1.5">
										{perfume.scents
											.slice(0, 4)
											.map((scent, index) => (
												<Badge
													key={index}
													className="text-xs md:text-[10px] lg:text-[10px] bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 transform hover:scale-105"
													style={{
														animation: `fadeIn 0.5s ease-out ${index * 100}ms both`,
													}}
												>
													{scent}
												</Badge>
											))}
										{perfume.scents.length > 4 && (
											<Badge className="text-xs md:text-[10px] lg:text-[10px] bg-primary/80 text-white border-primary/40 backdrop-blur-sm animate-pulse">
												+{perfume.scents.length - 4}
											</Badge>
										)}
									</div>
								</div>
							</div>

							{/* Línea divisoria animada */}
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 divider-line" />
						</div>
					</NavigationComponent>

					{/* Content Section mejorada */}
					<div className="relative bg-gradient-to-br h-full from-secondary via-secondary/90 to-secondary/90">
						{/* Franja decorativa interna */}
						<div className="absolute top-0 left-6 right-6 h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 internal-stripe" />

						<div className="flex flex-col p-4 pb-2 md:p-3 lg:p-3 gap-1.5 md:gap-1 lg:gap-1 2xl:gap-1.5">
							{/* Brand and Type mejorados */}
							<div
								className="flex items-center justify-between"
								style={{ animation: "fadeIn 0.5s 100ms both" }}
							>
								<p className="block  max-w-[70px] lg:max-w-[90px] truncate leading-tight text-muted line-clamp-1 text-[10px] 2xs:text-xs">
									{perfume.brand}
								</p>
								<p className="flex  max-w-[70px] truncate leading-tight text-muted truncate leading-tight text-[10px] 2xs:text-xs">
									{perfume.perfumeType}
								</p>
							</div>

							{/* Title mejorado */}
							<div
								className="space-y-1 sm:space-y-1 md:space-y-1 lg:space-y-1 2xl:space-y-2"
								style={{ animation: "fadeIn 0.5s 200ms both" }}
							>
								<h2 className="font-bold text-sm 2xs:text-lg sm:text-xl md:text-sm lg:text-sm 2xl:text-lg text-white line-clamp-1 transform group-hover:scale-105 origin-left transition-transform duration-300 title">
									{perfume.name}
								</h2>
								<p className="text-xs 2xs:text-sm md:text-xs lg:text-xs text-white line-clamp-2 leading-relaxed">
									{perfume.description}
								</p>
							</div>

							{/* Details mejorados */}
							<div
								className="flex items-center justify-between text-sm"
								style={{ animation: "fadeIn 0.5s 300ms both" }}
							>
								<div className="flex items-center gap-0.5 xs:gap-1 sm:gap-3 md:gap-1.5 lg:gap-2">
									<div
										className={`w-2 h-2 2xs:w-3 2xs:h-3 md:w-2.5 md:h-2.5 lg:w-2 lg:h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-gradient-to-r ${getGenderColor(
											perfume.gender,
										)} border-2 border-white shadow-lg animate-pulse`}
									/>
									<span className="text-white text-[10px] 2xs:text-xs 2xs:text-sm md:text-xs lg:text-[11px] 2xl:text-xs font-semibold">
										{perfume.gender}
									</span>
								</div>

								<div className="flex  items-center gap-0.5 lg:gap-1">
									<Gift className="h-3 w-3 text-primary" />
									<span className="text-primary text-[10px] 2xs:text-xs sm:text-xs lg:text-[11px] 2xl:text-xs font-bold">
										{perfume.milliliters}ml
									</span>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-2 md:gap-1.5 lg:gap-1.5 px-4 md:px-3 lg:px-3">
							{/* Price Section súper mejorada */}
							<div
								className="flex items-center justify-between pt-2 md:pt-3 lg:pt-3 border-t border-border/50"
								style={{ animation: "fadeIn 0.5s 400ms both" }}
							>
								<div className="flex flex-col space-y-1 md:space-y-0.5 lg:space-y-0.5">
									{perfume.discountOffer ? (
										<div className="flex items-center gap-1">
											<span className="text-sm sm:text-sm md:text-sm lg:text-sm 2xl:text-lg font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
												{fCurrency(perfume.totalPrice)}
											</span>
											<span className="text-sm md:text-xs lg:text-xs text-muted-foreground line-through opacity-75">
												{fCurrency(perfume.price)}
											</span>
										</div>
									) : (
										<span className="text-sm sm:text-sm md:text-sm lg:text-sm 2xl:text-lg font-black text-primary">
											{fCurrency(perfume.price)}
										</span>
									)}
								</div>
								<AddShopCartPerfumeButton perfume={perfume} />
							</div>

							{/* Availability indicator mejorado */}
							<div
								className="flex items-center justify-between pt-3 md:pt-2 lg:pt-2"
								style={{ animation: "fadeIn 0.5s 500ms both" }}
							>
								<div className="flex items-center gap-1 2xs:gap-2 md:gap-1.5 lg:gap-1.5">
									<div
										className={`2xs:w-2.5 2xs:h-2.5 w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2 lg:h-2 rounded-full ${
											perfume.available &&
											perfume.cant > 0
												? "bg-green-500 animate-pulse"
												: "bg-red-500"
										} shadow-lg`}
									/>
									<span className="2xs:text-xs text-[10px] md:text-[10px] lg:text-[10px] font-medium text-primary">
										{perfume.available && perfume.cant > 0
											? "En stock"
											: "No disponible"}
									</span>
								</div>
								{perfume.available &&
									perfume.cant <= 5 &&
									perfume.cant > 0 && (
										<div className="flex items-center gap-1 md:gap-0.5 lg:gap-0.5 bg-amber-100 text-amber-800 px-1 2xs:px-2 md:px-1.5 lg:px-1.5 py-1 md:py-0.5 lg:py-0.5 rounded-full animate-pulse">
											<Zap className="2xs:h-3 h-2 2xs:w-3 w-2 md:h-2.5 md:w-2.5 lg:h-2.5 lg:w-2.5" />
											<span className="text-[10px] 2x:text-xs md:text-[9px] lg:text-[10px] font-bold">
												¡Solo {perfume.cant}!
											</span>
										</div>
									)}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</article>
	)
}

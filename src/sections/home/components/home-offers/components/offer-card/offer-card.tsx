import Image from "next/image"
import { ArrowRight, Sparkles, Tag, Clock } from "lucide-react"
import { Offer } from "@/src/lib/types/offers"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"

interface Props {
	offer: Offer
}

const offerImagePlaceHolder = "/placeholder.svg?height=400&width=600"

export default function OfferCard({
	offer: { id, name, description, image, offerType, scope, discount },
}: Props) {
	return (
		<article className="w-full h-full">
			<Card className="group pb-0 gap-0 w-full h-full max-w-md overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 bg-gradient-to-br from-white to-gray-50">
				{/* Franja decorativa superior */}
				<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60 z-20" />

				{/* Elementos decorativos flotantes */}
				<div className="absolute top-3 right-4 z-20">
					<div className="flex gap-2">
						<div className="w-2 h-2 bg-secondary/60 rounded-full animate-pulse" />
						<div className="w-2 h-2 bg-secondary/40 rounded-full animate-pulse delay-100" />
						<div className="w-2 h-2 bg-secondary/60 rounded-full animate-pulse delay-200" />
					</div>
				</div>

				{/* Banner superior mejorado */}
				<div className="relative  bg-gradient-to-br from-secondary via-secondary/90 to-secondary/90 p-6 text-primary-foreground overflow-hidden">
					{/* Patrón de fondo animado */}
					<div className="absolute inset-0 opacity-10">
						<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12 animate-pulse" />
						<div className="absolute top-8 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12 animate-pulse delay-300" />
					</div>

					{/* Efecto de brillo animado */}
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

					<div className="relative z-10">
						<div className="flex items-center gap-2 mb-2">
							<Tag className="h-4 w-4" />
							<p className="text-xs 2xs:text-sm font-semibold tracking-wider animate-fade-in">
								EN TIENDA Y ONLINE
							</p>
						</div>

						<div className="flex items-baseline gap-2">
							<h2 className="text-sm 2xs:text-lg sm:text-xl 2xs:text-2xl font-bold tracking-tight animate-slide-up">
								HASTA
							</h2>
							<span className="2xs:text-lg sm;text-3xl 2xs:text-5xl font-black bg-primary bg-clip-text text-transparent animate-bounce-subtle">
								{discount * 100}%
							</span>
						</div>
						<p className="text-sm 2xs:text-lg font-bold tracking-wide animate-slide-up delay-100">
							DESCUENTO
						</p>
					</div>

					{/* Indicador de tiempo limitado */}
					<div className="absolute bottom-2 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 2xs:px-3 py-1">
						<Clock className="h-3 w-3" />
						<span className="text-xs font-medium">
							Oferta limitada
						</span>
					</div>
				</div>

				<CardContent className="p-0">
					<div className="relative">
						{/* Imagen de fondo mejorada */}
						<div className="relative h-68 sm:h-72 w-full overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
							<div className="absolute inset-0 flex items-center justify-center">
								<Image
									src={image || offerImagePlaceHolder}
									width={600}
									height={600}
									alt={`Oferta ${name}: ${description.slice(0, 60)}...`}
									className="object-cover h-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
								/>
							</div>

							{/* Partículas flotantes */}
							<div className="absolute inset-0 pointer-events-none">
								<Sparkles className="absolute top-8 left-8 h-4 w-4 text-primary/60 animate-pulse" />
								<Sparkles className="absolute top-16 right-12 h-3 w-3 text-primary/40 animate-pulse delay-500" />
								<Sparkles className="absolute bottom-20 left-16 h-5 w-5 text-primary/50 animate-pulse delay-1000" />
							</div>

							{/* Overlay con gradiente mejorado */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

							{/* Contenido del overlay */}
							<div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
								<div className="transform transition-all duration-300 group-hover:translate-y-[-4px]">
									<h3 className=" text-lg 2xs:text-xl sm:text-2xl font-bold mb-2 animate-fade-in-up">
										{name}
									</h3>
									<p className="line-clamp-3 text-sm 2xs:text-base text-white leading-relaxed mb-4 animate-fade-in-up delay-100">
										{description}
									</p>

									{/* Botón mejorado con animaciones */}
									<NavigationComponent
										href={
											paths.perfumes({
												offerId: id.toString(),
											}).root
										}
									>
										<Button
											variant={"secondary"}
											className="text-primary w-full sm:w-auto flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200"
										>
											<span className="font-semibold">
												Comprar Ahora
											</span>
											<ArrowRight className="h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-110" />

											{/* Efecto de brillo en el botón */}
											<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
										</Button>
									</NavigationComponent>
								</div>
							</div>

							{/* Línea divisoria animada */}
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
						</div>
					</div>

					{/* Sección inferior mejorada */}
					<div className="p-6 pb-6 bg-gradient-to-r from-white to-gray-50/50 relative overflow-hidden">
						{/* Patrón de fondo sutil */}
						<div className="absolute inset-0 opacity-5">
							<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
						</div>

						<div className="relative w-full z-10 flex items-center justify-between">
							<div className="space-y-2 w-full">
								<div className="flex items-center w-full justify-between gap-2">
									<div className="flex items-center gap-2">
										<Sparkles className="h-4 w-4 text-secondary" />
										<p className="text-xs 2xs:text-sm text-secondary font-medium">
											Fragancias seleccionadas
										</p>
									</div>
									<div className="transform transition-all duration-300 group-hover:scale-110">
										<Badge className="bg-gradient-to-r text-[11px] 2xs:text-base from-secondary/10 to-secondary/20 text-secondary border-secondary/30 font-semibold px-2 2xs:px-4 py-1 2x:py-2 shadow-sm hover:shadow-md transition-all duration-300">
											{offerType}
										</Badge>
									</div>
								</div>
								<p className="text-xs 2xs:text-base font-semibold text-secondary group-hover:text-black transition-colors duration-300">
									{scope}
								</p>
							</div>
						</div>
					</div>
				</CardContent>

				{/* Franja inferior */}
				<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/40 via-secondary/60 to-secondary/40" />
			</Card>
		</article>
	)
}

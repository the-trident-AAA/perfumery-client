import Image from "next/image"
import { ArrowRight, Sparkles, Tag } from "lucide-react"
import type { Offer } from "@/src/lib/types/offers"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"

interface Props {
	offer: Offer
}

const offerImagePlaceHolder = "/elegant-product-showcase.png"

export default function OfferBanner({
	offer: { id, name, description, image, offerType, scope, discount },
}: Props) {
	return (
		<NavigationComponent
			href={paths.perfumes({ offerId: id.toString() }).root}
		>
			<article className="w-full h-full relative cursor-pointer overflow-hidden sm:rounded-3xl group">
				{/* Imagen de fondo */}
				<div className="absolute inset-0">
					<Image
						src={image || offerImagePlaceHolder}
						width={1920}
						height={600}
						quality={100}
						alt={`Oferta ${name}: ${description.slice(0, 60)}...`}
						className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/70" />
				</div>

				{/* Contenedor principal */}
				<div
					className="
				relative z-10 
				flex flex-col-reverse md:flex-row items-center justify-between 
				gap-6 sm:gap-8 
				p-4 sm:p-8 md:p-12 lg:p-16 h-full
				sm:max-h-[380px] lg:max-h-[380px] 
			"
				>
					{/* Columna izquierda */}
					<div className="flex flex-col justify-between space-y-4 sm:space-y-4 text-white lg:max-w-2xl">
						<div className="flex flex-col h-full space-y-2 2xs:space-y-4 sm:space-y-4 text-white">
							{/* Badge superior */}
							<div className="flex gap-2 items-center justify-between">
								<div className="flex items-center gap-2 sm:gap-3 animate-fade-in">
									<Tag className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
									<Badge className="bg-white/10 backdrop-blur-sm border-secondary/30 font-semibold px-3 sm:px-4 py-1 2xs:py-1.5 sm:py-2 text-[11px] 2xs:text-[11px] sm:text-sm shadow-lg">
										{offerType}
									</Badge>
								</div>
								<div className="flex lg:hidden">
									<TargetDiscount discount={discount} />
								</div>
							</div>

							{/* Título principal */}
							<div className="space-y-1 sm:space-y-2 animate-fade-in-up">
								<h2
									className="
							text-xl 2xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl 
							font-black tracking-tight text-balance
						"
								>
									{name}
								</h2>
								<div className="h-0.5 2xs:h-1 w-16 sm:w-24 bg-white rounded-full" />
							</div>

							{/* Descripción */}
							<p
								className="
						text-sm 2xs:text-base sm:text-lg md:text-lg 
						text-gray-200 line-clamp-3 leading-relaxed text-pretty animate-fade-in-up
					"
							>
								{description}
							</p>

							{/* Alcance */}
							<div className="flex items-center gap-2 animate-fade-in-up">
								<Sparkles className="h-3 w-3 sm:h-5 sm:w-5 text-yellow-400" />
								<p className="text-[11px] 2xs:text-sm sm:text-base md:text-base font-semibold">
									{scope}
								</p>
							</div>
						</div>

						{/* Botón CTA */}
						<div className="sm:pt-4 animate-fade-in-up">
							<Button
								size="lg"
								variant="secondary"
								className="
									text-primary px-2 2xs:px-5 sm:px-8 h-auto 2xs:h-9 py-1.5 2xs:py-4 sm:py-6 
									text-sm 2xs:text-sm sm:text-base lg:text-lg font-bold 
									group/btn shadow-2xl cursor-pointer hover:shadow-secondary/50 
									transition-all duration-300 transform hover:scale-105 relative overflow-hidden
								"
							>
								<span className="relative z-10 flex items-center gap-1 sm:gap-3">
									Comprar Ahora
									<ArrowRight className="size-3 2xs:size-4 sm:size-4 transition-all duration-300 group-hover/btn:translate-x-2" />
								</span>

								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
							</Button>
						</div>
					</div>

					{/* Columna derecha - Tarjeta de descuento */}
					<div className="hidden lg:flex">
						<TargetDiscount discount={discount} />
					</div>
				</div>

				{/* Franjas decorativas */}
				<div className="absolute top-0 left-0 right-0 h-[2px] sm:h-1 bg-gradient-to-r from-transparent via-secondary to-transparent z-20" />
				<div className="absolute bottom-0 left-0 right-0 h-[2px] sm:h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 z-20" />
			</article>
		</NavigationComponent>
	)
}

function TargetDiscount({ discount }: { discount: number }) {
	return (
		<>
			{/* Versión completa para md y mayores */}
			<div className="hidden lg:flex relative">
				<div
					className="
						relative 
						bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 
						rounded-2xl sm:rounded-3xl 
						p-4 sm:p-8 lg:p-10 
						shadow-2xl transform transition-all duration-500 
						hover:scale-105 hover:rotate-3 
						lg:min-w-[280px] 
						border-2 sm:border-4 border-white/20
					"
				>
					<div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-transparent" />
						<div className="absolute -top-10 -right-10 w-36 h-36 border-4 sm:border-8 border-white/30 rounded-full" />
						<div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 sm:border-8 border-white/20 rounded-full" />
					</div>

					<Sparkles className="absolute hidden lg:flex top-4 right-4 h-5 w-5 text-yellow-400 animate-pulse" />
					<Sparkles className="absolute hidden lg:flex bottom-4 left-4 h-4 w-4 text-yellow-400 animate-pulse delay-700" />

					<div className="relative z-10 text-center text-primary-foreground space-y-2 lg:space-y-4">
						<div className="space-y-1 sm:space-y-2">
							<div className="relative">
								<span
									className="
										text-lg 2xs:text-2xl sm:text-2xl lg:text-3xl lg:text-4xl font-black 
										bg-primary text-transparent bg-clip-text drop-shadow-lg
									"
								>
									{discount * 100}%
								</span>
								<div className="absolute inset-0 blur-2xl bg-primary/30 animate-pulse" />
							</div>
							<p className="text-xs sm:text-xl lg:text-xl font-black tracking-tight">
								DESCUENTO
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Versión mini badge para pantallas pequeñas */}
			<div
				className="
					flex lg:hidden items-center justify-center 
					bg-secondary text-primary-foreground 
					rounded-full py-1 2xs:py-2 px-2 2xs:px-2  gap-1 shadow-md 
					text-[9px] 2xs:text-[10px] font-bold uppercase 
					animate-fade-in
				"
			>
				<Sparkles className="size-2.5 2xs:size-3 text-yellow-300 animate-pulse" />
				<span>{discount * 100}% OFF</span>
			</div>
		</>
	)
}

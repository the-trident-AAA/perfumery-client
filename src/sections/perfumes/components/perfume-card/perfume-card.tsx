import type React from "react"
import { Sparkles, Zap, Gift, Eye } from "lucide-react"
import Image from "next/image"
import { getGenderColor, Perfume } from "@/src/lib/types/perfumes"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { fCurrency } from "@/src/lib/utils/format-number"
import AddShopCartPerfumeButton from "@/src/sections/perfumes/components/perfume-card/components/add-shop-cart-perfume-button"
import { perfumeImagePlaceHolder } from "@/src/sections/perfumes/lib/image-place-holder"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { paths } from "@/src/lib/routes/paths"

interface Props {
	perfume: Perfume
}

export default function PerfumeCard({ perfume }: Props) {
	const discountedPrice = perfume.discountOffer
		? perfume.price - perfume.price * perfume.discountOffer
		: perfume.price

	return (
		<Card
			className={`group relative overflow-hidden h-full border-0 bg-primary shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4`}
		>
			{/* Franjas decorativas superiores animadas */}
			<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60 z-20" />

			{/* Elementos decorativos flotantes */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{/* Círculos decorativos que siguen el mouse */}
				<div className="absolute w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl transition-all duration-300" />

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

			<CardContent className="p-0">
				{/* Imagen de fondo mejorada */}
				<NavigationComponent
					href={paths.perfume({ id: perfume.id }).root}
				>
					<div className="relative h-54 w-full overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
						<div className="absolute inset-0 flex items-center justify-center">
							<Image
								src={perfume.image || perfumeImagePlaceHolder}
								width={600}
								height={400}
								alt="Colección de perfumes de lujo"
								className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
							/>
						</div>

						{/* Partículas flotantes */}
						<div className="absolute inset-0 pointer-events-none">
							<Sparkles className="absolute top-8 left-8 h-4 w-4 text-primary/60 animate-pulse" />
							<Sparkles className="absolute top-16 right-12 h-3 w-3 text-primary/40 animate-pulse delay-500" />
							<Sparkles className="absolute bottom-20 left-16 h-5 w-5 text-primary/50 animate-pulse delay-1000" />
						</div>

						{/* Overlay con gradiente mejorado */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

						{/* Contenido del overlay */}
						<div
							className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end gap-6 transition-all duration-500`}
						>
							<Button
								className="text-secondary flex gap-2 items-center cursor-pointer"
								variant={"default"}
							>
								<Eye />
								Ver Detalles
							</Button>
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
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
					</div>
				</NavigationComponent>

				{/* Content Section mejorada */}
				<div className="relative bg-gradient-to-br h-full from-secondary via-secondary/90 to-secondary/90">
					{/* Franja decorativa interna */}
					<div className="absolute top-0 left-6 right-6 h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

					<div className="flex flex-col p-4 gap-2 ">
						{/* Brand and Type mejorados */}
						<div className="flex items-center justify-between animate-fade-in delay-100">
							<Badge
								variant={"default"}
								className="text-black font-bold"
							>
								{perfume.brand}
							</Badge>
							<Badge
								variant={"default"}
								className="text-black font-bold"
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

					<div className="flex flex-col  gap-2 p-4">
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
									<span className="text-2xl font-black text-primary">
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
								<span className="text-xs font-medium text-primary">
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
				</div>
			</CardContent>
		</Card>
	)
}

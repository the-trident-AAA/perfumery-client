import Image from "next/image"
import {
	Heart,
	ShoppingCart,
	Star,
	Droplets,
	Palette,
	Users,
	User,
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Card, CardContent } from "@/src/components/ui/card"
import { Separator } from "@/src/components/ui/separator"
import { genderMap, PerfumeDetails } from "@/src/lib/types/perfumes"
import { perfumeImagePlaceHolder } from "@/src/sections/perfumes/lib/image-place-holder"
import PerfumeInfoCard from "@/src/sections/perfumes/details/components/perfume-info-card/perfume-info-card"
import { fCurrency } from "@/src/lib/utils/format-number"
import AddShopCartPerfumeButton from "@/src/sections/perfumes/components/perfume-card/components/add-shop-cart-perfume-button"
import BackButton from "@/src/components/back-button/back-button"

interface Props {
	perfume: PerfumeDetails
}

export default function PerfumeDetailsContent({ perfume }: Props) {
	const genderInfo = genderMap.get(perfume.gender)

	// Calcular precio con descuento
	const discountedPrice = perfume.offer
		? perfume.price - (perfume.price * perfume.offer.discount) / 100
		: perfume.price

	return (
		<div className="bg-muted overflow-hidden">
			{/* Header con información básica - Layout horizontal */}
			<div className="flex flex-col gap-6 pt-6 px-6">
				<BackButton />
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
					<div className="flex-1">
						<div className="flex items-center gap-3 mb-3">
							<Badge
								variant="secondary"
								className="text-sm text-primary"
							>
								{perfume.brand.name}
							</Badge>
							{perfume.offer && (
								<Badge
									variant="destructive"
									className="text-sm"
								>
									-{perfume.offer.discount}% OFF
								</Badge>
							)}
							<div
								className={`w-3 h-3 rounded-full ${
									perfume.available
										? "bg-green-500"
										: "bg-red-500"
								}`}
							/>
							<span
								className={`text-sm font-medium ${
									perfume.available
										? "text-green-700"
										: "text-red-700"
								}`}
							>
								{perfume.available ? "En stock" : "Agotado"}
							</span>
						</div>

						<h1 className="text-3xl font-bold text-gray-900 mb-2">
							{perfume.name}
						</h1>

						{/*<div className="flex items-center gap-2">
							<div className="flex items-center">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className={`w-5 h-5 ${
											i < 4
												? "fill-yellow-400 text-yellow-400"
												: "text-gray-300"
										}`}
									/>
								))}
							</div>
							<span className="text-sm text-gray-600">
								(4.0) • 127 reseñas
							</span>
						</div> */}
					</div>

					{/* Precio en el header */}
					<div className="text-right">
						<div className="flex items-center gap-3 justify-end">
							<span className="text-3xl font-bold text-gray-900">
								{fCurrency(discountedPrice)}
							</span>
							{perfume.offer && (
								<span className="text-xl text-gray-500 line-through">
									{fCurrency(perfume.price)}
								</span>
							)}
						</div>
						{perfume.offer && (
							<p className="text-sm text-green-600 font-medium mt-1">
								¡Ahorras{" "}
								{fCurrency(perfume.price - discountedPrice)}!
							</p>
						)}
					</div>
				</div>
			</div>

			{/* Contenido principal - Layout más horizontal */}
			<div className="flex flex-col lg:flex-row items-center p-4 w-full gap-4">
				{/* Imagen - 2 columnas */}
				<div className="">
					<div className="aspect-square rounded-xl overflow-hidden bg-gray-100 sticky top-8">
						<Image
							src={perfume.image || perfumeImagePlaceHolder}
							alt={perfume.name}
							width={600}
							height={600}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Información del producto - 3 columnas */}
				<div className="space-y-6 w-full">
					{/* Características principales - Layout horizontal */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<PerfumeInfoCard
							title="Género"
							info={genderInfo?.name as string}
							icon={
								<Users className="w-6 h-6 mx-auto mb-2 text-secondary" />
							}
						/>
						<PerfumeInfoCard
							title="Volumen"
							info={perfume.milliliters * 1000 + " ml"}
							icon={
								<Droplets className="w-6 h-6 mx-auto mb-2 text-secondary" />
							}
						/>
						<PerfumeInfoCard
							title="Tipo"
							info={perfume.perfumeType.name}
							icon={
								<Palette className="w-6 h-6 mx-auto mb-2 text-secondary" />
							}
						/>

						<PerfumeInfoCard
							title="Rating"
							info={"4.0"}
							icon={
								<Star className="w-6 h-6 mx-auto mb-2 text-secondary" />
							}
						/>
					</div>

					{/* Aromas - Layout más compacto */}
					<div>
						<h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
							<Palette className="w-4 h-4" />
							Notas aromáticas
						</h3>
						<div className="flex flex-wrap gap-2">
							{perfume.scents.map(scent => (
								<Badge
									key={scent.id}
									variant="secondary"
									className="text-sm text-primary"
								>
									{scent.name}
								</Badge>
							))}
						</div>
					</div>

					{/* Descripción */}
					<div>
						<h3 className="text-lg font-semibold text-gray-900 mb-3">
							Descripción
						</h3>
						<p className="text-gray-700 leading-relaxed">
							{perfume.description}
						</p>
					</div>

					{/* Información de la oferta */}
					{perfume.offer && (
						<Card className="border-red-200 bg-red-50">
							<CardContent className="p-4">
								<h4 className="font-semibold text-red-800 mb-1">
									{perfume.offer.name}
								</h4>
								<p className="text-sm text-red-700">
									{perfume.offer.description}
								</p>
							</CardContent>
						</Card>
					)}

					<Separator className="bg-secondary" />

					{/* Botones de acción - Layout horizontal */}
					<div className="flex flex-col sm:flex-row gap-3">
						<AddShopCartPerfumeButton
							variant="large"
							perfume={perfume}
						/>
						<Button
							variant="secondary"
							size="lg"
							className="flex-1 text-primary"
						>
							<Heart className="w-5 h-5 mr-2" />
							Lista de deseos
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
